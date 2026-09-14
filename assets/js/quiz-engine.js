/* Engine pentru demo-urile de tip quiz. */

function renderQuiz(demo, host) {
  let current = 0;
  let score = 0;
  function show() {
    if (current >= demo.questions.length) {
      const perfect = score === demo.questions.length;
      host.innerHTML = `<div style="text-align:center;padding:1rem">
        <div style="font-size:3rem">${perfect ? "🏆" : score >= demo.questions.length / 2 ? "🌟" : "💪"}</div>
        <h3>Scor: ${score}/${demo.questions.length}</h3>
        <p>${perfect ? "PERFECT! Ești un adevărat detectiv!" : "Bine! Reia întrebările greșite — așa învață creierul!"}</p>
        <button class="btn btn-primary" id="quiz-restart" type="button">🔄 Încearcă din nou</button></div>`;
      host.querySelector("#quiz-restart").addEventListener("click", () => { current = 0; score = 0; show(); });
      if (perfect) confetti();
      return;
    }
    const question = demo.questions[current];
    host.innerHTML = `
      <p style="color:var(--text-soft);font-weight:700">Întrebarea ${current + 1}/${demo.questions.length}</p>
      <div class="quiz-q">${esc(question.q)}</div>
      <div class="quiz-opts">${question.opts.map((option, index) => `<button class="quiz-opt" type="button" data-i="${index}">${esc(option)}</button>`).join("")}</div>
      <div class="quiz-feedback" id="quiz-fb" aria-live="polite"></div>`;
    host.querySelectorAll(".quiz-opt").forEach(button => button.addEventListener("click", () => {
      const index = +button.dataset.i;
      const correct = index === question.correct;
      if (correct) score++;
      host.querySelectorAll(".quiz-opt").forEach((option, optionIndex) => {
        option.disabled = true;
        if (optionIndex === question.correct) option.classList.add("correct");
        else if (optionIndex === index) option.classList.add("wrong");
      });
      const feedback = host.querySelector("#quiz-fb");
      feedback.innerHTML = `${correct ? "✅ Corect! " : "❌ Nu chiar. "}${esc(question.why)}`;
      feedback.style.color = correct ? "var(--success)" : "var(--danger)";
      const next = document.createElement("button");
      next.className = "btn btn-primary";
      next.style.marginTop = ".7rem";
      next.type = "button";
      next.textContent = current + 1 < demo.questions.length ? "Întrebarea următoare →" : "Vezi scorul 🏁";
      next.addEventListener("click", () => { current++; show(); });
      feedback.appendChild(document.createElement("br"));
      feedback.appendChild(next);
    }));
  }
  show();
}
