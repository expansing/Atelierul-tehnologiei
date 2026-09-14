/* Acțiunile și navigarea dintre lecții. */

function renderLessonActions(lesson) {
  const index = LESSONS.findIndex(item => item.id === lesson.id);
  const previous = LESSONS[index - 1];
  const next = LESSONS[index + 1];
  const done = isDone(lesson.id);
  document.getElementById("lesson-actions").innerHTML = `
    <button id="btn-done" class="btn ${done ? "btn-ghost" : "btn-success"}">${done ? "✅ Terminată! (anulează)" : "🏅 Am terminat lecția!"}</button>
    <a class="btn btn-ghost" href="level.html?n=${lesson.level}">📚 Toate lecțiile nivelului</a>`;
  document.getElementById("btn-done").addEventListener("click", event => {
    const now = toggleDone(lesson.id);
    event.target.className = `btn ${now ? "btn-ghost" : "btn-success"}`;
    event.target.textContent = now ? "✅ Terminată! (anulează)" : "🏅 Am terminat lecția!";
    if (now) confetti();
  });
  document.getElementById("lesson-nav").innerHTML = `
    ${previous ? `<a class="btn btn-ghost" href="lesson.html?level=${previous.level}&lesson=${previous.num}">← ${previous.id} ${esc(previous.title)}</a>` : "<span></span>"}
    ${next ? `<a class="btn btn-primary" href="lesson.html?level=${next.level}&lesson=${next.num}">${next.id} ${esc(next.title)} →</a>` : `<a class="btn btn-primary" href="index.html">🏆 Înapoi la meniu</a>`}`;
}
