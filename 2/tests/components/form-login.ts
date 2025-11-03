import { Locator, Page } from '@playwright/test';
import { configs } from '../../configs';

export class FormLogin {
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly rememberMeCheckbox: Locator
    readonly errorMessage: Locator

    constructor(page: Page) {
        this.emailInput = page.locator(configs.emailEl)
        this.passwordInput = page.locator(configs.passEl)
        this.submitButton =  page.getByRole('button', { name: 'Sign in', exact: true });
        this.rememberMeCheckbox = page.getByRole('checkbox', { name: /logged in/i });
        this.errorMessage = page.locator('.form__label--error');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.submitButton.click()
    }

    async fillEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async toggleRememberMe(): Promise<void> {
        await this.rememberMeCheckbox.check();
    }

    async submit(): Promise<void> {
        await this.submitButton.click();
    }

    async getErrorText(): Promise<string | null> {
        return this.errorMessage.textContent();
    }
}