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
console.log('Nivele:', LEVELS.length, '| Lectii:', L.length);
const ids = new Set();
let bad = 0;
const guideText = Object.values(DEMO_GUIDES).flat().join('\n');
for (const typo of ['Demonstatia', 'Apesi', 'Sasiul', 'preciser', 'larghe', 'uiti', 'Afisul', 'Rabdarea', 'cât jurnal.txt', 'Serial.println(lumină)']) {
  if (guideText.includes(typo)) {
    console.log('Forma interzisa in ghiduri:', typo);
    bad++;
  }
}
for (const l of L) {
  if (ids.has(l.id)) { console.log('ID duplicat:', l.id); bad++; }
  ids.add(l.id);
  for (const k of ['objectives', 'explanation', 'demo', 'experiment', 'project', 'questions', 'exercises', 'parent', 'pass'])
    if (!l[k]) { console.log('Lipseste', k, 'la', l.id); bad++; }
  if (!Array.isArray(l.explanation) || l.explanation.length < 3) {
    console.log('Explicatie prea scurta (minimum 3 paragrafe):', l.id);
    bad++;
  }
  if (Array.isArray(l.explanation) && l.explanation.some(p => typeof p !== 'string' || p.trim().length < 80)) {
    console.log('Explicatie neclara sau prea scurta:', l.id);
    bad++;
  }
  if (!Array.isArray(DEMO_GUIDES[l.id]) || DEMO_GUIDES[l.id].length < 2) {
    console.log('Lipseste ghidul de pregatire pentru demo:', l.id);
    bad++;
  }
  if (!DEMO_VISUALS[l.id] || !Array.isArray(DEMO_VISUALS[l.id].objects) || DEMO_VISUALS[l.id].objects.length < 3 || !DEMO_VISUALS[l.id].story) {
    console.log('Lipseste scena vizuala individuala:', l.id);
    bad++;
  }
  if (Array.isArray(DEMO_GUIDES[l.id]) && DEMO_GUIDES[l.id].some(p => typeof p !== 'string' || p.trim().length < 80)) {
    console.log('Ghid de demo neclar sau prea scurt:', l.id);
    bad++;
  }
  const explanationExtras = EXPLANATION_CONTENT[l.id];
  if (explanationExtras) {
    if (!Array.isArray(explanationExtras.blocks)) {
      console.log('Explicatie structurata invalida:', l.id);
      bad++;
    } else {
      for (const block of explanationExtras.blocks) {
        if (!block.type || !block.title || typeof block.title !== 'string') {
          console.log('Bloc explicatie fara tip sau titlu:', l.id);
          bad++;
        }
        if (block.type === 'table' || block.type === 'truthTable') {
          if (!Array.isArray(block.headers) || !Array.isArray(block.rows) || block.rows.some(row => !Array.isArray(row) || row.length !== block.headers.length)) {
            console.log('Tabel explicatie invalid:', l.id, block.title);
            bad++;
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
            console.log('Tabela de adevăr incorectă:', l.id, block.gate);
            bad++;
          }
        }
        if (block.type === 'logicLab' && l.id !== '2.4') {
          console.log('Laborator logic permis numai la lecția 2.4:', l.id);
          bad++;
        }
      }
    }
    if (explanationExtras.checks && !Array.isArray(explanationExtras.checks)) {
      console.log('Verificare structurată invalidă:', l.id);
      bad++;
    }
  }
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
