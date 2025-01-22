import {Page} from '@playwright/test';
import {BasePage} from "./BasePage";

export class ProductPage extends BasePage {

    private addToCartButton = ".btn-lg";

    constructor(page: Page) {
        super(page);
    }

    async addToCart() {
        await this.page.waitForSelector(this.addToCartButton, { state: 'visible' });
        await this.page.click(this.addToCartButton);
    }

    async acceptProductAddedToCartAlert() {
        this.page.on('dialog', async (dialog) => {
            await dialog.accept();
        });
    }
}