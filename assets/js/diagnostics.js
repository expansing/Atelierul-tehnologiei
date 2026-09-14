/* Diagnostic local opt-in pentru dezvoltare. */

function renderDiagnostics() {
  if (param("debug") !== "1") return;
  const host = document.createElement("aside");
  const progress = totalProgress();
  const theme = document.documentElement.getAttribute("data-theme") || "light";
  host.className = "diagnostics-panel";
  host.setAttribute("aria-label", "Diagnostic local");
  host.innerHTML = `<strong>Diagnostic local</strong>
    <span>${LEVELS.length} niveluri · ${LESSONS.length} lecții</span>
    <span>Progres: ${progress.done}/${progress.total}</span>
    <span>Temă: ${esc(theme)}</span>
    <span>Runtime: browser</span>`;
  document.body.appendChild(host);
}
