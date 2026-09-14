const fs = require('fs');
const path = require('path');
const nodeMajor = Number(process.versions.node.split('.')[0]);
if (nodeMajor < 12) {
  console.error('Validatorul necesita Node.js 12 sau mai nou. Versiune detectata: ' + process.versions.node);
  process.exit(1);
}
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
const SUPPORTED_DEMO_TYPES = new Set(['flow', 'binary', 'quiz', 'classify']);
const SUPPORTED_VISUAL_KINDS = new Set([
  'objects', 'invention', 'timeline', 'computer', 'binary', 'logic', 'layers', 'terminal',
  'filesystem', 'server', 'algorithm', 'variables', 'scratch', 'python', 'debug', 'network',
  'dns', 'data', 'cloud', 'circuit', 'microcontroller', 'sensor', 'iot', 'motor', 'robot',
  'security', 'virtual', 'ai', 'critical', 'weather', 'smart', 'vision'
]);
console.log('Nivele:', LEVELS.length, '| Lectii:', L.length);
const ids = new Set();
const visualSignatures = new Map();
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
  if (!SUPPORTED_VISUAL_KINDS.has(String(visual.kind).toLowerCase())) {
    problem('Tip de scenă vizuală nepermis: ' + String(visual.kind) + ' la lecția ' + lessonId);
  }
  if (!Array.isArray(visual.objects) || visual.objects.length < 3 || visual.objects.some(object => !isNonEmptyString(object))) {
    problem('Scena vizuala necesita cel putin 3 obiecte descrise: ' + lessonId);
  }
  const signature = [visual.title, visual.story, ...(visual.objects || [])].join('|').toLowerCase();
  if (visualSignatures.has(signature)) problem('Scenă vizuală duplicată între ' + visualSignatures.get(signature) + ' și ' + lessonId);
  visualSignatures.set(signature, lessonId);
}
function validateVisualAlignment(lesson) {
  const visual = DEMO_VISUALS[lesson.id];
  if (!visual || !Array.isArray(visual.objects)) return;
  const source = [
    ...(Array.isArray(lesson.explanation) ? lesson.explanation : []),
    lesson.demo && lesson.demo.title,
    lesson.demo && lesson.demo.intro,
    ...(lesson.demo && Array.isArray(lesson.demo.steps) ? lesson.demo.steps.map(step => step.label + ' ' + step.info) : []),
    visual.title,
    visual.story
  ].filter(isNonEmptyString).join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  visual.objects.forEach(object => {
    const label = String(object).replace(/^[^\p{L}\p{N}]*/u, '').replace(/^[^ ]+\s*/, '').trim();
    const terms = label.split(/[^a-zA-Z0-9ĂÂÎȘȚăâîșț]+/).filter(term => term.length >= 4);
    if (terms.length && !terms.some(term => source.includes(term.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()))) {
      problem('Etichetă vizuală fără legătură textuală la ' + lesson.id + ': ' + label);
    }
  });
}
function validateDemo(demo, lessonId) {
  if (!demo || typeof demo !== 'object') {
    problem('Demo invalid la lecția ' + lessonId);
    return;
  }
  if (!SUPPORTED_DEMO_TYPES.has(demo.type)) {
    problem('Tip de demo nepermis: ' + String(demo.type) + ' la lecția ' + lessonId);
    return;
  }
  if (!isNonEmptyString(demo.title)) {
    problem('Demo fără titlu la lecția ' + lessonId);
  }
  if (demo.type === 'flow') {
    if (!Array.isArray(demo.steps) || demo.steps.length < 2 || demo.steps.some(step => !step || !isNonEmptyString(step.label) || !isNonEmptyString(step.info))) {
      problem('Demo flow invalid la lecția ' + lessonId);
    }
  } else if (demo.type === 'quiz') {
    if (!Array.isArray(demo.questions) || demo.questions.length < 2 || demo.questions.some(question => !question || !isNonEmptyString(question.q) || !Array.isArray(question.opts) || question.opts.length < 2 || !Number.isInteger(question.correct) || question.correct < 0 || question.correct >= question.opts.length || !isNonEmptyString(question.why))) {
      problem('Demo quiz invalid la lecția ' + lessonId);
    }
  } else if (demo.type === 'classify') {
    if (!Array.isArray(demo.zones) || demo.zones.length < 2 || demo.zones.some(zone => !isNonEmptyString(zone)) || !Array.isArray(demo.items) || demo.items.length < 2 || demo.items.some(item => !item || !isNonEmptyString(item.label) || !Number.isInteger(item.zone) || item.zone < 0 || item.zone >= demo.zones.length)) {
      problem('Demo classify invalid la lecția ' + lessonId);
    }
  }
}
function validateLessonIndex(lessons, levels) {
  const levelIds = new Set(levels.map(level => level.n));
  const byLevel = new Map();
  lessons.forEach(lesson => {
    if (!levelIds.has(lesson.level)) problem('Lecția ' + lesson.id + ' indică un nivel inexistent: ' + lesson.level);
    if (!Number.isInteger(lesson.num) || lesson.num < 1) problem('Număr de lecție invalid la ' + lesson.id);
    if (!byLevel.has(lesson.level)) byLevel.set(lesson.level, []);
    byLevel.get(lesson.level).push(lesson.num);
  });
  levels.forEach(level => {
    const numbers = (byLevel.get(level.n) || []).sort((a, b) => a - b);
    numbers.forEach((number, index) => {
      if (number !== index + 1) problem('Ordine sau număr lipsă la nivelul ' + level.n + ': așteptat ' + (index + 1) + ', găsit ' + number);
    });
  });
}
function validateObjectiveCoverage(lesson) {
  const source = [
    ...(Array.isArray(lesson.explanation) ? lesson.explanation : []),
    ...(lesson.demo ? [lesson.demo.title, lesson.demo.intro] : []),
    ...(lesson.experiment && Array.isArray(lesson.experiment.steps) ? lesson.experiment.steps : []),
    ...(lesson.project && Array.isArray(lesson.project.steps) ? lesson.project.steps : []),
    ...(Array.isArray(lesson.exercises) ? lesson.exercises : []),
    ...(Array.isArray(lesson.pass) ? lesson.pass : [])
  ].filter(isNonEmptyString).join(' ').toLowerCase();
  const stopWords = new Set(['să', 'sa', 'și', 'si', 'din', 'care', 'este', 'fiecare', 'poate', 'pentru', 'prin', 'despre', 'cel', 'mai', 'unei', 'unui', 'între', 'intre']);
  lesson.objectives.forEach((objective, index) => {
    const terms = objective.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(/[^a-z0-9]+/).filter(term => term.length >= 5 && !stopWords.has(term));
    if (terms.length && !terms.some(term => source.normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(term))) {
      problem('Obiectiv fără acoperire în conținut la ' + lesson.id + ', poziția ' + (index + 1));
    }
  });
}
function validateLearningPath(lesson) {
  const explanation = Array.isArray(lesson.explanation) ? lesson.explanation.join(' ') : '';
  const activitySteps = lesson.experiment && Array.isArray(lesson.experiment.steps) ? lesson.experiment.steps : [];
  const projectSteps = lesson.project && Array.isArray(lesson.project.steps) ? lesson.project.steps : [];
  const hasDemoBridge = /demo|demonstrație|demonstrația/i.test(explanation);
  if (!hasDemoBridge) {
    problem('Explicația nu face legătura explicită cu demonstrația la ' + lesson.id);
  }
  if (!activitySteps.length || !activitySteps.every(isNonEmptyString)) {
    problem('Experimentul nu are pași utilizabili la ' + lesson.id);
  }
  if (!projectSteps.length || !projectSteps.every(isNonEmptyString)) {
    problem('Proiectul nu are pași utilizabili la ' + lesson.id);
  }
  if (!Array.isArray(lesson.pass) || !lesson.pass.length || lesson.pass.some(criteria => !isNonEmptyString(criteria))) {
    problem('Criteriile de trecere sunt incomplete la ' + lesson.id);
  }
}
function validateEverydayExample(lesson) {
  const explanation = Array.isArray(lesson.explanation) ? lesson.explanation.join(' ') : '';
  if (!/(exemplu|analogi|viața de zi cu zi|acasă|copil)/i.test(explanation)) {
    problem('Lipsește exemplul cotidian sau analogia explicită la ' + lesson.id);
  }
}
function validateRomanianCopy(lesson) {
  const copy = [
    lesson.title,
    ...(Array.isArray(lesson.explanation) ? lesson.explanation : []),
    ...(Array.isArray(lesson.objectives) ? lesson.objectives : []),
    lesson.demo && lesson.demo.title, lesson.demo && lesson.demo.intro,
    ...(lesson.demo && Array.isArray(lesson.demo.steps) ? lesson.demo.steps.map(step => step.label + ' ' + step.info) : []),
    ...(lesson.demo && Array.isArray(lesson.demo.questions) ? lesson.demo.questions.map(q => q.q + ' ' + q.why) : []),
    lesson.experiment && lesson.experiment.title, lesson.experiment && lesson.experiment.expected,
    ...(lesson.experiment && Array.isArray(lesson.experiment.steps) ? lesson.experiment.steps : []),
    lesson.project && lesson.project.title, lesson.project && lesson.project.goal,
    ...(lesson.project && Array.isArray(lesson.project.steps) ? lesson.project.steps : []),
    ...(lesson.project && Array.isArray(lesson.project.success) ? lesson.project.success : []),
    ...(Array.isArray(lesson.questions) ? lesson.questions : []),
    ...(Array.isArray(lesson.exercises) ? lesson.exercises : []),
    ...(Array.isArray(lesson.pass) ? lesson.pass : []),
    ...(lesson.parent ? [...(lesson.parent.watch || []), ...(lesson.parent.help || []), ...(lesson.parent.redflags || [])] : [])
  ].filter(isNonEmptyString).join(' ').replace(/`[^`]*`/g, ' ');
  const forbidden = {
    'Apasa': 'Apasă', 'apasa': 'apasă', 'Daca': 'Dacă', 'daca': 'dacă',
    'Fara': 'Fără', 'fara': 'fără', 'Inainte': 'Înainte', 'inainte': 'înainte',
    'siguranta': 'siguranță', 'Siguranta': 'Siguranță', 'retea': 'rețea', 'Retea': 'Rețea',
    'pastram': 'păstrăm', 'Pastram': 'Păstrăm', 'afiseaza': 'afișează', 'Afiseaza': 'Afișează',
    'protejeaza': 'protejează', 'Protejeaza': 'Protejează', 'cauta': 'caută', 'Cauta': 'Caută',
    'foloseste': 'folosește', 'Foloseste': 'Folosește', 'temporara': 'temporară', 'Temporara': 'Temporară',
    'intelege': 'înțelege', 'Intelege': 'Înțelege', 'intelegere': 'înțelegere', 'invata': 'învață', 'Invata': 'Învață',
    'invatare': 'învățare', 'Invatare': 'Învățare', 'masina': 'mașina', 'Masina': 'Mașina',
    'genereaza': 'generează', 'Genereaza': 'Generează', 'scoala': 'școala', 'Scoala': 'Școala',
    'impreuna': 'împreună', 'Impreuna': 'Împreună', 'romana': 'română', 'Romana': 'Română',
    'strain': 'străin', 'Strain': 'Străin', 'depaseste': 'depășește', 'Depaseste': 'Depășește',
    'incepe': 'începe', 'Incepe': 'Începe', 'inceput': 'început', 'Inceput': 'Început',
    'intrebare': 'întrebare', 'Intrebare': 'Întrebare', 'intamplat': 'întâmplat', 'Intamplat': 'Întâmplat'
  };
  Object.keys(forbidden).forEach(word => {
    if (new RegExp('(^|[^A-Za-zĂÂÎȘȚăâîșț])' + word + '([^A-Za-zĂÂÎȘȚăâîșț]|$)').test(copy)) {
      problem('Ortografie: folosește „' + forbidden[word] + '” în loc de „' + word + '” la ' + lesson.id);
    }
  });
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
validateLessonIndex(L, LEVELS);
for (const l of L) {
  if (ids.has(l.id)) problem('ID duplicat: ' + l.id);
  ids.add(l.id);
  for (const k of ['objectives', 'explanation', 'demo', 'experiment', 'project', 'questions', 'exercises', 'parent', 'pass']) {
    if (!l[k]) problem('Lipsește ' + k + ' la ' + l.id);
  }
  if (!Array.isArray(l.objectives) || l.objectives.length === 0 || l.objectives.some(objective => !isNonEmptyString(objective))) {
    problem('Obiective invalide la ' + l.id);
  }
  validateDemo(l.demo, l.id);
  validateObjectiveCoverage(l);
  validateLearningPath(l);
  validateEverydayExample(l);
  validateRomanianCopy(l);
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
  validateVisualAlignment(l);

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
const truthTables = (lesson24 && Array.isArray(lesson24.blocks) ? lesson24.blocks : []).filter(block => block.type === 'truthTable');
if (truthTables.length !== 3 || !truthTables.some(block => String(block.gate).startsWith('AND')) || !truthTables.some(block => String(block.gate).startsWith('OR')) || !truthTables.some(block => String(block.gate).startsWith('NOT'))) {
  console.log('Lecția 2.4 trebuie să aibă tabele AND, OR și NOT');
  bad++;
}
for (const lv of LEVELS) {
  for (const field of ['age', 'difficulty', 'supervision', 'risk', 'prerequisite']) {
    if (!isNonEmptyString(lv[field])) problem('Metadată de nivel lipsă (' + field + '): nivelul ' + lv.n);
  }
  const c = L.filter(x => x.level === lv.n).length;
  console.log('Nivel ' + lv.n + ': ' + c + ' lectii');
  if (!c) bad++;
}
if (bad) {
  console.log('PROBLEME: ' + bad);
  process.exitCode = 1;
} else {
  console.log('TOATE STRUCTURILE OK');
}
