import {expect, test} from '@playwright/test'
import { link } from 'node:fs'

test('Add a product to cart', async ({page}) => {

    await page.goto('https://www.decathlon.in/')                    //launch the URL
    await page.waitForLoadState('domcontentloaded')                 // wait for dom to load
    const PageTitle = await page.title()                            // get the page title
    console.log('Page title : '+ PageTitle);
    const SearchBox = await page.getByRole('searchbox')
    await SearchBox.isEnabled()
    await SearchBox.click()
    await SearchBox.fill('Shoes')                                   // Enter shoes in the search
   
    await page.keyboard.press('Enter')                              // Press the Enter from the keyboard option
   
    await page.waitForLoadState('networkidle')
    const pagetitle_win = await page.title()
    console.log(pagetitle_win);
    await expect.soft(pagetitle_win).toBe('Search | Shoes')        // Check if the title are as expected using soft assert

    const gender = page.getByRole('button',{name:'Gender'})        // Select the gender as men
    await gender.click()
    await page.waitForLoadState('load')
    await page.locator('(//span[contains(text(),"Men")])[2]').check()
    await gender.click()

    const Category = page.getByRole('button',{name:'Category'})         // select the category as sports shoes
    await Category.click()
    await page.locator('//span[contains(text(),"Sport shoes")]').check()
    await Category.click()

    const size = page.getByRole('button',{name:'Size'})                // select the size as UK 10.5 - eu 45
    await size.click()
    const Checkbox = await page.locator('//div[@id="indian_size"]//span[contains(text(),"Uk 10.5 - eu 45")]')
    await Checkbox.scrollIntoViewIfNeeded()                            // scrol to view if the size is visible
    await Checkbox.waitFor({state:'visible'})
    await Checkbox.click()
    await size.click()

    const sport = page.locator('(//span[contains(text(),"Sport")])[2]')         // select running from the sport
    await sport.click()
    const option = page.locator('//div[@id="sport_pratice_en"]//span[contains(text(),"Running")]')
    await option.click()
    await sport.click()

    await page.getByRole('button',{name:'Most relevant'}).click()                     // select the high ->low sort from the most relevant
    await page.locator('//span[contains(text(),"Price (high → low) ")]').click()
    
    await page.locator('//div[@data-test-id="product-card-content"]').nth(0).click()    // select any shoe from the list of shoes
    console.log("current page title" + await page.title())
    await page.getByLabel('Color Selection').locator('//button[@data-test-id="pdp-color-selector-desktop:option-button"]').nth(0).click()      // select the color
    await page.locator('//ul[@data-test-id="pdp-size-selector-desktop:grid"]//li').nth(0).click()        // select the size again 
    await page.getByLabel('Product purchase actions').locator('//div[@aria-live="polite"]//button//span[contains(text(),"Add to cart")]').click()   // click on add to cart
    
    await page.waitForSelector('(//div[@class="relative"]//span)[2]')                // declared a wait for the item to add to the cart

    await page.getByRole('link',{name:'Cart'}).click()             // click on the cart
    const Total = page.locator('//div[@data-test-id="order-summary-item-container"]/child::div//p').nth(1)
    const Totalamount = await Total.innerText()                    // get the total amount value
    await page.screenshot({ path: 'Screenshots/decathlon_cart.png' })       // take screenshot of the cart item and store under screenshots
    console.log(process.cwd());                                     // to check the current directory
    console.log(Totalamount)                                        // print the total amount
    await page.waitForTimeout(3000)
    
})

