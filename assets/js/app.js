/* ============================================================
   ATELIERUL TEHNOLOGIEI - Motorul aplicației
   Randare pagini, progres (localStorage), demo-uri interactive.
   ============================================================ */

const LESSONS = [...LESSONS_A, ...LESSONS_B, ...LESSONS_C, ...LESSONS_D];
const DEMO_GUIDES = {
  ...DEMO_GUIDES_A, ...DEMO_GUIDES_B, ...DEMO_GUIDES_C, ...DEMO_GUIDES_D
};
const PROGRESS_KEY = "at_progress";
const THEME_KEY = "at_theme";

/* ---------- Progres ---------- */
function getProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
  catch { return {}; }
}
function saveProgress(p) { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); }
function isDone(id) { return !!getProgress()[id]; }
function toggleDone(id) {
  const p = getProgress();
  if (p[id]) delete p[id]; else p[id] = true;
  saveProgress(p);
  return !!p[id];
}
function levelProgress(n) {
  const lessons = LESSONS.filter(l => l.level === n);
  const done = lessons.filter(l => isDone(l.id)).length;
  return { done, total: lessons.length, pct: lessons.length ? Math.round(done / lessons.length * 100) : 0 };
}
function totalProgress() {
  const done = LESSONS.filter(l => isDone(l.id)).length;
  return { done, total: LESSONS.length, pct: Math.round(done / LESSONS.length * 100) };
}

/* ---------- Temă ---------- */
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.setAttribute("data-theme", "dark");
  updateThemeBtn();
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", cur);
  localStorage.setItem(THEME_KEY, cur);
  updateThemeBtn();
}
function updateThemeBtn() {
  const b = document.querySelector(".btn-theme");
  if (b) b.textContent = document.documentElement.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";
}

/* ---------- Utilitare ---------- */
function param(name) { return new URLSearchParams(location.search).get(name); }
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function bubbles() {
  const host = document.querySelector(".bg-bubbles");
  if (!host) return;
  const colors = ["#4f7cff", "#00c2a8", "#ff9f43", "#9b59ff", "#ff6b9d", "#2ecc71"];
  for (let i = 0; i < 12; i++) {
    const s = document.createElement("span");
    const size = 30 + Math.random() * 90;
    s.style.cssText = `left:${Math.random() * 100}%;width:${size}px;height:${size}px;
      background:${colors[i % colors.length]};animation-duration:${14 + Math.random() * 20}s;
      animation-delay:${-Math.random() * 20}s;`;
    host.appendChild(s);
  }
}
function revealOnScroll() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
}
function confetti() {
  const colors = ["#4f7cff", "#00c2a8", "#ff9f43", "#9b59ff", "#ff6b9d", "#2ecc71"];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");
    c.className = "confetti-piece";
    c.style.cssText = `left:${Math.random() * 100}vw;width:${6 + Math.random() * 8}px;height:${8 + Math.random() * 10}px;
      background:${colors[i % colors.length]};animation-duration:${1.8 + Math.random() * 2}s;
      animation-delay:${Math.random() * 0.6}s;`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4500);
  }
}

/* ============================================================
   PAGINA PRINCIPALĂ
   ============================================================ */
function renderHome() {
  const grid = document.getElementById("levels-grid");
  const total = totalProgress();
  document.getElementById("global-progress").innerHTML = `
    <div class="progress-track"><div class="progress-fill" style="width:0%"></div></div>
    <strong>${total.done}/${total.total} lecții</strong>`;
  requestAnimationFrame(() => setTimeout(() => {
    const f = document.querySelector("#global-progress .progress-fill");
    if (f) f.style.width = total.pct + "%";
  }, 60));

  grid.innerHTML = LEVELS.map(l => {
    const p = levelProgress(l.n);
    return `<a class="level-card reveal" style="--lc:${l.color}" href="level.html?n=${l.n}">
      <span class="lvl-num">${l.n}</span>
      <h3>${l.icon} ${esc(l.title)}</h3>
      <p class="lvl-desc">${esc(l.desc)}</p>
      <div class="lvl-meta">
        <div class="progress-track"><div class="progress-fill" style="width:${p.pct}%"></div></div>
        <span>${p.done}/${p.total}</span>
      </div>
      <div class="lvl-meta"><em>${esc(l.tagline)}</em><span>${p.pct === 100 ? "🏆" : "→"}</span></div>
    </a>`;
  }).join("");
}

/* ============================================================
   PAGINA NIVEL
   ============================================================ */
function renderLevel() {
  const n = parseInt(param("n"), 10);
  const lvl = LEVELS.find(l => l.n === n);
  if (!lvl) { location.href = "index.html"; return; }
  document.title = `Nivel ${n} - ${lvl.title} | Atelierul Tehnologiei`;
  const lessons = LESSONS.filter(l => l.level === n);
  const p = levelProgress(n);

  document.getElementById("level-hero").innerHTML = `
    <div class="lesson-hero" style="--lc:${lvl.color}">
      <div class="crumb"><a href="index.html">🏠 Acasă</a> / Nivel ${n}</div>
      <h1>${lvl.icon} Nivel ${n}: ${esc(lvl.title)}</h1>
      <p>${esc(lvl.desc)}</p>
      <div class="lvl-meta" style="margin-top:1rem;color:#fff">
        <div class="progress-track" style="background:rgba(255,255,255,.25)">
          <div class="progress-fill" style="width:${p.pct}%"></div>
        </div>
        <strong>${p.done}/${p.total} lecții ${p.pct === 100 ? "🏆 NIVEL COMPLET!" : ""}</strong>
      </div>
      <span class="big-icon">${lvl.icon}</span>
    </div>`;

  document.getElementById("lessons-list").innerHTML = lessons.map(l => `
    <a class="lesson-card reveal ${isDone(l.id) ? "done" : ""}" style="--lc:${lvl.color}" href="lesson.html?level=${l.level}&lesson=${l.num}">
      <span class="lesson-icon">${isDone(l.id) ? "✅" : l.icon}</span>
      <div>
        <h4>${l.id} — ${esc(l.title)} ${l.isProject ? '<span class="badge-project">Proiect</span>' : ""}</h4>
        <div class="lesson-sub">⏱️ ${esc(l.duration)} · 🎯 ${l.objectives.length} obiective</div>
      </div>
      <span class="lesson-check">🏅</span>
    </a>`).join("");
}

