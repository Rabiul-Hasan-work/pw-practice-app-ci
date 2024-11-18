import {test, expect} from '@playwright/test'


test('input fields', async({page}, testInfo) => {
    await page.goto('/')
    if(testInfo.project.name == 'mobile'){
        await page.locator('.sidebar-toggle').click()
    }
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
    if(testInfo.project.name == 'mobile'){
        await page.locator('.sidebar-toggle').click()
    }
    const usingTheGridEmailInput = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"})
    await usingTheGridEmailInput.fill('test@test.com')
    await usingTheGridEmailInput.clear()
    await usingTheGridEmailInput.pressSequentially('test2@test.com')

    //generic assertion
    const inputValue = await usingTheGridEmailInput.inputValue()
    expect(inputValue).toEqual('test2@test.com')

    //locator assertion
    await expect(usingTheGridEmailInput).toHaveValue('test2@test.com')
    
})