/* Taburile accesibile ale lecției. */

const SECTIONS = [
  ["obiective", "🎯 Obiective"], ["explicatie", "📖 Explicația"], ["demo", "🎮 Demo"],
  ["experiment", "🧪 Experiment"], ["proiect", "🛠️ Proiect"], ["intrebari", "💭 Întrebări"],
  ["exercitii", "✏️ Exerciții"], ["parinte", "👨‍👩‍👧 Ghid părinte"], ["criterii", "🏁 Criterii de trecere"]
];
function setActiveTab(name, updateUrl) {
  const tabs = [...document.querySelectorAll("[role=tab]")];
  const panels = [...document.querySelectorAll(".tab-panel")];
  const active = SECTIONS.some(([key]) => key === name) ? name : "obiective";
  tabs.forEach(tab => {
    const selected = tab.dataset.tab === active;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  panels.forEach(panel => {
    const selected = panel.id === "tab-" + active;
    panel.classList.toggle("active", selected);
    panel.hidden = !selected;
  });
  if (updateUrl) {
    const url = new URL(location.href);
    url.searchParams.set("tab", active);
    history.replaceState(null, "", url);
  }
}
function initLessonTabs() {
  const tabs = [...document.querySelectorAll("[role=tab]")];
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => setActiveTab(tab.dataset.tab, true));
    tab.addEventListener("keydown", event => {
      if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === "Home" ? 0
        : event.key === "End" ? tabs.length - 1
          : ["ArrowRight", "ArrowDown"].includes(event.key) ? (index + 1) % tabs.length
            : (index - 1 + tabs.length) % tabs.length;
      tabs[nextIndex].focus();
      setActiveTab(tabs[nextIndex].dataset.tab, true);
    });
  });
}
