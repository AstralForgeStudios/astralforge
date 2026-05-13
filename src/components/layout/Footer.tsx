"use client";

import Link from "next/link";
import type { Route } from "next";
import { FOOTER_NAV } from "@/lib/navigation";
import { APP_NAME } from "@/global";

export function Footer() {
  return (
    <footer className="w-full border-t border-border px-4 py-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {FOOTER_NAV.sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">
                {section.title}
              </h3>

              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground transition-colors hover:text-primary"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href as Route}
                        className="text-sm text-foreground transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {FOOTER_NAV.bottom?.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href as Route}
                  className="text-xs text-muted transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}