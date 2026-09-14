/* Randarea paginii principale și a progresului global. */

function renderHome() {
  const grid = document.getElementById("levels-grid");
  const total = totalProgress();
  document.getElementById("global-progress").innerHTML = `
    <div class="progress-summary"><div class="progress-track"><div class="progress-fill" style="width:0%"></div></div>
    <strong>${total.done}/${total.total} lecții</strong></div>
    <div class="progress-actions" aria-label="Gestionare progres">
      <button class="btn btn-ghost" id="export-progress" type="button">⬇️ Exportă</button>
      <button class="btn btn-ghost" id="import-progress" type="button">⬆️ Importă</button>
      <button class="btn btn-ghost" id="reset-progress" type="button">🗑️ Resetează</button>
      <input id="progress-file" type="file" accept="application/json" hidden>
    </div>
    <div class="next-lesson" id="next-lesson"></div>`;
  bindProgressTools();
  const next = nextIncompleteLesson();
  document.getElementById("next-lesson").innerHTML = next
    ? `<span>Următorul pas:</span> <a href="lesson.html?level=${next.level}&lesson=${next.num}">${esc(next.id)} — ${esc(next.title)} →</a>`
    : `<strong>🏆 Ai parcurs toate cele ${total.total} lecții!</strong>`;
  requestAnimationFrame(() => setTimeout(() => {
    const fill = document.querySelector("#global-progress .progress-fill");
    if (fill) fill.style.width = total.pct + "%";
  }, 60));

  grid.innerHTML = LEVELS.map(level => {
    const progress = levelProgress(level.n);
    return `<a class="level-card reveal" style="--lc:${level.color}" href="level.html?n=${level.n}">
      <span class="lvl-num">${level.n}</span>
      <h3>${level.icon} ${esc(level.title)}</h3>
      <p class="lvl-desc">${esc(level.desc)}</p>
      <div class="level-tags"><span>👧 ${esc(level.age)}</span><span>🧭 ${esc(level.difficulty)}</span></div>
      <div class="lvl-meta">
        <div class="progress-track"><div class="progress-fill" style="width:${progress.pct}%"></div></div>
        <span>${progress.done}/${progress.total}</span>
      </div>
      <div class="lvl-meta"><em>${esc(level.tagline)}</em><span>${progress.pct === 100 ? "🏆" : "→"}</span></div>
    </a>`;
  }).join("");
}
