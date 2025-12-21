// app/form/step-2/page.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function StepTwoPage() {
  const params = useSearchParams();
  const router = useRouter();

  const name = params.get("name");
  const [address, setAddress] = useState("");

  return (
    <main>
      <h1>Step 2: Address</h1>

      <p>Name: {name}</p>

      <input
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button
        disabled={!address}
        onClick={() =>
          router.push(`/form/review?name=${name}&address=${address}`)
        }
      >
        Review
      </button>
    </main>
  );
}
