// app/login/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/dashboard"); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}
