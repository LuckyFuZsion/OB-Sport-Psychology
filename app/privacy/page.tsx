import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SiteJsonLd } from '@/components/site-json-ld'
import { CONTACT_EMAIL } from '@/lib/contact-mailto'
import { SITE_URL, getCanonicalUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | OBSportPsychology',
  description:
    'How OBSportPsychology collects, uses, and protects your personal information when you use this website or get in touch.',
  alternates: { canonical: getCanonicalUrl('/privacy') },
  robots: { index: true, follow: true },
}

const lastUpdated = '29 May 2026'

export default function PrivacyPage() {
  return (
    <>
      <SiteJsonLd />
      <Navbar />
      <main className="site-section pt-24 pb-20 lg:pt-28 lg:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex text-sm text-muted-foreground hover:text-brand-blue transition-colors mb-8"
          >
            ← Back to home
          </Link>

          <article className="panel-elevated p-6 sm:p-8 lg:p-10">
            <header className="mb-8 pb-6 border-b border-card-border">
              <h1 className="text-3xl sm:text-4xl font-bold text-card-foreground tracking-tight mb-3">
                Privacy Policy
              </h1>
              <p className="text-sm text-card-muted">
                Last updated: {lastUpdated}
              </p>
            </header>

            <div className="space-y-8 text-sm sm:text-base text-card-muted leading-relaxed">
              <section>
                <h2 className="text-lg font-semibold text-card-foreground mb-3">
                  Who we are
                </h2>
                <p>
                  This website is operated by OBSportPsychology (“we”, “us”),
                  providing information about sport and exercise psychology
                  services offered by Olly (Sport and Exercise Psychologist in
                  training with the Chartered Association of Sport and Exercise
                  Sciences — CASES). The site is available at{' '}
                  <a
                    href={SITE_URL}
                    className="text-brand-blue hover:underline break-all"
                  >
                    {SITE_URL.replace(/^https?:\/\//, '')}
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-card-foreground mb-3">
                  What information we collect
                </h2>
                <p className="mb-3">We may collect:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-card-foreground font-medium">
                      Contact details
                    </strong>{' '}
                    — name, email address, phone number (if you provide it), and
                    message content when you use the contact form or email us
                    directly.
                  </li>
                  <li>
                    <strong className="text-card-foreground font-medium">
                      Technical data
                    </strong>{' '}
                    — basic server and security logs from our hosting provider
                    (for example IP address, browser type, and pages visited)
                    when you browse the site.
                  </li>
                </ul>
                <p className="mt-3">
                  The contact form on this site helps you prepare an email in
                  your own email app (for example Gmail or Outlook). We do not
                  store form submissions on the website unless a live form
                  service is enabled in future.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-card-foreground mb-3">
                  How we use your information
                </h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Respond to enquiries and arrange psychology support</li>
                  <li>Operate, secure, and improve the website</li>
                  <li>Meet legal and professional obligations where applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-card-foreground mb-3">
                  Legal basis (UK GDPR)
                </h2>
                <p>
                  Where UK data protection law applies, we rely on:{' '}
                  <strong className="text-card-foreground font-medium">
                    consent
                  </strong>{' '}
                  when you contact us;{' '}
                  <strong className="text-card-foreground font-medium">
                    legitimate interests
                  </strong>{' '}
                  to run and protect the website; and{' '}
                  <strong className="text-card-foreground font-medium">
                    contractual necessity
                  </strong>{' '}
                  if you become a client and we need to deliver services.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-card-foreground mb-3">
                  Sharing your information
                </h2>
                <p>
                  We do not sell your personal data. We may share it only with
                  trusted service providers who help us run the website or
                  communication tools (such as hosting or email), and only where
                  necessary. They must protect your data in line with applicable
                  law.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-card-foreground mb-3">
                  How long we keep it
                </h2>
                <p>
                  We keep enquiry and client-related records only as long as
                  needed for the purposes above, including any professional or
                  legal retention requirements, then delete or anonymise them
                  where possible.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-card-foreground mb-3">
                  Your rights
                </h2>
                <p>
                  Under UK data protection law you may have rights to access,
                  correct, erase, restrict, or object to processing of your
                  personal data, and to data portability or withdraw consent
                  where relevant. You can also complain to the{' '}
                  <a
                    href="https://ico.org.uk/"
                    className="text-brand-blue hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Information Commissioner&apos;s Office (ICO)
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-card-foreground mb-3">
                  Cookies
                </h2>
                <p>
                  This site is intended to work without non-essential cookies.
                  Essential cookies may be set by our hosting or security
                  services. If we add analytics or similar tools in future, this
                  policy will be updated.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-card-foreground mb-3">
                  Contact
                </h2>
                <p>
                  For privacy questions or to exercise your rights, email{' '}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-brand-blue hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
