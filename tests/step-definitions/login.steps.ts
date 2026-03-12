import {Given, When, Then} from "@cucumber/cucumber";
import {test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";


Given ('user is on the login page',async function(){
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.navigate();
});

When ('user enters valid credentials', async function(){
    this.loginPage = new LoginPage(this.page);
    if (!this.loginPage){
        throw new Error ('loginPage is not initialized.');
    }
    const valid_username = process.env.VALID_USER_USERNAME!;
    const valid_password = process.env.VALID_USER_PASSWORD!;

    await this.loginPage.fillUsername(valid_username);
    await this.loginPage.fillPassword(valid_password);
    await this.loginPage.login();
});

Then('user should land on inventory page', async function(){
    await expect(this.page).toHaveURL(/\/inventory/, { timeout: 1500 });
});

When ('user enters invalid credentials', async function(){
    if (!this.loginPage){
        throw new Error ('loginPage is not initialized.');
    }
    const invalid_username = process.env.INVALID_USER_USERNAME!;
    const invalid_password = process.env.INVALID_USER_PASSWORD!;

    await this.loginPage.fillUsername(invalid_username);
    await this.loginPage.fillPassword(invalid_password);
    await this.loginPage.login();
});

Then ('user should get the error message', async function(){
    await this.loginPage.verifyErrorMessage('Epic sadface');
})


