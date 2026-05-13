import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-[#2d2116]">
      <div className="mx-auto max-w-5xl rounded-3xl border border-[#b8a58a] bg-[#d7c5ab] p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#8c6f4c]">
            Dungeon Master Profile
          </p>

          <h1 className="mb-4 text-5xl font-bold leading-tight">
            Scribe — Architect of Worlds
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-[#6a5238]">
            An approachable storyteller devoted to living campaigns: worlds
            that react, remember, and grow alongside the people who explore
            them.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* Left Column */}
          <div>
            <div className="overflow-hidden rounded-3xl border border-[#b8a58a] bg-[#cfbea4] p-4 shadow-lg">
              <div className="relative h-[540px] overflow-hidden rounded-2xl border border-[#b8a58a]">
                <Image
                  src="/images/scribe/scribe-portrait.png"
                  alt="Scribe portrait"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Intro */}
            <div className="space-y-5 text-[15px] leading-8 text-[#5a4530]">
              <p>
                I’ve been running games since 1997, building campaigns that
                feel like stepping into a world with history — and watching
                that history change because of the choices at the table.
              </p>

              <p>
                My style is narrative first and character driven: cinematic
                when it should be, quiet when it needs to be, and always
                grounded in player agency. New players are welcome; you don’t
                need deep rules mastery, only curiosity and the willingness to
                step into the story.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "Cinematic storytelling",
                "Player agency",
                "Consequences that matter",
                "Deep lore (but approachable)",
                "Safety first table culture",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#b39b79] bg-[#e4d5c1] px-4 py-2 text-sm text-[#6b5339]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid gap-5 md:grid-cols-2">
              {/* What to Expect */}
              <div className="rounded-2xl border border-[#b8a58a] bg-[#dbc9b2] p-6 shadow-md">
                <h3 className="mb-4 text-xl font-semibold">
                  What to Expect
                </h3>

                <ul className="space-y-3 text-sm leading-7 text-[#5d4731]">
                  <li>• Immersive atmosphere and pacing</li>
                  <li>• Meaningful choices with lasting impact</li>
                  <li>• Prep heavy worlds, flexible play</li>
                  <li>• Respectful, inclusive table</li>
                </ul>
              </div>

              {/* Game Focus */}
              <div className="rounded-2xl border border-[#b8a58a] bg-[#dbc9b2] p-6 shadow-md">
                <h3 className="mb-4 text-xl font-semibold">Game Focus</h3>

                <ul className="space-y-3 text-sm leading-7 text-[#5d4731]">
                  <li>• Roleplay & character growth</li>
                  <li>• Exploration and discovery</li>
                  <li>• Sandbox with strong story arcs</li>
                  <li>• Rule of cool when it serves story</li>
                </ul>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-2xl border border-[#b8a58a] bg-[#dbc9b2] p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold">
                A note from the DM:
              </h3>

              <p className="leading-8 text-[#5c4731]">
                The best moments are rarely planned — they happen when players
                surprise the world, and the world answers back. If that’s the
                kind of table you’ve been looking for, I’d be honored to run a
                game for you.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-2xl border border-[#b8a58a] bg-[#dbc9b2] p-8 text-center shadow-md">
              <h2 className="mb-5 text-3xl font-bold">Get in Touch</h2>

              <p className="mx-auto mb-8 max-w-md leading-8 text-[#5d4731]">
                Whether you’re curious about a campaign, interested in
                collaboration, or simply want to talk story — I’d love to hear
                from you.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#866748]">
                    Email
                  </p>

                  <a
                    href="mailto:scribe@astralforgestudio.com"
                    className="mt-2 inline-block text-lg font-semibold underline decoration-[#8c6f4c] underline-offset-4"
                  >
                    scribe@astralforgestudio.com
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#866748]">
                    Call / Text
                  </p>

                  <p className="mt-2 text-lg font-semibold">903-699-2527</p>
                </div>
              </div>

              <p className="mt-8 text-xs italic text-[#866748]">
                I personally read and respond to every message. Most replies go
                out within 24–48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}