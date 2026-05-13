"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [identifier, setIdentifier] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: call your reset-password API here
    // await requestPasswordReset(identifier);

    setSent(true);
  }

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md items-center px-6">
      <div className="w-full rounded-2xl border border-white/10 bg-black/60 p-6 shadow-xl">
        <p className="text-xs uppercase tracking-[0.24em] text-[#cbb89a]">
          AstralForge
        </p>

        <h1 className="mt-2 text-2xl font-semibold text-white">
          Forgot password?
        </h1>

        <p className="mt-2 text-sm text-white/60">
          Enter your email or username. If an account exists, we’ll send a
          password reset link to the registered email.
        </p>

        {sent ? (
          <p className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            Check your email for a password reset link.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <input
              value={identifier}
              onChange={(event) => setIdentifier(event.target.value)}
              placeholder="Email or username"
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#cbb89a]"
              required
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#cbb89a] px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90"
            >
              Send reset link
            </button>
          </form>
        )}
      </div>
    </section>
  );
}