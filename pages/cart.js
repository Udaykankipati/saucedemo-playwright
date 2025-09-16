const { expect } = require('@playwright/test')
exports.cart=
class cart{
    constructor(page){
        this.page=page
        this.cartBtn=".shopping_cart_link"
        this.itemname=".inventory_item_name"
        this.checkout="#checkout"
        this.firstname="#first-name"
        this.lastname="#last-name"
        this.postal="#postal-code"
        this.continue="#continue"
        this.finish="#finish"
        this.thank=".complete-header"
    }

    async cartPage(firstname,lastname,postal){
        await this.page.locator(this.cartBtn).click()

        await expect(this.page.locator(this.itemname)).toHaveText("Sauce Labs Bike Light")

        await this.page.locator(this.checkout).click()

        await this.page.locator(this.firstname).fill(firstname)
        await this.page.locator(this.lastname).fill(lastname)
        await this.page.locator(this.postal).fill(postal)

        await this.page.locator(this.continue).click()
        await this.page.locator(this.finish).click()

        await expect(this.page.locator(this.thank)).toHaveText("Thank you for your order!")
    }
}