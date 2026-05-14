import { Page, expect } from '@playwright/test';

export class SCLoginPage {

    constructor(private page: Page) {}

    // Locators
    usernameInput = '#usernameInput-input';
    passwordInput = '#password-input';
    signInButton = '#signIn';

    errorMessage = "Sorry, we couldn't complete your request";
    doneButton = this.page.getByRole('button', { name: 'Done' });

    // Methods
    async goto() {
        await this.page.goto('https://www.scotiaonline.scotiabank.com/');
        await this.page.pause();
    }

    async login(username: string, password: string) {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.signInButton).click();
    }

    async verifyInvalidLoginMessage() {
        await expect(
            this.page.getByText(this.errorMessage)
        ).toBeVisible();

        await expect(this.doneButton).toBeVisible();
    }

    async clickDone() {
        await this.doneButton.click();
    }
}