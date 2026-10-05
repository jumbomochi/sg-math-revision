// Renders every figure in the given content files to a PNG for visual checking.
// Usage: node tools/preview-figures.mjs content/6.3-normal-distribution.js [--out dir] [--dark]
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import os from "node:os";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const Plot = require(path.join(root, "assets/plot.js"));

const args = process.argv.slice(2);
const outIdx = args.indexOf("--out");
const outDir = outIdx >= 0 ? path.resolve(args[outIdx + 1]) : fs.mkdtempSync(path.join(os.tmpdir(), "h2fig-"));
const dark = args.includes("--dark");
const files = args.filter((a, i) => a.endsWith(".js") && i !== outIdx + 1);
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
fs.mkdirSync(outDir, { recursive: true });

function collect(t) {
  const figs = [];
  const add = (where, fig) => {
    if (!fig) return;
    if (Array.isArray(fig)) fig.forEach((g, i) => add(`${where}[${i}]`, g));
    else figs.push({ where, fig });
  };
  (t.concepts || []).forEach((c, i) => add(`concept ${i + 1}: ${c.title.slice(0, 40)}`, c.figure));
  (t.archetypes || []).forEach((a) => (a.questions || []).forEach((q, j) => {
    add(`${a.id} Q${j + 1}`, q.figure);
    const walk = (parts, pre) => (parts || []).forEach((p) => { add(`${pre} ${p.label}`, p.figure); walk(p.parts, `${pre} ${p.label}`); });
    walk(q.parts, `${a.id} Q${j + 1}`);
  }));
  return figs;
}

for (const file of files) {
  const got = [];
  vm.runInNewContext(fs.readFileSync(path.resolve(file), "utf8"), { H2: { addTopic: (t) => got.push(t) }, String, Math });
  const t = got[0];
  const figs = collect(t);
  const cells = figs.map(({ where, fig }) => {
    let svg;
    try { svg = typeof fig === "string" ? fig : Plot.render(fig); } catch (e) { svg = `<pre style="color:red">${e.message}</pre>`; }
    return `<div class="cell"><div class="where">${where.replace(/</g, "&lt;")}</div>${svg}</div>`;
  });
  const html = `<!doctype html><html${dark ? ' data-theme="dark"' : ""}><head><meta charset="utf-8">
<link rel="stylesheet" href="file://${root}/assets/style.css">
<style>body{margin:0;padding:12px;background:var(--surface)} .grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.cell{border:1px solid var(--line);border-radius:8px;padding:8px} .where{font:12px var(--sans);color:var(--ink-3);margin-bottom:4px}</style></head>
<body><div class="grid">${cells.join("")}</div></body></html>`;
  const base = path.basename(file, ".js");
  const htmlPath = path.join(outDir, base + ".html");
  fs.writeFileSync(htmlPath, html);
  const height = Math.max(400, Math.ceil(figs.length / 2) * 470 + 60);
  const png = path.join(outDir, base + (dark ? "-dark" : "") + ".png");
  execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", `--window-size=1000,${height}`, `--screenshot=${png}`, "file://" + htmlPath], { stdio: "ignore" });
  console.log(`${file}: ${figs.length} figure(s) → ${png}`);
}
