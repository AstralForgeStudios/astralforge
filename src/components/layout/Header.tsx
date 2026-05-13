"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { MAIN_NAV } from "@/lib/navigation";
import { AccountMenu } from "@/components/layout/AccountMenu";

export function Header() {
  return (
   <header className="sticky top-0 z-[9999] w-full border-b border-white/10 bg-black/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href={"/" as Route}
          className="flex items-center gap-2 text-white transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/nav/Astral-Forge-nav.png"
            alt="AstralForge logo"
            width={32}
            height={32}
            priority
            className="h-8 w-8 object-contain"
          />
          <span className="text-lg font-semibold tracking-wide transition-colors hover:text-[#cbb89a]">
            AstralForge
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {MAIN_NAV.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white transition-colors hover:text-[#cbb89a]"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href as Route}
                className="text-sm font-medium text-white transition-colors hover:text-[#cbb89a]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <AccountMenu />
      </div>
    </header>
  );
}