/* ============================================================
   PAGINA LECȚIE
   ============================================================ */
const SECTIONS = [
  ["obiective", "🎯 Obiective"], ["explicatie", "📖 Explicația"], ["demo", "🎮 Demo"],
  ["experiment", "🧪 Experiment"], ["proiect", "🛠️ Proiect"], ["intrebari", "💭 Întrebări"],
  ["exercitii", "✏️ Exerciții"], ["parinte", "👨‍👩‍👧 Ghid părinte"], ["criterii", "🏁 Criterii de trecere"]
];

function explanationHeading(text, index) {
  const clean = String(text).trim();
  const match = clean.match(/^([^:.!?—-]{2,70})[:.!?—-]/);
  return match ? match[1] : `Ideea ${index + 1}`;
}
function visualIcon(object) {
  return String(object).match(/^(?:\p{Extended_Pictographic}|\p{Emoji_Presentation})/u)?.[0] || "💡";
}
function visualLabel(object) {
  return String(object).replace(/^\S+\s*/, "").trim();
}
function escapeRegExp(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function highlightExplanationTerms(text) {
  const lessonId = window.__currentLesson?.id;
  const dictionary = typeof EXPLANATION_TERM_DICTIONARY !== "undefined" ? EXPLANATION_TERM_DICTIONARY : [];
  const names = dictionary.filter(entry => !lessonId || entry.lesson === lessonId)
    .flatMap(entry => entry.names || []).filter(name => {
      const clean = String(name).trim();
      return clean.length > 2 && !["ȘI", "SAU", "NU"].includes(clean.toUpperCase());
    })
    .sort((a, b) => b.length - a.length);
  if (!names.length) return esc(text);
  const pattern = new RegExp(`\\b(?:${names.map(escapeRegExp).join("|")})\\b`, "gi");
  return esc(text).replace(pattern, match => `<strong class="term-highlight">${match}</strong>`);
}
function renderStoryScene(visual, activeIndex) {
  const objects = Array.isArray(visual?.objects) && visual.objects.length ? visual.objects : ["💡 Idee"];
  const active = Math.max(0, Math.min(activeIndex, objects.length - 1));
  const positions = objects.map((_, index) => {
    const x = objects.length === 1 ? 280 : 92 + index * (376 / (objects.length - 1));
    return { x, y: index % 2 ? 112 : 168 };
  });
  const nodes = objects.map((object, index) => {
    const { x, y } = positions[index];
    const label = visualLabel(object).slice(0, 18);
    const isActive = index === active;
    return `<g class="story-node ${isActive ? "is-active" : ""}" transform="translate(${x}, ${y})">
      <circle class="story-node-ring" r="${isActive ? 43 : 34}"></circle>
      <circle class="story-node-circle" r="${isActive ? 34 : 27}"></circle>
      <text class="story-node-icon" y="9">${esc(visualIcon(object))}</text>
      <text class="story-node-label" y="57">${esc(label)}</text>
    </g>${index < objects.length - 1 ? `<path class="story-route-arrow" d="M ${positions[index].x + 48} ${positions[index].y} Q ${(positions[index].x + positions[index + 1].x) / 2} ${positions[index].y - 34} ${positions[index + 1].x - 48} ${positions[index + 1].y}"></path>` : ""}`;
  }).join("");
  const activeObject = objects[active];
  const kind = String(visual?.kind || "idea").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `<svg class="story-svg story-svg-${esc(kind)}" viewBox="0 0 560 245" role="img" aria-label="${esc(visual?.title || "Harta vizuală a lecției")}">
    <defs>
      <linearGradient id="story-sky" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="var(--primary)" stop-opacity=".18"></stop>
        <stop offset="1" stop-color="var(--accent)" stop-opacity=".14"></stop>
      </linearGradient>
    </defs>
    <rect class="story-sky" x="8" y="8" width="544" height="229" rx="24"></rect>
    <circle class="story-spark story-spark-one" cx="490" cy="38" r="8"></circle>
    <circle class="story-spark story-spark-two" cx="68" cy="58" r="5"></circle>
    <path class="story-route" d="M 42 184 C 130 82, 190 210, 280 132 S 438 70, 518 158"></path>
    ${nodes}
    <g class="story-hero" transform="translate(${positions[active].x}, ${positions[active].y - 64})">
      <circle r="22"></circle>
      <text y="9">${esc(visualIcon(activeObject))}</text>
    </g>
  </svg>`;
}
function renderStoryObjectChips(visual, activeIndex) {
  const objects = Array.isArray(visual?.objects) && visual.objects.length ? visual.objects : ["💡 Idee"];
  return objects.map((object, index) => `<span class="story-object-chip ${index === activeIndex ? "is-active" : ""}"><span>${esc(visualIcon(object))}</span>${esc(visualLabel(object))}</span>`).join("");
}
function renderExplanationStory(l) {
  const visual = DEMO_VISUALS[l.id] || { kind: "idea", title: "Harta lecției", objects: ["💡 Idee"], story: "Urmărește cum se transformă o întrebare într-o explicație." };
  const paragraphs = l.explanation || [];
  const terms = (typeof EXPLANATION_CONTENT !== "undefined" ? EXPLANATION_CONTENT[l.id]?.terms : []) || [];
  return `<div class="explanation-section explanation-story">
    <div class="explanation-kicker">🧭 1 · Povestea lecției</div>
    <h2>Transformă informația într-o hartă de explorat</h2>
    <p class="explanation-lead">Toate ideile sunt vizibile de la început. Atinge un pas ca să muți personajul pe hartă și să vezi cum se leagă explicația de scenă.</p>
    <div class="story-adventure">
      <div class="story-stage" data-story-stage>
        <div class="story-stage-art" data-story-art>${renderStoryScene(visual, 0)}</div>
        <div class="story-stage-copy">
          <span class="story-stage-step" data-story-step>🚩 Pasul 1 din ${paragraphs.length}</span>
          <strong data-story-title>${esc(explanationHeading(paragraphs[0] || "", 0))}</strong>
          <p data-story-text>${highlightExplanationTerms(paragraphs[0] || "")}</p>
          <div class="story-object-chips" data-story-objects>${renderStoryObjectChips(visual, 0)}</div>
          <p class="story-stage-note">🗺️ ${esc(visual.story)}</p>
        </div>
      </div>
      <div class="story-path" role="group" aria-label="Pașii poveștii lecției">
        ${paragraphs.map((paragraph, i) => `<button type="button" class="story-path-step ${i === 0 ? "is-active" : ""}" data-story-step-button="${i}" aria-pressed="${i === 0}"><span>${esc(visualIcon(visual.objects?.[i] || "💡"))}</span><b>${i + 1}</b><small>${esc(explanationHeading(paragraph, i))}</small></button>`).join("")}
      </div>
      <div class="story-stops">
        ${paragraphs.map((paragraph, i) => {
          const stopTerms = terms.filter((_, termIndex) => termIndex % Math.max(paragraphs.length, 1) === i).slice(0, 3);
          return `<article class="story-stop ${i === 0 ? "is-active" : ""}" data-story-stop="${i}">
            <div class="story-stop-marker"><span>${esc(visualIcon(visual.objects?.[i] || "💡"))}</span><b>${i + 1}</b></div>
            <div class="story-stop-content"><h3>${esc(explanationHeading(paragraph, i))}</h3><p>${highlightExplanationTerms(paragraph)}</p>${stopTerms.length ? `<div class="story-term-tags">${stopTerms.map(term => term.names.slice(0, 2).map(name => `<span>${esc(name)}</span>`).join("")).join("")}</div>` : ""}</div>
          </article>`;
        }).join("")}
      </div>
    </div>
  </div>`;
}
function bindExplanationStory(host, l) {
  const visual = DEMO_VISUALS[l.id] || { objects: ["💡 Idee"], story: "" };
  const buttons = [...host.querySelectorAll("[data-story-step-button]")];
  const stops = [...host.querySelectorAll("[data-story-stop]")];
  const art = host.querySelector("[data-story-art]");
  const stepLabel = host.querySelector("[data-story-step]");
  const title = host.querySelector("[data-story-title]");
  const text = host.querySelector("[data-story-text]");
  const objectChips = host.querySelector("[data-story-objects]");
  function select(index) {
    const paragraph = l.explanation?.[index] || "";
    buttons.forEach((button, i) => {
      button.classList.toggle("is-active", i === index);
      button.setAttribute("aria-pressed", String(i === index));
    });
    stops.forEach((stop, i) => stop.classList.toggle("is-active", i === index));
    if (art) art.innerHTML = renderStoryScene(visual, index);
    if (stepLabel) stepLabel.textContent = `🚩 Pasul ${index + 1} din ${l.explanation.length}`;
    if (title) title.textContent = explanationHeading(paragraph, index);
    if (text) text.innerHTML = highlightExplanationTerms(paragraph);
    if (objectChips) objectChips.innerHTML = renderStoryObjectChips(visual, index);
  }
  buttons.forEach(button => button.addEventListener("click", () => select(+button.dataset.storyStepButton)));
}
function guideHeading(text, index) {
  const clean = String(text).trim();
  const match = clean.match(/^([^:.!?]{2,64})(?= înseamnă|:|;|\.)/);
  if (match) return match[1].trim();
  const sentence = clean.match(/^([^.!?]{2,72})[.!?]/)?.[1].trim();
  if (sentence) return sentence.length > 48 ? sentence.slice(0, 45).trimEnd() + "…" : sentence;
  return `Pasul ${index + 1}`;
}
function guideIcon(text, index) {
  return String(text).match(/^(?:\p{Extended_Pictographic}|\p{Emoji_Presentation})/u)?.[0] || ["🔎", "🧩", "🗺️", "🧠"][index % 4];
}
function renderGuideGlossary(l) {
  const extras = (typeof EXPLANATION_CONTENT !== "undefined" ? EXPLANATION_CONTENT : {})[l.id] || {};
  const terms = extras.terms || [];
  const guides = (DEMO_GUIDES[l.id] || []).filter(Boolean);
  if (!terms.length && !guides.length) return "";

  const termCards = terms.map((term, i) => `<article class="term-card structured-term">
    <header><span class="term-icon">🔠</span><span class="term-index">${String(i + 1).padStart(2, "0")}</span><h3>${term.names.map(esc).join(" · ")}</h3></header>
    <p>${highlightExplanationTerms(term.definition)}</p>
    <div class="term-action">Caută termenul în explicație și apoi arată-l în scena demo-ului.</div>
  </article>`);
  const guideCards = guides.map((guide, i) => `<article class="term-card guide-card">
    <header><span class="term-icon">${esc(guideIcon(guide, i))}</span><span class="term-index">${String(terms.length + i + 1).padStart(2, "0")}</span><h3>${esc(guideHeading(guide, i))}</h3></header>
    <p>${highlightExplanationTerms(guide)}</p>
    <div class="term-action">Această idee este explicată complet: nu trebuie să deschizi nimic ca să o citești.</div>
  </article>`);

  return `<div class="explanation-section">
    <div class="explanation-kicker">🧩 2 · Termenii din demo</div>
    <h2>Cuvintele noi stau cu fața la tine</h2>
    <p class="explanation-lead">Toate definițiile și ghidurile sunt vizibile în aceeași pagină. Fiecare idee are un semn grafic, un titlu scurt și legătura cu scena lecției.</p>
    <div class="term-cards">
      ${termCards.length ? `<div class="term-group-title">🔠 Termeni tehnici</div><div class="term-grid">${termCards.join("")}</div>` : ""}
      ${guideCards.length ? `<div class="term-group-title">🧭 Ghidul demo-ului, pas cu pas</div><div class="term-grid">${guideCards.join("")}</div>` : ""}
    </div>
  </div>`;
}
function renderDemoPreview(l) {
  const demo = l.demo || {};
  let body = "";
  if (demo.type === "flow") {
    const steps = demo.steps || [];
    body = `<div class="preview-flow">${steps.map((step, i) => `<button class="preview-step" data-preview-step="${i}"><span>${i + 1}</span>${esc(step.label)}</button>`).join("")}</div>
      <div class="preview-info" id="preview-info">Alege un pas ca să vezi ce se întâmplă în demo.</div>`;
  } else if (demo.type === "binary") {
    body = `<div class="preview-bits">${[8, 4, 2, 1].map(weight => `<button class="preview-bit" data-preview-bit="${weight}"><b>0</b><small>${weight}</small></button>`).join("")}</div>
      <div class="preview-info">Valoare: <strong id="preview-binary-value">0</strong> · atinge un bit ca să îl aprinzi.</div>`;
  } else if (demo.type === "classify") {
    const zones = demo.zones || [];
    const items = demo.items || [];
    body = `<div class="preview-zones">${zones.map((zone, i) => `<div class="preview-zone"><strong>${esc(zone)}</strong><span>${items.filter(item => item.zone === i).map(item => esc(item.label)).join(" · ") || "Așteaptă alegerea ta"}</span></div>`).join("")}</div>
      <div class="preview-info">Mai întâi ghicește categoria, apoi verifică în demo.</div>`;
  } else if (demo.type === "quiz") {
    const q = (demo.questions || [])[0];
    body = q ? `<div class="preview-question">${esc(q.q)}</div><div class="preview-options">${q.opts.map((option, i) => `<button data-preview-answer="${i}">${esc(option)}</button>`).join("")}</div><div class="preview-info" id="preview-quiz-info">Răspunde fără să sari la demo — explică de ce ai ales.</div>` : `<div class="preview-info">Demo-ul conține întrebări de verificat pas cu pas.</div>`;
  }
  if (!body) return "";
  return `<div class="explanation-section">
    <div class="explanation-kicker">🔭 3 · Predicții pentru demo</div>
    <h2>Fă o predicție înainte să atingi butoanele</h2>
    <div class="demo-preview">${body}</div>
  </div>`;
}
function bindDemoPreview(host) {
  const steps = host.querySelectorAll("[data-preview-step]");
  steps.forEach(step => step.addEventListener("click", () => {
    const demo = window.__currentLesson?.demo || {};
    const info = host.querySelector("#preview-info");
    const selected = +step.dataset.previewStep;
    steps.forEach(item => item.classList.toggle("active", item === step));
    if (info) info.textContent = (demo.steps?.[selected]?.info) || "Ai ales un pas al demo-ului.";
  }));
  const bits = host.querySelectorAll("[data-preview-bit]");
  bits.forEach(bit => bit.addEventListener("click", () => {
    const next = bit.querySelector("b").textContent === "0" ? "1" : "0";
    bit.querySelector("b").textContent = next;
    bit.classList.toggle("on", next === "1");
    const value = [...bits].reduce((sum, item) => sum + (item.querySelector("b").textContent === "1" ? +item.dataset.previewBit : 0), 0);
    const output = host.querySelector("#preview-binary-value");
    if (output) output.textContent = value;
  }));
  const answers = host.querySelectorAll("[data-preview-answer]");
  answers.forEach(answer => answer.addEventListener("click", () => {
    const demo = window.__currentLesson?.demo || {};
    const q = (demo.questions || [])[0];
    const info = host.querySelector("#preview-quiz-info");
    const chosen = +answer.dataset.previewAnswer;
    answers.forEach(item => {
      item.disabled = true;
      item.classList.toggle("correct", +item.dataset.previewAnswer === q.correct);
      item.classList.toggle("wrong", +item.dataset.previewAnswer === chosen && chosen !== q.correct);
    });
    if (info) info.textContent = `${chosen === q.correct ? "✅ Corect!" : "🤔 Mai gândește-te."} ${q.why}`;
  }));
}
function renderSpecialBlocks(l) {
  const extras = (typeof EXPLANATION_CONTENT !== "undefined" ? EXPLANATION_CONTENT : {})[l.id] || {};
  const blocks = extras.blocks || [];
  if (!blocks.length) return "";
  const html = blocks.map(block => {
    if (block.type === "callout") return `<div class="special-block callout-${esc(block.tone || "info")}"><h3>${esc(block.title)}</h3><p>${highlightExplanationTerms(block.body)}</p></div>`;
    if (block.type === "formula") return `<div class="special-block formula-block"><h3>${esc(block.title)}</h3><div class="formula-value">${esc(block.formula)}</div><p>${highlightExplanationTerms(block.body)}</p></div>`;
    if (block.type === "steps") return `<div class="special-block"><h3>${esc(block.title)}</h3><ol class="numbered-steps">${block.steps.map((step, i) => `<li><span>${i + 1}</span><p>${highlightExplanationTerms(step)}</p></li>`).join("")}</ol></div>`;
    if (block.type === "compare") return `<div class="special-block"><h3>${esc(block.title)}</h3><div class="comparison-grid">${block.items.map(item => `<div class="comparison-card"><strong>${esc(item.title)}</strong><p>${highlightExplanationTerms(item.body)}</p></div>`).join("")}</div></div>`;
    if (block.type === "table") return `<div class="special-block"><h3>${esc(block.title)}</h3><div class="table-wrap"><table class="data-table"><thead><tr>${block.headers.map(header => `<th>${esc(header)}</th>`).join("")}</tr></thead><tbody>${block.rows.map(row => `<tr>${row.map(cell => `<td>${highlightExplanationTerms(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>${block.note ? `<p class="table-note">${highlightExplanationTerms(block.note)}</p>` : ""}</div>`;
    if (block.type === "truthTable") return `<div class="special-block truth-block"><div class="truth-heading"><h3>${esc(block.title)}</h3><span class="gate-badge">${esc(block.gate)}</span></div><p>${highlightExplanationTerms(block.rule)}</p><div class="table-wrap"><table class="truth-table"><thead><tr>${block.headers.map(header => `<th>${esc(header)}</th>`).join("")}</tr></thead><tbody>${block.rows.map(row => `<tr>${row.map(cell => `<td class="${cell === 1 ? "bit-true" : "bit-false"}">${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div><p class="table-note">${highlightExplanationTerms(block.note || "Fiecare rând este o combinație posibilă; nu lipsește niciun caz.")}</p></div>`;
    if (block.type === "logicLab") return `<div class="special-block logic-lab"><h3>${esc(block.title)}</h3><p>${highlightExplanationTerms(block.body)}</p><div class="logic-controls"><button type="button" data-logic-input="A">A = 1</button><button type="button" data-logic-input="B">B = 1</button><select data-logic-gate aria-label="Alege poarta"><option>AND</option><option>OR</option><option>NOT</option></select></div><div class="logic-result"><span>Becul de ieșire</span><strong data-logic-output>0</strong></div><p class="logic-hint">Schimbă intrările și poarta. Rezultatul trebuie să coincidă cu tabela de adevăr.</p></div>`;
    return "";
  }).join("");
  return `<div class="explanation-section explanation-special"><div class="explanation-kicker">🧪 4 · Laborator de idei</div>${html}</div>`;
}
function renderExplanationChecks(l) {
  const extras = (typeof EXPLANATION_CONTENT !== "undefined" ? EXPLANATION_CONTENT : {})[l.id] || {};
  const checks = extras.checks || [];
  if (checks.length) {
    return `<div class="explanation-section"><div class="explanation-kicker">✅ 5 · Verifică-te</div><h2>Ești pregătit pentru demo?</h2><div class="explanation-quiz" data-explanation-quiz>${checks.map((check, i) => `<div class="check-question" data-check="${i}"><p>${esc(check.q)}</p><div>${check.options.map((option, j) => `<button data-check-answer="${j}">${esc(option)}</button>`).join("")}</div><div class="check-feedback"></div></div>`).join("")}</div></div>`;
  }
  return `<div class="explanation-section"><div class="explanation-kicker">✅ 5 · Verifică-te</div><h2>Explică înainte să bifezi</h2><p class="explanation-lead">Bifează doar ideile pe care le poți spune cu voce tare, fără să citești din ecran.</p><div class="understand-list">${l.objectives.map((objective, i) => `<label class="understand-item"><input type="checkbox"><span class="custom-check"></span><span><b>${i + 1}.</b> ${highlightExplanationTerms(objective)}</span></label>`).join("")}</div></div>`;
}
function bindExplanationChecks(host) {
  const quiz = host.querySelector("[data-explanation-quiz]");
  if (!quiz) return;
  quiz.querySelectorAll(".check-question").forEach(question => {
    const extras = (typeof EXPLANATION_CONTENT !== "undefined" ? EXPLANATION_CONTENT : {})[window.__currentLesson?.id] || {};
    const check = extras.checks?.[+question.dataset.check];
    const feedback = question.querySelector(".check-feedback");
    question.querySelectorAll("[data-check-answer]").forEach(answer => answer.addEventListener("click", () => {
      const chosen = +answer.dataset.checkAnswer;
      question.querySelectorAll("[data-check-answer]").forEach(item => {
        item.disabled = true;
        item.classList.toggle("correct", +item.dataset.checkAnswer === check.correct);
        item.classList.toggle("wrong", +item.dataset.checkAnswer === chosen && chosen !== check.correct);
      });
      feedback.textContent = `${chosen === check.correct ? "✅ Exact!" : "🤔 Nu încă."} ${check.why}`;
      feedback.className = `check-feedback ${chosen === check.correct ? "is-correct" : "is-wrong"}`;
    }));
  });
}
function renderLogicLab(host) {
  const lab = host.querySelector(".logic-lab");
  if (!lab) return;
  const buttons = [...lab.querySelectorAll("[data-logic-input]")];
  const gate = lab.querySelector("[data-logic-gate]");
  const output = lab.querySelector("[data-logic-output]");
  const state = { A: 1, B: 0 };
  function update() {
    const value = gate.value === "AND" ? Number(state.A && state.B) : gate.value === "OR" ? Number(state.A || state.B) : Number(!state.A);
    output.textContent = value;
    output.parentElement.classList.toggle("is-on", value === 1);
    buttons.forEach(button => {
      const key = button.dataset.logicInput;
      const active = state[key] === 1;
      button.classList.toggle("is-on", active);
      button.textContent = `${key} = ${state[key]}`;
      button.disabled = gate.value === "NOT" && key === "B";
    });
  }
  buttons.forEach(button => button.addEventListener("click", () => {
      const key = button.dataset.logicInput;
      if (gate.value !== "NOT" || key !== "B") state[key] = state[key] === 1 ? 0 : 1;
      update();
    }));
  gate.addEventListener("change", update);
  update();
}
function renderExplanation(l, host) {
  window.__currentLesson = l;
  host.innerHTML = `<div class="explanation-hero"><div class="explanation-hero-icon">${esc(l.icon)}</div><div><div class="explanation-kicker">📖 Explicație interactivă</div><h2>${esc(l.title)}</h2><p>Parcurge pe rând: poveste → termeni → predicție → laborator → verificare.</p></div></div>
    ${renderExplanationStory(l)}
    ${renderGuideGlossary(l)}
    ${renderDemoPreview(l)}
    ${renderSpecialBlocks(l)}
    ${renderExplanationChecks(l)}`;
  bindExplanationStory(host, l);
  bindDemoPreview(host);
  bindExplanationChecks(host);
  renderLogicLab(host);
}

function renderLesson() {
  const ln = parseInt(param("level"), 10), num = parseInt(param("lesson"), 10);
  const l = LESSONS.find(x => x.level === ln && x.num === num);
  if (!l) { location.href = "index.html"; return; }
  const lvl = LEVELS.find(x => x.n === ln);
  document.title = `${l.id} ${l.title} | Atelierul Tehnologiei`;

  document.getElementById("lesson-hero").innerHTML = `
    <div class="lesson-hero" style="--lc:${lvl.color}">
      <div class="crumb"><a href="index.html">🏠 Acasă</a> / <a href="level.html?n=${ln}">Nivel ${ln}</a> / Lecția ${l.num}</div>
      <h1>${l.icon} ${l.id} — ${esc(l.title)}</h1>
      <p>⏱️ ${esc(l.duration)} ${l.isProject ? "· 🛠️ <strong>LECȚIE-PROIECT</strong>" : ""}</p>
      <span class="big-icon">${l.icon}</span>
    </div>`;

  document.getElementById("tabs").innerHTML = SECTIONS.map(([k, label], i) =>
    `<button class="tab-btn ${i === 0 ? "active" : ""}" data-tab="${k}">${label}</button>`).join("");

  document.getElementById("panels").innerHTML = `
    <section class="tab-panel active" id="tab-obiective"><div class="panel-card">
      <h2>🎯 Ce vei ști la final</h2>
      <ul class="checklist">${l.objectives.map(o => `<li>${esc(o)}</li>`).join("")}</ul>
      <div class="tip-box">💡 Citește obiectivele ACUM și încă o dată la FINAL — poți bifa fiecare?</div>
    </div></section>
    <section class="tab-panel" id="tab-explicatie"><div class="panel-card">
      <div id="explanation-host"></div>
    </div></section>
    <section class="tab-panel" id="tab-demo"><div class="panel-card">
      <h2>🎮 ${esc(l.demo.title)}</h2>
      ${l.demo.intro ? `<p>${esc(l.demo.intro)}</p>` : ""}
      <aside class="demo-guide" aria-label="Pregătire pentru demonstrație">
        <h3>🧭 Înainte de demo</h3>
        ${DEMO_GUIDES[l.id].map(p => `<p>${esc(p)}</p>`).join("")}
      </aside>
      <div id="demo-host"></div>
    </div></section>
    <section class="tab-panel" id="tab-experiment"><div class="panel-card">
      <h2>🧪 ${esc(l.experiment.title)}</h2>
      <h3>Materiale</h3><ul>${l.experiment.materials.map(m => `<li>${esc(m)}</li>`).join("")}</ul>
      <h3>Pași</h3><ol>${l.experiment.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
      <div class="tip-box">🔬 <strong>Rezultat așteptat:</strong> ${esc(l.experiment.expected)}</div>
    </div></section>
    <section class="tab-panel" id="tab-proiect"><div class="panel-card">
      <h2>🛠️ ${esc(l.project.title)}</h2>
      <p><strong>Scop:</strong> ${esc(l.project.goal)}</p>
      <h3>Pași</h3><ol>${l.project.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
      <h3>Criterii de succes</h3>
      <ul class="checklist">${l.project.success.map(s => `<li>${esc(s)}</li>`).join("")}</ul>
    </div></section>
    <section class="tab-panel" id="tab-intrebari"><div class="panel-card">
      <h2>💭 Gândește-te!</h2>
      <p>Discută aceste întrebări cu voia tare — nu există răspuns unic corect.</p>
      ${l.questions.map(q => `<div class="question-box">❓ ${esc(q)}</div>`).join("")}
    </div></section>
    <section class="tab-panel" id="tab-exercitii"><div class="panel-card">
      <h2>✏️ Antrenament</h2>
      <ol>${l.exercises.map(e => `<li>${esc(e)}</li>`).join("")}</ol>
    </div></section>
    <section class="tab-panel" id="tab-parinte"><div class="panel-card">
      <h2>👨‍👩‍👧 Ghid pentru părinte</h2>
      <h3>👀 Ce să observați</h3><ul>${l.parent.watch.map(w => `<li>${esc(w)}</li>`).join("")}</ul>
      <h3>🤝 Cum ajutați</h3><ul>${l.parent.help.map(h => `<li>${esc(h)}</li>`).join("")}</ul>
      <h3>🚩 Semnale de atenție</h3>
      ${l.parent.redflags.map(r => `<div class="warn-box">${esc(r)}</div>`).join("")}
    </div></section>
    <section class="tab-panel" id="tab-criterii"><div class="panel-card">
      <h2>🏁 Poți trece mai departe când...</h2>
      <ul class="checklist">${l.pass.map(c => `<li>${esc(c)}</li>`).join("")}</ul>
      <div class="question-box">💬 Ceremonia de trecere: copilul demonstrează fiecare criteriu unui părinte, apoi apasă butonul „Am terminat!”.</div>
    </div></section>`;

  document.querySelectorAll(".tab-btn").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(x => x.classList.toggle("active", x === b));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("active", p.id === "tab-" + b.dataset.tab));
  }));

  renderDemo(l.demo, document.getElementById("demo-host"), l.id);
  renderExplanation(l, document.getElementById("explanation-host"));
  renderLessonActions(l);
}

function renderLessonActions(l) {
  const idx = LESSONS.findIndex(x => x.id === l.id);
  const prev = LESSONS[idx - 1], next = LESSONS[idx + 1];
  const done = isDone(l.id);
  document.getElementById("lesson-actions").innerHTML = `
    <button id="btn-done" class="btn ${done ? "btn-ghost" : "btn-success"}">${done ? "✅ Terminată! (anulează)" : "🏅 Am terminat lecția!"}</button>
    <a class="btn btn-ghost" href="level.html?n=${l.level}">📚 Toate lecțiile nivelului</a>`;
  document.getElementById("btn-done").addEventListener("click", e => {
    const now = toggleDone(l.id);
    e.target.className = `btn ${now ? "btn-ghost" : "btn-success"}`;
    e.target.textContent = now ? "✅ Terminată! (anulează)" : "🏅 Am terminat lecția!";
    if (now) confetti();
  });
  document.getElementById("lesson-nav").innerHTML = `
    ${prev ? `<a class="btn btn-ghost" href="lesson.html?level=${prev.level}&lesson=${prev.num}">← ${prev.id} ${esc(prev.title)}</a>` : "<span></span>"}
    ${next ? `<a class="btn btn-primary" href="lesson.html?level=${next.level}&lesson=${next.num}">${next.id} ${esc(next.title)} →</a>` : `<a class="btn btn-primary" href="index.html">🏆 Înapoi la meniu</a>`}`;
}

/* ============================================================
   DEMO-URI INTERACTIVE
   ============================================================ */
function renderDemo(demo, host, lessonId) {
  if (!demo || !host) return;
  const visual = DEMO_VISUALS[lessonId];
  host.innerHTML = visual ? renderVisualStory(visual) + '<div class="demo-engine"></div>' : '<div class="demo-engine"></div>';
  const engine = host.querySelector(".demo-engine");
  if (demo.type === "flow") renderFlow(demo, engine);
  else if (demo.type === "binary") renderBinary(demo, engine);
  else if (demo.type === "quiz") renderQuiz(demo, engine);
  else if (demo.type === "classify") renderClassify(demo, engine);
}

function renderVisualStory(visual) {
  return `<div class="individual-scene" aria-label="${esc(visual.title)}" role="img">
    <div class="scene-heading"><span class="scene-spark">✦</span><strong>${esc(visual.title)}</strong><span class="scene-hint">privește ce se schimbă</span></div>
    <div class="scene-stage">
      ${visual.objects.map((object, index) => `<div class="scene-object scene-object-${index}"><span class="scene-object-icon">${esc(object.match(/^(?:\p{Extended_Pictographic}|\p{Emoji_Presentation})/u)?.[0] || "•")}</span><span>${esc(object.replace(/^\S+\s*/, ""))}</span></div>${index < visual.objects.length - 1 ? '<span class="scene-flow-line" aria-hidden="true"><i></i></span>' : ""}`).join("")}
    </div>
    <p class="scene-story">${esc(visual.story)}</p>
  </div>`;
}

/* --- FLOW: diagramă animată pas cu pas --- */
function renderFlow(demo, host) {
  const firstIcon = label => (label.match(/^(?:\p{Extended_Pictographic}|\p{Emoji_Presentation})/u) || ["💡"])[0];
  host.innerHTML = `
    <div class="flow-demo">
      ${demo.steps.map((s, i) => `
        <div class="flow-node-wrap">
          ${i ? '<span class="flow-arrow" aria-hidden="true">→</span>' : ""}
          <button class="flow-step" data-i="${i}" aria-label="Pasul ${i + 1}: ${esc(s.label)}">
            <span class="flow-number">${i + 1}</span>
            <span class="flow-label">${esc(s.label)}</span>
          </button>
        </div>`).join("")}
    </div>
    <div class="flow-info" id="flow-info">👆 Apasă „Pornește” și urmărește cum trece informația de la intrare la rezultat.</div>
    <div style="margin-top:.8rem;display:flex;gap:.6rem;flex-wrap:wrap">
      <button class="btn btn-primary" id="flow-play">▶️ Pornește</button>
      <button class="btn btn-ghost" id="flow-reset">🔄 Reset</button>
    </div>`;
  const steps = [...host.querySelectorAll(".flow-step")];
  const info = host.querySelector("#flow-info");
  const storyObjects = host.parentElement.querySelectorAll(".scene-object");
  let timer = null;
  function showStep(i) {
    const step = demo.steps[i];
    steps.forEach((item, index) => item.classList.toggle("lit", index === i));
    storyObjects.forEach((item, index) => item.classList.toggle("scene-active", index === i % storyObjects.length));
    info.textContent = step.info;
  }
  function reset() {
    clearInterval(timer); timer = null;
    steps.forEach(s => s.classList.remove("lit"));
    storyObjects.forEach(item => item.classList.remove("scene-active"));
    info.textContent = "👆 Apasă „Pornește” și urmărește cum trece informația de la intrare la rezultat.";
    host.querySelector("#flow-play").disabled = false;
  }
  host.querySelector("#flow-play").addEventListener("click", e => {
    reset(); e.target.disabled = true;
    let i = 0;
    const tick = () => {
      if (i >= steps.length) { e.target.disabled = false; clearInterval(timer); return; }
      showStep(i);
      i++;
    };
    tick();
    timer = setInterval(tick, 2600);
  });
  steps.forEach((s, i) => s.addEventListener("click", () => {
    clearInterval(timer);
    showStep(i);
    host.querySelector("#flow-play").disabled = false;
  }));
  host.querySelector("#flow-reset").addEventListener("click", reset);
}

/* --- BINARY: convertor interactiv --- */
function renderBinary(demo, host) {
  const weights = [8, 4, 2, 1];
  let state = [0, 0, 0, 0], target = null;
  host.innerHTML = `
    <div class="binary-game">
      <div class="binary-bits">
        ${weights.map((w, i) => `
          <button class="bit" data-i="${i}">
            <div class="bit-val">0</div><div class="bit-weight">${w}</div>
          </button>`).join("")}
      </div>
      <div class="binary-result">Valoare: <span class="num" id="bin-val">0</span></div>
      <div id="bin-target" style="margin-top:.6rem;font-weight:700"></div>
      <div style="margin-top:.8rem;display:flex;gap:.6rem;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" id="bin-challenge">🎯 Provocare: ghicește numărul</button>
      </div>
      <div class="quiz-feedback" id="bin-fb"></div>
    </div>`;
  const val = host.querySelector("#bin-val"), fb = host.querySelector("#bin-fb");
  const sum = () => state.reduce((a, b, i) => a + b * weights[i], 0);
  host.querySelectorAll(".bit").forEach(b => b.addEventListener("click", () => {
    const i = +b.dataset.i;
    state[i] = 1 - state[i];
    b.classList.toggle("on", !!state[i]);
    b.querySelector(".bit-val").textContent = state[i];
    val.textContent = sum();
    if (target !== null) {
      if (sum() === target) { fb.textContent = `🎉 PERFECT! ${target} = ${state.join("")} în binar!`; fb.style.color = "var(--success)"; confetti(); target = null; host.querySelector("#bin-target").textContent = ""; }
      else fb.textContent = "";
    }
  }));
  host.querySelector("#bin-challenge").addEventListener("click", () => {
    target = 1 + Math.floor(Math.random() * 15);
    host.querySelector("#bin-target").textContent = `Construiește numărul: ${target}`;
    fb.textContent = "";
  });
}

/* --- QUIZ --- */
function renderQuiz(demo, host) {
  let cur = 0, score = 0;
  function show() {
    if (cur >= demo.questions.length) {
      const perfect = score === demo.questions.length;
      host.innerHTML = `<div style="text-align:center;padding:1rem">
        <div style="font-size:3rem">${perfect ? "🏆" : score >= demo.questions.length / 2 ? "🌟" : "💪"}</div>
        <h3>Scor: ${score}/${demo.questions.length}</h3>
        <p>${perfect ? "PERFECT! Ești un adevărat detectiv!" : "Bine! Reia întrebările greșite — așa învață creierul!"}</p>
        <button class="btn btn-primary" id="quiz-restart">🔄 Încearcă din nou</button></div>`;
      host.querySelector("#quiz-restart").addEventListener("click", () => { cur = 0; score = 0; show(); });
      if (perfect) confetti();
      return;
    }
    const q = demo.questions[cur];
    host.innerHTML = `
      <p style="color:var(--text-soft);font-weight:700">Întrebarea ${cur + 1}/${demo.questions.length}</p>
      <div class="quiz-q">${esc(q.q)}</div>
      <div class="quiz-opts">${q.opts.map((o, i) => `<button class="quiz-opt" data-i="${i}">${esc(o)}</button>`).join("")}</div>
      <div class="quiz-feedback" id="quiz-fb"></div>`;
    host.querySelectorAll(".quiz-opt").forEach(b => b.addEventListener("click", () => {
      const i = +b.dataset.i, ok = i === q.correct;
      if (ok) score++;
      host.querySelectorAll(".quiz-opt").forEach((x, j) => {
        x.disabled = true;
        if (j === q.correct) x.classList.add("correct");
        else if (j === i) x.classList.add("wrong");
      });
      const fb = host.querySelector("#quiz-fb");
      fb.innerHTML = `${ok ? "✅ Corect! " : "❌ Nu chiar. "}${esc(q.why)}`;
      fb.style.color = ok ? "var(--success)" : "var(--danger)";
      const next = document.createElement("button");
      next.className = "btn btn-primary";
      next.style.marginTop = ".7rem";
      next.textContent = cur + 1 < demo.questions.length ? "Întrebarea următoare →" : "Vezi scorul 🏁";
      next.addEventListener("click", () => { cur++; show(); });
      fb.appendChild(document.createElement("br"));
      fb.appendChild(next);
    }));
  }
  show();
}

/* --- CLASSIFY: sortare în zone --- */
function renderClassify(demo, host) {
  let remaining = demo.items.length;
  host.innerHTML = `
    <div class="classify-items">
      ${demo.items.map((it, i) => `<button class="classify-item" data-i="${i}">${esc(it.label)}</button>`).join("")}
    </div>
    <div class="classify-zones">
      ${demo.zones.map((z, zi) => `
        <div class="classify-zone" data-z="${zi}">
          <h5>${esc(z)}</h5><div class="zone-items"></div>
        </div>`).join("")}
    </div>
    <div class="quiz-feedback" id="cl-fb"></div>`;
  const fb = host.querySelector("#cl-fb");
  host.querySelectorAll(".classify-item").forEach(b => b.addEventListener("click", () => {
    if (b.classList.contains("placed")) return;
    const item = demo.items[+b.dataset.i];
    host.querySelectorAll(".classify-zone").forEach(z => z.style.borderColor = "var(--accent)");
    fb.textContent = `Unde merge „${item.label}”? Apasă pe cutia potrivită!`;
    host.querySelectorAll(".classify-zone").forEach(z => {
      z.onclick = () => {
        const zi = +z.dataset.z;
        if (zi === item.zone) {
          const tag = document.createElement("span");
          tag.className = "tag"; tag.textContent = item.label;
          z.querySelector(".zone-items").appendChild(tag);
          b.classList.add("placed");
          z.classList.add("flash-ok"); setTimeout(() => z.classList.remove("flash-ok"), 600);
          remaining--;
          fb.style.color = "var(--success)";
          fb.textContent = remaining ? `✅ Corect! Mai ai ${remaining} de sortat.` : "🏆 TOATE CORECTE! Bravo, sortorule!";
          if (!remaining) confetti();
        } else {
          z.classList.add("flash-bad"); setTimeout(() => z.classList.remove("flash-bad"), 600);
          fb.style.color = "var(--danger)";
          fb.textContent = "🤔 Hmm, mai gândește-te! Unde crezi că merge de fapt?";
        }
        host.querySelectorAll(".classify-zone").forEach(x => x.style.borderColor = "");
      };
    });
  }));
}

/* ============================================================
   PORNIRE
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  bubbles();
  document.querySelectorAll(".btn-theme").forEach(b => b.addEventListener("click", toggleTheme));
  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  else if (page === "level") renderLevel();
  else if (page === "lesson") renderLesson();
  revealOnScroll();
});
