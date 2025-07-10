import test from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://dev-auth.guardrail.tech");
  await page.getByRole("textbox", { name: "Username" }).fill("student");
  await page.getByRole("textbox", { name: "Password" }).fill("Password123");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByRole("heading", { name: "Logged In Successfully" }).click();
  await page.getByRole("link", { name: "Log out" }).click();
});
