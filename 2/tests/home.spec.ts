import { test, expect } from '@playwright/test';
import { General } from './page/general.page';
import { FormLogin } from './components/form-login';
import { configs } from '../configs';

test.describe('LinkedIn Login Form', () => {
    let loginPage: FormLogin;

    test.beforeEach(async ({ page }) => {
        const g = new General(page);
        await g.openSite(configs.URL);

        loginPage = new FormLogin(page);
    });

    test('verifies login form elements are visible and interactive', async ({ page }) => {
        await expect(loginPage.emailInput).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.submitButton).toBeVisible();
        
        await loginPage.emailInput.fill(configs.emailNotValid);
        await expect(loginPage.emailInput).toHaveValue(configs.emailNotValid);
    });

    test('shows validation for invalid credentials', async ({ page }) => {
        await loginPage.login(configs.emailNotValid, configs.passwordNotValid);
        
        // Check for Loader when email and pass are not correct
        const errorAlert = page.locator('#loader-wrapper');
        await expect(errorAlert).toBeVisible();
    });

    test('shows validation for empty email', async ({ page }) => {
        await loginPage.fillPassword(configs.passwordNotValid);
        await loginPage.submit()

        const errorField = page.locator('.login__form #error-for-username');
        await expect(errorField).toBeVisible();
        await expect(errorField).toContainText('Please enter an email address or phone number');
    });

    test('should allow toggling "Remember me" checkbox', async () => {
        await loginPage.toggleRememberMe();
        await expect(loginPage.rememberMeCheckbox).toBeChecked();
    });

    test('shows validation for empty password', async ({ page }) => {
        await loginPage.fillEmail(configs.emailNotValid);
        await loginPage.submit()

        const errorField = page.locator('.login__form #error-for-password');
        await expect(errorField).toBeVisible();
        await expect(errorField).toContainText('Please enter a password');
    });
})
