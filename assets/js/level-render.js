/* Randarea paginii unui nivel. */

function renderLevel() {
  const number = parseInt(param("n"), 10);
  const level = LEVELS.find(item => item.n === number);
  if (!level) {
    renderNotFound(document.getElementById("level-hero"), "Nivelul nu a fost găsit", "Verifică adresa sau alege un nivel din pagina principală.");
    document.getElementById("lessons-list").innerHTML = "";
    return;
  }
  document.title = `Nivel ${number} - ${level.title} | Atelierul Tehnologiei`;
  const lessons = LESSONS.filter(lesson => lesson.level === number);
  const progress = levelProgress(number);

  document.getElementById("level-hero").innerHTML = `
    <div class="lesson-hero" style="--lc:${level.color}">
      <div class="crumb"><a href="index.html">🏠 Acasă</a> / Nivel ${number}</div>
      <h1>${level.icon} Nivel ${number}: ${esc(level.title)}</h1>
      <p>${esc(level.desc)}</p>
      <div class="level-tags level-tags-light"><span>👧 Vârstă orientativă: ${esc(level.age)}</span><span>🧭 ${esc(level.difficulty)}</span><span>👨‍👩‍👧 ${esc(level.supervision)}</span><span>⚠️ ${esc(level.risk)}</span></div>
      <p class="level-prerequisite"><strong>Înainte să începi:</strong> ${esc(level.prerequisite)}</p>
      <div class="lvl-meta" style="margin-top:1rem;color:#fff">
        <div class="progress-track" style="background:rgba(255,255,255,.25)">
          <div class="progress-fill" style="width:${progress.pct}%"></div>
        </div>
        <strong>${progress.done}/${progress.total} lecții ${progress.pct === 100 ? "🏆 NIVEL COMPLET!" : ""}</strong>
      </div>
      <span class="big-icon">${level.icon}</span>
    </div>`;

  document.getElementById("lessons-list").innerHTML = lessons.map(lesson => `
    <a class="lesson-card reveal ${isDone(lesson.id) ? "done" : ""}" style="--lc:${level.color}" href="lesson.html?level=${lesson.level}&lesson=${lesson.num}">
      <span class="lesson-icon">${isDone(lesson.id) ? "✅" : lesson.icon}</span>
      <div>
        <h4>${lesson.id} — ${esc(lesson.title)} ${lesson.isProject ? '<span class="badge-project">Proiect</span>' : ""}</h4>
        <div class="lesson-sub">⏱️ ${esc(lesson.duration)} · 🎯 ${lesson.objectives.length} obiective</div>
      </div>
      <span class="lesson-check">🏅</span>
    </a>`).join("");
}
