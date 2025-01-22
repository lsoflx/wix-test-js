import {Page} from '@playwright/test';
import {BasePage} from "./BasePage";

export class HomePage extends BasePage{

    private products = ".card";

    constructor(page: Page) {
        super(page);
    }

    async openFirstProduct() {
        await this.page.locator(this.products).first().click();
    }
}