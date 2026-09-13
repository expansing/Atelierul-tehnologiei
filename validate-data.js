const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, 'assets', 'js');
for (const f of ['data-levels.js', 'data-lessons-a.js', 'data-lessons-b.js', 'data-lessons-c.js', 'data-lessons-d.js']) {
  const src = fs.readFileSync(path.join(base, f), 'utf8').replace(/^const (\w+) =/m, 'global.$1 =');
  (0, eval)(src);
}
for (const f of ['demo-guides-a.js', 'demo-guides-b.js', 'demo-guides-c.js', 'demo-guides-d.js']) {
  const src = fs.readFileSync(path.join(base, f), 'utf8').replace(/^const (\w+) =/m, 'global.$1 =');
  (0, eval)(src);
}
const visualSource = fs.readFileSync(path.join(base, 'demo-visuals.js'), 'utf8').replace(/^const (\w+) =/m, 'global.$1 =');
(0, eval)(visualSource);
const explanationSource = fs.readFileSync(path.join(base, 'explanation-content.js'), 'utf8').replace(/^const (\w+) =/m, 'global.$1 =');
(0, eval)(explanationSource);
const LESSONS_A = global.LESSONS_A, LESSONS_B = global.LESSONS_B, LESSONS_C = global.LESSONS_C, LESSONS_D = global.LESSONS_D, LEVELS = global.LEVELS;
const L = [...LESSONS_A, ...LESSONS_B, ...LESSONS_C, ...LESSONS_D];
const DEMO_GUIDES = {
  ...global.DEMO_GUIDES_A, ...global.DEMO_GUIDES_B, ...global.DEMO_GUIDES_C, ...global.DEMO_GUIDES_D
};
const DEMO_VISUALS = global.DEMO_VISUALS;
const EXPLANATION_CONTENT = global.EXPLANATION_CONTENT || {};
const SUPPORTED_BLOCK_TYPES = new Set([
  'callout', 'formula', 'steps', 'compare', 'table', 'truthTable', 'logicLab'
]);
console.log('Nivele:', LEVELS.length, '| Lectii:', L.length);
const ids = new Set();
let bad = 0;
function problem(message) {
  console.log(message);
  bad++;
}
function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}
function validateVisual(lessonId) {
  const visual = DEMO_VISUALS[lessonId];
  if (!visual || typeof visual !== 'object') {
    problem('Lipseste scena vizuala individuala: ' + lessonId);
    return;
  }
  if (!isNonEmptyString(visual.kind) || !isNonEmptyString(visual.title) || !isNonEmptyString(visual.story)) {
    problem('Scena vizuala are câmpuri text incomplete: ' + lessonId);
  }
  if (!Array.isArray(visual.objects) || visual.objects.length < 3 || visual.objects.some(object => !isNonEmptyString(object))) {
    problem('Scena vizuala necesita cel putin 3 obiecte descrise: ' + lessonId);
  }
}
function validateTerm(term, lessonId, index, seenNames) {
  if (!term || typeof term !== 'object') {
    problem('Termen invalid la lecția ' + lessonId + ', poziția ' + index);
    return;
  }
  if (!Array.isArray(term.names) || term.names.length === 0 || term.names.some(name => !isNonEmptyString(name))) {
    problem('Termenul fără nume este invalid la lecția ' + lessonId + ', poziția ' + index);
  } else {
    term.names.forEach(name => {
      const clean = name.trim();
      if (seenNames.has(clean.toLowerCase())) {
        problem('Nume de termen duplicat: ' + clean + ' la lecția ' + lessonId);
      }
      seenNames.add(clean.toLowerCase());
    });
  }
  if (!isNonEmptyString(term.definition) || term.definition.trim().length < 30) {
    problem('Definiția termenului este prea scurtă la lecția ' + lessonId + ', poziția ' + index);
  }
}
function validateCheck(check, lessonId, index) {
  if (!check || typeof check !== 'object') {
    problem('Întrebarea de verificare este invalidă la lecția ' + lessonId + ', poziția ' + index);
    return;
  }
  if (!isNonEmptyString(check.q) || check.q.trim().length < 20) {
    problem('Întrebarea de verificare este neclară la lecția ' + lessonId + ', poziția ' + index);
  }
  if (!Array.isArray(check.options) || check.options.length < 2 || check.options.some(option => !isNonEmptyString(option))) {
    problem('Verificarea necesita cel putin doua opțiuni la lecția ' + lessonId + ', poziția ' + index);
  } else if (!Number.isInteger(check.correct) || check.correct < 0 || check.correct >= check.options.length) {
    problem('Indicele răspunsului corect este invalid la lecția ' + lessonId + ', poziția ' + index);
  }
  if (!isNonEmptyString(check.why) || check.why.trim().length < 20) {
    problem('Explicația verificării este prea scurtă la lecția ' + lessonId + ', poziția ' + index);
  }
}
function validateBlock(block, lessonId, index) {
  if (!block || typeof block !== 'object') {
    problem('Blocul de explicație este invalid la lecția ' + lessonId + ', poziția ' + index);
    return;
  }
  if (!SUPPORTED_BLOCK_TYPES.has(block.type)) {
    problem('Tip de bloc nepermis: ' + String(block.type) + ' la lecția ' + lessonId);
  }
  if (!isNonEmptyString(block.title)) {
    problem('Blocul de explicație nu are titlu la lecția ' + lessonId + ', poziția ' + index);
  }

  if (block.type === 'callout') {
    if (!isNonEmptyString(block.body) || block.body.trim().length < 30) {
      problem('Callout-ul are conținut insuficient la lecția ' + lessonId);
    }
    if (block.tone !== undefined && !['info', 'warn', 'success'].includes(block.tone)) {
      problem('Ton callout invalid la lecția ' + lessonId);
    }
  } else if (block.type === 'formula') {
    if (!isNonEmptyString(block.formula) || !isNonEmptyString(block.body) || block.body.trim().length < 30) {
      problem('Blocul formulă este incomplet la lecția ' + lessonId);
    }
  } else if (block.type === 'steps') {
    if (!Array.isArray(block.steps) || block.steps.length === 0 || block.steps.some(step => !isNonEmptyString(step) || step.trim().length < 20)) {
      problem('Blocul cu pași este invalid la lecția ' + lessonId);
    }
  } else if (block.type === 'compare') {
    if (!Array.isArray(block.items) || block.items.length < 2 || block.items.some(item => !item || !isNonEmptyString(item.title) || !isNonEmptyString(item.body) || item.body.trim().length < 20)) {
      problem('Blocul de comparație este invalid la lecția ' + lessonId);
    }
  } else if (block.type === 'table' || block.type === 'truthTable') {
    if (!Array.isArray(block.headers) || block.headers.length === 0 || block.headers.some(header => !isNonEmptyString(header))) {
      problem('Tabelul nu are anteturi valide la lecția ' + lessonId);
    } else if (!Array.isArray(block.rows) || block.rows.length === 0 || block.rows.some(row => !Array.isArray(row) || row.length !== block.headers.length)) {
      problem('Tabelul are rânduri cu lățimi diferite la lecția ' + lessonId + ': ' + block.title);
    }
  }

  if (block.type === 'truthTable') {
    const gate = String(block.gate || '').split(/\s*\/\s*/)[0];
    const expected = gate === 'AND'
      ? [[0, 0, 0], [0, 1, 0], [1, 0, 0], [1, 1, 1]]
      : gate === 'OR'
        ? [[0, 0, 0], [0, 1, 1], [1, 0, 1], [1, 1, 1]]
        : gate === 'NOT'
          ? [[0, 1], [1, 0]]
          : null;
    if (!expected || JSON.stringify(block.rows) !== JSON.stringify(expected)) {
      problem('Tabela de adevăr incorectă: ' + lessonId + ', ' + block.gate);
    }
  }
  if (block.type === 'logicLab' && lessonId !== '2.4') {
    problem('Laborator logic permis numai la lecția 2.4: ' + lessonId);
  }
}
const guideText = Object.values(DEMO_GUIDES).flat().join('\n');
for (const typo of ['Demonstatia', 'Apesi', 'Sasiul', 'preciser', 'larghe', 'uiti', 'Afisul', 'Rabdarea', 'cât jurnal.txt', 'Serial.println(lumină)']) {
  if (guideText.includes(typo)) {
    console.log('Forma interzisa in ghiduri:', typo);
    bad++;
  }
}
for (const l of L) {
  if (ids.has(l.id)) problem('ID duplicat: ' + l.id);
  ids.add(l.id);
  for (const k of ['objectives', 'explanation', 'demo', 'experiment', 'project', 'questions', 'exercises', 'parent', 'pass']) {
    if (!l[k]) problem('Lipsește ' + k + ' la ' + l.id);
  }
  if (!Array.isArray(l.explanation) || l.explanation.length < 3) {
    problem('Explicație prea scurtă (minimum 3 paragrafe): ' + l.id);
  } else if (l.explanation.some(paragraph => typeof paragraph !== 'string' || paragraph.trim().length < 80)) {
    problem('Explicație neclară sau prea scurtă: ' + l.id);
  }
  if (!Array.isArray(DEMO_GUIDES[l.id]) || DEMO_GUIDES[l.id].length < 2) {
    problem('Lipsește ghidul de pregătire pentru demo: ' + l.id);
  } else if (DEMO_GUIDES[l.id].some(paragraph => typeof paragraph !== 'string' || paragraph.trim().length < 80)) {
    problem('Ghid de demo neclar sau prea scurt: ' + l.id);
  }

  validateVisual(l.id);

  const explanationExtras = EXPLANATION_CONTENT[l.id];
  if (explanationExtras) {
    const seenTermNames = new Set();
    if (!Array.isArray(explanationExtras.blocks)) {
      problem('Explicație structurată invalidă: ' + l.id);
    } else {
      explanationExtras.blocks.forEach((block, index) => validateBlock(block, l.id, index));
    }
    if (explanationExtras.terms !== undefined) {
      if (!Array.isArray(explanationExtras.terms)) {
        problem('Lista de termeni este invalidă: ' + l.id);
      } else {
        explanationExtras.terms.forEach((term, index) => validateTerm(term, l.id, index, seenTermNames));
      }
    }
    if (explanationExtras.checks !== undefined) {
      if (!Array.isArray(explanationExtras.checks)) {
        problem('Verificare structurată invalidă: ' + l.id);
      } else {
        explanationExtras.checks.forEach((check, index) => validateCheck(check, l.id, index));
      }
    }
  }
}
for (const lessonId of Object.keys(EXPLANATION_CONTENT)) {
  if (!ids.has(lessonId)) problem('Conținut explicativ pentru lecție inexistentă: ' + lessonId);
}
const lesson24 = EXPLANATION_CONTENT['2.4'];
if (!lesson24 || !Array.isArray(lesson24.terms) || lesson24.terms.length < 8) {
  console.log('Lecția 2.4 nu are dicționarul complet de termeni');
  bad++;
}
const truthTables = (lesson24?.blocks || []).filter(block => block.type === 'truthTable');
if (truthTables.length !== 3 || !truthTables.some(block => String(block.gate).startsWith('AND')) || !truthTables.some(block => String(block.gate).startsWith('OR')) || !truthTables.some(block => String(block.gate).startsWith('NOT'))) {
  console.log('Lecția 2.4 trebuie să aibă tabele AND, OR și NOT');
  bad++;
}
for (const lv of LEVELS) {
  const c = L.filter(x => x.level === lv.n).length;
  console.log('Nivel ' + lv.n + ': ' + c + ' lectii');
  if (!c) bad++;
}
console.log(bad ? ('PROBLEME: ' + bad) : 'TOATE STRUCTURILE OK');
