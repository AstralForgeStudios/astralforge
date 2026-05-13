// src/lib/site.ts

import { APP_NAME, APP_DOMAIN, SITE_METADATA } from "@/global";

/**
 * Core site configuration + helpers
 */

// =========================
// Site Info
// =========================
export const siteConfig = {
  name: APP_NAME,
  domain: APP_DOMAIN,
  description: SITE_METADATA.description
} as const;

// =========================
// Full URL Builder
// =========================
export function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return process.env.NEXT_PUBLIC_MAIN_URL || `https://${APP_DOMAIN}`;
}

// =========================
// Build full URL from path
// =========================
export function absoluteUrl(path: string): string {
  const base = getBaseUrl();
  return `${base}${path}`;
}

// =========================
// Metadata (Next.js)
// =========================
export function getSiteMetadata() {
  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    metadataBase: new URL(`https://${APP_DOMAIN}`)
  };
}

// =========================
// Simple page title helper
// =========================
export function formatTitle(title?: string): string {
  if (!title) return siteConfig.name;
  return `${title} | ${siteConfig.name}`;
}