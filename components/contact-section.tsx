'use client'

import { useState, type FormEvent } from 'react'
import { Send, Phone, Mail } from 'lucide-react'
import {
  CONTACT_EMAIL,
  buildContactMailtoUrl,
  openContactMailto,
} from '@/lib/contact-mailto'

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
  const [submitted, setSubmitted] = useState(false)

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

    const mailtoUrl = buildContactMailtoUrl({ name, email, message })
    openContactMailto(mailtoUrl)
    setSubmitted(true)
  }

  const resetForm = () => {
    setSubmitted(false)
    setForm({ name: '', email: '', message: '' })
  }

  const inputClass =
    'w-full bg-input border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors duration-200'

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-background"
      aria-label="Contact form"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Contact
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Send a message using the form, or reach me directly using the
              details below.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">
                    Phone
                  </p>
                  <a
                    href="tel:"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    Phone number to be confirmed
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">
                    Work Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center gap-4">
                <div className="h-14 w-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <Send className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Your email client has opened
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  Your message has been pre-filled and is ready to send.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-2 text-sm text-primary hover:underline"
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
                      Name <span className="text-primary">*</span>
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
                      Email Address <span className="text-primary">*</span>
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
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </button>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Clicking send opens your email client with your message
                  pre-filled. No data is stored on this website.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
