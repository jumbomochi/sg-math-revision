/*
 * Mini-markup used by all content files. Shared by the browser and tools/validate.mjs.
 *
 *   Blocks are separated by a blank line.
 *   - item            bullet list (every line of the block starts with "- ")
 *   1. item           numbered list
 *   | a | b |         table (first row is the header)
 *   $...$  $$...$$    inline / display maths (KaTeX)
 *   \$                a literal dollar sign outside maths (e.g. \$250)
 *   **bold**  *italic*
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory;
  else root.H2Markup = factory(root.katex);
})(typeof self !== "undefined" ? self : this, function (katex) {
  const MACROS = {
    "\\dd": "\\mathrm{d}",
    "\\ee": "\\mathrm{e}",
    "\\ii": "\\mathrm{i}",
    "\\E": "\\mathrm{E}",
    "\\Var": "\\mathrm{Var}",
    "\\P": "\\mathrm{P}",
    "\\N": "\\mathrm{N}",
    "\\B": "\\mathrm{B}",
    "\\Re": "\\operatorname{Re}",
    "\\Im": "\\operatorname{Im}",
    "\\arg": "\\operatorname{arg}",
  };

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // Split a string into text and maths segments.
  function tokenize(src) {
    const out = [];
    let buf = "";
    let i = 0;
    const flush = () => { if (buf) out.push({ type: "text", value: buf }); buf = ""; };
    while (i < src.length) {
      const c = src[i];
      if (c === "\\" && src[i + 1] === "$") { buf += "$"; i += 2; continue; }
      if (c === "$") {
        const display = src[i + 1] === "$";
        const delim = display ? "$$" : "$";
        let j = i + delim.length;
        let tex = "";
        let closed = false;
        while (j < src.length) {
          if (src[j] === "\\") { tex += src[j] + (src[j + 1] || ""); j += 2; continue; }
          if (src.startsWith(delim, j)) { closed = true; break; }
          tex += src[j]; j++;
        }
        if (!closed) throw new Error("Unclosed " + delim + " in: " + src.slice(i, i + 60));
        flush();
        out.push({ type: "math", display, value: tex.trim() });
        i = j + delim.length;
        continue;
      }
      buf += c; i++;
    }
    flush();
    return out;
  }

  function renderMath(tex, display, strict) {
    return katex.renderToString(tex, { displayMode: display, throwOnError: !!strict, macros: Object.assign({}, MACROS), strict: "ignore" });
  }

  function inline(src, strict) {
    return tokenize(src).map((t) => {
      if (t.type === "math") return renderMath(t.value, t.display, strict);
      return escapeHtml(t.value)
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, "$1<em>$2</em>");
    }).join("");
  }

  // Split a table row on "|" outside maths, so $|x|$ can appear in a cell.
  function splitRow(line) {
    const s = line.trim().replace(/^\|/, "").replace(/\|$/, "");
    const cells = [];
    let cur = "", inMath = false;
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === "\\" && i + 1 < s.length) { cur += c + s[++i]; continue; }
      if (c === "$") inMath = !inMath;
      if (c === "|" && !inMath) { cells.push(cur.trim()); cur = ""; continue; }
      cur += c;
    }
    cells.push(cur.trim());
    return cells;
  }

  function listHtml(tag, items, strict) {
    return `<${tag}>` + items.map((it) => "<li>" + inline(it, strict) + "</li>").join("") + `</${tag}>`;
  }

  function tableHtml(lines, strict) {
    const rows = lines.filter((l) => !/^\s*\|[\s:|-]+\|\s*$/.test(l)).map(splitRow);
    const head = rows.shift();
    return '<div class="table-wrap"><table><thead><tr>' + head.map((c) => "<th>" + inline(c, strict) + "</th>").join("") +
      "</tr></thead><tbody>" + rows.map((r) => "<tr>" + r.map((c) => "<td>" + inline(c, strict) + "</td>").join("") + "</tr>").join("") +
      "</tbody></table></div>";
  }

  function paragraph(lines, strict) {
    const trimmed = lines.join("\n").trim();
    if (/^\$\$[\s\S]*\$\$$/.test(trimmed) && trimmed.indexOf("$$", 2) === trimmed.length - 2) return inline(trimmed, strict);
    return "<p>" + inline(lines.join(" "), strict) + "</p>";
  }

  // A block may mix prose, "- " bullets, "1. " items and "|" table rows. Prose before a list is a
  // paragraph; a prose line straight after a list item continues that item.
  function block(src, strict) {
    const runs = [];
    for (const line of src.split("\n")) {
      const last = runs[runs.length - 1];
      let m;
      if (/^\s*\|/.test(line)) {
        if (last && last.type === "table") last.lines.push(line); else runs.push({ type: "table", lines: [line] });
      } else if ((m = line.match(/^\s*- (.*)$/))) {
        if (last && last.type === "ul") last.items.push(m[1]); else runs.push({ type: "ul", items: [m[1]] });
      } else if ((m = line.match(/^\s*\d+\. (.*)$/))) {
        if (last && last.type === "ol") last.items.push(m[1]); else runs.push({ type: "ol", items: [m[1]] });
      } else if (last && (last.type === "ul" || last.type === "ol")) {
        last.items[last.items.length - 1] += "\n" + line;
      } else if (last && last.type === "p") {
        last.lines.push(line);
      } else {
        runs.push({ type: "p", lines: [line] });
      }
    }
    return runs.map((r) => (r.type === "table" ? tableHtml(r.lines, strict) : r.type === "p" ? paragraph(r.lines, strict) : listHtml(r.type, r.items, strict))).join("");
  }

  function render(src, strict) {
    if (src == null) return "";
    return String(src).replace(/\r/g, "").trim().split(/\n\s*\n/).map((b) => block(b.replace(/^\n+|\n+$/g, ""), strict)).join("");
  }

  return { render, inline, tokenize, MACROS };
});
