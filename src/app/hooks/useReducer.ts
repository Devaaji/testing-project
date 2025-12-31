//app/hooks/useReducer.ts
import { useState } from "react";

export function useCounter() {
  const [value, setValue] = useState(0);

  return {
    value,
    increment: () => setValue(v => v + 1),
    decrement: () => setValue(v => v - 1),
    reset: () => setValue(0),
  };
}
