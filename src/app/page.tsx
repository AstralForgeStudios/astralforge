import Link from "next/link";
import { LoginPopover } from "@/components/auth/LoginPopover";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-white">
      {/* HERO */}
      <section
        className="relative flex min-h-[520px] items-center border-b border-white/10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero-main.webp')"
        }}
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-black/60" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-black/40 to-background" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-end px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-xl text-right">
            <p className="text-xs uppercase tracking-[0.28em] text-white/65">
              Where Legends Are Tempered in Starlight
            </p>

            <h1 className="mt-3 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Crafted Worlds
            </h1>

            <h2 className="text-2xl font-semibold text-white/90 sm:text-3xl">
              Epic Journeys
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/75">
              Professional tabletop campaigns, immersive storytelling, and
              worlds forged beyond imagination.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <Link
                href="/forge-pass"
                className="rounded-full bg-[#cbb89a] px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Create Forge Pass
              </Link>

              <LoginPopover />
            </div>
          </div>
        </div>
      </section>

      {/* PLAYABLE CAMPAIGNS */}
      <section
        className="bg-background px-6 py-16 sm:px-8 lg:px-12"
        style={{
          backgroundImage: "url('/images/backgrounds/bg-main.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
            Playable Campaigns
          </p>

          <p className="mt-4 text-base text-white/80">
            Live tables, upcoming adventures, and forged stories waiting for
            players.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur">
              <p className="text-white/80">
                Playable campaigns will appear here as they are published.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur">
              <p className="text-white/80">
                One-shots, premium events, and future public listings can live
                in this space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLAYER REVIEWS */}
      <section className="border-t border-white/10 bg-background px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
            Player Reviews
          </p>

          <p className="mt-4 text-base text-white/80">
            What players are saying around the table.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur">
              <p className="text-white/80">★★★★★</p>

              <p className="mt-4 text-white/90">
                Just an amazing DM, there’s nothing else I can say. He has been
                one of the most flexible and understanding dungeon masters I
                have ever had... He truly cares about his players and their
                enjoyment.
              </p>

              <p className="mt-4 text-sm text-white/60">— Katheryn Lee</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur">
              <p className="text-white/80">★★★★★</p>

              <p className="mt-4 text-white/90">
                A welcoming and understanding atmosphere for session zero. It
                was great to ask questions, hear people laugh, and be
                comfortable around one another.
              </p>

              <p className="mt-4 text-sm text-white/60">— Cabilis</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/reviews"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}