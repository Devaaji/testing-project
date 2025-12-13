// components/LoginForm.tsx
"use client";
import { useState } from "react";

export function LoginForm({
  onLogin,
}: {
  onLogin: (email: string) => Promise<boolean>;
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    if (!email) {
      setError("Email is required");
      return;
    }

    const success = await onLogin(email);

    if (!success) {
      setError("Login failed");
    } else {
      setError("");
    }
  }

  return (
    <div>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>

      {error && <p role="alert">{error}</p>}
    </div>
  );
}
