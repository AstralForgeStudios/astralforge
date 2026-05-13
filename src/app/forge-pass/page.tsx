import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forge Pass",
  description:
    "Create your Forge Pass to enter AstralForge and begin your journey."
};

export default function ForgePassPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      {/* HERO */}
      <section
        className="relative flex min-h-[420px] items-center border-b border-white/10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero-main.webp')"
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-background" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-white/65">
              Forge Pass
            </p>

            <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
              Enter AstralForge
            </h1>

            <p className="mt-4 text-base leading-7 text-white/75">
              Forge Pass is your gateway into AstralForge. Create your account
              to access campaigns, track your journey, and return to worlds that
              remember your choices.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section
        className="px-6 py-16 sm:px-8 lg:px-12"
        style={{
          backgroundImage: "url('/images/backgrounds/bg-main.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Why Forge Pass?</h2>

            <div className="space-y-4 text-white/80 leading-7">
              <p>
                Your Forge Pass is more than an account — it’s your identity
                within AstralForge.
              </p>

              <p>
                It connects you to campaigns, records your journey, and allows
                you to return to the worlds you help shape.
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur">
                <p className="font-semibold">Campaign Access</p>
                <p className="mt-1 text-sm text-white/70">
                  Join live tables and ongoing worlds.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur">
                <p className="font-semibold">Persistent Identity</p>
                <p className="mt-1 text-sm text-white/70">
                  Your story continues across sessions.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur">
                <p className="font-semibold">Future Access</p>
                <p className="mt-1 text-sm text-white/70">
                  Unlock future features, content, and tools.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-start">
            <div className="w-full rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur">
              <h3 className="text-2xl font-semibold text-center">
                Create Your Forge Pass
              </h3>

              <p className="mt-4 text-center text-sm text-white/70">
                Begin your journey and step into the forge.
              </p>

              <form className="mt-8 space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="username"
                    className="block text-xs uppercase tracking-[0.18em] text-white/60"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Choose a username"
                    autoComplete="username"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:ring-1 focus:ring-white/20"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-[0.18em] text-white/60"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:ring-1 focus:ring-white/20"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-xs uppercase tracking-[0.18em] text-white/60"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:ring-1 focus:ring-white/20"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="confirm-password"
                    className="block text-xs uppercase tracking-[0.18em] text-white/60"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/30 focus:ring-1 focus:ring-white/20"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-3 w-full rounded-full bg-[#cbb89a] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  Create Forge Pass
                </button>

                <div className="flex justify-center pt-2">
                  <a
                    href="#"
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    Already have an account? Sign in
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}