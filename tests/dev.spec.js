import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://sandbox.guardrail.tech/Dashboard");
  await page.getByRole("textbox", { name: "Email" }).fill("qatest1@brevir.com");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page
    .getByRole("textbox", { name: "Password" })
    .fill("^J420Qe5Cu!AwOM7!!p4");
  await page.getByRole("button", { name: "Sign In" }).click();
  await page.goto("https://dev-auth.guardrail.tech/realms/guardrail/account");
});
