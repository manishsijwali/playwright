import test, { expect } from "@playwright/test";

test("hello", async ({ page }) => {
  await page.goto("https://sandbox.guardrail.tech/Dashboard");

  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("qatest1@brevir.com");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("qatest1@brevir.com");
  await page.getByRole("button", { name: "Sign In" }).click();
  await page
    .getByRole("textbox", { name: "Password" })
    .fill("^J420Qe5Cu!AwOM7!!p4");
  await page.getByRole("button", { name: "Show password" }).click();
  await page.getByRole("button", { name: "Sign In" }).click();

  await expect(page.getByRole("paragraph")).toContainText(
    "How can AI help you today?"
  );
});
