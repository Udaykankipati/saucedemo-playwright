const {test,expect}=require("@playwright/test")

const { login } =require('../pages/login')
const { home } =require('../pages/home')
const {cart}= require('../pages/cart')

test('swag labs',async({page})=>{
   /* await page.goto("/");
    await page.locator("#user-name").fill('standard_user');
    await page.locator("#password").fill('secret_sauce');
    await page.locator("#login-button").click();

    await page.locator(".product_sort_container").selectOption({value:'lohi'})*/

    const loginPom=new login(page)

    await loginPom.gotoPage()
    await loginPom.loginPage('standard_user','secret_sauce')

    await page.waitForTimeout(2000)

    const homePom=new home(page)
    await homePom.homePage()

    await page.waitForTimeout(3000)

    const cartPom=new cart(page)
    await cartPom.cartPage('sam','bence','12345')


    await page.waitForTimeout(5000);

})