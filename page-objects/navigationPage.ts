    import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

    export class NavigationPage extends HelperBase{

        // readonly page: Page
        // readonly FromLayoutMenuItem: Locator
        // readonly datePickerMenuItem: Locator
        // readonly smartTableMenuItem: Locator
        // readonly toastrMenuItem: Locator
        // readonly tooltipmenuItem: Locator

        constructor(page: Page){
            super(page)
            // this.page = page
            // this.FromLayoutMenuItem = page.getByText('Form Layouts')
            // this.datePickerMenuItem = page.getByText('Datepicker')
            // this.smartTableMenuItem = page.getByText('Smart Table')
            // this.toastrMenuItem = page.getByText('Toastr')
            // this.tooltipmenuItem = page.getByText('Tooltip')
        }

        async formLayoutsPage(){
            // await this.selectGroupMenuItem('Forms')
            await this.page.getByText('Forms').click()
            await this.page.getByText('Form Layouts').click()
            await this.waitForNumberOfSeconds(2) 
            // await this.FromLayoutMenuItem.click()
        }

        async datepickerPage(){
            // await this.selectGroupMenuItem('Forms')
            // await this.page.waitForTimeout(1000)
            await this.page.getByText('Datepicker').click() 
            // await this.datePickerMenuItem.click()
        }

        async smartTablePage(){
            // await this.selectGroupMenuItem('Tables & Data')
            await this.page.getByText('Tables & Data').click()
            await this.page.getByText('Smart Table').click() 
            // await this.smartTableMenuItem.click()
        }
        
        async toastrPage(){
            // await this.selectGroupMenuItem('Modal & Overlays')
            await this.page.getByText('Modal & Overlays').click()
            await this.page.getByText('Toastr').click() 
            // await this,this.toastrMenuItem.click()
        }

        async tooltipPage(){
            // await this.selectGroupMenuItem('Modal & Overlays')
            await this.page.getByText('Modal & Overlays').click()
            await this.page.getByText('Tooltip').click() 
            // await this.tooltipmenuItem.click()
        }

        private async selectGroupMenuItem(groupItemTittle: string){
            const groupMenuItem = this.page.getByTitle(groupItemTittle)
            const expandedState = await groupMenuItem.getAttribute('aria-expanded')
            if(expandedState == "false")
                await groupMenuItem.click()
        }

    }