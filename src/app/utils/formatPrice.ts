export function formatPrice(
  value: number | string | null | undefined
): string {
  // If the value is null or undefined, treat it as empty
  if (value == null) return "0";

  // Convert whatever we get into a number
  const numericValue = Number(value);

  // If the conversion fails (NaN), return "0" safely
  if (isNaN(numericValue)) return "0";

  // Otherwise, return the number formatted with commas
  return numericValue.toLocaleString("en-US");
}
