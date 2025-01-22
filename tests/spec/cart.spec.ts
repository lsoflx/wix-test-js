import {test} from '@playwright/test';
import {NavBarComponent} from "../component/NavBarComponent";
import {CartPage} from "../page/CartPage";
import {HomePage} from "../page/HomePage";
import {ProductPage} from "../page/ProductPage";

test('Should Add Product To Cart', async ({ page }) => {
    const navBarComponent = new NavBarComponent(page);
    const cartPage = new CartPage(page);
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    await page.goto('/');
    await homePage.openFirstProduct();
    await productPage.addToCart();
    await productPage.acceptProductAddedToCartAlert();
    await navBarComponent.openCart();

    await cartPage.verifyCartHasProducts(1);
});