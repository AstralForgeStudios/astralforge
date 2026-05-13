import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Player testimonials and feedback for AstralForge campaigns and sessions."
};

const publishedReviews: Array<{
  name: string;
  campaign: string;
  rating: number;
  review: string;
}> = [];

export default function ReviewsPage() {
  const playUrl =
    process.env.NEXT_PUBLIC_PLAY_URL || "https://play.astralforge.studio";

  return (
    <main className="min-h-screen bg-background text-white">
      {/* Hero */}
      <section
        className="relative flex min-h-[340px] items-center border-b border-white/10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero-reviews.webp')"
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-background" />

        <div className="relative mx-auto flex w-full max-w-7xl justify-end px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-xl text-right">
            <p className="text-xs uppercase tracking-[0.28em] text-white/65">
              Reviews
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Player Reviews
            </h1>

            <h2 className="text-2xl font-semibold text-white/90 sm:text-3xl">
              Voices from the Table
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/75">
              Honest feedback from players who have stepped into the worlds of
              Astral Forge. Every testimonial shared here is published with
              permission.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <a
                href="#leave-a-review"
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
              >
                Leave a Review
              </a>

              <a
                href={playUrl}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Enter the Table
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section
        className="relative border-b border-white/10 bg-background"
        style={{
          backgroundImage: "url('/images/backgrounds/bg-main.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:px-12">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              Reviews
            </p>

            <p className="mt-4 text-base leading-8 text-white/85">
              This page collects player testimonials and feedback for Astral
              Forge campaigns and sessions. Reviews are published only when
              permission is given.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Review Form */}
            <section
              id="leave-a-review"
              className="rounded-3xl border border-white/15 bg-black/25 p-5 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur-[2px] sm:p-6"
            >
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Leave a Review
              </h2>

              <p className="mt-4 text-base leading-7 text-white/85">
                Share your experience, what stood out, and what future players
                should know.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-white"
                    >
                      Name or player alias
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-base text-white placeholder:text-white/45 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-base text-white placeholder:text-white/45 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="rating"
                      className="text-sm font-medium text-white"
                    >
                      Rating
                    </label>
                    <select
                      id="rating"
                      name="rating"
                      defaultValue=""
                      className="w-full rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-base text-white outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
                    >
                      <option value="" disabled className="text-black">
                        Select a rating
                      </option>
                      <option value="5" className="text-black">
                        5 - Excellent
                      </option>
                      <option value="4" className="text-black">
                        4 - Great
                      </option>
                      <option value="3" className="text-black">
                        3 - Good
                      </option>
                      <option value="2" className="text-black">
                        2 - Fair
                      </option>
                      <option value="1" className="text-black">
                        1 - Poor
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="campaign"
                      className="text-sm font-medium text-white"
                    >
                      Campaign or session
                    </label>
                    <input
                      id="campaign"
                      name="campaign"
                      type="text"
                      placeholder="Campaign title or one-shot name"
                      className="w-full rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-base text-white placeholder:text-white/45 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="review"
                    className="text-sm font-medium text-white"
                  >
                    Review
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    rows={6}
                    placeholder="Tell us about your experience at the table."
                    className="w-full rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-base text-white placeholder:text-white/45 outline-none transition focus:border-white/30 focus:ring-2 focus:ring-white/10"
                  />
                  <p className="text-xs text-white/55">
                    Specific details make stronger and more useful testimonials.
                  </p>
                </div>

                <label className="flex items-start gap-3 text-sm text-white/90">
                  <input
                    type="checkbox"
                    name="permission"
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-black/30"
                  />
                  <span>
                    I give Astral Forge permission to publish this review
                    publicly on the website.
                  </span>
                </label>

                <p className="text-xs text-white/60">
                  Reviews are reviewed before publication. Submissions may be
                  edited for clarity or declined at discretion.
                </p>

                <button
                  type="submit"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Submit Review
                </button>
              </form>
            </section>

            {/* Published Testimonials */}
            <section className="rounded-3xl border border-white/15 bg-black/25 p-5 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur-[2px] sm:p-6">
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Published Testimonials
              </h2>

              <p className="mt-4 text-base leading-7 text-white/85">
                Approved testimonials will appear here once they are submitted
                and cleared for public display.
              </p>

              <div className="mt-8">
                {publishedReviews.length === 0 ? (
                  <div className="rounded-3xl border border-dashed border-white/12 bg-black/20 p-5">
                    <h3 className="text-xl font-semibold text-white">
                      No published reviews yet
                    </h3>
                    <p className="mt-3 text-base leading-7 text-white/85">
                      Real player feedback will appear here as approved
                      testimonials are added.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {publishedReviews.map((review) => (
                      <article
                        key={`${review.name}-${review.campaign}`}
                        className="rounded-3xl border border-white/12 bg-black/20 p-5"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {review.name}
                            </h3>
                            <p className="text-sm text-white/60">
                              {review.campaign}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-white/80">
                            {review.rating}/5
                          </p>
                        </div>

                        <p className="mt-4 text-base leading-7 text-white/85">
                          {review.review}
                        </p>
                      </article>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85">
                  Homepage: feature 2–3 review quotes
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85">
                  Play page: place reviews near booking CTA
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85">
                  Reviews page: full approved archive
                </span>
              </div>
            </section>
          </div>

          {/* Review Standards */}
          <div className="mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              Review Standards
            </p>

            <div className="mt-6 rounded-3xl border border-dashed border-white/15 bg-black/20 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                Publishing Approach
              </h3>
              <p className="mt-4 text-base leading-7 text-white/85">
                Only publish testimonials from real players, real tables, or
                real submitted responses. Keep a moderation step so each public
                review stays verified and permission-based.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}