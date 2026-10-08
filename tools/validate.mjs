// Validates every content file: schema, unique ids, KaTeX parse of all maths, plot specs.
// Usage: node tools/validate.mjs [content/h2/5.3-integration-techniques.js ...]
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const katex = require("katex");
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const Markup = require(path.join(root, "assets/markup.js"))(katex);
const Plot = require(path.join(root, "assets/plot.js"));

let errors = 0;
const levels = [];
vm.runInNewContext(fs.readFileSync(path.join(root, "content/levels.js"), "utf8"), { H2: { setLevels: (ls) => levels.push(...ls) }, String });
const levelOfFile = {};
const listed = levels.flatMap((L) => L.files.map((f) => { const p = `content/${L.id}/${f}.js`; levelOfFile[p] = L; return p; }));
const files = process.argv.slice(2).length ? process.argv.slice(2).map((f) => path.relative(root, path.resolve(f))) : listed;
for (const L of levels) {
  const required = ["id", "name", "short", "stage", "code", "eyebrow", "summary", "sections", "groups", "footnote", "files"].concat(L.kind === "olympiad" ? [] : ["papers"]);
  for (const k of required) if (L[k] == null) { errors++; console.log(`✗ content/levels.js ${L.id || "?"}: missing ${k}`); }
  for (const f of fs.existsSync(path.join(root, "content", L.id)) ? fs.readdirSync(path.join(root, "content", L.id)) : []) {
    if (f.endsWith(".js") && !L.files.includes(f.slice(0, -3))) console.log(`✗ content/${L.id}/${f}: not listed in content/levels.js`);
  }
}

const err = (file, where, msg) => { errors++; console.log(`✗ ${file} ${where}: ${msg}`); };
const seenArch = {};
const seenTopic = {};
const summary = [];

function checkText(file, where, s, required = true) {
  if (s == null || s === "") { if (required) err(file, where, "missing text"); return; }
  if (typeof s !== "string") { err(file, where, "text must be a string"); return; }
  try { Markup.render(s, true); } catch (e) { err(file, where, e.message.split("\n")[0]); }
  try { if (Markup.tokenize(s).some((t) => t.type === "math" && !t.value)) err(file, where, "empty maths segment"); } catch (e) { /* reported above */ }
}

function checkFigure(file, where, fig) {
  if (!fig) return;
  if (Array.isArray(fig)) { fig.forEach((g, i) => checkFigure(file, `${where}[${i}]`, g)); return; }
  if (fig.caption) checkText(file, where + ".caption", fig.caption);
  if (typeof fig === "string") { if (!fig.trim().startsWith("<svg")) err(file, where, "figure string must be inline <svg>"); return; }
  if (fig.type !== "plot") { err(file, where, "figure.type must be 'plot'"); return; }
  try { const svg = Plot.render(fig); if (/NaN/.test(svg)) err(file, where, "plot produced NaN coordinates"); } catch (e) { err(file, where, "plot error: " + e.message); }
}

function checkParts(file, where, parts) {
  if (!parts) return 0;
  if (!Array.isArray(parts)) { err(file, where, "parts must be an array"); return 0; }
  let marks = 0;
  parts.forEach((p, i) => {
    const w = `${where}.parts[${i}]`;
    if (!p.label) err(file, w, "missing label, e.g. '(i)' or '(a)'");
    if (!p.text && !p.parts) err(file, w, "part needs text or sub-parts");
    if (p.text) checkText(file, w, p.text);
    checkFigure(file, w + ".figure", p.figure);
    if (p.parts) marks += checkParts(file, w, p.parts);
    else if (!Number.isInteger(p.marks) || p.marks < 1) err(file, w, "leaf part needs integer marks");
    else marks += p.marks;
  });
  return marks;
}

