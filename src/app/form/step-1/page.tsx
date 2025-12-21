// app/form/step-1/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StepOnePage() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <main>
      <h1>Step 1: Personal Information</h1>

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        disabled={!name}
        onClick={() => router.push(`/form/step-2?name=${name}`)}
      >
        Next
      </button>
    </main>
  );
}