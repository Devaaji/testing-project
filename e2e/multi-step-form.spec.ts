// e2e/multi-step-form.spec.ts
import { test, expect } from "@playwright/test";

test("COMPLEX E2E: user can complete multi-step form", async ({ page }) => {
  const testName = "Edward";
  const testAddress = "Tokyo, Japan";

  // Step 1
  await page.goto("/form/step-1");
  await page.getByPlaceholder("Full Name").fill(testName);
  await page.getByRole("button", { name: "Next" }).click();

  // Step 2
  await page.getByPlaceholder("Address").fill(testAddress);
  await page.getByRole("button", { name: "Review" }).click();

  // Review
  await expect(
    page.getByText(`Name: ${testName}`)
  ).toBeVisible();

  await expect(
    page.getByText(`Address: ${testAddress}`)
  ).toBeVisible();

  // Submit
  await page.getByRole("button", { name: "Submit" }).click();

  // Success
  await expect(
    page.getByRole("heading", {
      name: "Form Submitted Successfully",
    })
  ).toBeVisible();
});
