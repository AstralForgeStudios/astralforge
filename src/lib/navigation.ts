import type {
  NavItem,
  FooterNavigation,
  AdminNavigation
} from "@/types/navigation";
import { SITE_URLS, EXTERNAL_URLS } from "@/global";

export const MAIN_NAV: NavItem[] = [
  {
    label: "Home",
    href: SITE_URLS.home
  },
  {
    label: "Play",
    href: EXTERNAL_URLS.play,
    external: true
  },
  {
    label: "Codex",
    href: EXTERNAL_URLS.codex,
    external: true
  },
  {
    label: "Shop",
    href: EXTERNAL_URLS.shop,
    external: true
  }
];

/**
 * Login is handled by LoginPopover / open-login event.
 * Do not route Login to #login, /login, or accounts.
 */
export const UTILITY_NAV: NavItem[] = [
  {
    label: "Forge-Pass",
    href: EXTERNAL_URLS.accounts,
    external: true
  }
];

export const FOOTER_NAV: FooterNavigation = {
  sections: [
    {
      title: "Explore",
      items: [
        { label: "Play", href: EXTERNAL_URLS.play, external: true },
        { label: "Codex", href: EXTERNAL_URLS.codex, external: true },
        { label: "Shop", href: EXTERNAL_URLS.shop, external: true }
      ]
    },
    {
      title: "Company",
      items: [
        { label: "About", href: SITE_URLS.about },
        { label: "Contact", href: SITE_URLS.contact },
        { label: "Reviews", href: SITE_URLS.reviews }
      ]
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy", href: SITE_URLS.privacy },
        { label: "Terms", href: SITE_URLS.terms }
      ]
    }
  ]
};

export const ADMIN_NAV: AdminNavigation = {
  items: [
    {
      label: "Dashboard",
      href: "/admin",
      requiresAuth: true,
      roles: ["admin", "owner"]
    },
    {
      label: "Builder",
      href: "/admin/builder",
      requiresAuth: true,
      roles: ["admin", "owner"]
    },
    {
      label: "Codex",
      href: "/admin/codex",
      requiresAuth: true,
      roles: ["admin", "owner"]
    },
    {
      label: "Products",
      href: "/admin/products",
      requiresAuth: true,
      roles: ["admin", "owner"]
    },
    {
      label: "Media",
      href: "/admin/media",
      requiresAuth: true,
      roles: ["admin", "owner"]
    },
    {
      label: "Publish",
      href: "/admin/publish",
      requiresAuth: true,
      roles: ["admin", "owner"]
    }
  ]
};