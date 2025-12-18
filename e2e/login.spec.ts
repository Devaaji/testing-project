// e2e/login.spec.ts
import { test } from "@playwright/test";

test("SIMPLE: user can login successfully", async ({ page }) => {
  // Open the login page
  await page.goto("/login");

  // Fill in the login form
  await page.getByPlaceholder("Email").fill("user@test.com");
  await page.getByPlaceholder("Password").fill("password123");

  // Submit the form
  await page.getByRole("button", { name: "Login" }).click();
});
