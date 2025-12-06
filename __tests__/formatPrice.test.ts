import { formatPrice } from "@/app/utils/formatPrice";


test("NORMAL: formats price correctly", () => {
  expect(formatPrice(15000)).toBe("15,000");
});

test("CASE 1: formats large numbers", () => {
  expect(formatPrice(2500000)).toBe("2,500,000");
});

test("CASE 2: formats zero", () => {
  expect(formatPrice(0)).toBe("0");
});

test("CASE 3: handles NaN input", () => {
  expect(formatPrice(NaN)).toBe("0");
});

test("CASE 4: handles null input", () => {
  expect(formatPrice(null)).toBe("0");
});

test("CASE 5: handles undefined input", () => {
  expect(formatPrice(undefined)).toBe("0");
});

test("CASE 6: handles string number", () => {
  expect(formatPrice("15000")).toBe("15,000");
});

