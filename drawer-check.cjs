const { chromium } = require('C:\\Users\\Arklok\\AppData\\Local\\npm-cache\\_npx\\705bc6b22212b352\\node_modules\\playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.goto('http://localhost:5173/drawer', { waitUntil: 'networkidle' });

  // Wait for fonts to finish loading
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(2000);

  // Open the menu
  await page.evaluate(() => {
    const cursors = [...document.querySelectorAll('div[style*="cursor: pointer"]')];
    for (const el of cursors) {
      if ((el.getAttribute('style') || '').includes('cursor: pointer')) {
        el.click();
        break;
      }
    }
  });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'drawer-icons-check.png' });

  // Check if Material Symbols font is loaded
  const fontLoaded = await page.evaluate(() => {
    return [...document.fonts].map(f => `${f.family} ${f.style} ${f.weight} — ${f.status}`);
  });
  console.log('Fonts:', fontLoaded.filter(f => f.includes('Material')));

  await browser.close();
  console.log('done');
})();
