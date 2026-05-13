// src/global.ts
import type { Route } from "next";

export const APP_NAME = "AstralForge";
export const APP_DOMAIN = "astralforge.studio";

export const SUBDOMAINS = {
  main: APP_DOMAIN,
  accounts: "accounts.astralforge.studio",
  admin: "admin.astralforge.studio",
  api: "api.astralforge.studio",
  codex: "codex.astralforge.studio",
  mail: "mail.astralforge.studio",
  play: "play.astralforge.studio",
  shop: "shop.astralforge.studio"
} as const;

export const SITE_URLS: Record<
  "home" | "about" | "contact" | "reviews" | "privacy" | "terms",
  Route
> = {
  home: "/",
  about: "/about",
  contact: "/contact",
  reviews: "/reviews",
  privacy: "/legal/privacy",
  terms: "/legal/tos"
};

export const EXTERNAL_URLS = {
  accounts: `https://${SUBDOMAINS.accounts}`,
  admin: `https://${SUBDOMAINS.admin}`,
  api: `https://${SUBDOMAINS.api}`,
  codex: `https://${SUBDOMAINS.codex}`,
  mail: `https://${SUBDOMAINS.mail}`,
  play: `https://${SUBDOMAINS.play}`,
  shop: `https://${SUBDOMAINS.shop}`
} as const;

export type UserRole = "guest" | "player" | "admin" | "owner";

export type ContentType = "campaign" | "blog" | "product" | "media";
export type PublishStatus = "draft" | "review" | "published" | "archived";

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt?: string;
}

export interface SlugEntity extends BaseEntity {
  slug: string;
  title: string;
  description?: string;
  status: PublishStatus;
}

export interface Campaign extends SlugEntity {
  type: "campaign";
  coverImage?: string;
}

export interface BlogPost extends SlugEntity {
  type: "blog";
  excerpt?: string;
  coverImage?: string;
}

export interface Product extends SlugEntity {
  type: "product";
  price: number;
  currency?: string;
  images?: string[];
}

export interface MediaItem extends BaseEntity {
  type: "media";
  alt?: string;
  url: string;
  kind: "image" | "video" | "audio" | "document";
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface SiteMetadata {
  name: string;
  domain: string;
  description: string;
}

export const SITE_METADATA: SiteMetadata = {
  name: APP_NAME,
  domain: APP_DOMAIN,
  description: "AstralForge is a worldbuilding and tabletop experience studio."
};