import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker'
import { argosScreenshot } from "@argos-ci/playwright";
// import { NavigationPage } from '../page-objects/navigationPage'
// import { FormLayoutsPage } from '../page-objects/formLayoutsPage'
// import { DatepickerPage } from '../page-objects/datepickerPage'

test.beforeEach(async({page}) => {
    await page.goto('/')
})

test('navigate to form page @smoke', async({page}) => {
    const pm = new PageManager(page)
    // const navigateTo = new NavigationPage(page)
    await pm.navigateTo().formLayoutsPage()
    await argosScreenshot(page, "formLayoutsPage");
    await pm.navigateTo().datepickerPage()
    await argosScreenshot(page, "datepickerPage");
    await pm.navigateTo().smartTablePage()
    await argosScreenshot(page, "smartTablePage");
    await pm.navigateTo().toastrPage()
    await argosScreenshot(page, "toastrPage");
    await pm.navigateTo().tooltipPage()
    await argosScreenshot(page, "tooltipPage");
})


// test('parametrized methods @smoke', async({page}) => {
//     const pm = new PageManager(page)
//     // const navigateTo = new NavigationPage(page)
//     // const onFormLayoutsPage = new FormLayoutsPage(page)
//     // const onDatepickerPage = new DatepickerPage(page)()
//     const randomFullName = faker.person.fullName()
//     const randomEmail = `${randomFullName.replace(' ','')}${faker.number.int(1000)}@test.com`

//     await pm.navigateTo().formLayoutsPage()
//     await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentidalsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 2')

//     // await page.screenshot({path: 'screenshots/formsLayoutsPage.png'})
//     // const buffer = await page.screenshot()
//     // console.log(buffer.toString('base64'))

//     await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true)

//     // await page.locator('nb-card', {hasText: "Inline form"}).screenshot({path: 'screenshots/inlineForm.png'})
//     // // await pm.navigateTo().datepickerPage()
//     // await pm.onDatepickerPage().selectCommonDatepickerDateFromToday(5)
//     // await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 15)
// })


// test.only('testing with argos ci', async({page}) => {
//     const pm = new PageManager(page)
//     // const navigateTo = new NavigationPage(page)
//     await pm.navigateTo().formLayoutsPage()
//     await pm.navigateTo().datepickerPage()
// })