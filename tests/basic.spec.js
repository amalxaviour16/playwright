import { test, expect } from "@playwright/test";

test("Launch chrome browser any url", async function ({ browser }) {
  //passing browser as parameter
  //if there is no curly braces then it will identify as normal variable string or something

  const context = await browser.newContext();
  const page = await context.newPage();
  const page1 = await context.newPage(); //launch new page blank
  await page.goto("https://www.amazon.in/");
});

test.only("Another test", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/intro");
  console.log( await page.title())
  //test.only method will trigger only 1 test, if we dont want to inject or reuse previous sessions need not to mention context
  await expect(page).toHaveTitle('Installation | Playwright')

});
