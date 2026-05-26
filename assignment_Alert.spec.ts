import { test, expect } from '@playwright/test'

test('Alert Handling in w3 school', async ({ page }) => {

    // Launch URL
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')

    // Listen for alert dialog
    page.on('dialog', async (dialog) => {

        // Print alert message  output: Press a button!
        console.log(`Confirmation message: ${dialog.message()}`)

        // Print alert type output: confirm
        console.log("Type: " + dialog.type())

        // Accept alert
        await dialog.accept()

    })

    // Switch to iframe
    const frame = page.frameLocator('#iframeResult')

    // Click Try it button
    await frame.getByRole('button', { name: 'Try it' }).click()

    // Verify displayed text
    await expect(frame.locator('#demo'))
        .toHaveText('You pressed OK!')

    // Print result text
    const text = await frame.locator('#demo').innerText()

    console.log(text)

})

