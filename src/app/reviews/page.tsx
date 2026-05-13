import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Player Reviews | Astral Forge",
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
  return (
    <main className="min-h-screen bg-background text-white">
      <section
        className="relative overflow-hidden border-b border-white/10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/hero-reviews.webp')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-background" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-amber-200/80">
              Player Reviews
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              Stories from players who sat at the table.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Astral Forge reviews are collected from real players and published
              only with permission. Each testimonial reflects a moderated,
              story-first tabletop experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#testimonials"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-100"
              >
                View Testimonials
              </a>
              <a
                href="#leave-a-review"
                className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Submit Feedback
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
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid gap-5 md:grid-cols-3">
            {["Verified players", "Moderated publishing", "Permission-based"].map(
              (item, index) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-black/45 p-6 backdrop-blur-md"
                >
                  <p className="text-sm font-semibold text-amber-200/80">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 text-xl font-bold text-white">{item}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Reviews are handled with care so future players can trust
                    what they read before joining a session.
                  </p>
                </div>
              )
            )}
          </div>

          <section id="testimonials" className="mt-14">
            <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/75">
                  Testimonials
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Published player feedback
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/60">
                Approved testimonials will appear here once players submit
                feedback and grant public permission.
              </p>
            </div>

            <div className="mt-8">
              {publishedReviews.length === 0 ? (
                <div className="rounded-[2rem] border border-dashed border-white/20 bg-black/45 p-8 backdrop-blur-md">
                  <Stars rating={5} />
                  <h3 className="mt-5 text-2xl font-bold text-white">
                    Testimonials coming soon
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                    This space is reserved for verified reviews from real
                    players. Once testimonials are approved, they will appear
                    here as polished review cards.
                  </p>
                </div>
              ) : (
                <div className="grid gap-5 md:grid-cols-2">
                  {publishedReviews.map((review) => (
                    <article
                      key={`${review.name}-${review.campaign}`}
                      className="rounded-[2rem] border border-white/10 bg-black/45 p-6 backdrop-blur-md"
                    >
                      <Stars rating={review.rating} />
                      <p className="mt-5 text-base leading-8 text-white/75">
                        “{review.review}”
                      </p>
                      <div className="mt-6 border-t border-white/10 pt-5">
                        <h3 className="font-semibold text-white">{review.name}</h3>
                        <p className="mt-1 text-sm text-white/50">
                          {review.campaign}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section
            id="leave-a-review"
            className="mt-14 grid gap-8 rounded-[2rem] border border-white/10 bg-black/50 p-6 backdrop-blur-md sm:p-8 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/75">
                Submit Feedback
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Leave a review
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Share your experience at the table. Reviews are reviewed before
                publication and may be edited for clarity.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  placeholder="Name or alias"
                  className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-amber-200/50"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-amber-200/50"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  name="rating"
                  defaultValue=""
                  className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none focus:border-amber-200/50"
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

                <input
                  name="campaign"
                  type="text"
                  placeholder="Campaign or session"
                  className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-amber-200/50"
                />
              </div>

              <textarea
                name="review"
                rows={5}
                placeholder="Tell us about your experience."
                className="w-full resize-none rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-amber-200/50"
              />

              <label className="flex items-start gap-3 text-sm leading-6 text-white/70">
                <input type="checkbox" name="permission" className="mt-1" />
                <span>
                  I give Astral Forge permission to publish this review after
                  moderation.
                </span>
              </label>

              <button
                type="submit"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-100"
              >
                Submit Review
              </button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
