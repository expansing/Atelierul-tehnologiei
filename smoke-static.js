const fs = require('fs');
const path = require('path');

const root = __dirname;
let failures = 0;
function fail(message) {
  console.error('SMOKE FAIL: ' + message);
  failures++;
}
function read(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    fail('Fisier lipsa: ' + relativePath);
    return '';
  }
  return fs.readFileSync(absolutePath, 'utf8');
}
function checkPage(relativePath, requiredFragments) {
  const html = read(relativePath);
  requiredFragments.forEach(fragment => {
    if (!html.includes(fragment)) fail(relativePath + ' nu contine: ' + fragment);
  });
  const references = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map(match => match[1])
    .filter(reference => !reference.startsWith('#') && !reference.startsWith('data:') && !reference.includes('://'));
  references.forEach(reference => {
    const cleanReference = reference.split('?')[0];
    if (!fs.existsSync(path.join(root, cleanReference))) {
      fail(relativePath + ' indica asset lipsa: ' + cleanReference);
    }
  });
}

checkPage('index.html', ['data-page="home"', 'id="global-progress"', 'id="levels-grid"', 'assets/js/app.js']);
checkPage('level.html', ['data-page="level"', 'id="level-hero"', 'id="lessons-list"', 'assets/js/app.js']);
checkPage('lesson.html', ['data-page="lesson"', 'id="tabs"', 'id="panels"', 'id="lesson-actions"', 'assets/js/concept-scenes.js']);

const dataFiles = [
  'assets/js/data-levels.js',
  'assets/js/data-lessons-a.js',
  'assets/js/data-lessons-b.js',
  'assets/js/data-lessons-c.js',
  'assets/js/data-lessons-d.js',
  'assets/js/demo-guides-a.js',
  'assets/js/demo-guides-b.js',
  'assets/js/demo-guides-c.js',
  'assets/js/demo-guides-d.js',
  'assets/js/demo-visuals.js',
  'assets/js/explanation-content.js'
];
dataFiles.forEach(read);

const lessonIds = [];
dataFiles.filter(file => file.includes('data-lessons-')).forEach(file => {
  const source = read(file);
  [...source.matchAll(/id:\s*["'](\d+\.\d+)["']/g)].forEach(match => lessonIds.push(match[1]));
});
const uniqueLessonIds = new Set(lessonIds);
if (lessonIds.length !== 69) fail('Indexul static contine ' + lessonIds.length + ' lecții; asteptat 69');
if (uniqueLessonIds.size !== lessonIds.length) fail('Indexul static contine ID-uri de lecții duplicate');
lessonIds.forEach(id => {
  if (!/^\d+\.\d+$/.test(id)) fail('ID de lecție malformat: ' + id);
});
const visualSource = read('assets/js/demo-visuals.js');
const visualIds = [...visualSource.matchAll(/["'](\d+\.\d+)["']:\s*\{/g)].map(match => match[1]);
if (visualIds.length !== 69) fail('Maparea scenelor vizuale contine ' + visualIds.length + ' intrări; asteptat 69');
if (new Set(visualIds).size !== visualIds.length) fail('Maparea scenelor vizuale contine ID-uri duplicate');

if (failures) {
  console.error('Smoke static: ' + failures + ' probleme');
  process.exitCode = 1;
} else {
  console.log('Smoke static: paginile, asset-urile si contractul de rutare sunt OK');
}
