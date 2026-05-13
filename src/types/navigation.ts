// src/types/navigation.ts
import type { Route } from "next";

export interface NavItem {
  label: string;
  href: Route | string;
  external?: boolean;
  disabled?: boolean;
  icon?: string;
  description?: string;
  children?: NavItem[];
}

export interface NavigationConfig {
  main: NavItem[];
  utility?: NavItem[];
  footer?: NavItem[];
}

export interface FooterNavSection {
  title: string;
  items: NavItem[];
}

export interface FooterNavigation {
  sections: FooterNavSection[];
  bottom?: NavItem[];
}

export interface AdminNavItem extends NavItem {
  requiresAuth?: boolean;
  roles?: string[];
}

export interface AdminNavigation {
  items: AdminNavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: Route | string;
}