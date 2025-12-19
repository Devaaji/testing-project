// app/products/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();

  return (
    <main>
      <h1>Products</h1>

      <button
        onClick={() => router.push("/cart?items=1")}
      >
        Add to Cart
      </button>

      <br />
      <a href="/cart">Go to Cart</a>
    </main>
  );
}
