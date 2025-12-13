// /components/SearchBox.tsx
"use client";
import { useState } from "react";

export function SearchBox({ onSearch }: { onSearch: (q: string) => void }) {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        placeholder="Search..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={() => onSearch(value)}>Search</button>
    </div>
  );
}