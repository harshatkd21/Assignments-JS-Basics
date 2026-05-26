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
    await page.waitForTimeout(5000)
    await page.keyboard.press('Enter')
    
    await page.getByRole('link',{name:'Mobiles. Cell phones to meet your business needs. Cell phones to meet your business needs.'}).click()
    await page.waitForTimeout(5000)
    await page.waitForSelector('//strong[contains(text(),"Apple iPhone 13 pro")]')
    await page.locator('//strong[contains(text(),"Apple iPhone 13 pro")]').click()


   await page.waitForTimeout(5000)
})
// https://dev296651.service-now.com

// UserName:admin
// Password:E7i*7wNgX*mM