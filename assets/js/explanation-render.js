/* Orchestrarea explicației interactive a unei lecții. */

function renderExplanation(lesson, host) {
  window.__currentLesson = lesson;
  host.innerHTML = `<div class="explanation-hero"><div class="explanation-hero-icon">${esc(lesson.icon)}</div><div><div class="explanation-kicker">📖 Explicație interactivă</div><h2>${esc(lesson.title)}</h2><p>Parcurge pe rând: explicație → termeni → laborator → verificare.</p></div></div>
    ${renderExplanationCopy(lesson)}
    ${renderGuideGlossary(lesson)}
    ${renderSpecialBlocks(lesson)}
    ${renderExplanationChecks(lesson)}`;
  bindExplanationChecks(host);
  renderLogicLab(host);
}
