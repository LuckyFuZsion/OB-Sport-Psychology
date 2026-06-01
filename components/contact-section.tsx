'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Send, Phone, Mail, Check, AlertCircle } from 'lucide-react'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
} from '@/lib/contact-mailto'
import { submitContactForm } from '@/lib/web3forms'
import { Reveal } from '@/components/reveal'
import { SectionEyebrow, SectionTitle } from '@/components/section-header'

interface FormState {
  name: string
  email: string
  message: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!e.currentTarget.reportValidity()) {
      return
    }

    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    setStatus('submitting')
    setErrorMessage('')

    try {
      const result = await submitContactForm({ name, email, message })

      if (result.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        return
      }

      setStatus('error')
      setErrorMessage(
        result.message ?? 'Something went wrong. Please try again.'
      )
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  const resetForm = () => {
    setStatus('idle')
    setErrorMessage('')
    setForm({ name: '', email: '', message: '' })
  }

  const inputClass =
    'w-full bg-input border border-card-border rounded-md px-4 py-3 text-sm text-card-foreground placeholder:text-card-muted focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors duration-200'

  const actionButtonClass =
    'btn-motion inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60 disabled:pointer-events-none'

  return (
    <section
      id="contact"
      className="site-section py-24 lg:py-32"
      aria-label="Contact form"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionEyebrow>Contact</SectionEyebrow>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal delay={80}>
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
                    <Phone
                      className="h-4 w-4 text-brand-blue"
                      aria-hidden="true"
                    />
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
                    <Mail
                      className="h-4 w-4 text-brand-blue"
                      aria-hidden="true"
                    />
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
          </Reveal>

          <Reveal delay={160} className="panel-elevated p-8">
            {status === 'success' ? (
              <div className="flex flex-col min-h-[320px] gap-5">
                <div className="text-center sm:text-left">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-4">
                    <Check
                      className="h-6 w-6 text-brand-blue"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Message sent
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Thank you for getting in touch. I will reply to your email
                    as soon as I can.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={resetForm}
                  className={`${actionButtonClass} mt-auto border border-card-border bg-card-elevated text-card-foreground hover:border-flourish/30 hover:bg-card`}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Contact form">
                <div className="space-y-5 mb-7">
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

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
                      suppressHydrationWarning
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
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
                      suppressHydrationWarning
                      required
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
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
                      disabled={status === 'submitting'}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                {status === 'error' && errorMessage ? (
                  <div
                    role="alert"
                    className="mb-5 flex items-start gap-3 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-foreground"
                  >
                    <AlertCircle
                      className="mt-0.5 h-4 w-4 shrink-0 text-destructive"
                      aria-hidden="true"
                    />
                    <p>{errorMessage}</p>
                  </div>
                ) : null}

                <button
                  type="submit"
                  suppressHydrationWarning
                  disabled={status === 'submitting'}
                  className={`${actionButtonClass} bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30`}
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </button>

                <p className="mt-4 text-center text-xs text-muted-foreground leading-relaxed">
                  Your message is sent securely via Web3Forms to{' '}
                  {CONTACT_EMAIL}. See our{' '}
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
          </Reveal>
        </div>
      </div>
    </section>
  )
}
