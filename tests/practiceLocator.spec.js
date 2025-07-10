import test from "@playwright/test";

test("practice locator", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
   await page.locator('*//[@name="user-name"]').fill("standard_user"); // using XPath dout
  await page.locator('[name="user-name"]').fill("standard_user"); // using id dout
  await page.locator("input#password").fill("secret_sauce"); //using id attribute
  await page.locator(".submit-button").click(); //using class attribute
  await page.locator("text='Sauce Labs Backpack'").click(); //using text
});

//  for locator with second argument

test("practice locator second argument", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator(".form_group", { has: page.locator("input#user-name") }).click();
  await page.locator(".form_group", { has: page.locator("input#user-name") }).pressSequentially("standard_user");

  await page.locator(".form_group", { hasNot: page.locator("input#user-name") }).click();
  await page.locator(".form_group", { hasNot: page.locator("input#user-name") }).pressSequentially("secret_sauce");

  await page.locator(".submit-button").click();

  await page.locator("//a", { hasText: "Sauce Labs Backpack" }).click(); //this is a part of xpath
  await page.locator(".inventory_item_name", { hasNotText: "/Sauce.*/" });
});

//get by methods

test("get by methods", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/login");
  await page.getByLabel("Email:",{exact:true}).fill("testcodeautomate@gmail.com");//get by label
  await page.getByPlaceholder("Search store").fill("Mobile")
});
