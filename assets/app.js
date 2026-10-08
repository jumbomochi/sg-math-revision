/* Math revision site: level registry, on-demand content loading, router, views and checklist. */
(function () {
  "use strict";

  // cache-busting version, stamped into index.html at deploy time
  const V = ((document.currentScript && document.currentScript.src.match(/[?&]v=([^&]+)/)) || [])[1] || "";
  let LEVELS = [];
  const topicsBy = {};        // level id -> topics
  const loading = {};         // level id -> Promise

  window.H2 = {
    setLevels: (ls) => { LEVELS = ls; ls.forEach((L) => { topicsBy[L.id] = []; }); },
    addTopic: (t) => {
      const lvl = document.currentScript && document.currentScript.dataset.level;
      (topicsBy[lvl] || (topicsBy[lvl] = [])).push(t);
    },
  };

  const md = (s) => H2Markup.render(s);
  const mdi = (s) => H2Markup.inline(s);
  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const levelById = (id) => LEVELS.find((L) => L.id === id);

  /* ---------- content loading ---------- */
  function loadLevel(L) {
    if (loading[L.id]) return loading[L.id];
    loading[L.id] = Promise.all(L.files.map((f) => new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = `content/${L.id}/${f}.js${V ? "?v=" + V : ""}`;
      s.dataset.level = L.id;
      s.onload = resolve;
      s.onerror = () => reject(new Error("Could not load " + s.src));
      document.body.appendChild(s);
    }))).then(() => { topicsBy[L.id].sort(byId(L)); return topicsBy[L.id]; });
    return loading[L.id];
  }

  /* ---------- checklist storage (per browser, per level) ---------- */
  const doneBy = {};
  const storeKey = (L) => L.storeKey || `sgmath:${L.id}:confident:v1`;
  function doneOf(L) {
    if (!doneBy[L.id]) {
      try { doneBy[L.id] = JSON.parse(localStorage.getItem(storeKey(L)) || "{}") || {}; } catch (e) { doneBy[L.id] = {}; }
    }
    return doneBy[L.id];
  }
  function save(L) { try { localStorage.setItem(storeKey(L), JSON.stringify(doneOf(L))); } catch (e) { /* storage unavailable */ } }

  /* ---------- helpers ---------- */
  const groupOf = (t) => (t.id.includes(".") ? t.id.split(".")[0] : t.id.replace(/\d.*$/, ""));
  const numOf = (t) => (t.id.includes(".") ? Number(t.id.split(".")[1]) : Number(t.id.replace(/^\D+/, "")));
  const byId = (L) => (a, b) => {
    const ga = L.groups.findIndex((g) => g.id === groupOf(a)), gb = L.groups.findIndex((g) => g.id === groupOf(b));
    return ga - gb || numOf(a) - numOf(b);
  };
  const groupLabel = (g) => (/^\d+$/.test(g.id) ? `${g.id}. ${esc(g.title)}` : esc(g.title));
  const link = (L, t, archId) => `#/${L.id}/t/${t.id}` + (archId ? `/${encodeURIComponent(archId)}` : "");
  const countQuestions = (t) => t.archetypes.reduce((s, a) => s + a.questions.length, 0);
  let tagInfo = {};
  const tagChips = (tags) => (tags && tags.length ? `<span class="tags">${tags.map((x) => `<span class="tag"${tagInfo[x] ? ` title="${esc(tagInfo[x])}"` : ""}>${esc(x)}</span>`).join("")}</span>` : "");
  const isIP = (t) => !!(t.tags && t.tags.includes("IP"));

  function progressOf(L, list) {
    const done = doneOf(L);
    const ids = list.flatMap((t) => t.archetypes.map((a) => a.id));
    const n = ids.filter((id) => done[id]).length;
    return { n, total: ids.length, pct: ids.length ? Math.round((100 * n) / ids.length) : 0 };
  }
  function bar(p, label) {
    return `<div class="progress" data-progress="${esc(label)}"><div class="progress-track"><div class="progress-fill" style="width:${p.pct}%"></div></div><span class="progress-text">${p.n}/${p.total}</span></div>`;
  }
  function refreshProgress(L) {
    if (!L) return;
    const topics = topicsBy[L.id];
    const done = doneOf(L);
    document.querySelectorAll("[data-progress]").forEach((el) => {
      const key = el.getAttribute("data-progress");
      const list = key === "all" ? topics : key.startsWith("g:") ? topics.filter((t) => groupOf(t) === key.slice(2)) : topics.filter((t) => t.id === key.slice(2));
      const p = progressOf(L, list);
      $(".progress-fill", el).style.width = p.pct + "%";
      $(".progress-text", el).textContent = `${p.n}/${p.total}`;
    });
    document.querySelectorAll("[data-check]").forEach((el) => { el.checked = !!done[el.getAttribute("data-check")]; });
    document.querySelectorAll("[data-arch]").forEach((el) => el.classList.toggle("is-done", !!done[el.getAttribute("data-arch")]));
  }

  function marksOf(q) {
    if (q.marks) return q.marks;
    const sum = (parts) => (parts || []).reduce((s, p) => s + (p.marks || 0) + sum(p.parts), 0);
    return sum(q.parts) || null;
  }

  function figure(fig) {
    if (!fig) return "";
    if (Array.isArray(fig)) return `<div class="figure-row">${fig.map(figure).join("")}</div>`;
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

  const LETTERS = "ABCDEFGH";
  function choicesHtml(choices) {
    if (!choices || !choices.length) return "";
    return `<ol class="q-choices">${choices.map((c, k) => `<li><span class="q-choice-letter">(${LETTERS[k]})</span><span>${mdi(c)}</span></li>`).join("")}</ol>`;
  }

  function questionHtml(L, q, i) {
    const m = marksOf(q);
    const stars = q.difficulty ? `<span class="q-stars" title="Difficulty ${q.difficulty} of 3">${"★".repeat(q.difficulty)}<span class="q-stars-off">${"★".repeat(3 - q.difficulty)}</span></span>` : "";
    return `<article class="question">
      <header class="q-head"><span class="q-num">${L.kind === "olympiad" ? "Problem" : "Question"} ${i + 1}</span>${stars}${m ? `<span class="q-total">${m} mark${m === 1 ? "" : "s"}</span>` : ""}${q.calculator === false ? `<span class="q-flag">${esc(L.noCalcLabel || "No calculator")}</span>` : ""}</header>
      <div class="q-body">
        ${q.stem ? `<div class="q-text">${md(q.stem)}</div>` : ""}
        ${figure(q.figure)}
        ${choicesHtml(q.choices)}
        ${partsHtml(q.parts)}
        ${!q.parts && q.marks ? `<div class="q-marks q-marks-solo">[${q.marks}]</div>` : ""}
        ${q.answer ? `<details class="q-answer"><summary>Show answer</summary><div class="q-answer-body">${md(q.answer)}</div></details>` : ""}
      </div>
    </article>`;
  }

  const words = (L) => (L && L.kind === "olympiad"
    ? { concepts: "Key ideas", archetypes: "Problem types", archetype: "Type", checklist: "Progress checklist", topics: "themes" }
    : { concepts: "Key concepts", archetypes: "Question archetypes", archetype: "Archetype", checklist: "Syllabus checklist", topics: "topics" });

  /* ---------- views ---------- */
  function sidebar(L, activeId) {
    if (!L) {
      return `<div class="nav-group"><div class="nav-group-title">Levels</div>
        ${LEVELS.map((x) => `<a class="nav-link" href="#/${x.id}"><span class="nav-id"></span>${esc(x.short)}</a>`).join("")}</div>`;
    }
    const topics = topicsBy[L.id];
    return `<div class="nav-level"><a class="nav-back" href="#/">← All levels</a><div class="nav-level-name">${esc(L.name)}</div></div>` +
      L.groups.map((g) => {
        const ts = topics.filter((t) => groupOf(t) === g.id);
        return `<div class="nav-group"><div class="nav-group-title">${groupLabel(g)}</div>
          ${ts.map((t) => `<a class="nav-link${t.id === activeId ? " active" : ""}" href="${link(L, t)}"><span class="nav-id">${t.id}</span>${esc(t.title)}</a>`).join("")}
        </div>`;
      }).join("") + `<div class="nav-group"><a class="nav-link nav-check${activeId === "checklist" ? " active" : ""}" href="#/${L.id}/checklist">✓ ${words(L).checklist}</a></div>`;
  }

  function landingView() {
    return `<section class="hero">
      <p class="eyebrow">Singapore mathematics syllabuses</p>
      <h1>Math Revision</h1>
      <p class="lede">Key concepts and common question archetypes for every topic, with practice questions.</p>
    </section>
    <div class="cards levels">
      ${LEVELS.map((L) => {
        const ready = L.files.length > 0;
        const ticked = Object.keys(doneOf(L)).length;
        return `<a class="card level-card${ready ? "" : " is-soon"}" href="#/${L.id}">
          <span class="card-id">${esc(L.stage)} · ${esc(L.code)}</span>
          <span class="card-title">${esc(L.name)}</span>
          <span class="card-meta">${esc(L.summary)}</span>
          <span class="card-meta">${ready ? `${L.files.length} topics${ticked ? ` · ${ticked} ticked` : ""}` : "Coming soon"}</span>
        </a>`;
      }).join("")}
    </div>`;
  }

  function homeView(L) {
    const topics = topicsBy[L.id];
    if (!topics.length) return `<section class="hero"><p class="eyebrow">${esc(L.eyebrow)}</p><h1>${esc(L.name)}</h1><p class="lede">Coming soon.</p></section>`;
    const totalArch = topics.reduce((s, t) => s + t.archetypes.length, 0);
    const totalQ = topics.reduce((s, t) => s + countQuestions(t), 0);
    let html = `<section class="hero">
      <p class="eyebrow">${esc(L.eyebrow)}</p>
      <h1>${esc(L.name)} Revision</h1>
      <p class="lede">${L.lede ? esc(L.lede) : "Key concepts and common question archetypes for every topic, with practice questions."}</p>
      <div class="stats">
        <div><strong>${topics.length}</strong><span>${L.id === "h2" ? "sub-topics" : words(L).topics}</span></div>
        <div><strong>${totalArch}</strong><span>${words(L).archetypes.toLowerCase()}</span></div>
        <div><strong>${totalQ}</strong><span>${L.kind === "olympiad" ? "problems" : "questions"}</span></div>
      </div>
      <div class="hero-progress"><span>Your checklist</span>${bar(progressOf(L, topics), "all")}<a href="#/${L.id}/checklist">Open checklist →</a></div>
    </section>
    <section class="papers">${(L.papers || []).map((p) => `<div class="paper"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div>`).join("")}</section>`;
    for (const sec of L.sections) {
      if (sec.title) html += `<h2 class="section-title">${esc(sec.title)}</h2>`;
      for (const g of L.groups.filter((g) => g.section === sec.id)) {
        const ts = topics.filter((t) => groupOf(t) === g.id);
        html += `<div class="group"><div class="group-head"><h3>${groupLabel(g)}</h3>${bar(progressOf(L, ts), "g:" + g.id)}</div><div class="cards">
          ${ts.map((t) => `<a class="card" href="${link(L, t)}">
            <span class="card-id">${t.id}${tagChips(t.tags)}</span>
            <span class="card-title">${esc(t.title)}</span>
            <span class="card-meta">${t.archetypes.length} ${words(L).archetypes.split(" ").pop().toLowerCase()} · ${countQuestions(t)} ${L.kind === "olympiad" ? "problems" : "questions"}</span>
            ${bar(progressOf(L, [t]), "t:" + t.id)}
          </a>`).join("")}
        </div></div>`;
      }
    }
    if (L.tagInfo) html += `<div class="tag-legend">${Object.entries(L.tagInfo).map(([k, v]) => `<p><span class="tag">${esc(k)}</span> ${mdi(v)}</p>`).join("")}</div>`;
    html += `<p class="footnote">${L.footnote}</p>`;
    return html;
  }

  function topicView(L, t) {
    const all = topicsBy[L.id];
    const idx = all.indexOf(t);
    const prev = all[idx - 1], next = all[idx + 1];
    const g = L.groups.find((g) => g.id === groupOf(t));
    return `<nav class="crumbs"><a href="#/${L.id}">${esc(L.short)}</a> / ${esc(g.title)} / <span>${t.id}</span></nav>
    <header class="topic-head">
      <p class="eyebrow">${t.id} · ${esc(g.title)}${t.paper ? ` · ${esc(t.paper)}` : ""}</p>
      <h1>${esc(t.title)}</h1>
      ${tagChips(t.tags)}
      ${t.summary ? `<p class="lede">${mdi(t.summary)}</p>` : ""}
      ${bar(progressOf(L, [t]), "t:" + t.id)}
    </header>
    <nav class="toc" aria-label="On this page">
      ${t.syllabus ? `<a href="#" data-jump="syllabus">${isIP(t) ? "Scope" : "Syllabus scope"}</a>` : ""}
      <a href="#" data-jump="concepts">${words(L).concepts}</a>
      <a href="#" data-jump="archetypes">${words(L).archetypes} (${t.archetypes.length})</a>
    </nav>

    ${t.syllabus ? `<section id="syllabus" class="block">
      <h2>${isIP(t) ? "Scope · beyond the syllabus" : "Syllabus scope"}</h2>
      ${isIP(t) && L.tagInfo && L.tagInfo.IP ? `<p class="scope-note">${mdi(L.tagInfo.IP)}</p>` : ""}
      <div class="scope">
        <div><h4>Included</h4><ul>${t.syllabus.include.map((s) => `<li>${mdi(s)}</li>`).join("")}</ul></div>
        ${t.syllabus.exclude && t.syllabus.exclude.length ? `<div class="scope-ex"><h4>Excluded</h4><ul>${t.syllabus.exclude.map((s) => `<li>${mdi(s)}</li>`).join("")}</ul></div>` : ""}
      </div>
    </section>` : ""}

    <section id="concepts" class="block">
      <h2>${words(L).concepts}</h2>
      <div class="concepts">${t.concepts.map((c) => `<div class="concept"><h3>${mdi(c.title)}${tagChips(c.tags)}</h3><div class="concept-body">${md(c.body)}</div>${figure(c.figure)}</div>`).join("")}</div>
    </section>

    <section id="archetypes" class="block">
      <h2>${words(L).archetypes}</h2>
      <ol class="arch-index">${t.archetypes.map((a, i) => `<li data-arch="${esc(a.id)}"><a href="${link(L, t, a.id)}">${i + 1}. ${mdi(a.name)}</a></li>`).join("")}</ol>
      ${t.archetypes.map((a, i) => `
        <div class="archetype" id="a-${esc(a.id)}" data-arch="${esc(a.id)}">
          <div class="arch-head">
            <div><p class="arch-num">${words(L).archetype} ${i + 1}${tagChips(a.tags)}</p><h3>${mdi(a.name)}</h3></div>
            <label class="confident"><input type="checkbox" data-check="${esc(a.id)}"><span>I'm confident</span></label>
          </div>
          <div class="arch-tests">${md(a.tests)}</div>
          ${a.questions.map((q, j) => questionHtml(L, q, j)).join("")}
        </div>`).join("")}
    </section>

    <nav class="pager">
      ${prev ? `<a href="${link(L, prev)}"><span>← ${prev.id}</span>${esc(prev.title)}</a>` : "<span></span>"}
      ${next ? `<a class="next" href="${link(L, next)}"><span>${next.id} →</span>${esc(next.title)}</a>` : "<span></span>"}
    </nav>`;
  }

  function checklistView(L) {
    const topics = topicsBy[L.id];
    let html = `<header class="topic-head"><p class="eyebrow">${esc(L.short)} · Your progress</p><h1>${words(L).checklist}</h1>
      <p class="lede">Tick ${L.kind === "olympiad" ? "a problem type when you can solve its problems" : "an archetype when you can do its questions"} without help. Ticks are saved in this browser only.</p>
      ${bar(progressOf(L, topics), "all")}
      <button class="btn-ghost" id="reset">Clear all ticks</button></header>`;
    for (const g of L.groups) {
      const ts = topics.filter((t) => groupOf(t) === g.id);
      html += `<section class="block"><div class="group-head"><h2>${groupLabel(g)}</h2>${bar(progressOf(L, ts), "g:" + g.id)}</div>`;
      for (const t of ts) {
        html += `<div class="check-topic"><h3><a href="${link(L, t)}">${t.id} ${esc(t.title)}</a></h3><ul class="check-list">
          ${t.archetypes.map((a) => `<li data-arch="${esc(a.id)}"><label><input type="checkbox" data-check="${esc(a.id)}"><span>${mdi(a.name)}</span></label><a class="check-go" href="${link(L, t, a.id)}" aria-label="Go to archetype">Practise →</a></li>`).join("")}
        </ul></div>`;
      }
      html += `</section>`;
    }
    return html;
  }

  function notFound() { return `<h1>Not found</h1><p><a href="#/">Back to home</a></p>`; }

  /* ---------- router ---------- */
  let current = null; // level shown
  let renderSeq = 0;

  async function route() {
    const hash = location.hash.replace(/^#\/?/, "");
    // links from before levels existed: #/t/5.3, #/checklist
    if (/^(t\/|checklist$)/.test(hash)) { location.replace("#/h2/" + hash); return; }
    const [lvl, kind, id, arch] = hash.split("/");
    const L = lvl ? levelById(lvl) : null;
    const seq = ++renderSeq;
    const main = $("#main");
    $("#level-name").textContent = L ? L.short : "";

    if (lvl && !L) return show(null, null, notFound(), "Math Revision");
    if (!L) return show(null, null, landingView(), "Math Revision");

    if (!topicsBy[L.id].length && L.files.length) main.innerHTML = `<p class="loading">Loading…</p>`;
    try { await loadLevel(L); } catch (e) { return show(L, null, `<h1>Could not load this level</h1><p>${esc(e.message)}</p>`, L.short); }
    if (seq !== renderSeq) return; // a newer navigation started

    if (!kind) return show(L, null, homeView(L), `${L.short} Revision`);
    if (kind === "checklist") return show(L, "checklist", checklistView(L), `Checklist · ${L.short} Revision`);
    if (kind === "t") {
      const t = topicsBy[L.id].find((x) => x.id === id);
      if (t) return show(L, t.id, topicView(L, t), `${t.id} ${t.title} · ${L.short} Revision`, arch && "a-" + decodeURIComponent(arch));
    }
    return show(L, null, notFound(), `${L.short} Revision`);
  }

  function show(L, active, html, title, scrollTo) {
    current = L;
    tagInfo = (L && L.tagInfo) || {};
    document.title = title;
    $("#main").innerHTML = html;
    $("#nav").innerHTML = sidebar(L, active);
    $("#top-check").style.display = L && L.files.length ? "" : "none";
    if (L) $("#top-check").setAttribute("href", `#/${L.id}/checklist`);
    document.body.classList.remove("nav-open");
    refreshProgress(L);
    const target = scrollTo && document.getElementById(scrollTo);
    if (target) { target.scrollIntoView({ block: "start" }); target.classList.add("flash"); setTimeout(() => target.classList.remove("flash"), 1600); }
    else window.scrollTo(0, 0);
  }

  document.addEventListener("change", (e) => {
    const id = e.target.getAttribute && e.target.getAttribute("data-check");
    if (!id || !current) return;
    const done = doneOf(current);
    if (e.target.checked) done[id] = 1; else delete done[id];
    save(current);
    refreshProgress(current);
  });
  document.addEventListener("click", (e) => {
    const jump = e.target.closest("[data-jump]");
    if (jump) { e.preventDefault(); const el = document.getElementById(jump.getAttribute("data-jump")); if (el) el.scrollIntoView({ behavior: "smooth" }); return; }
    if (e.target.id === "reset" && current && confirm(`Clear every tick in your ${current.short} checklist?`)) { doneBy[current.id] = {}; save(current); refreshProgress(current); return; }
    if (e.target.closest("#menu")) { document.body.classList.toggle("nav-open"); return; }
    if (e.target.closest("#theme")) {
      const cur = document.documentElement.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const nextTheme = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      try { localStorage.setItem("h2math:theme", nextTheme); } catch (err) { /* ignore */ }
    }
  });

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", route);
})();
