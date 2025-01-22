import {expect, Page} from "@playwright/test";
import {BasePage} from "./BasePage";


export class LoginPage extends BasePage {

    private nameInput = "#loginusername";
    private passInput = "#loginpassword";
    private loginButton = "[onclick=\"logIn()\"]";

    constructor(page: Page) {
        super(page);
    }

    async inputName(name: string) {
        await this.page.fill(this.nameInput, name);
    }

    async inputPass(pass: string) {
        await this.page.fill(this.passInput, pass);
    }

    async clickLogin() {
        await this.page.click(this.loginButton);
    }

    async verifyUserDoesNotExistAlert() {
        this.page.on('dialog', async (dialog) => {
            expect(dialog.message()).toBe('User does not exist.');
        });
    }
}