import {test,chromium} from '@playwright/test';

test('Launch Browser', async ({page}) => {
    // open a browser
    const browser = await chromium.launch({headless:true}) // initating browser
    const newtab = await browser.newContext()              // opening a window
    const newpage = await newtab.newPage()                 // opening a new tab
    await newpage.goto('https://leaftaps.com/opentaps/control/main')   // launching the url
    await newpage.waitForTimeout(3000)                     // wait for 3000 sec
    await browser.close()                                  // close the tab
})

test('Launchbrowser_with_pagefixture', async ({page}) => {

    await page.goto('https://leaftaps.com/opentaps/control/main')  // directly launch the url in the browser using page fixture
    await page.waitForTimeout(3000)
    await page.close()
})
