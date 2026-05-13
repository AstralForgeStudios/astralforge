import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how AstralForge collects, uses, and protects your information."
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-[#cbb89a]/95 p-6 text-[#1a140f] shadow-xl sm:p-8 lg:p-10">
        
        {/* Header */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-[#4a3c30]/70">
            Legal
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="text-sm text-[#3a2f25]/80">
            Effective Date: January 1, 2026
          </p>

          <p className="text-sm leading-6 text-[#3a2f25]/80">
            This Privacy Policy explains how AstralForge collects, uses, and
            protects information when you interact with this website and its
            related services.
          </p>
        </div>

        {/* Sections */}
        <div className="mt-8 space-y-8 text-sm leading-6 text-[#3a2f25]/85">

          {/* Who We Are */}
          <section>
            <h2 className="text-lg font-semibold">Who We Are</h2>
            <p>
              AstralForge is a worldbuilding and tabletop experience studio
              operating at astralforge.studio and related subdomains. If you
              have questions about this policy, you can contact:
            </p>
            <p className="mt-2 font-medium">
              scribe@astralforge.studio
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-lg font-semibold">
              Categories of Information We Collect
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>
                Identifiers (name, email address, account username)
              </li>
              <li>
                Account and profile data (preferences, activity within campaigns)
              </li>
              <li>
                Communication data (messages, inquiries, support requests)
              </li>
              <li>
                Transaction data (processed via third-party payment providers)
              </li>
              <li>
                Device and usage data (browser type, pages visited, session data)
              </li>
            </ul>
          </section>

          {/* How We Use Info */}
          <section>
            <h2 className="text-lg font-semibold">
              How Information Is Used
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>Provide and manage accounts and services</li>
              <li>Communicate regarding campaigns, updates, or support</li>
              <li>Process purchases and deliver content</li>
              <li>Improve site performance and user experience</li>
              <li>Maintain security and prevent abuse</li>
            </ul>
          </section>

          {/* Sharing */}
          <section>
            <h2 className="text-lg font-semibold">
              How Information Is Shared
            </h2>
            <p>
              AstralForge does not sell personal information. Information may be
              shared with trusted third-party providers strictly for:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              <li>Payment processing (e.g., Stripe)</li>
              <li>Hosting and infrastructure</li>
              <li>Email delivery and communication services</li>
              <li>Analytics tools</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-lg font-semibold">
              Cookies & Tracking Technologies
            </h2>
            <p>
              This site may use cookies and similar technologies to maintain
              sessions, remember preferences, analyze usage, and improve
              functionality. You can control cookies through your browser
              settings.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-lg font-semibold">Data Retention</h2>
            <p>
              Information is retained only as long as necessary to provide
              services, comply with legal obligations, resolve disputes, and
              enforce agreements.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-lg font-semibold">Data Protection</h2>
            <p>
              Reasonable administrative, technical, and organizational measures
              are used to protect personal information. However, no system is
              completely secure.
            </p>
          </section>

          {/* Rights */}
          <section>
            <h2 className="text-lg font-semibold">
              Your Rights and Choices
            </h2>
            <p>
              Depending on your location, you may have rights to access, correct,
              or delete your personal information. To submit a request, contact:
            </p>
            <p className="mt-2 font-medium">
              scribe@astralforge.studio
            </p>

            <div className="mt-3 rounded-lg border border-[#3a2f25]/20 bg-[#d7cab4]/70 p-3 text-xs">
              Requests will be reviewed and handled within a reasonable timeframe.
            </div>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-lg font-semibold">
              Children’s Privacy
            </h2>
            <p>
              AstralForge is not intended for children under 13, and personal
              information is not knowingly collected from them.
            </p>
          </section>

          {/* International */}
          <section>
            <h2 className="text-lg font-semibold">
              International Users
            </h2>
            <p>
              If you access the site from outside the United States, your
              information may be processed and stored in the U.S.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-lg font-semibold">
              Policy Updates
            </h2>
            <p>
              This policy may be updated from time to time. Continued use of the
              site after updates constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-lg font-semibold">Contact</h2>
            <p>
              For questions about this Privacy Policy:
            </p>
            <p className="mt-2 font-medium">
              scribe@astralforge.studio
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}