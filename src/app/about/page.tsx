import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "AstralForge is a worldbuilding and tabletop experience studio focused on immersive storytelling, evolving worlds, and meaningful play."
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16">
      <div
        className={cn(
          "mx-auto max-w-6xl rounded-2xl border border-border p-8 sm:p-12",
          "bg-[#cbb89a]/95 text-[#1a140f] shadow-xl"
        )}
      >
        {/* Header */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#3a2f25]/70">
            About Astral Forge
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Where worlds are not imagined…
            <br />
            they are forged.
          </h1>

          <p className="max-w-2xl text-sm leading-6 text-[#3a2f25]/80 sm:text-base">
            Astral Forge was shaped slowly — through years of maps drawn by
            lamplight, through stories whispered across tables, through
            characters who refused to remain fiction. This is a library, a
            crucible, and a gateway: a place where imagination is given
            permanence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-8 lg:col-span-2">
            {/* The Forge */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">The Forge</h2>

              <p className="text-sm leading-6 text-[#3a2f25]/80">
                Astral Forge exists for those who believe storytelling is not a
                pastime, but a craft. Here, campaigns are not sessions on a
                calendar — they are living chronicles. They breathe. They
                remember. They change those who walk within them.
              </p>

              <p className="text-sm leading-6 text-[#3a2f25]/80">
                There is preparation. There is structure. There is room for
                chaos. But above all, there is intention.
              </p>
            </section>

            <hr className="border-[#3a2f25]/20" />

            {/* The Chronicle */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">The Chronicle</h2>

              <p className="text-sm leading-6 text-[#3a2f25]/80">
                Every world built here carries continuity like a heartbeat.
                Choices leave marks. Victories echo. Losses become lore. The
                story does not reset when the night ends — it continues.
              </p>
            </section>

            {/* Callout */}
            <div className="rounded-xl border border-[#3a2f25]/20 bg-[#cbb89a]/70 p-5 text-sm leading-6 shadow-inner">
              <p>
                If you seek a world — one that evolves, remembers, and grows
                alongside you — the gates of the Forge stand open.
              </p>

              <p className="mt-2 font-medium">
                Step inside. The chronicle awaits your name.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* What Is Forged */}
            <div className="rounded-xl border border-[#3a2f25]/20 bg-[#cbb89a]/80 p-5 shadow-md">
              <h3 className="mb-3 text-sm font-semibold">
                What Is Forged Here
              </h3>

              <ul className="list-disc space-y-1 pl-4 text-sm text-[#3a2f25]/80">
                <li>Living tabletop campaigns built to endure</li>
                <li>Lore archives and evolving histories</li>
                <li>Tools and software crafted for storytellers</li>
                <li>Worlds designed to remember every choice</li>
              </ul>

              <p className="mt-3 text-xs italic text-[#3a2f25]/70">
                “Nothing created here is disposable. Every decision leaves an
                echo.”
              </p>
            </div>

            {/* Principles */}
            <div className="rounded-xl border border-[#3a2f25]/20 bg-[#cbb89a]/80 p-5 shadow-md">
              <h3 className="mb-3 text-sm font-semibold">
                Guiding Principles
              </h3>

              <ul className="list-disc space-y-1 pl-4 text-sm text-[#3a2f25]/80">
                <li>Atmosphere matters</li>
                <li>Consequences matter</li>
                <li>Respect the table</li>
                <li>Write the world like it’s real</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}