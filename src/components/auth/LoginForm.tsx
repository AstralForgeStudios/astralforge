"use client";

import { useState } from "react";
import Link from "next/link";
import { login } from "@/lib/auth";

interface LoginFormProps {
  onSuccess?: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [identifier, setIdentifier] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("LOGIN SUBMIT FIRED");

    setError("");
    setLoading(true);

    try {
      const result = await login({
        email: identifier,
        password: pass,
      });

      console.log("LOGIN RESULT", result);
      console.log(
        "LOCAL STORAGE",
        window.localStorage.getItem("astralforge.session")
      );

      if (!result.success) {
        setError(result.error || "Invalid login");
        return;
      }

      // Let LoginPopover handle closing + auth event
      onSuccess?.();
    } catch (err) {
      console.error("LOGIN ERROR", err);
      setError("Login failed. Check console.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label
          htmlFor="login-user"
          className="block text-xs uppercase tracking-[0.18em] text-white/60"
        >
          Email or Username
        </label>

        <input
          id="login-user"
          type="text"
          value={identifier}
          onChange={(event) => setIdentifier(event.target.value)}
          placeholder="Enter email or username"
          autoComplete="username"
          className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:ring-1 focus:ring-white/20"
          required
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="login-pass"
          className="block text-xs uppercase tracking-[0.18em] text-white/60"
        >
          Password
        </label>

        <input
          id="login-pass"
          type="password"
          value={pass}
          onChange={(event) => setPass(event.target.value)}
          placeholder="Enter your password"
          autoComplete="current-password"
          className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:ring-1 focus:ring-white/20"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <Link
          href="/forgot-password"
          className="text-xs text-[#cbb89a] hover:underline"
        >
          Forgot password?
        </Link>

        <button
          type="submit"
          disabled={loading}
          className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/10 disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </div>

      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </form>
  );
}