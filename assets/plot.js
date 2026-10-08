/*
 * Declarative figures (graphs and diagrams), rendered to an SVG string.
 * Coordinates are in the figure's own units; y points up.
 *
 * {
 *   type: "plot",
 *   x: [-4, 6], y: [-3, 5],          // visible window
 *   height: 260,                     // optional px height (width is 420); ignored when equal is set
 *   equal: true,                     // keep 1:1 units (use for geometric diagrams)
 *   axes: false,                     // hide axes (diagrams, Venn, trees)
 *   axisLabels: ["x", "y"],
 *   originLabel: "sw",               // where to put the "O" label (n ne e se s sw w nw), or false to hide it
 *   ticks: false,                    // true draws integer ticks with numbers
 *   xTicks: [{ x: 0, label: "μ" }],  // custom labelled ticks on the x-axis (also yTicks: [{ y, label }])
 *
 *   curves: [
 *     { fn: "x => (x*x - 1)/(x - 2)", domain: [-4, 6], label: "y = f(x)", labelAt: 4.5 },
 *     { param: "t => [2*Math.cos(t), Math.sin(t)]", t: [0, 6.2832] },
 *     { fn: "x => 2*x", dashed: true, tone: "muted" }
 *   ],
 *   lines:  [ { x: 2, label: "x = 2" }, { y: 1, label: "y = 1" }, { fn: "x => x", label: "y = x" } ],  // dashed reference lines
 *   shade:  [ { upper: "x => Math.sqrt(x)", lower: "x => 0", from: 0, to: 4, tone: "warn" } ],
 *   bars:   [ [0, 0.2], [1, 0.5], [2, 0.3] ],   // vertical bars [x, height]; barWidth: 0.6
 *   scatter: [[1, 2.3], [2, 3.1]],
 *   points: [ { x: 0, y: 0.5, label: "(0, ½)", pos: "ne" } ],    // pos: n ne e se s sw w nw c
 *
 *   segments:   [ { from: [0, 0], to: [3, 1], arrow: true, dashed: false, tone: "accent", label: "a", pos: "n" } ],
 *   polygons:   [ { points: [[0,0],[4,0],[5,2],[1,2]], fill: true, tone: "muted", label: "Π", labelAt: [4, 1.5] } ],
 *   circles:    [ { c: [0, 0], r: 2, fill: true, tone: "accent", label: "A", labelAt: [-1, 1.5] } ],
 *   angles:     [ { at: [0, 0], from: [1, 0], to: [0, 1], r: 0.6, label: "θ" } ],   // arc at vertex, from → to (anticlockwise)
 *   rightAngles:[ { at: [2, 0], a: [1, 0], b: [0, 1], size: 0.3 } ],                // square mark between directions a and b
 *   labels:     [ { x: 1, y: 2, text: "Do not reject H₀", pos: "c", style: "plain" | "italic" | "bold" | "small" } ]
 * }
 *
 * tone: "accent" (default for curves, vectors), "warn" (critical regions), "good", "muted" (construction lines).
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.H2Plot = factory();
})(typeof self !== "undefined" ? self : this, function () {
  const W = 420;
  const TONES = ["accent", "warn", "good", "muted", "ink"];

  function toFn(src) {
    if (typeof src === "function") return src;
    // eslint-disable-next-line no-new-func
    return new Function("return (" + src + ")")();
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  const numeric = (s) => /^[−\-+]?\d[\d.,\s]*%?$/.test(String(s));

  function tone(t, fallback) {
    const v = t || fallback;
    if (!TONES.includes(v)) throw new Error("unknown tone '" + v + "'");
    return "t-" + v;
  }

  // Offset for a label next to a curve at pixel point (px, py) with pixel slope dir (dx, dy):
  // rising curves get the label below-right, falling ones above-right, so the text never sits on the curve.
  function besideCurve(px, py, dx, dy) {
    const rising = dy < 0 && dx > 0 ? true : dy > 0 && dx < 0;
    return rising ? [px + 6, py + 15] : [px + 6, py - 6];
  }

  const OFF = { n: [0, -9, "middle"], ne: [6, -7, "start"], e: [8, 4, "start"], se: [6, 15, "start"], s: [0, 17, "middle"],
    sw: [-6, 15, "end"], w: [-8, 4, "end"], nw: [-6, -7, "end"], c: [0, 4, "middle"] };

  function render(spec) {
    const [x0, x1] = spec.x;
    const [y0, y1] = spec.y;
    if (!(x1 > x0) || !(y1 > y0)) throw new Error("x and y must be [min, max] with max > min");
    const pad = 22;
    const innerW = W - 2 * pad;
    const naturalH = (innerW * (y1 - y0)) / (x1 - x0);
    const H = Math.round((spec.equal ? naturalH : spec.height || Math.min(Math.max(naturalH, 160), 360)) + 2 * pad); // equal scale wins over height
    const innerH = H - 2 * pad;
    const sx = (x) => pad + ((x - x0) / (x1 - x0)) * innerW;
    const sy = (y) => pad + ((y1 - y) / (y1 - y0)) * innerH;
    const f = (n) => n.toFixed(1);
    const id = "p" + Math.random().toString(36).slice(2, 8);
    const parts = [];
    const late = [];
    const text = (x, y, s, pos, style, extraClass) => {
      const [dx, dy, anchor] = OFF[pos || "ne"] || OFF.ne;
      const cls = { plain: "", italic: " pl-it", bold: " pl-bold", small: " pl-small" }[style || "italic"];
      if (cls === undefined) throw new Error("unknown label style '" + style + "'");
      return `<text class="pl-label${cls}${extraClass || ""}" x="${f(sx(x) + dx)}" y="${f(sy(y) + dy)}" text-anchor="${anchor}">${esc(s)}</text>`;
    };

    parts.push(`<defs><clipPath id="${id}"><rect x="${pad}" y="${pad}" width="${innerW}" height="${innerH}"/></clipPath>` +
      `<marker id="${id}a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="pl-head-axis"/></marker>` +
      TONES.map((t) => `<marker id="${id}v-${t}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="pl-head t-${t}"/></marker>`).join("") +
      `</defs>`);

    // filled regions first
    for (const s of spec.shade || []) {
      const up = toFn(s.upper), lo = toFn(s.lower || "x => 0");
      const n = 200, top = [], bot = [];
      for (let i = 0; i <= n; i++) {
        const x = s.from + ((s.to - s.from) * i) / n;
        top.push(`${f(sx(x))},${f(sy(up(x)))}`);
        bot.unshift(`${f(sx(x))},${f(sy(lo(x)))}`);
      }
      parts.push(`<polygon class="pl-shade ${tone(s.tone, "accent")}" clip-path="url(#${id})" points="${top.concat(bot).join(" ")}"/>`);
    }
    for (const c of spec.circles || []) {
      parts.push(`<ellipse class="pl-shape${c.fill ? " pl-filled" : ""}${c.dashed ? " pl-dashed" : ""} ${tone(c.tone, "accent")}" cx="${f(sx(c.c[0]))}" cy="${f(sy(c.c[1]))}" rx="${f((c.r * innerW) / (x1 - x0))}" ry="${f((c.r * innerH) / (y1 - y0))}"/>`);
    }
    for (const p of spec.polygons || []) {
      const pts = p.points.map(([x, y]) => `${f(sx(x))},${f(sy(y))}`).join(" ");
      parts.push(`<polygon class="pl-shape${p.fill ? " pl-filled" : ""}${p.dashed ? " pl-dashed" : ""} ${tone(p.tone, "muted")}" points="${pts}"/>`);
    }
    if (spec.bars) {
      const bw = spec.barWidth || 0.6;
      for (const [x, h] of spec.bars) {
        parts.push(`<rect class="pl-bar" x="${f(sx(x - bw / 2))}" y="${f(sy(Math.max(h, 0)))}" width="${f(sx(x + bw / 2) - sx(x - bw / 2))}" height="${f(Math.abs(sy(0) - sy(h)))}"/>`);
      }
    }

    // axes
    if (spec.axes !== false) {
      const ax = Math.min(Math.max(0, y0), y1), ay = Math.min(Math.max(0, x0), x1);
      const [xl, yl] = spec.axisLabels || ["x", "y"];
      // axes stop at the other axis when the window starts there, so they don't cross tick labels
      const xStart = x0 < 0 ? pad - 8 : sx(ay), yStart = y0 < 0 ? H - pad + 8 : sy(ax);
      parts.push(`<line class="pl-axis" x1="${f(xStart)}" y1="${f(sy(ax))}" x2="${W - pad + 10}" y2="${f(sy(ax))}" marker-end="url(#${id}a)"/>`);
      if (yl !== null) {
        parts.push(`<line class="pl-axis" x1="${f(sx(ay))}" y1="${f(yStart)}" x2="${f(sx(ay))}" y2="${pad - 10}" marker-end="url(#${id}a)"/>`);
        parts.push(`<text class="pl-label pl-it" x="${f(sx(ay) + 8)}" y="${pad - 4}">${esc(yl)}</text>`);
      }
      parts.push(`<text class="pl-label pl-it" x="${W - pad + 6}" y="${f(sy(ax) + 16)}">${esc(xl)}</text>`);
      const oPos = spec.originLabel === undefined ? "sw" : spec.originLabel;
      if (oPos && yl !== null && x0 < 0 && x1 > 0 && y0 < 0 && y1 > 0) late.push(text(0, 0, "O", oPos, "italic"));

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
      for (const t of spec.xTicks || []) {
        parts.push(`<line class="pl-axis" x1="${f(sx(t.x))}" y1="${f(sy(ax) - 3)}" x2="${f(sx(t.x))}" y2="${f(sy(ax) + 3)}"/>` +
          `<text class="pl-label${numeric(t.label) ? " pl-num" : " pl-it"}" x="${f(sx(t.x))}" y="${f(sy(ax) + 16)}" text-anchor="middle">${esc(t.label)}</text>`);
      }
      for (const t of spec.yTicks || []) {
        parts.push(`<line class="pl-axis" x1="${f(sx(ay) - 3)}" y1="${f(sy(t.y))}" x2="${f(sx(ay) + 3)}" y2="${f(sy(t.y))}"/>` +
          `<text class="pl-label${numeric(t.label) ? " pl-num" : " pl-it"}" x="${f(sx(ay) - 6)}" y="${f(sy(t.y) + 4)}" text-anchor="end">${esc(t.label)}</text>`);
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
          const [tx, ty] = besideCurve(sx(lx), sy(g(lx)), 1, sy(g(lx + 1e-3)) - sy(g(lx)));
          late.push(`<text class="pl-label pl-it" x="${f(tx)}" y="${f(ty)}">${esc(l.label)}</text>`);
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
      parts.push(`<path class="pl-curve${c.dashed ? " pl-dashed" : ""} ${tone(c.tone, "accent")}" clip-path="url(#${id})" d="${d}"/>`);
      if (c.label) {
        let lx, ly, dx, dy;
        if (c.param) {
          const p = toFn(c.param), tl = c.labelAt != null ? c.labelAt : c.t[0] + 0.8 * (c.t[1] - c.t[0]);
          [lx, ly] = p(tl); const [qx, qy] = p(tl + 1e-3 * (c.t[1] - c.t[0]));
          dx = sx(qx) - sx(lx); dy = sy(qy) - sy(ly);
        } else {
          const g = toFn(c.fn); const [a, b] = c.domain || [x0, x1];
          lx = c.labelAt != null ? c.labelAt : a + 0.85 * (b - a); ly = g(lx);
          dx = 1; dy = sy(g(lx + 1e-3 * (b - a))) - sy(ly);
        }
        const [tx, ty] = besideCurve(sx(lx), sy(ly), dx, dy);
        late.push(`<text class="pl-label pl-it pl-curve-label ${tone(c.tone, "accent")}" x="${f(tx)}" y="${f(ty)}">${esc(c.label)}</text>`);
      }
    }

    // segments and vectors
    for (const s of spec.segments || []) {
      const t = tone(s.tone, s.arrow ? "accent" : "ink");
      const tName = t.slice(2);
      const marker = s.arrow ? ` marker-end="url(#${id}v-${tName})"` : "";
      const markerStart = s.arrowStart ? ` marker-start="url(#${id}v-${tName})"` : "";
      parts.push(`<line class="pl-seg${s.dashed ? " pl-dashed" : ""}${s.thin ? " pl-thin" : ""} ${t}" x1="${f(sx(s.from[0]))}" y1="${f(sy(s.from[1]))}" x2="${f(sx(s.to[0]))}" y2="${f(sy(s.to[1]))}"${marker}${markerStart}/>`);
      if (s.label) {
        const at = s.labelAt || [(s.from[0] + s.to[0]) / 2, (s.from[1] + s.to[1]) / 2];
        late.push(text(at[0], at[1], s.label, s.pos || "n", s.style || "bold", " " + t));
      }
    }

    // angle arcs and right-angle marks
    for (const a of spec.angles || []) {
      const [vx, vy] = [sx(a.at[0]), sy(a.at[1])];
      const ang = (p) => Math.atan2(sy(p[1]) - vy, sx(p[0]) - vx);
      let t0 = ang(a.from), t1 = ang(a.to);
      // pixel space is y-down: anticlockwise on screen means decreasing angle
      let sweep = t0 - t1;
      while (sweep < 0) sweep += 2 * Math.PI;
      while (sweep >= 2 * Math.PI) sweep -= 2 * Math.PI;
      const rpx = ((a.r || 0.5) * innerW) / (x1 - x0);
      const p0 = [vx + rpx * Math.cos(t0), vy + rpx * Math.sin(t0)];
      const p1 = [vx + rpx * Math.cos(t1), vy + rpx * Math.sin(t1)];
      parts.push(`<path class="pl-arc" d="M${f(p0[0])},${f(p0[1])} A${f(rpx)},${f(rpx)} 0 ${sweep > Math.PI ? 1 : 0} 0 ${f(p1[0])},${f(p1[1])}"/>`);
      if (a.label) {
        const mid = t0 - sweep / 2, lr = rpx + 11;
        late.push(`<text class="pl-label pl-it" x="${f(vx + lr * Math.cos(mid))}" y="${f(vy + lr * Math.sin(mid) + 4)}" text-anchor="middle">${esc(a.label)}</text>`);
      }
    }
    for (const r of spec.rightAngles || []) {
      const s = r.size || 0.3;
      const unit = (v) => { const L = Math.hypot(v[0], v[1]) || 1; return [(v[0] / L) * s, (v[1] / L) * s]; };
      const [ax, ay] = unit(r.a), [bx, by] = unit(r.b);
      const P = (dx, dy) => `${f(sx(r.at[0] + dx))},${f(sy(r.at[1] + dy))}`;
      parts.push(`<path class="pl-arc" d="M${P(ax, ay)} L${P(ax + bx, ay + by)} L${P(bx, by)}"/>`);
    }

    for (const [x, y] of spec.scatter || []) parts.push(`<circle class="pl-dot" cx="${f(sx(x))}" cy="${f(sy(y))}" r="3.2"/>`);

    for (const p of spec.points || []) {
      parts.push(`<circle class="pl-pt" cx="${f(sx(p.x))}" cy="${f(sy(p.y))}" r="3"/>`);
      if (p.label) late.push(text(p.x, p.y, p.label, p.pos, p.style || "plain"));
    }

    for (const c of spec.circles || []) if (c.label) { const at = c.labelAt || [c.c[0], c.c[1] + c.r]; late.push(text(at[0], at[1], c.label, c.pos || "c", c.style || "italic")); }
    for (const p of spec.polygons || []) if (p.label) { const at = p.labelAt || p.points[0]; late.push(text(at[0], at[1], p.label, p.pos || "c", p.style || "italic")); }
    for (const l of spec.labels || []) late.push(text(l.x, l.y, l.text, l.pos || "c", l.style || "plain", l.tone ? " " + tone(l.tone) : ""));

    return `<svg class="plot" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(spec.alt || "Diagram")}" xmlns="http://www.w3.org/2000/svg">${parts.join("")}${late.join("")}</svg>`;
  }

  return { render };
});
