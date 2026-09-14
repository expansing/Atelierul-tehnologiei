/* Verificările interactive din explicația lecției. */

function renderExplanationChecks(lesson) {
  const extras = (typeof EXPLANATION_CONTENT !== "undefined" ? EXPLANATION_CONTENT : {})[lesson.id] || {};
  const checks = extras.checks || [];
  if (checks.length) {
    return `<div class="explanation-section"><div class="explanation-kicker">✅ 5 · Verifică-te</div><h2>Ești pregătit pentru demo?</h2><div class="explanation-quiz" data-explanation-quiz>${checks.map((check, index) => `<div class="check-question" data-check="${index}"><p>${esc(check.q)}</p><div>${check.options.map((option, optionIndex) => `<button type="button" data-check-answer="${optionIndex}">${esc(option)}</button>`).join("")}</div><div class="check-feedback" aria-live="polite"></div></div>`).join("")}</div></div>`;
  }
  return `<div class="explanation-section"><div class="explanation-kicker">✅ 5 · Verifică-te</div><h2>Explică înainte să bifezi</h2><p class="explanation-lead">Bifează doar ideile pe care le poți spune cu voce tare, fără să citești din ecran.</p><div class="understand-list">${lesson.objectives.map((objective, index) => `<label class="understand-item"><input type="checkbox"><span class="custom-check"></span><span><b>${index + 1}.</b> ${highlightExplanationTerms(objective)}</span></label>`).join("")}</div></div>`;
}
function bindExplanationChecks(host) {
  const quiz = host.querySelector("[data-explanation-quiz]");
  if (!quiz) return;
  quiz.querySelectorAll(".check-question").forEach(question => {
    const lessonId = window.__currentLesson ? window.__currentLesson.id : null;
    const extras = (typeof EXPLANATION_CONTENT !== "undefined" ? EXPLANATION_CONTENT : {})[lessonId] || {};
    const check = extras.checks ? extras.checks[+question.dataset.check] : null;
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
