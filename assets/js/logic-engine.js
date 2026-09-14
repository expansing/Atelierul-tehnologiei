/* Engine pentru laboratorul de porți logice. */

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
      button.setAttribute("aria-pressed", String(active));
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
