import { test, expect } from "@playwright/test";

test("Launch chrome browser any url", async function ({ browser }) {
  //passing browser as parameter
  //if there is no curly braces then it will identify as normal variable string or something

  const context = await browser.newContext();
  const page = await context.newPage();
  const page1 = await context.newPage(); //launch new page blank
  await page.goto("https://www.amazon.in/");
  await page1.goto("https://www.flipkart.com/");

  //Run command npx playwright test
});

test("Another test", async ({ page }) => {
  //If we dont have no properties to add  if we want to open blank context do as above pass page as paramter
  await page.goto("https://playwright.dev/docs/intro");
  console.log(await page.title());
  //test.only method will trigger only 1 test, if we dont want to inject or reuse previous sessions need not to mention context
  await expect(page).toHaveTitle("Installation | Playwright");
});

test("Locators,GetText", async ({ page }) => {
  //TO Enter value use $locator.fill()
  //Get text -> $locator.textContent()
  //array of element $$locatorName.locator('xpath').nth(0);
  //array of element $$locatorName.locator('xpath').first();
  // $$locatorArrayName.allTextConetnts() -> will give an array of all elements
  //$locator.isChecked() -> returns true if selected already else false
  //$locator.check() , $locator.unCheck() -> to select or not select radio/checkbox by checking its state

  await page.goto("https://demo.guru99.com/test/radio.html");
  let $radioButton = page.locator('//input[@value="Option 1"]');
  let $textContent = page.locator(
    '//strong[contains(text(),"Radio")]//parent::div'
  );
  await $radioButton.click();
  console.log("Content " + (await $textContent.textContent()));
});

test("Select DropDown/Screenshot", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  let $dropDown = page.locator('//select[@id="searchDropdownBox"]');
  await $dropDown.selectOption("Amazon Pharmacy");
  await $dropDown.selectOption("search-alias=appliances");
  await page.screenshot({ path: "scrshot.png" });
  await $dropDown.screenshot({ path: "elementImage.png" });
  //await page.pause();
});

test("Window switching", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/windows");
  let $clickHere = page.locator('//a[contains(text(),"Click Here")]');

  const [newPageOpened] = await Promise.all([
    context.waitForEvent("page"),
    $clickHere.click(),
  ]);
  //promise.all method return array
  let $newWindow = await newPageOpened.locator(
    '//h3[contains(text(),"New Window")]'
  );
  await $newWindow.waitFor();
  console.log("New Window content " + (await $newWindow.textContent()));
});

test("Locator All Text contents,Inner Text", async ({ page }) => {
  let arrayMenus = [],
    textDt = [];
  await page.goto("https://selenium.qabible.in/simple-form-demo.php");
  let $allMenu = page.locator('//div[@id="collapsibleNavbar"]//ul//a');
  await $allMenu.nth(0).waitFor();
  let allMenus = await $allMenu.allTextContents();
  let textDatas = await $allMenu.allInnerTexts(); //Dont retrieve spaces before and after texts
  allMenus = allMenus.map((item) => item.trim());

  for (let i = 0; i < (await $allMenu.count()); i++) {
    arrayMenus.push(await $allMenu.nth(i).textContent());
    textDt.push(await $allMenu.nth(i).innerText());
  }
  //$locator.innerText()   method will fetch only text will not fetch white space before and after
  await console.log(arrayMenus);
  await console.log(textDt);
});

test("Visual Testing", async ({ page }) => {
  await page.goto("https://selenium.qabible.in/simple-form-demo.php");
  //expect(screenshot).toMatchSnapshot('homepage-custom.png', {
  //   threshold: 0.2, // Allows 20% difference
  // });
  expect(await page.screenshot()).toMatchSnapshot("visual1.png");
});
