import {Page} from '@playwright/test';
import {BasePage} from "../page/BasePage";

export class NavBarComponent extends BasePage {

    private cart = "#cartur";
    private login = "#login2";

    constructor(page: Page) {
        super(page);
    }

    async openCart() {
        await this.page.click(this.cart);
    }

    async openLogin() {
        await this.page.click(this.login);
    }
}