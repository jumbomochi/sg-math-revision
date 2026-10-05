/*
 * Declarative graph figures for questions, rendered to an SVG string.
 *
 * {
 *   type: "plot",
 *   x: [-4, 6], y: [-3, 5],          // visible window
 *   height: 260,                     // optional, px at 100% width (default keeps 1:1 units capped)
 *   curves: [
 *     { fn: "x => (x*x - 1)/(x - 2)", domain: [-4, 6], label: "y = f(x)", labelAt: 4.5 },
 *     { param: "t => [2*Math.cos(t), Math.sin(t)]", t: [0, 6.2832] },
 *     { fn: "x => 2*x", dashed: true }
 *   ],
 *   lines:  [ { x: 2, label: "x = 2" }, { y: 1, label: "y = 1" } ],   // dashed asymptotes / reference lines
 *   points: [ { x: 0, y: 0.5, label: "(0, ½)", pos: "ne" } ],          // pos: n ne e se s sw w nw
 *   shade:  [ { upper: "x => Math.sqrt(x)", lower: "x => 0", from: 0, to: 4 } ],
 *   scatter: [[1, 2.3], [2, 3.1]],   // data points drawn as dots
 *   axisLabels: ["x", "y"],
 *   ticks: false                     // true draws integer tick marks with numbers
 * }
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.H2Plot = factory();
})(typeof self !== "undefined" ? self : this, function () {
  const W = 420;

  function toFn(src) {
    if (typeof src === "function") return src;
    // eslint-disable-next-line no-new-func
    return new Function("return (" + src + ")")();
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function render(spec) {
    const [x0, x1] = spec.x;
    const [y0, y1] = spec.y;
    const pad = 22;
    const innerW = W - 2 * pad;
    const naturalH = (innerW * (y1 - y0)) / (x1 - x0);
    const H = Math.round(spec.height || Math.min(Math.max(naturalH, 160), 360) + 2 * pad);
    const innerH = H - 2 * pad;
    const sx = (x) => pad + ((x - x0) / (x1 - x0)) * innerW;
    const sy = (y) => pad + ((y1 - y) / (y1 - y0)) * innerH;
    const f = (n) => n.toFixed(1);
    const id = "clip" + Math.random().toString(36).slice(2, 8);
    const parts = [];

    parts.push(`<defs><clipPath id="${id}"><rect x="${pad}" y="${pad}" width="${innerW}" height="${innerH}"/></clipPath>` +
      `<marker id="${id}a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>`);

    // shading
    for (const s of spec.shade || []) {
      const up = toFn(s.upper), lo = toFn(s.lower || "x => 0");
      const n = 200, top = [], bot = [];
      for (let i = 0; i <= n; i++) {
        const x = s.from + ((s.to - s.from) * i) / n;
        top.push(`${f(sx(x))},${f(sy(up(x)))}`);
        bot.unshift(`${f(sx(x))},${f(sy(lo(x)))}`);
      }
      parts.push(`<polygon class="pl-shade" clip-path="url(#${id})" points="${top.concat(bot).join(" ")}"/>`);
    }

    // axes
    const ax = Math.min(Math.max(0, y0), y1), ay = Math.min(Math.max(0, x0), x1);
    const [xl, yl] = spec.axisLabels || ["x", "y"];
    parts.push(`<line class="pl-axis" x1="${pad - 8}" y1="${f(sy(ax))}" x2="${W - pad + 10}" y2="${f(sy(ax))}" marker-end="url(#${id}a)"/>`);
    parts.push(`<line class="pl-axis" x1="${f(sx(ay))}" y1="${H - pad + 8}" x2="${f(sx(ay))}" y2="${pad - 10}" marker-end="url(#${id}a)"/>`);
    parts.push(`<text class="pl-label pl-it" x="${W - pad + 6}" y="${f(sy(ax) + 16)}">${esc(xl)}</text>`);
    parts.push(`<text class="pl-label pl-it" x="${f(sx(ay) + 8)}" y="${pad - 4}">${esc(yl)}</text>`);
    if (x0 < 0 && x1 > 0 && y0 < 0 && y1 > 0) parts.push(`<text class="pl-label pl-it" x="${f(sx(0) - 12)}" y="${f(sy(0) + 14)}">O</text>`);

    if (spec.ticks) {
      for (let x = Math.ceil(x0); x <= x1; x++) if (x !== 0) {
        parts.push(`<line class="pl-axis" x1="${f(sx(x))}" y1="${f(sy(ax) - 3)}" x2="${f(sx(x))}" y2="${f(sy(ax) + 3)}"/>` +
          `<text class="pl-tick" x="${f(sx(x))}" y="${f(sy(ax) + 14)}" text-anchor="middle">${x}</text>`);
      }
      for (let y = Math.ceil(y0); y <= y1; y++) if (y !== 0) {
        parts.push(`<line class="pl-axis" x1="${f(sx(ay) - 3)}" y1="${f(sy(y))}" x2="${f(sx(ay) + 3)}" y2="${f(sy(y))}"/>` +
          `<text class="pl-tick" x="${f(sx(ay) - 6)}" y="${f(sy(y) + 4)}" text-anchor="end">${y}</text>`);
      }
    }

    // reference lines / asymptotes
    for (const l of spec.lines || []) {
      if (l.x != null) {
        parts.push(`<line class="pl-asym" x1="${f(sx(l.x))}" y1="${pad}" x2="${f(sx(l.x))}" y2="${H - pad}"/>`);
        if (l.label) parts.push(`<text class="pl-label pl-it" x="${f(sx(l.x) + 4)}" y="${pad + 10}">${esc(l.label)}</text>`);
      } else if (l.y != null) {
        parts.push(`<line class="pl-asym" x1="${pad}" y1="${f(sy(l.y))}" x2="${W - pad}" y2="${f(sy(l.y))}"/>`);
        if (l.label) parts.push(`<text class="pl-label pl-it" x="${W - pad - 4}" y="${f(sy(l.y) - 5)}" text-anchor="end">${esc(l.label)}</text>`);
      } else if (l.fn) {
        const g = toFn(l.fn);
        parts.push(`<line class="pl-asym" clip-path="url(#${id})" x1="${f(sx(x0))}" y1="${f(sy(g(x0)))}" x2="${f(sx(x1))}" y2="${f(sy(g(x1)))}"/>`);
        if (l.label) {
          const lx = l.labelAt != null ? l.labelAt : x0 + 0.85 * (x1 - x0);
          parts.push(`<text class="pl-label pl-it" x="${f(sx(lx) + 4)}" y="${f(sy(g(lx)) - 6)}">${esc(l.label)}</text>`);
        }
      }
    }

    // curves
    const span = y1 - y0;
    for (const c of spec.curves || []) {
      const segs = [];
      let cur = [];
      const push = (x, y) => {
        if (!isFinite(x) || !isFinite(y) || Math.abs(y - (y0 + y1) / 2) > 6 * span) {
          if (cur.length > 1) segs.push(cur);
          cur = [];
          return;
        }
        if (cur.length) {
          const [, py] = cur[cur.length - 1];
          if (Math.abs(py - y) > 2.5 * span) { if (cur.length > 1) segs.push(cur); cur = []; }
        }
        cur.push([x, y]);
      };
      const n = c.samples || 800;
      if (c.param) {
        const p = toFn(c.param);
        const [t0, t1] = c.t;
        for (let i = 0; i <= n; i++) { const [x, y] = p(t0 + ((t1 - t0) * i) / n); push(x, y); }
      } else {
        const g = toFn(c.fn);
        const [a, b] = c.domain || [x0, x1];
        for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; push(x, g(x)); }
      }
      if (cur.length > 1) segs.push(cur);
      const d = segs.map((s) => "M" + s.map(([x, y]) => `${f(sx(x))},${f(sy(y))}`).join("L")).join("");
      parts.push(`<path class="pl-curve${c.dashed ? " pl-dashed" : ""}" clip-path="url(#${id})" d="${d}"/>`);
      if (c.label) {
        let lx, ly;
        if (c.param) { const [px, py] = toFn(c.param)(c.labelAt != null ? c.labelAt : c.t[0] + 0.8 * (c.t[1] - c.t[0])); lx = px; ly = py; }
        else { const g = toFn(c.fn); const [a, b] = c.domain || [x0, x1]; lx = c.labelAt != null ? c.labelAt : a + 0.85 * (b - a); ly = g(lx); }
        parts.push(`<text class="pl-label pl-it pl-curve-label" x="${f(sx(lx) + 6)}" y="${f(sy(ly) - 6)}">${esc(c.label)}</text>`);
      }
    }

    for (const [x, y] of spec.scatter || []) parts.push(`<circle class="pl-dot" cx="${f(sx(x))}" cy="${f(sy(y))}" r="3.2"/>`);

    const off = { n: [0, -9, "middle"], ne: [6, -7, "start"], e: [8, 4, "start"], se: [6, 15, "start"], s: [0, 17, "middle"], sw: [-6, 15, "end"], w: [-8, 4, "end"], nw: [-6, -7, "end"] };
    for (const p of spec.points || []) {
      parts.push(`<circle class="pl-pt" cx="${f(sx(p.x))}" cy="${f(sy(p.y))}" r="3"/>`);
      if (p.label) {
        const [dx, dy, anchor] = off[p.pos || "ne"];
        parts.push(`<text class="pl-label" x="${f(sx(p.x) + dx)}" y="${f(sy(p.y) + dy)}" text-anchor="${anchor}">${esc(p.label)}</text>`);
      }
    }

    return `<svg class="plot" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(spec.alt || "Graph for this question")}" xmlns="http://www.w3.org/2000/svg">${parts.join("")}</svg>`;
  }

  return { render };
});
