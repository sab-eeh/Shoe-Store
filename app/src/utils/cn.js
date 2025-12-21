// Very small className helper.
// Usage: cn("a", condition && "b", "c") -> "a b c"
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
