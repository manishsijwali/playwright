import { test, expect } from "@playwright/test";

test("my first", async ({ page }) => {
  await page.goto("https://google.com");
  await expect(page).toHaveTitle("Google");
});
