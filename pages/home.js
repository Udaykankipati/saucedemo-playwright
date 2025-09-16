const { expect } = require('@playwright/test');
exports.home=
class home{
    constructor(page){
        this.page=page
        this.dropdown=".product_sort_container"
        this.addcart="#add-to-cart-sauce-labs-bike-light"
        this.remove="#remove-sauce-labs-bike-light"
        this.iconupdate=".shopping_cart_badge"
    }

    async homePage(){
        await this.page.locator(this.dropdown).selectOption({value:'lohi'})
        await this.page.locator(this.addcart).click()

        const remove=await this.page.locator(this.remove)
        await expect(remove).toBeVisible()
        //const value=await this.page.locator(this.iconupdate).textContent()
        await expect(this.page.locator(this.iconupdate)).toHaveText('1')
    }
}