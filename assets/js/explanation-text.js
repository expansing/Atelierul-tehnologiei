/* Randarea textului și a glosarului explicației. */

function renderExplanationCopy(lesson) {
  const paragraphs = Array.isArray(lesson.explanation) ? lesson.explanation : [];
  const copy = paragraphs.length
    ? paragraphs.map(paragraph => `<p>${highlightExplanationTerms(paragraph)}</p>`).join("")
    : `<p class="explanation-lead">Explicația acestei lecții va fi adăugată aici.</p>`;
  return `<div class="explanation-section explanation-copy">
    <div class="explanation-kicker">📖 1 · Explicația completă</div>
    <h2>Citește și explică cu voce tare</h2>
    <p class="explanation-lead">Toate ideile sunt aici, în ordinea lor. Nu trebuie să alegi un pas: parcurge textul, apoi treci la demo.</p>
    <div class="explanation-paragraphs">${copy}</div>
  </div>`;
}
function guideHeading(text, index) {
  const clean = String(text).trim();
  const match = clean.match(/^([^:.!?]{2,64})(?= înseamnă|:|;|\.)/);
  if (match) return match[1].trim();
  const sentenceMatch = clean.match(/^([^.!?]{2,72})[.!?]/);
  const sentence = sentenceMatch ? sentenceMatch[1].trim() : "";
  if (sentence) return sentence.length > 48 ? sentence.slice(0, 45).trimEnd() + "…" : sentence;
  return `Pasul ${index + 1}`;
}
function guideIcon(text, index) {
  const iconMatch = String(text).match(/^(?:\p{Extended_Pictographic}|\p{Emoji_Presentation})/u);
  return (iconMatch ? iconMatch[0] : null) || ["🔎", "🧩", "🗺️", "🧠"][index % 4];
}
function renderGuideGlossary(lesson) {
  const extras = (typeof EXPLANATION_CONTENT !== "undefined" ? EXPLANATION_CONTENT : {})[lesson.id] || {};
  const terms = extras.terms || [];
  const guides = (DEMO_GUIDES[lesson.id] || []).filter(Boolean);
  if (!terms.length && !guides.length) return "";

  const termCards = terms.map((term, index) => `<article class="term-card structured-term">
    <header><span class="term-icon">🔠</span><span class="term-index">${String(index + 1).padStart(2, "0")}</span><h3>${term.names.map(esc).join(" · ")}</h3></header>
    <p>${highlightExplanationTerms(term.definition)}</p>
    <div class="term-action">Caută termenul în explicație și apoi arată-l în scena demo-ului.</div>
  </article>`);
  const guideCards = guides.map((guide, index) => `<article class="term-card guide-card">
    <header><span class="term-icon">${esc(guideIcon(guide, index))}</span><span class="term-index">${String(terms.length + index + 1).padStart(2, "0")}</span><h3>${esc(guideHeading(guide, index))}</h3></header>
    <p>${highlightExplanationTerms(guide)}</p>
    <div class="term-action">Această idee este explicată complet: nu trebuie să deschizi nimic ca să o citești.</div>
  </article>`);

  return `<div class="explanation-section">
    <div class="explanation-kicker">🧩 2 · Termenii din demo</div>
    <h2>Cuvintele noi stau cu fața la tine</h2>
    <p class="explanation-lead">Toate definițiile și ghidurile sunt vizibile în aceeași pagină. Fiecare idee are un semn grafic, un titlu scurt și legătura cu scena lecției.</p>
    <div class="term-cards">
      ${termCards.length ? `<div class="term-group-title">🔠 Termeni tehnici</div><div class="term-grid">${termCards.join("")}</div>` : ""}
      ${guideCards.length ? `<div class="term-group-title">🧭 Ghidul demo-ului, pas cu pas</div><div class="term-grid">${guideCards.join("")}</div>` : ""}
    </div>
  </div>`;
}
