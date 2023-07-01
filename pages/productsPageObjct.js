import { expect } from "@playwright/test";
exports.ProductPage = class ProductPage {
    constructor(page) {

        this.page = page;
        this.product = page.getByRole('img').first()
        //this.addToCart = page.locator("//button[contains(text(),'Add to Cart')]")
        this.addToCart = page.getByRole('button', { name: ' Add To Cart' })

        this.viewButton = page.getByRole('button', { name: 'View' }).first()
        //this.cartContainer =  page.getByRole('button', { name: ' Cart 1' })
        this.cartContainer = page.locator("[routerlink*='cart']");

        this.ProductIsAdded = page.locator('//div[@class="cartSection"]')
        this.buyButton = page.getByRole('button', { name: 'Buy Now❯' })
        this.country = page.getByPlaceholder('Select Country')
        this.placeOrderButton = page.getByText('Place Order')
        this.removeProduct = page.getByRole('button', { name: '❯', exact: true })
        this.continueShop = page.getByRole('button', { name: 'Continue Shopping❯' })
        this.addProductCart = page.getByRole('button', { name: ' Add To Cart' }).nth(1)
        this.buyButton = page.getByRole('button', { name: 'Buy Now❯' })
        this.country = page.getByPlaceholder('Select Country')
        this.dropdown = page.locator(".ta-results");
        this.selectCountry = page.locator("//span[@class='ng-star-inserted']");
        this.placeOrder = page.getByText('Place Order')
        this.message = page.getByRole('heading', { name: 'Thankyou for the order.' })


    }
    async verifyProductPage() {
        //wait for the element is visible
        const checkElementVis = this.product
        await checkElementVis.waitFor({ state: "visible" })
        //assert that the element is visible 
        const productIconVisible = await this.product.isVisible();
        expect(productIconVisible).toBe(true);
    }


    async addProductsToCart() {
        await this.viewButton.click();
        const addToCartButton = await this.page.waitForSelector('button.btn.btn-primary', { state: 'visible' });
        await addToCartButton.click();
    }

    async checkProductsAdded() {
        await this.cartContainer.click();
        const checkElementVisible = this.ProductIsAdded
        await checkElementVisible.waitFor({ state: "visible" })
        const ProductIsAdded = await this.ProductIsAdded.isVisible();
        expect(ProductIsAdded).toBe(true);

    }
    async removeProductFromCart() {
        await this.removeProduct.click();
        const isProductAdded = await this.ProductIsAdded.isVisible();

        expect(isProductAdded).toBe(false);


    }

    async continueShopping() {
        await this.continueShop.click();

        const addProductCart = await this.addProductCart.isVisible();
        await this.addProductCart.click();
        await this.cartContainer.click();
        await this.buyButton.click();
        await this.country.click();
        await this.country.type('indo');
        const dropdown = this.dropdown;
        await dropdown.waitFor({ state: "visible" });

        const selectCountry = this.selectCountry;
        await selectCountry.waitFor({ state: "visible" });
        await this.selectCountry.click();
        await this.placeOrder.click()
        const message = await this.message.isVisible();
        expect(message).toBe(true);


    }

}