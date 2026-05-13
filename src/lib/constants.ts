// src/lib/constants.ts

/**
 * App-wide constants (non-domain-specific)
 * Do NOT duplicate values from global.ts
 */

// =========================
// Storage Keys
// =========================
export const STORAGE_KEYS = {
  session: "astralforge.session",
  theme: "astralforge.theme"
} as const;

// =========================
// Time Constants
// =========================
export const TIME = {
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000
} as const;

// =========================
// Pagination Defaults
// =========================
export const PAGINATION = {
  defaultPage: 1,
  defaultLimit: 10,
  maxLimit: 50
} as const;

// =========================
// UI Constants
// =========================
export const UI = {
  maxContainerWidth: "1280px",
  borderRadius: "0.75rem"
} as const;

// =========================
// Roles (for quick checks)
// =========================
export const ROLES = {
  guest: "guest",
  player: "player",
  admin: "admin",
  owner: "owner"
} as const;

// =========================
// Content Types
// =========================
export const CONTENT_TYPES = {
  campaign: "campaign",
  blog: "blog",
  product: "product",
  media: "media"
} as const;

// =========================
// Publish Status
// =========================
export const PUBLISH_STATUS = {
  draft: "draft",
  review: "review",
  published: "published",
  archived: "archived"
} as const;