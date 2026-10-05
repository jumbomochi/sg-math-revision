/* H2 Mathematics (9758) revision site: registry, router, views and checklist. */
(function () {
  "use strict";

  const GROUPS = [
    { id: "1", title: "Functions and Graphs", section: "A" },
    { id: "2", title: "Sequences and Series", section: "A" },
    { id: "3", title: "Vectors", section: "A" },
    { id: "4", title: "Introduction to Complex Numbers", section: "A" },
    { id: "5", title: "Calculus", section: "A" },
    { id: "6", title: "Probability and Statistics", section: "B" },
  ];
  const SECTIONS = { A: "Section A · Pure Mathematics", B: "Section B · Probability and Statistics" };

  const topics = [];
  window.H2 = { addTopic: (t) => topics.push(t) };

  const md = (s) => H2Markup.render(s);
  const mdi = (s) => H2Markup.inline(s);
  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  /* ---------- checklist storage (per browser) ---------- */
  const STORE_KEY = "h2math:confident:v1";
  let done = {};
  try { done = JSON.parse(localStorage.getItem(STORE_KEY) || "{}") || {}; } catch (e) { done = {}; }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(done)); } catch (e) { /* storage unavailable */ } }
  function setDone(id, v) { if (v) done[id] = 1; else delete done[id]; save(); refreshProgress(); }

  function progressOf(list) {
    const ids = list.flatMap((t) => t.archetypes.map((a) => a.id));
    const n = ids.filter((id) => done[id]).length;
    return { n, total: ids.length, pct: ids.length ? Math.round((100 * n) / ids.length) : 0 };
  }
  function bar(p, label) {
    return `<div class="progress" data-progress="${esc(label)}"><div class="progress-track"><div class="progress-fill" style="width:${p.pct}%"></div></div><span class="progress-text">${p.n}/${p.total}</span></div>`;
  }
  function refreshProgress() {
    document.querySelectorAll("[data-progress]").forEach((el) => {
      const key = el.getAttribute("data-progress");
      const list = key === "all" ? topics : key.startsWith("g:") ? topics.filter((t) => groupOf(t) === key.slice(2)) : topics.filter((t) => t.id === key.slice(2));
      const p = progressOf(list);
      $(".progress-fill", el).style.width = p.pct + "%";
      $(".progress-text", el).textContent = `${p.n}/${p.total}`;
    });
    document.querySelectorAll("[data-check]").forEach((el) => { el.checked = !!done[el.getAttribute("data-check")]; });
    document.querySelectorAll("[data-arch]").forEach((el) => el.classList.toggle("is-done", !!done[el.getAttribute("data-arch")]));
  }

  /* ---------- helpers ---------- */
  const groupOf = (t) => t.id.split(".")[0];
  const sortKey = (id) => id.split(".").map(Number);
  function byId(a, b) { const [a1, a2] = sortKey(a.id), [b1, b2] = sortKey(b.id); return a1 - b1 || a2 - b2; }
  const link = (t, archId) => `#/t/${t.id}` + (archId ? `/${encodeURIComponent(archId)}` : "");
  const countQuestions = (t) => t.archetypes.reduce((s, a) => s + a.questions.length, 0);

  function marksOf(q) {
    if (q.marks) return q.marks;
    const sum = (parts) => (parts || []).reduce((s, p) => s + (p.marks || 0) + sum(p.parts), 0);
    return sum(q.parts) || null;
  }

  function figure(fig) {
    if (!fig) return "";
    if (typeof fig === "string") return `<figure class="q-figure">${fig}</figure>`;
    if (fig.type === "plot") return `<figure class="q-figure">${H2Plot.render(fig)}${fig.caption ? `<figcaption>${mdi(fig.caption)}</figcaption>` : ""}</figure>`;
    return "";
  }

  function partsHtml(parts) {
    if (!parts || !parts.length) return "";
    return `<ol class="q-parts">${parts.map((p) => `
      <li class="q-part">
        <span class="q-label">${esc(p.label || "")}</span>
        <div class="q-part-body">
          ${p.text ? `<div class="q-text">${md(p.text)}</div>` : ""}
          ${figure(p.figure)}
          ${partsHtml(p.parts)}
        </div>
        ${p.marks ? `<span class="q-marks">[${p.marks}]</span>` : ""}
      </li>`).join("")}</ol>`;
  }

  function questionHtml(q, i) {
    const m = marksOf(q);
    return `<article class="question">
      <header class="q-head"><span class="q-num">Question ${i + 1}</span>${m ? `<span class="q-total">${m} mark${m === 1 ? "" : "s"}</span>` : ""}${q.calculator === false ? `<span class="q-flag">No GC</span>` : ""}</header>
      <div class="q-body">
        ${q.stem ? `<div class="q-text">${md(q.stem)}</div>` : ""}
        ${figure(q.figure)}
        ${partsHtml(q.parts)}
        ${!q.parts && q.marks ? `<div class="q-marks q-marks-solo">[${q.marks}]</div>` : ""}
      </div>
    </article>`;
  }

  /* ---------- views ---------- */
  function sidebar(activeId) {
    return GROUPS.map((g) => {
      const ts = topics.filter((t) => groupOf(t) === g.id);
      return `<div class="nav-group"><div class="nav-group-title">${g.id}. ${esc(g.title)}</div>
        ${ts.map((t) => `<a class="nav-link${t.id === activeId ? " active" : ""}" href="${link(t)}"><span class="nav-id">${t.id}</span>${esc(t.title)}</a>`).join("")}
      </div>`;
    }).join("") + `<div class="nav-group"><a class="nav-link nav-check${activeId === "checklist" ? " active" : ""}" href="#/checklist">✓ Syllabus checklist</a></div>`;
  }

  function homeView() {
    const totalArch = topics.reduce((s, t) => s + t.archetypes.length, 0);
    const totalQ = topics.reduce((s, t) => s + countQuestions(t), 0);
    let html = `<section class="hero">
      <p class="eyebrow">Singapore-Cambridge GCE A-Level · Syllabus 9758</p>
      <h1>H2 Mathematics Revision</h1>
      <p class="lede">Every topic in the syllabus, broken into the key concepts you must know and the question archetypes examiners keep returning to, with original exam-style questions for each.</p>
      <div class="stats">
        <div><strong>${topics.length}</strong><span>sub-topics</span></div>
        <div><strong>${totalArch}</strong><span>archetypes</span></div>
        <div><strong>${totalQ}</strong><span>questions</span></div>
      </div>
      <div class="hero-progress"><span>Your checklist</span>${bar(progressOf(topics), "all")}<a href="#/checklist">Open checklist →</a></div>
    </section>
    <section class="papers">
      <div class="paper"><h3>Paper 1 · 3 h · 100 marks</h3><p>10–12 questions on Pure Mathematics, including one application question in a real-world context (at least 12 marks).</p></div>
      <div class="paper"><h3>Paper 2 · 3 h · 100 marks</h3><p>Section A: Pure Mathematics (40 marks, 4–5 questions). Section B: Probability and Statistics (60 marks, 6–8 questions), including one application question.</p></div>
    </section>`;
    for (const sec of ["A", "B"]) {
      html += `<h2 class="section-title">${SECTIONS[sec]}</h2>`;
      for (const g of GROUPS.filter((g) => g.section === sec)) {
        const ts = topics.filter((t) => groupOf(t) === g.id);
        html += `<div class="group"><div class="group-head"><h3>${g.id}. ${esc(g.title)}</h3>${bar(progressOf(ts), "g:" + g.id)}</div><div class="cards">
          ${ts.map((t) => `<a class="card" href="${link(t)}">
            <span class="card-id">${t.id}</span>
            <span class="card-title">${esc(t.title)}</span>
            <span class="card-meta">${t.archetypes.length} archetypes · ${countQuestions(t)} questions</span>
            ${bar(progressOf([t]), "t:" + t.id)}
          </a>`).join("")}
        </div></div>`;
      }
    }
    html += `<p class="footnote">Content follows the SEAB 9758 syllabus for examination in 2026 and 2027. All questions are original and written in the style of the A-Level papers. Formulae marked <span class="mf">MF27</span> are given in the List of Formulae.</p>`;
    return html;
  }

  function topicView(t, archId) {
    const all = topics;
    const idx = all.indexOf(t);
    const prev = all[idx - 1], next = all[idx + 1];
    const g = GROUPS.find((g) => g.id === groupOf(t));
    return `<nav class="crumbs"><a href="#/">Home</a> / ${esc(g.title)} / <span>${t.id}</span></nav>
    <header class="topic-head">
      <p class="eyebrow">${t.id} · ${esc(g.title)}${t.paper ? ` · ${esc(t.paper)}` : ""}</p>
      <h1>${esc(t.title)}</h1>
      ${t.summary ? `<p class="lede">${mdi(t.summary)}</p>` : ""}
      ${bar(progressOf([t]), "t:" + t.id)}
    </header>
    <nav class="toc" aria-label="On this page">
      <a href="#" data-jump="syllabus">Syllabus scope</a>
      <a href="#" data-jump="concepts">Key concepts</a>
      <a href="#" data-jump="archetypes">Archetypes (${t.archetypes.length})</a>
    </nav>

    <section id="syllabus" class="block">
      <h2>Syllabus scope</h2>
      <div class="scope">
        <div><h4>Included</h4><ul>${t.syllabus.include.map((s) => `<li>${mdi(s)}</li>`).join("")}</ul></div>
        ${t.syllabus.exclude && t.syllabus.exclude.length ? `<div class="scope-ex"><h4>Excluded</h4><ul>${t.syllabus.exclude.map((s) => `<li>${mdi(s)}</li>`).join("")}</ul></div>` : ""}
      </div>
    </section>

    <section id="concepts" class="block">
      <h2>Key concepts</h2>
      <div class="concepts">${t.concepts.map((c) => `<div class="concept"><h3>${mdi(c.title)}</h3><div class="concept-body">${md(c.body)}</div></div>`).join("")}</div>
    </section>

    <section id="archetypes" class="block">
      <h2>Question archetypes</h2>
      <ol class="arch-index">${t.archetypes.map((a, i) => `<li data-arch="${esc(a.id)}"><a href="${link(t, a.id)}">${i + 1}. ${mdi(a.name)}</a></li>`).join("")}</ol>
      ${t.archetypes.map((a, i) => `
        <div class="archetype" id="a-${esc(a.id)}" data-arch="${esc(a.id)}">
          <div class="arch-head">
            <div><p class="arch-num">Archetype ${i + 1}</p><h3>${mdi(a.name)}</h3></div>
            <label class="confident"><input type="checkbox" data-check="${esc(a.id)}"><span>I'm confident</span></label>
          </div>
          <div class="arch-tests">${md(a.tests)}</div>
          ${a.questions.map(questionHtml).join("")}
        </div>`).join("")}
    </section>

    <nav class="pager">
      ${prev ? `<a href="${link(prev)}"><span>← ${prev.id}</span>${esc(prev.title)}</a>` : "<span></span>"}
      ${next ? `<a class="next" href="${link(next)}"><span>${next.id} →</span>${esc(next.title)}</a>` : "<span></span>"}
    </nav>`;
  }

  function checklistView() {
    let html = `<header class="topic-head"><p class="eyebrow">Your progress</p><h1>Syllabus checklist</h1>
      <p class="lede">Tick an archetype once you can do its questions without help. Your ticks are saved in this browser only.</p>
      ${bar(progressOf(topics), "all")}
      <button class="btn-ghost" id="reset">Clear all ticks</button></header>`;
    for (const g of GROUPS) {
      const ts = topics.filter((t) => groupOf(t) === g.id);
      html += `<section class="block"><div class="group-head"><h2>${g.id}. ${esc(g.title)}</h2>${bar(progressOf(ts), "g:" + g.id)}</div>`;
      for (const t of ts) {
        html += `<div class="check-topic"><h3><a href="${link(t)}">${t.id} ${esc(t.title)}</a></h3><ul class="check-list">
          ${t.archetypes.map((a) => `<li data-arch="${esc(a.id)}"><label><input type="checkbox" data-check="${esc(a.id)}"><span>${mdi(a.name)}</span></label><a class="check-go" href="${link(t, a.id)}" aria-label="Go to archetype">Practise →</a></li>`).join("")}
        </ul></div>`;
      }
      html += `</section>`;
    }
    return html;
  }

  function notFound() { return `<h1>Not found</h1><p><a href="#/">Back to home</a></p>`; }

  /* ---------- router ---------- */
  function route() {
    const hash = location.hash.replace(/^#\/?/, "");
    const [kind, id, arch] = hash.split("/");
    const main = $("#main");
    let active = null, html, scrollTo = null;
    if (!kind) { html = homeView(); }
    else if (kind === "checklist") { html = checklistView(); active = "checklist"; }
    else if (kind === "t") {
      const t = topics.find((x) => x.id === id);
      if (t) { html = topicView(t, arch); active = t.id; document.title = `${t.id} ${t.title} · H2 Math Revision`; if (arch) scrollTo = "a-" + decodeURIComponent(arch); }
      else html = notFound();
    } else html = notFound();
    if (!kind || kind === "checklist") document.title = kind ? "Checklist · H2 Math Revision" : "H2 Math Revision";
    main.innerHTML = html;
    $("#nav").innerHTML = sidebar(active);
    document.body.classList.remove("nav-open");
    refreshProgress();
    const target = scrollTo && document.getElementById(scrollTo);
    if (target) { target.scrollIntoView({ block: "start" }); target.classList.add("flash"); setTimeout(() => target.classList.remove("flash"), 1600); }
    else window.scrollTo(0, 0);
  }

  document.addEventListener("change", (e) => {
    const id = e.target.getAttribute && e.target.getAttribute("data-check");
    if (id) setDone(id, e.target.checked);
  });
  document.addEventListener("click", (e) => {
    const jump = e.target.closest("[data-jump]");
    if (jump) { e.preventDefault(); const el = document.getElementById(jump.getAttribute("data-jump")); if (el) el.scrollIntoView({ behavior: "smooth" }); return; }
    if (e.target.id === "reset" && confirm("Clear every tick in your checklist?")) { done = {}; save(); refreshProgress(); return; }
    if (e.target.closest("#menu")) { document.body.classList.toggle("nav-open"); return; }
    if (e.target.closest("#theme")) {
      const cur = document.documentElement.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const nextTheme = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      try { localStorage.setItem("h2math:theme", nextTheme); } catch (err) { /* ignore */ }
    }
  });

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", () => { topics.sort(byId); route(); });
})();
