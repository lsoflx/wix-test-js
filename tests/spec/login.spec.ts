import {test} from '@playwright/test';
import {NavBarComponent} from "../component/NavBarComponent";
import {LoginPage} from "../page/LoginPage";

test('Should Alert On Invalid Name And Pass', async ({ page }) => {
    const navBarComponent = new NavBarComponent(page);
    const loginPage = new LoginPage(page);

    await page.goto('/');
    await navBarComponent.openLogin();
    await loginPage.inputName("INVALID_NAME");
    await loginPage.inputPass("INVALID_PASS");
    await loginPage.clickLogin();

    await loginPage.verifyUserDoesNotExistAlert();
});