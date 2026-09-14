const fs = require('fs');
const path = require('path');

const root = __dirname;
const files = [
  'README.md',
  'IMPROVEMENT-PLAN.md',
  'index.html',
  'level.html',
  'lesson.html',
  'validate-data.js',
  'smoke-static.js',
  'browser-smoke.js',
  'package.json',
  'assets/css/main.css',
  'assets/js/app.js',
  'assets/js/concept-scenes.js',
  'assets/js/data-index.js',
  'assets/js/progress-state.js',
  'assets/js/ui-utils.js',
  'assets/js/home-render.js',
  'assets/js/level-render.js',
  'assets/js/lesson-actions.js',
  'assets/js/demo-render.js',
  'assets/js/binary-engine.js',
  'assets/js/quiz-engine.js',
  'assets/js/classify-engine.js',
  'assets/js/flow-engine.js',
  'assets/js/lesson-tabs.js',
  'assets/js/logic-engine.js',
  'assets/js/explanation-render.js',
  'assets/js/diagnostics.js',
  'assets/js/explanation-checks.js',
  'assets/js/special-blocks.js',
  'assets/js/explanation-text.js',
  'assets/js/lesson-render.js',
  'assets/js/data-levels.js',
  'assets/js/demo-visuals.js',
  'assets/js/explanation-content.js',
  'assets/js/data-lessons-a.js',
  'assets/js/data-lessons-b.js',
  'assets/js/data-lessons-c.js',
  'assets/js/data-lessons-d.js',
  'assets/js/demo-guides-a.js',
  'assets/js/demo-guides-b.js',
  'assets/js/demo-guides-c.js',
  'assets/js/demo-guides-d.js'
];
let failures = 0;
function fail(message) {
  console.error('QUALITY FAIL: ' + message);
  failures++;
}
files.forEach(relativePath => {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    fail('Fișier lipsă: ' + relativePath);
    return;
  }
  const source = fs.readFileSync(absolutePath, 'utf8');
  if (/\r\n/.test(source)) fail('CRLF găsit în ' + relativePath + '; folosește LF');
  if (/^[ \t]+$/m.test(source)) fail('Linie goală cu whitespace în ' + relativePath);
  if (/[ \t]+$/m.test(source)) fail('Trailing whitespace în ' + relativePath);
  if (source.length && !source.endsWith('\n')) fail('Lipsește newline final în ' + relativePath);
});
try {
  JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
} catch (error) {
  fail('package.json nu este JSON valid: ' + error.message);
}
if (failures) {
  console.error('Quality check: ' + failures + ' probleme');
  process.exitCode = 1;
} else {
  console.log('Quality check: formatting și fișierele de configurare sunt OK');
}
