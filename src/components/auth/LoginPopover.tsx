"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";

export function LoginPopover() {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function openLogin() {
      console.log("OPEN LOGIN EVENT RECEIVED");
      setOpen(true);
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("open-login", openLogin);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("open-login", openLogin);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleSuccess() {
    console.log("LOGIN SUCCESS CALLBACK");
    setOpen(false);
    window.dispatchEvent(new Event("auth:changed"));
  }

  return (
    <div ref={popoverRef} className="relative z-[10000] inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        Login
      </button>

      {open && (
        <div className="fixed right-8 top-20 z-[10001] w-[360px] rounded-2xl border border-white/10 bg-[#050505]/95 p-5 text-left shadow-2xl backdrop-blur-xl">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#cbb89a]">
                AstralForge
              </p>
              <h2 className="mt-1 text-xl font-semibold text-white">Login</h2>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/10 px-2 py-0.5 text-sm text-white/70 hover:bg-white/10"
            >
              ×
            </button>
          </div>

          <LoginForm onSuccess={handleSuccess} />

          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-xs">
            <Link
              href="/forgot-password"
              onClick={() => setOpen(false)}
              className="text-[#cbb89a] hover:underline"
            >
              Forgot password?
            </Link>

            <Link
              href="/forge-pass"
              onClick={() => setOpen(false)}
              className="text-[#cbb89a] hover:underline"
            >
              Create account
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}