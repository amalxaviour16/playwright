import { test, expect } from "@playwright/test";
//const LoginPage = require("../page-objects/login-page.js");
import AdminUser from "../page-objects/adminuser-page.js";
import LoginPage from "../page-objects/login-page.js";
import HomePage from "../page-objects/home-page.js";
import loginData from "../test-data/login-data.json";

let page;
let context;

test.describe.serial("End to end script to create admin user", () => {
  test("Login as Admin", async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.launchUrl();
    await loginPage.login(loginData.username, loginData.password);
    // await page.waitForTimeout(5000);
    await expect(homePage.$profileName).toBeVisible();
  });

  test("Navigate to admin user page", async () => {
    const adminUserPage = new AdminUser(page);
    await adminUserPage.clickAdminUser();
  });

  test("Click on New button", async () => {
    const adminUserPage = new AdminUser(page);
    await adminUserPage.clickNewUser();
  });

  test("create user", async () => {
    const adminUserPage = new AdminUser(page);
    await adminUserPage.fillDetails("palywright", "playwright", "Partner");
  });

  test("Click on Save button", async () => {
    const adminUserPage = new AdminUser(page);
    await adminUserPage.clickSaveButton();
    await page.waitForTimeout(5000);
  });
});
