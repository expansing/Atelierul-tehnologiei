/* Tema, parametri URL, escaping și feedback UI comun. */

const THEME_KEY = "at_theme";

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.setAttribute("data-theme", "dark");
  updateThemeBtn();
}
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", current);
  localStorage.setItem(THEME_KEY, current);
  updateThemeBtn();
}
function updateThemeBtn() {
  const button = document.querySelector(".btn-theme");
  if (button) {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    button.textContent = dark ? "☀️" : "🌙";
    button.setAttribute("aria-label", dark ? "Comută la tema luminoasă" : "Comută la tema întunecată");
  }
}
function param(name) { return new URLSearchParams(location.search).get(name); }
function esc(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function revealOnScroll() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
}
function renderNotFound(host, title, message) {
  if (!host) return;
  host.innerHTML = `<div class="panel-card not-found" role="alert">
    <div class="explanation-hero-icon" aria-hidden="true">🧭</div>
    <h1>${esc(title)}</h1>
    <p>${esc(message)}</p>
    <a class="btn btn-primary" href="index.html">🏠 Înapoi la niveluri</a>
  </div>`;
}
