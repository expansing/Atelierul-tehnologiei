/* Randarea blocurilor structurate din explicații. */

function renderSpecialBlocks(lesson) {
  const extras = (typeof EXPLANATION_CONTENT !== "undefined" ? EXPLANATION_CONTENT : {})[lesson.id] || {};
  const blocks = extras.blocks || [];
  if (!blocks.length) return "";
  const html = blocks.map(block => {
    if (block.type === "callout") return `<div class="special-block callout-${esc(block.tone || "info")}"><h3>${esc(block.title)}</h3><p>${highlightExplanationTerms(block.body)}</p></div>`;
    if (block.type === "formula") return `<div class="special-block formula-block"><h3>${esc(block.title)}</h3><div class="formula-value">${esc(block.formula)}</div><p>${highlightExplanationTerms(block.body)}</p></div>`;
    if (block.type === "steps") return `<div class="special-block"><h3>${esc(block.title)}</h3><ol class="numbered-steps">${block.steps.map((step, index) => `<li><span>${index + 1}</span><p>${highlightExplanationTerms(step)}</p></li>`).join("")}</ol></div>`;
    if (block.type === "compare") return `<div class="special-block"><h3>${esc(block.title)}</h3><div class="comparison-grid">${block.items.map(item => `<div class="comparison-card"><strong>${esc(item.title)}</strong><p>${highlightExplanationTerms(item.body)}</p></div>`).join("")}</div></div>`;
    if (block.type === "table") return `<div class="special-block"><h3>${esc(block.title)}</h3><div class="table-wrap"><table class="data-table"><thead><tr>${block.headers.map(header => `<th>${esc(header)}</th>`).join("")}</tr></thead><tbody>${block.rows.map(row => `<tr>${row.map(cell => `<td>${highlightExplanationTerms(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>${block.note ? `<p class="table-note">${highlightExplanationTerms(block.note)}</p>` : ""}</div>`;
    if (block.type === "truthTable") return `<div class="special-block truth-block"><div class="truth-heading"><h3>${esc(block.title)}</h3><span class="gate-badge">${esc(block.gate)}</span></div><p>${highlightExplanationTerms(block.rule)}</p><div class="table-wrap"><table class="truth-table"><thead><tr>${block.headers.map(header => `<th>${esc(header)}</th>`).join("")}</tr></thead><tbody>${block.rows.map(row => `<tr>${row.map(cell => `<td class="${cell === 1 ? "bit-true" : "bit-false"}">${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div><p class="table-note">${highlightExplanationTerms(block.note || "Fiecare rând este o combinație posibilă; nu lipsește niciun caz.")}</p></div>`;
    if (block.type === "logicLab") return `<div class="special-block logic-lab"><h3>${esc(block.title)}</h3><p>${highlightExplanationTerms(block.body)}</p><div class="logic-controls"><button type="button" data-logic-input="A" aria-pressed="true">A = 1</button><button type="button" data-logic-input="B" aria-pressed="false">B = 0</button><label for="logic-gate">Poartă</label><select id="logic-gate" data-logic-gate aria-label="Alege poarta"><option>AND</option><option>OR</option><option>NOT</option></select></div><div class="logic-result"><span>Becul de ieșire</span><strong data-logic-output aria-live="polite">0</strong></div><p class="logic-hint">Schimbă intrările și poarta. Rezultatul trebuie să coincidă cu tabela de adevăr.</p></div>`;
    return "";
  }).join("");
  return `<div class="explanation-section explanation-special"><div class="explanation-kicker">🧪 4 · Laborator de idei</div>${html}</div>`;
}
