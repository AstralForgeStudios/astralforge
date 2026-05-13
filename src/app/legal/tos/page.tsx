import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of AstralForge services."
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-[#cbb89a]/95 p-6 text-[#1a140f] shadow-xl sm:p-8 lg:p-10">

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#4a3c30]/70">
            Legal
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Terms of Service
          </h1>

          <p className="text-sm text-[#3a2f25]/80">
            Effective Date: January 1, 2026
          </p>
        </div>

        <div className="mt-8 space-y-6 text-sm leading-6 text-[#3a2f25]/85">

          <section>
            <p>
              These Terms govern your use of AstralForge, including its website,
              campaigns, digital content, and related services.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">1. Eligibility</h2>
            <p>
              You must be at least 13 years old to use this site. Paid services
              require you to be 18 or have permission from a legal guardian.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">2. Services</h2>
            <p>
              AstralForge provides tabletop campaigns, digital products, and
              storytelling experiences. Services may change over time.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">3. Accounts</h2>
            <p>
              You are responsible for your account and all activity under it.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">4. Campaign Participation</h2>
            <ul className="list-disc pl-4">
              <li>Respectful behavior is required</li>
              <li>Disruption may result in removal</li>
              <li>AstralForge may enforce table rules at its discretion</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold">5. Payments</h2>
            <ul className="list-disc pl-4">
              <li>Payments may be required</li>
              <li>Processed through third-party providers</li>
              <li>Failure to pay may result in loss of access</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold">6. Refunds</h2>
            <p>
              Refunds are generally not provided unless required by law or
              explicitly stated. Exceptions may be made at AstralForge’s
              discretion.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">7. Digital Content</h2>
            <p>
              Products are licensed, not sold. You are granted a
              non-exclusive, non-transferable, revocable license.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">8. User Content</h2>
            <p>
              You retain ownership of content you create. By participating, you
              grant AstralForge a limited license to display and use content as
              necessary to operate services.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">9. Availability</h2>
            <p>
              Services may be unavailable due to maintenance, outages, or
              circumstances beyond control. Availability is not guaranteed.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">10. Termination</h2>
            <p>
              AstralForge may suspend or terminate access at any time, with or
              without notice, for any reason.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">11. Liability</h2>
            <p>
              AstralForge is not liable for indirect or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">12. Force Majeure</h2>
            <p>
              AstralForge is not responsible for failure to perform due to
              events beyond reasonable control.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">13. Governing Law</h2>
            <p>
              These Terms are governed by the laws of your operating
              jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">14. Changes</h2>
            <p>
              Continued use after updates constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">15. Contact</h2>
            <p>scribe@astralforge.studio</p>
          </section>

        </div>
      </div>
    </main>
  );
}