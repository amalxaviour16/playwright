import { test, expect } from "@playwright/test";
//const LoginPage = require("../page-objects/login-page.js");
import LoginPage from "../page-objects/login-page.js";
import HomePage from "../page-objects/home-page.js";
import loginData from "../test-data/login-data.json";

test.describe("Full flow of adding admin user", () => {
  test("Login as Admin", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.launchUrl();
    await loginPage.login(loginData.username, loginData.password);
    // await page.waitForTimeout(5000);
    await expect(homePage.$profileName).toBeVisible();
  });
});
