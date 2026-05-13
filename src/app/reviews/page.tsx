import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Astral Forge",
  description:
    "Verified player testimonials and feedback for Astral Forge campaigns, sessions, and tabletop experiences."
};

const publishedReviews: Array<{
  name: string;
  campaign: string;
  rating: number;
  review: string;
}> = [];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={index < rating ? "text-amber-300" : "text-white/20"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const playUrl =
    process.env.NEXT_PUBLIC_PLAY_URL || "https://play.astralforge.studio";

  return (
    <main className="min-h-screen bg-background text-white">
      <section
        className="relative flex min-h-[420px] items-center overflow-hidden border-b border-white/10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/hero-reviews.webp')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-background" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="ml-auto max-w-2xl text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-200/80">
              Player Testimonials
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Reviews from the Table
            </h1>

            <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">
              Honest feedback from players who have joined Astral Forge
              campaigns, one-shots, and story-driven tabletop sessions.
            </p>

            <div className="mt-8 flex flex-wrap justify-end gap-3">
              <a
                href="#leave-a-review"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/85"
              >
                Leave a Review
              </a>

              <a
                href={playUrl}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Join a Game
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-background"
        style={{
          backgroundImage: "url('/images/backgrounds/bg-main.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <section
              id="leave-a-review"
              className="rounded-[2rem] border border-white/15 bg-black/45 p-6 shadow-2xl backdrop-blur-md sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-200/75">
                Submit Feedback
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                Leave a Review
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Share what stood out, how the session felt, and what future
                players should know. Reviews are moderated before publication.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/90">
                      Name or alias
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-amber-200/50 focus:ring-2 focus:ring-amber-200/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/90">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-amber-200/50 focus:ring-2 focus:ring-amber-200/10"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="rating" className="text-sm font-medium text-white/90">
                      Rating
                    </label>
                    <select
                      id="rating"
                      name="rating"
                      defaultValue=""
                      className="w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-amber-200/50 focus:ring-2 focus:ring-amber-200/10"
                    >
                      <option value="" disabled className="text-black">
                        Select rating
                      </option>
                      <option value="5" className="text-black">
                        5 — Excellent
                      </option>
                      <option value="4" className="text-black">
                        4 — Great
                      </option>
                      <option value="3" className="text-black">
                        3 — Good
                      </option>
                      <option value="2" className="text-black">
                        2 — Fair
                      </option>
                      <option value="1" className="text-black">
                        1 — Poor
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="campaign" className="text-sm font-medium text-white/90">
                      Campaign or session
                    </label>
                    <input
                      id="campaign"
                      name="campaign"
                      type="text"
                      placeholder="Campaign or one-shot name"
                      className="w-full rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-amber-200/50 focus:ring-2 focus:ring-amber-200/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="review" className="text-sm font-medium text-white/90">
                    Review
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    rows={6}
                    placeholder="Tell us about your experience at the table."
                    className="w-full resize-none rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-amber-200/50 focus:ring-2 focus:ring-amber-200/10"
                  />
                  <p className="text-xs leading-5 text-white/45">
                    Specific moments, tone, pacing, character interaction, and
                    table atmosphere make the strongest testimonials.
                  </p>
                </div>

                <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-white/80">
                  <input
                    type="checkbox"
                    name="permission"
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-black/30"
                  />
                  <span>
                    I give Astral Forge permission to publish this review on the
                    website after moderation.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-amber-100"
                >
                  Submit Review
                </button>

                <p className="text-center text-xs leading-5 text-white/45">
                  Submissions are reviewed before publication and may be edited
                  for clarity.
                </p>
              </form>
            </section>

            <section className="rounded-[2rem] border border-white/15 bg-black/45 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-200/75">
                Published Testimonials
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                Player Feedback
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Approved reviews will appear here once players submit feedback
                and grant permission for public display.
              </p>

              <div className="mt-8">
                {publishedReviews.length === 0 ? (
                  <div className="rounded-[1.5rem] border border-dashed border-white/20 bg-white/[0.04] p-6">
                    <Stars rating={5} />

                    <h3 className="mt-4 text-xl font-semibold text-white">
                      Testimonials coming soon
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/70">
                      Verified player reviews will be added here after approval.
                      Until then, this page is ready to collect permission-based
                      testimonials from real tables.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {publishedReviews.map((review) => (
                      <article
                        key={`${review.name}-${review.campaign}`}
                        className="rounded-[1.5rem] border border-white/12 bg-white/[0.04] p-5"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {review.name}
                            </h3>
                            <p className="mt-1 text-sm text-white/55">
                              {review.campaign}
                            </p>
                          </div>

                          <Stars rating={review.rating} />
                        </div>

                        <p className="mt-4 text-sm leading-7 text-white/75">
                          “{review.review}”
                        </p>
                      </article>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-2xl font-bold text-white">Verified</p>
                  <p className="mt-1 text-xs leading-5 text-white/55">
                    Only real player submissions are published.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-2xl font-bold text-white">Moderated</p>
                  <p className="mt-1 text-xs leading-5 text-white/55">
                    Reviews are checked before appearing publicly.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-2xl font-bold text-white">Permissioned</p>
                  <p className="mt-1 text-xs leading-5 text-white/55">
                    Publication requires explicit player consent.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-10 rounded-[2rem] border border-white/10 bg-black/35 p-6 backdrop-blur-md sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-200/75">
                  Review Standards
                </p>
                <h2 className="mt-3 text-2xl font-bold text-white">
                  Built for trust, not vanity.
                </h2>
              </div>

              <p className="text-sm leading-7 text-white/70">
                Astral Forge publishes reviews from real games, real players,
                and real submitted responses. Testimonials should reflect the
                actual table experience and remain useful to future players
                deciding whether a campaign is right for them.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
