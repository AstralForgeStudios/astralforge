"use client";

import { useEffect, useRef, useState } from "react";
import { logout, getCurrentUser } from "@/lib/auth";
import type { User } from "@/types/user";
import { ForgePassLink } from "@/components/auth/ForgePassLink";
import { LoginPopover } from "@/components/auth/LoginPopover";

export function AccountMenu() {
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function syncUser() {
      const currentUser = getCurrentUser();
      console.log("SYNC USER", currentUser);
      setUser(currentUser);
    }

    syncUser();

    window.addEventListener("auth:changed", syncUser);
    window.addEventListener("storage", syncUser);

    return () => {
      window.removeEventListener("auth:changed", syncUser);
      window.removeEventListener("storage", syncUser);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleLogout() {
    logout();
    setUser(null);
    setOpen(false);
    window.dispatchEvent(new Event("auth:changed"));
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <LoginPopover />
        <ForgePassLink label="Forge Pass" variant="outline" size="sm" />
      </div>
    );
  }

  const accountName = user.username || user.email || "Account";

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-sm text-white transition hover:bg-white/10"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold text-[#cbb89a]">
          {accountName.charAt(0).toUpperCase()}
        </span>

        <span className="hidden sm:inline">{accountName}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-[9999] mt-3 w-44 rounded-2xl border border-white/10 bg-[#050505]/95 p-2 shadow-2xl backdrop-blur-xl">
          <a
            href="https://accounts.astralforge.studio"
            className="block rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Dashboard
          </a>

          <a
            href="https://accounts.astralforge.studio/settings"
            className="block rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Settings
          </a>

          <button
            type="button"
            onClick={handleLogout}
            className="block w-full rounded-xl px-3 py-2 text-left text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}