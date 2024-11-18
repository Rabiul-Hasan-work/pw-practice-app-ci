// import {test, expect} from '@playwright/test'
import {test} from '../test-options'

import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker'


// test.beforeEach(async({page}) => {
//     await page.goto('/')
// })

test('parametrized methods', async({pageManager}) => {
    // const pm = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ','')}${faker.number.int(1000)}@test.com`

    // await pm.navigateTo().formLayoutsPage()
    // await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentidalsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 2')
    // await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true)
    await pageManager.navigateTo().formLayoutsPage()
    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentidalsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 2')
    await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true)
})
