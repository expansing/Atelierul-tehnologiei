/* Engine pentru demo-urile de tip flow. */

function renderFlow(demo, host, visual) {
  host.innerHTML = `
    <div class="flow-demo">
      ${demo.steps.map((step, index) => `<div class="flow-node-wrap">${index ? '<span class="flow-arrow" aria-hidden="true">→</span>' : ""}<button class="flow-step" type="button" data-i="${index}" aria-pressed="false" aria-label="Pasul ${index + 1}: ${esc(step.label)}"><span class="flow-number">${index + 1}</span><span class="flow-label">${esc(step.label)}</span></button></div>`).join("")}
    </div>
    <div class="flow-info" id="flow-info" aria-live="polite">👆 Alege sau pornește pașii; scena de mai sus arată mecanismul lecției.</div>
    <div class="flow-controls"><button class="btn btn-primary" type="button" id="flow-play">▶️ Pornește</button><button class="btn btn-ghost" type="button" id="flow-reset">🔄 Reset</button></div>`;
  const steps = [...host.querySelectorAll(".flow-step")];
  const info = host.querySelector("#flow-info");
  let timer = null;
  function showStep(index) {
    const step = demo.steps[index];
    steps.forEach((item, itemIndex) => {
      item.classList.toggle("lit", itemIndex === index);
      item.setAttribute("aria-pressed", String(itemIndex === index));
    });
    updateDemoScene(visual, index);
    info.textContent = step.info;
  }
  function reset() {
    clearInterval(timer);
    timer = null;
    steps.forEach(step => {
      step.classList.remove("lit");
      step.setAttribute("aria-pressed", "false");
    });
    updateDemoScene(visual, 0);
    info.textContent = "👆 Alege sau pornește pașii; scena de mai sus arată mecanismul lecției.";
    host.querySelector("#flow-play").disabled = false;
  }
  host.querySelector("#flow-play").addEventListener("click", event => {
    reset();
    event.target.disabled = true;
    let index = 0;
    const tick = () => {
      if (index >= demo.steps.length) {
        event.target.disabled = false;
        clearInterval(timer);
        return;
      }
      showStep(index++);
    };
    tick();
    timer = setInterval(tick, 2600);
  });
  steps.forEach(step => step.addEventListener("click", () => {
    clearInterval(timer);
    showStep(+step.dataset.i);
    host.querySelector("#flow-play").disabled = false;
  }));
  host.querySelector("#flow-reset").addEventListener("click", reset);
}
