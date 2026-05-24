import {expect, test} from '@playwright/test'
import { link } from 'node:fs'

test('Add a product to cart', async ({page}) => {

    await page.goto('https://www.decathlon.in/')
    await page.waitForLoadState('domcontentloaded')
    const PageTitle = await page.title()
    console.log('Page title : '+ PageTitle);
    const SearchBox = await page.getByRole('searchbox')
    await SearchBox.isEnabled()
    await SearchBox.click()
    await SearchBox.fill('Shoes')
   // await page.waitForTimeout(5000)
   // await SearchBox.waitFor({timeout:5000})
    // await expect.soft(SearchBox).toHaveText('Shoes')                 // textbox or field to have expected value
    // await expect(await SearchBox.innerText()).toBe('Shoes')     // actual and then expected
    await page.keyboard.press('Enter')
   // await page.locator('//span[contains(text(),"Shoes")]').nth(0).click()
    await page.waitForLoadState('networkidle')
    const pagetitle_win = await page.title()
    console.log(pagetitle_win);
    await expect.soft(pagetitle_win).toBe('Search | Shoes')

    const gender = page.getByRole('button',{name:'Gender'})
    await gender.click()
    await page.waitForLoadState('load')
    await page.locator('(//span[contains(text(),"Men")])[2]').check()
    await gender.click()

    const Category = page.getByRole('button',{name:'Category'})
    await Category.click()
    await page.locator('//span[contains(text(),"Sport shoes")]').check()
    await Category.click()

    const size = page.getByRole('button',{name:'Size'})
    await size.click()
    const Checkbox = await page.locator('//div[@id="indian_size"]//span[contains(text(),"Uk 10.5 - eu 45")]')
    await Checkbox.scrollIntoViewIfNeeded()
    await Checkbox.waitFor({state:'visible'})
    await Checkbox.click()
    await size.click()

    const sport = page.locator('(//span[contains(text(),"Sport")])[2]')
    await sport.click()
    const option = page.locator('//div[@id="sport_pratice_en"]//span[contains(text(),"Running")]')
    await option.click()
    await sport.click()

    await page.getByRole('button',{name:'Most relevant'}).click()
    await page.locator('//span[contains(text(),"Price (high → low) ")]').click()
    
    await page.locator('//div[@data-test-id="product-card-content"]').nth(0).click()
    console.log("current page title" + await page.title())
    await page.getByLabel('Color Selection').locator('//button[@data-test-id="pdp-color-selector-desktop:option-button"]').nth(0).click()
    await page.locator('//ul[@data-test-id="pdp-size-selector-desktop:grid"]//li').nth(0).click()
    await page.getByLabel('Product purchase actions').locator('//div[@aria-live="polite"]//button//span[contains(text(),"Add to cart")]').click()
    
    await page.waitForTimeout(3000)

    await page.getByRole('link',{name:'Cart'}).click()
    const Total = page.locator('//div[@data-test-id="order-summary-item-container"]/child::div//p').nth(1)
    const Totalamount = await Total.innerText()
    console.log(Totalamount)
    await page.waitForTimeout(3000)
    
})
