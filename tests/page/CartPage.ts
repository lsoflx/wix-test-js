import {expect, Page} from '@playwright/test';
import {BasePage} from "./BasePage";

export class CartPage extends BasePage {

    private cartProducts = ".success";

    constructor(page: Page) {
        super(page);
    }

    async verifyCartHasProducts(numberOfCartProducts: number) {
        let elements = this.page.locator(this.cartProducts);
        await elements.waitFor({ state: 'visible' });
        let count = await elements.count();

        expect(count).toBe(numberOfCartProducts);
    }
}