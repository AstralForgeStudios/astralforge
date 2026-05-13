// src/lib/utils.ts

/**
 * General utility helpers
 */

// =========================
// Class Name Combiner
// =========================
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// =========================
// Format Date
// =========================
export function formatDate(date: string | Date): string {
  const d = new Date(date);

  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

// =========================
// Slugify (for URLs)
// =========================
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// =========================
// Capitalize
// =========================
export function capitalize(input: string): string {
  if (!input) return "";
  return input.charAt(0).toUpperCase() + input.slice(1);
}

// =========================
// Truncate Text
// =========================
export function truncate(input: string, length = 100): string {
  if (input.length <= length) return input;
  return input.slice(0, length) + "...";
}

// =========================
// Safe JSON Parse
// =========================
export function safeJsonParse<T>(value: string | null): T | null {
  if (!value) return null;

  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

// =========================
// Delay (useful for mocks)
// =========================
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// =========================
// Check if running in browser
// =========================
export function isBrowser(): boolean {
  return typeof window !== "undefined";
}