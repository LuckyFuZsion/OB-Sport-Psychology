'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Send, Phone, Mail, Copy, Check, ExternalLink } from 'lucide-react'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  buildContactEmailDraft,
  type ContactEmailDraft,
} from '@/lib/contact-mailto'
import { SectionEyebrow, SectionTitle } from '@/components/section-header'

interface FormState {
  name: string
  email: string
  message: string
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })
  const [draft, setDraft] = useState<ContactEmailDraft | null>(null)
  const [copied, setCopied] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!e.currentTarget.reportValidity()) {
      return
    }

    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    setDraft(buildContactEmailDraft({ name, email, message }))
    setCopied(false)
  }

  const resetForm = () => {
    setDraft(null)
    setCopied(false)
    setForm({ name: '', email: '', message: '' })
  }

  const handleCopy = async () => {
    if (!draft) return

    try {
      await navigator.clipboard.writeText(draft.clipboardText)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      window.prompt('Copy your message:', draft.clipboardText)
    }
  }

  const inputClass =
    'w-full bg-input border border-card-border rounded-md px-4 py-3 text-sm text-card-foreground placeholder:text-card-muted focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors duration-200'

  const actionButtonClass =
    'inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

  return (
    <section
      id="contact"
      className="site-section py-24 lg:py-32"
      aria-label="Contact form"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEyebrow>Contact</SectionEyebrow>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionTitle className="mb-6" highlight="Touch">
              Get in
            </SectionTitle>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Send a message using the form, or reach me directly using the
              details below.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">
                    Phone
                  </p>
                  <a
                    href={CONTACT_PHONE_HREF}
                    className="text-muted-foreground text-sm hover:text-brand-blue transition-colors"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">
                    Work Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-muted-foreground text-sm hover:text-brand-blue transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="panel-elevated p-8">
            {draft ? (
              <div className="flex flex-col min-h-[320px] gap-5">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    One more step — send your email
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Choose how you want to send — Gmail and Outlook open in your
                    browser with everything filled in.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={draft.gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${actionButtonClass} bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20`}
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Open in Gmail
                  </a>

                  <a
                    href={draft.outlookComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${actionButtonClass} border border-card-border bg-card-elevated text-card-foreground hover:border-flourish/30 hover:bg-card`}
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Open in Outlook
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className={`${actionButtonClass} border border-card-border bg-card-elevated text-card-foreground hover:border-flourish/30 hover:bg-card`}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                        Copied to clipboard
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" aria-hidden="true" />
                        Copy message
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-muted-foreground text-center sm:text-left leading-relaxed">
                  Sending to{' '}
                  <span className="text-foreground">{CONTACT_EMAIL}</span>.
                  Sign in to Gmail or Outlook if asked, then press Send.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-auto text-sm text-brand-blue hover:underline text-center sm:text-left"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Contact form">
                <div className="space-y-5 mb-7">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-foreground mb-2"
                    >
                      Name <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-foreground mb-2"
                    >
                      Email Address <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-foreground mb-2"
                    >
                      Message{' '}
                      <span className="text-muted-foreground font-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me a little about what you are looking for..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={`${actionButtonClass} bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30`}
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Prepare email
                </button>

                <p className="mt-4 text-center text-xs text-muted-foreground leading-relaxed">
                  You will send via Gmail, Outlook in the browser, or copy the
                  message. Nothing is stored on this website. See our{' '}
                  <Link
                    href="/privacy"
                    className="text-brand-blue hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
