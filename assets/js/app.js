/* ============================================================
   ATELIERUL TEHNOLOGIEI - Motorul aplicației
   Randare pagini, progres (localStorage), demo-uri interactive.
   ============================================================ */

/* ---------- Animații locale ---------- */
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
   PAGINA LECȚIE
   ============================================================ */

function escapeRegExp(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function highlightExplanationTerms(text) {
  const lessonId = window.__currentLesson ? window.__currentLesson.id : null;
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
function renderLessonContent() {
  const ln = parseInt(param("level"), 10), num = parseInt(param("lesson"), 10);
  const l = LESSONS.find(x => x.level === ln && x.num === num);
  if (!l) {
    renderNotFound(document.getElementById("lesson-hero"), "Lecția nu a fost găsită", "Verifică nivelul și numărul lecției sau revino la pagina principală.");
    document.getElementById("tabs").innerHTML = "";
    document.getElementById("panels").innerHTML = "";
    document.getElementById("lesson-actions").innerHTML = "";
    document.getElementById("lesson-nav").innerHTML = "";
    return;
  }
  const lvl = LEVELS.find(x => x.n === ln);
  document.title = `${l.id} ${l.title} | Atelierul Tehnologiei`;

  document.getElementById("lesson-hero").innerHTML = `
    <div class="lesson-hero" style="--lc:${lvl.color}">
      <div class="crumb"><a href="index.html">🏠 Acasă</a> / <a href="level.html?n=${ln}">Nivel ${ln}</a> / Lecția ${l.num}</div>
      <h1>${l.icon} ${l.id} — ${esc(l.title)}</h1>
      <p>⏱️ ${esc(l.duration)} ${l.isProject ? "· 🛠️ <strong>LECȚIE-PROIECT</strong>" : ""}</p>
      <div class="level-tags level-tags-light lesson-meta-tags"><span>👧 Vârstă orientativă: ${esc(lvl.age)}</span><span>🧭 ${esc(lvl.difficulty)}</span><span>👨‍👩‍👧 ${esc(lvl.supervision)}</span><span>⚠️ ${esc(lvl.risk)}</span></div>
      <p class="lesson-prerequisite"><strong>Înainte să începi:</strong> ${esc(lvl.prerequisite)}</p>
      <span class="big-icon">${l.icon}</span>
    </div>`;

  const requestedTab = param("tab");
  document.getElementById("tabs").innerHTML = SECTIONS.map(([k, label], i) =>
    `<button class="tab-btn ${i === 0 ? "active" : ""}" id="tab-button-${k}" role="tab" aria-controls="tab-${k}" aria-selected="${i === 0}" tabindex="${i === 0 ? "0" : "-1"}" data-tab="${k}">${label}</button>`).join("");

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
        ${(DEMO_GUIDES[l.id] || ["Pregătește-te să observi fiecare pas al demonstrației."]).map(p => `<p>${esc(p)}</p>`).join("")}
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
      <div class="pass-checklist" data-pass-list>${l.pass.map((c, i) => `<label class="understand-item pass-item"><input type="checkbox" data-pass-check="${i}"><span class="custom-check"></span><span><b>${i + 1}.</b> ${esc(c)}</span></label>`).join("")}</div>
      <p class="pass-progress" data-pass-progress aria-live="polite">0/${l.pass.length} criterii bifate</p>
      <div class="question-box">💬 Ceremonia de trecere: copilul demonstrează fiecare criteriu unui părinte, apoi apasă butonul „Am terminat!”.</div>
    </div></section>`;

  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", "tab-button-" + panel.id.slice(4));
    panel.tabIndex = 0;
  });
  setActiveTab(requestedTab, false);
  initLessonTabs();
  renderLessonActions(l);
  const passChecks = [...document.querySelectorAll("[data-pass-check]")];
  const passProgress = document.querySelector("[data-pass-progress]");
  const doneButton = document.getElementById("btn-done");
  const updateDoneButton = () => {
    const ready = passChecks.length === 0 || passChecks.every(item => item.checked);
    doneButton.disabled = !ready;
    doneButton.title = ready ? "Marchează lecția ca terminată" : "Bifează toate criteriile de trecere mai întâi";
  };
  const savedCriteria = getCriteria()[l.id] || [];
  passChecks.forEach(check => { check.checked = savedCriteria.includes(+check.dataset.passCheck); });
  passProgress.textContent = `${passChecks.filter(item => item.checked).length}/${passChecks.length} criterii bifate`;
  updateDoneButton();
  passChecks.forEach(check => check.addEventListener("change", () => {
    const done = passChecks.filter(item => item.checked).length;
    const criteria = getCriteria();
    criteria[l.id] = passChecks.filter(item => item.checked).map(item => +item.dataset.passCheck);
    saveCriteria(criteria);
    passProgress.textContent = `${done}/${passChecks.length} criterii bifate`;
    updateDoneButton();
  }));

  renderDemo(l.demo, document.getElementById("demo-host"), l.id);
  renderExplanation(l, document.getElementById("explanation-host"));
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
  renderDiagnostics();
});