for (const file of files) {
  const abs = path.join(root, file);
  if (!fs.existsSync(abs)) { err(file, "", "file missing"); continue; }
  if (!listed.includes(file)) err(file, "", "not listed in content/levels.js");
  const L = levelOfFile[file] || { id: "?", groups: [] };
  const seenA = (seenArch[L.id] ||= new Set()), seenT = (seenTopic[L.id] ||= new Set());
  const got = [];
  try {
    vm.runInNewContext(fs.readFileSync(abs, "utf8"), { H2: { addTopic: (t) => got.push(t) }, String, Math }, { filename: file });
  } catch (e) { err(file, "", "JS error: " + e.message); continue; }
  if (got.length !== 1) { err(file, "", `expected exactly one H2.addTopic call, got ${got.length}`); continue; }
  const t = got[0];
  if (!/^(\d+\.\d+|[A-Z]+\d+)$/.test(t.id || "")) err(file, "id", "must look like '5.3' or 'N3'");
  const grp = String(t.id).includes(".") ? String(t.id).split(".")[0] : String(t.id).replace(/\d.*$/, "");
  if (!L.groups.some((g) => g.id === grp)) err(file, "id", `group '${grp}' is not one of this level's groups`);
  if (t.tags && !(Array.isArray(t.tags) && t.tags.every((x) => typeof x === "string"))) err(file, "tags", "must be an array of strings");
  if (!path.basename(file).startsWith(t.id + "-")) err(file, "id", `file name should start with '${t.id}-'`);
  if (seenT.has(t.id)) err(file, "id", "duplicate topic id"); seenT.add(t.id);
  if (!t.title) err(file, "title", "missing");
  checkText(file, "summary", t.summary);
  const olympiad = L.kind === "olympiad";
  if (!t.syllabus) { if (!olympiad) err(file, "syllabus.include", "missing"); }
  else if (!Array.isArray(t.syllabus.include) || !t.syllabus.include.length) err(file, "syllabus.include", "missing");
  else t.syllabus.include.forEach((s, i) => checkText(file, `syllabus.include[${i}]`, s));
  (t.syllabus && t.syllabus.exclude || []).forEach((s, i) => checkText(file, `syllabus.exclude[${i}]`, s));
  if (!Array.isArray(t.concepts) || t.concepts.length < 3) err(file, "concepts", "need at least 3 concepts");
  (t.concepts || []).forEach((c, i) => { checkText(file, `concepts[${i}].title`, c.title); checkText(file, `concepts[${i}].body`, c.body); checkFigure(file, `concepts[${i}].figure`, c.figure); });
  if (!Array.isArray(t.archetypes) || t.archetypes.length < 3) err(file, "archetypes", "need at least 3 archetypes");
  let nq = 0;
  (t.archetypes || []).forEach((a, i) => {
    const w = `archetypes[${i}]`;
    if (!a.id || !a.id.startsWith(t.id + "-") || !/^[A-Z\d.]+-[a-z0-9-]+$/.test(a.id)) err(file, w + ".id", `must be '${t.id}-kebab-slug', got '${a.id}'`);
    if (seenA.has(a.id)) err(file, w + ".id", "duplicate archetype id"); seenA.add(a.id);
    if (a.tags && !(Array.isArray(a.tags) && a.tags.every((x) => typeof x === "string"))) err(file, w + ".tags", "must be an array of strings");
    checkText(file, w + ".name", a.name);
    checkText(file, w + ".tests", a.tests);
    if (!Array.isArray(a.questions) || !a.questions.length) err(file, w + ".questions", "need at least one question");
    (a.questions || []).forEach((q, j) => {
      const qw = `${w}.questions[${j}]`;
      nq++;
      if (!q.stem && !q.parts) err(file, qw, "needs stem or parts");
      if (q.stem) checkText(file, qw + ".stem", q.stem);
      if (q.answer != null) checkText(file, qw + ".answer", q.answer);
      if (olympiad && !q.answer) err(file, qw, "olympiad problems need an answer");
      if (q.difficulty != null && ![1, 2, 3].includes(q.difficulty)) err(file, qw + ".difficulty", "must be 1, 2 or 3");
      if (olympiad && q.difficulty == null) err(file, qw, "olympiad problems need a difficulty (1–3)");
      if (q.choices != null) {
        if (!Array.isArray(q.choices) || q.choices.length < 2 || q.choices.length > 8) err(file, qw + ".choices", "must be an array of 2–8 options");
        else q.choices.forEach((c, k) => checkText(file, `${qw}.choices[${k}]`, c));
      }
      checkFigure(file, qw + ".figure", q.figure);
      const pm = checkParts(file, qw, q.parts);
      if (!q.parts && !olympiad && !(Number.isInteger(q.marks) && q.marks > 0)) err(file, qw, "question without parts needs integer marks");
      if (q.parts && q.marks && q.marks !== pm) err(file, qw, `marks ${q.marks} != sum of parts ${pm}`);
    });
  });
  summary.push(`${t.id} ${t.title}: ${t.concepts?.length || 0} concepts, ${t.archetypes?.length || 0} archetypes, ${nq} questions`);
}

console.log(summary.join("\n"));
console.log(errors ? `\n${errors} problem(s) found.` : "\nAll content valid.");
process.exit(errors ? 1 : 0);
