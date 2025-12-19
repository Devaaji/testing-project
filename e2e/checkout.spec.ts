// e2e/checkout.spec.ts
import { test, expect } from "@playwright/test";

test("MEDIUM E2E: user can checkout when cart has items", async ({ page }) => {
  // 1. Open products page
  await page.goto("/products");

  // 2. Add item to cart
  await page.getByRole("button", { name: "Add to Cart" }).click();

  // 3. Go to cart with state
  await page.goto("/cart?items=1");

  // 4. Verify cart state
  await expect(
    page.getByText("Items in cart: 1")
  ).toBeVisible();

  // 5. Verify checkout button enabled (TS-safe)
  const checkoutButton = page.getByRole("button", { name: "Checkout" });

  await expect(checkoutButton).toBeVisible();
  expect(await checkoutButton.isEnabled()).toBe(true);

  // 6. Checkout
  await checkoutButton.click();

  // 7. Verify success page
  await expect(
    page.getByRole("heading", { name: "Checkout Successful" })
  ).toBeVisible();
});
