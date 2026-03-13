import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

setDefaultTimeout(30000);

let browser: Browser;
let page: Page;

Before(async function() {
  browser = await chromium.launch();
  page = await browser.newPage();
  this.page = page;
});

After(async function() {
  if (page) {
    await page.close();
  }
  if (browser) {
    await browser.close();
  }
});
