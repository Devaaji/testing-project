// app/cart/page.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function CartPage() {
  const params = useSearchParams();
  const router = useRouter();

  const items = Number(params.get("items") ?? 0);
  const isCheckoutDisabled = items === 0;

  return (
    <main>
      <h1>Cart</h1>

      <p>Items in cart: {items}</p>

      <button
        disabled={isCheckoutDisabled}
        onClick={() => router.push("/checkout/success")}
      >
        Checkout
      </button>
    </main>
  );
}
