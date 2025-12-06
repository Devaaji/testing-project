import { useCounter } from "@/app/hooks/useReducer";
import { renderHook, act } from "@testing-library/react";

test("CASE 1: has initial value = 0", () => {
  const { result } = renderHook(() => useCounter());
  expect(result.current.value).toBe(0);
});

test("CASE 2: increments value", () => {
  const { result } = renderHook(() => useCounter());
  act(() => result.current.increment());
  expect(result.current.value).toBe(1);
});

test("CASE 3: decrements value", () => {
  const { result } = renderHook(() => useCounter());
  act(() => result.current.decrement());
  expect(result.current.value).toBe(-1);
});

test("CASE 4: resets value", () => {
  const { result } = renderHook(() => useCounter());
  
  act(() => {
    result.current.increment();
    result.current.increment();
    result.current.reset();
  });

  expect(result.current.value).toBe(0);
});
