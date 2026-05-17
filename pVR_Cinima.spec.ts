import {test,expect,chromium} from '@playwright/test'

test('Book a seat in PVR', async ({page}) =>{
    await page.goto('https://www.pvrcinemas.com/')
    const pageTitle = await page.title()
    console.log(pageTitle)                                         // get the title
    await page.getByPlaceholder('Search for city').click()
    const search = await page.getByRole('combobox')
    await search.waitFor({state:'visible'})                                // wait for the visibility
    await search.fill('ch')
    const search_val = await search.inputValue()                           // get the value from the search text box
    await expect (search_val).toBe('ch')
    const dropdownvalues = await page.locator('//ul[@id="city_list"]/li')
    await dropdownvalues.first().waitFor()                                 // wait for the first element of the dropdown to be visible
    const dropdowncount = await dropdownvalues.count()
    console.log("Number of options present in the dropdown "+ dropdowncount);
    
    for(let i = 0; i<dropdowncount; i++){
        let options = await dropdownvalues.nth(i).innerText()              // get the dropdown value
        console.log("Dropdown values of the search box "+ options);
    }
    await dropdownvalues.nth(1).click()                                     // click on the second value
    await page.locator('//div[@class="date-show"]/span[2]').click()
    await page.locator('//div[@id="cinema"]').click()                       // click on cinema dropdown
    // select cinema place
    const cinemadropdown = await page.locator('//ul[@role="listbox"]/li')
    await cinemadropdown.first().waitFor({state:'visible'})
    await cinemadropdown.last().click()  
    const cinema = await page.locator('//div[@id="cinema"]').innerText()
    console.log(cinema);              // click on the last opiton cinema
    await page.waitForTimeout(2000)                                         // need to avoid static wait but not running without this
    // select date
    // await page.locator('//span[contains(text(),"Tomorrow")]').click()
    const Date_dropdown = page.getByRole('listbox').last()
    const Date_options = Date_dropdown.getByRole('option')
    await expect(Date_options.first()).toBeVisible()
    await Date_options.nth(1).click()
    console.log(await page.locator('//div[@id="date"]').innerText());
    await page.waitForTimeout(2000)
    // select movie
    const Moviedropdown = page.getByRole('listbox').last()
    const movie_options = Moviedropdown.getByRole('option')
    await expect(movie_options.first()).toBeVisible()
    await movie_options.first().click()
    const movename = await page.locator('//div[@id="movie"]').innerText()
    console.log(await page.locator('//div[@id="movie"]').innerText())
    await page.waitForTimeout(3000)
    // select Time
    const timingdropdown = page.getByRole('listbox').last()
    const time_options = timingdropdown.getByRole('option')
    await expect(time_options.first()).toBeVisible()
    await time_options.nth(0).click()
    const timing = await page.locator('//div[@id="time"]').innerText()
    console.log(timing)
    // click on submit
    await page.getByLabel('Submit').click()
    await page.getByRole('dialog').isVisible()
    await page.locator('//button[contains(text(),"Accept")]').click()            //accept the pop up

    await page.locator('(//tr[@class="seats-row"])[2]/child::td[9]').click()     // (//span[contains(text(),"18")])[1]
    await page.locator('(//tr[@class="seats-row"])[2]/child::td[10]').click()    // have the seat selection dynamic

    await page.locator('//div[@class="seat-info"]').isVisible()
    const seat_info = await page.locator('//div[@class="select-seat-number"]/div').locator('p').allInnerTexts()     // allInnerText()-to get the text of the values with P tag for that xpath

    for(let seat_no of seat_info){                                            // to get all the seat numbers in the seat info
        console.log(seat_no)                                                  // loop to get all the values one by one       
        
    }
    const price = await page.locator('//div[@class="grand-prices"]/h6').innerText()
    console.log('Proce if the 2 tickets selcted '+ price)                    // get the price of the ticket

    const confir_Page_Title = await page.title()                             // compare the title name from the starting title value
    await expect(pageTitle).toBe(confir_Page_Title)
    console.log('Title of the page '  + confir_Page_Title)
    
    await page.locator('//button[contains(text(),"Proceed")]').click()       // click on proceed
    await page.waitForTimeout(5000)
})


// const dropdownoptioncount = await dropdownoption.count()
    // console.log('cinemas list ' + dropdownoptioncount)

    // for(let j = 0 ; j < dropdownoptioncount; j++){                                // get the list of values from the dropdown
    //     let dp_option = await dropdownoption.nth(j).innerText()
    //     console.log('option list '+ dp_option)
    // }