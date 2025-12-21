// app/form/review/page.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function ReviewPage() {
  const params = useSearchParams();
  const router = useRouter();

  const name = params.get("name");
  const address = params.get("address");

  return (
    <main>
      <h1>Review Information</h1>

      <p>Name: {name}</p>
      <p>Address: {address}</p>

      <button onClick={() => router.push("/form/success")}>
        Submit
      </button>
    </main>
  );
}