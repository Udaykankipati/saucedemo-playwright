const { test, expect } = require('@playwright/test');
const { login } = require('../pages/login');
const { home } = require('../pages/home');
const { cart } = require('../pages/cart');

test('Swag Labs E2E Flow', async ({ page }) => {

  // Step 1: Login
  const loginPom = new login(page);
  await loginPom.gotoPage();
  await loginPom.loginPage('standard_user', 'secret_sauce');

  // Assert login success by checking a homepage element
  await expect(page.locator('.product_sort_container')).toBeVisible();

  // Step 2: Add product to cart
  const homePom = new home(page);
  await homePom.homePage();

  // Assert product added
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Step 3: Checkout
  const cartPom = new cart(page);
  await cartPom.cartPage('Sam', 'Bence', '12345');

  // Assert order completed
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  //checking after long time 😉
  console.log('adding commits for rebase')
  console.log('added another commit')

  console.log('hello bro')

  console.log('adding 1st rebase commit')
});
