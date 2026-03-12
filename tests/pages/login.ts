import {Page, Locator, expect} from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly pagetitle : Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.pagetitle = page.locator(".login_logo");
        this.usernameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator("#login-button");
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async navigate(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async fillUsername(username:string){
        await this.usernameInput.fill(username);
    }
    
    async fillPassword(password:string){
        await this.passwordInput.fill(password);
    }

    async login(){
        await this.loginButton.waitFor({ state: 'visible' });
        await this.loginButton.click({ force: true });
    }

    async verifyErrorMessage(expectedMessage: string){
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText(expectedMessage);
    }
}