const { chromium } = require('playwright');
const { spawn } = require('child_process');

const baseUrl = 'http://127.0.0.1:8877';
let server;
function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
function assert(condition, message) {
  if (!condition) throw new Error(message);
}
async function main() {
  server = spawn('python3', ['-m', 'http.server', '8877'], { stdio: 'ignore' });
  await wait(300);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));

  await page.goto(baseUrl + '/index.html');
  assert(await page.locator('.level-card').count() === 12, 'Home nu afișează 12 niveluri');
  assert(await page.locator('#next-lesson a').count() === 1, 'Home nu afișează următoarea lecție');
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), 'Home are overflow orizontal');

  await page.goto(baseUrl + '/lesson.html?level=1&lesson=1&tab=demo');
  assert(await page.locator('[role="tab"][aria-selected="true"]').innerText() === '🎮 Demo', 'URL-ul nu deschide tabul demo');
  await page.locator('[role="tab"][aria-selected="true"]').focus();
  await page.keyboard.press('ArrowRight');
  assert(await page.locator('[role="tab"][aria-selected="true"]').innerText() === '🧪 Experiment', 'Navigarea taburilor cu tastatura nu funcționează');

  await page.goto(baseUrl + '/lesson.html?level=1&lesson=1&tab=criterii');
  assert(await page.locator('#btn-done').isDisabled(), 'Finalizarea este activă înaintea criteriilor');
  const checks = page.locator('[data-pass-check]');
  for (let index = 0; index < await checks.count(); index++) await checks.nth(index).click();
  assert(await page.locator('#btn-done').isEnabled(), 'Finalizarea nu se activează după criterii');

  await page.goto(baseUrl + '/lesson.html?level=1&lesson=1&tab=demo');
  await page.locator('.classify-item', { hasText: 'Bicicletă' }).click();
  await page.locator('[aria-label="Cutia Tehnologie"]').press('Enter');
  assert((await page.locator('#cl-fb').innerText()).includes('Corect'), 'Demo classify nu funcționează cu tastatura');

  await page.goto(baseUrl + '/lesson.html?level=2&lesson=3&tab=demo');
  await page.locator('.bit').first().click();
  assert(await page.locator('.bit').first().getAttribute('aria-pressed') === 'true', 'Demo binary nu actualizează aria-pressed');

  assert(errors.length === 0, 'Erori browser: ' + errors.join('; '));
  await browser.close();
  server.kill();
  console.log('Smoke browser: home, taburi, criterii și demo-uri OK');
}
main().catch(error => {
  if (server) server.kill();
  console.error('Smoke browser FAIL: ' + error.message);
  process.exitCode = 1;
});
