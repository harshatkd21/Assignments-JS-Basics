import { test,expect} from '@playwright/test'

test('order for Apple iPhone 13 Pro', async ({page}) =>{

    await page.goto('https://dev296651.service-now.com')
    await page.waitForLoadState('load')
    console.log(await page.title())
    
    await page.getByRole('textbox',{name:'User name'}).nth(0).fill('admin')
    await page.locator('//input[@id="user_password"]').fill('E7i*7wNgX*mM')
    await page.getByRole('button',{name:'Log in'}).nth(0).click()
    await page.waitForLoadState('domcontentloaded',{timeout:3000})
    await page.getByRole('menuitem',{name:'All'}).click()
    
    await page.locator('#filter').fill('Service Catalog')
    await page.waitForTimeout(3000)
    await page.keyboard.press('Enter')

    await page.waitForTimeout(3000)
    const frame = page.frameLocator('#gsft_main')
    await frame.locator('//a[contains(text(),"Mobiles")]').click()

    await page.waitForTimeout(3000)

    await frame.locator('(//strong[contains(text(),"Apple iPhone 13")])[1]').click({timeout:3000})
    await page.waitForTimeout(3000)
    await page.waitForLoadState('load')
    await frame.locator('//label[contains(text(),"No")]').click()
    await frame.locator('select').nth(0).selectOption('500MB')
    //await frame.getByRole('combobox',{name:'Mandatory - must be populated before Submit Monthly data allowance'}).selectOption('500MB')
    await frame.locator('//label[contains(text(),"Starlight")]').click()
    await expect(frame.locator('//input[@value="starlight"]')).toBeChecked()
    await frame.locator('//label[contains(text(),"256 GB [add £74.25]")]').click()
    await expect(frame.locator('//input[@value="256"]')).toBeChecked()

    await frame.locator('//button[@aria-label="Order Now"]').click()
    const orderStatus = frame.locator('//span[contains(text(),"Thank you, your request has been submitted")]').innerText()
    const pg_title = page.title()
    console.log('Page title: '+pg_title)
    const pg_URl = page.url()
    console.log("Current URL: "+pg_URl);
    
})  