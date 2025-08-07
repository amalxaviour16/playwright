import { test, expect } from "@playwright/test";
//const LoginPage = require("../page-objects/login-page.js");
import LoginPage from "../page-objects/login-page.js";
import loginData from "../test-data/login-data.json";

test("Login verification", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.launchUrl();
  await loginPage.login(loginData.username, loginData.password);
 // await page.waitForTimeout(5000);
});
