import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/productsPageObjct'
import { LoginPage } from '../pages/login'


test.beforeEach(async ({ page }) => {

    const Login = new LoginPage(page);
    await Login.gotoLoginPage()
    await Login.login('tghada0211@gmail.com', '123456789')
});
test('test', async ({ page }) => {
    const Product = new ProductPage(page)
    await Product.verifyProductPage()
    await page.pause()

    await Product.addProductsToCart()
    await Product.checkProductsAdded()
    await page.pause()

    await Product.removeProductFromCart()

    await Product.continueShopping()

}

);
