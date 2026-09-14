/* Engine pentru demo-ul de numere binare. */

function renderBinary(demo, host) {
  const weights = [8, 4, 2, 1];
  let state = [0, 0, 0, 0];
  let target = null;
  host.innerHTML = `
    <div class="binary-game">
      <div class="binary-bits">
        ${weights.map((weight, index) => `
          <button class="bit" type="button" data-i="${index}" aria-pressed="false" aria-label="Bit cu valoarea ${weight}, stins">
            <div class="bit-val">0</div><div class="bit-weight">${weight}</div>
          </button>`).join("")}
      </div>
      <div class="binary-result" aria-live="polite">Valoare: <span class="num" id="bin-val">0</span></div>
      <div id="bin-target" style="margin-top:.6rem;font-weight:700"></div>
      <div style="margin-top:.8rem;display:flex;gap:.6rem;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" id="bin-challenge">🎯 Provocare: ghicește numărul</button>
      </div>
      <div class="quiz-feedback" id="bin-fb" aria-live="polite"></div>
    </div>`;
  const value = host.querySelector("#bin-val");
  const feedback = host.querySelector("#bin-fb");
  const sum = () => state.reduce((total, bit, index) => total + bit * weights[index], 0);
  host.querySelectorAll(".bit").forEach(button => button.addEventListener("click", () => {
    const index = +button.dataset.i;
    state[index] = 1 - state[index];
    button.classList.toggle("on", !!state[index]);
    button.querySelector(".bit-val").textContent = state[index];
    button.setAttribute("aria-pressed", String(Boolean(state[index])));
    button.setAttribute("aria-label", `Bit cu valoarea ${weights[index]}, ${state[index] ? "aprins" : "stins"}`);
    value.textContent = sum();
    if (target !== null) {
      if (sum() === target) {
        feedback.textContent = `🎉 PERFECT! ${target} = ${state.join("")} în binar!`;
        feedback.style.color = "var(--success)";
        confetti();
        target = null;
        host.querySelector("#bin-target").textContent = "";
      } else feedback.textContent = "";
    }
  }));
  host.querySelector("#bin-challenge").addEventListener("click", () => {
    target = 1 + Math.floor(Math.random() * 15);
    host.querySelector("#bin-target").textContent = `Construiește numărul: ${target}`;
    feedback.textContent = "";
  });
}
