const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();


    // ----- Check: https://philipbankier.com/ -----

    // navigate to target website
    await page.goto('https://personalsite.com/');

    // screenshot: full page
    await page.screenshot({ path: 'personalsite-full.png', fullPage: true });

    // -------------------------------------------------

    // ----- Check: https://livedroneanalytics.com/ -----

    // navigate to target website
    await page.goto('https://livedroneanalytics.com/');

    // screenshot: full page
    await page.screenshot({ path: 'livedroneanalytics-full.png', fullPage: true });

    // -------------------------------------------------

    // ----- Check: https://villaincostarica.com/ -----

    // navigate to target website
    await page.goto('https://villaincostarica.com/');

    // screenshot: full page
    await page.screenshot({ path: 'villaincostarica-full.png', fullPage: true });

    // -------------------------------------------------

    browser.close();
})();