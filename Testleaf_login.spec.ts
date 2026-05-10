import {test,chromium} from '@playwright/test'

test('Login Testleaf web and fill the form', async ({page})=> {
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('democsr2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator('//a[contains(text(),"CRM/SFA")]').click()
    await page.locator('//a[contains(text(),"Create Lead")]').click()
    await page.locator('//input[@id="createLeadForm_companyName"]').fill('Avenger')
    await page.locator('#createLeadForm_firstName').fill('Tony')
    await page.locator('#createLeadForm_lastName').fill('Stark')
    await page.locator('//input[@name="submitButton"]').click()
    await page.waitForTimeout(3000)
})