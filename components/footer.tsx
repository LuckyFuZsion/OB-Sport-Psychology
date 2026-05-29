'use client'

import Image from 'next/image'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from '@/lib/contact-mailto'
import { navSections, sectionHref } from '@/lib/home-navigation'
import { useHomeNavigation } from '@/hooks/use-home-navigation'

const LOGO_SRC = '/images/OB-Sport-Psyhcology-Logo.webp'
const WEBFUZSION_LOGO_SRC = '/images/webfuzsion-logo.png'
const WEBFUZSION_URL = 'https://webfuzsion.co.uk'
const currentYear = new Date().getFullYear()

export function Footer() {
  const { navigateToSection } = useHomeNavigation()

  const handleFooterNav = (id: string) => {
    navigateToSection(id)
  }

  return (
    <footer
      className="bg-card text-card-foreground border-t border-card-border"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <a
              href={sectionHref('home')}
              onClick={(e) => {
                e.preventDefault()
                handleFooterNav('home')
              }}
              className="inline-flex mb-4"
              aria-label="OBSportPsychology home"
            >
              <Image
                src={LOGO_SRC}
                alt="OB Sport Psychology"
                width={220}
                height={62}
                className="h-12 w-auto"
              />
            </a>
            <p className="text-card-muted text-sm leading-relaxed max-w-sm">
              Helping people flourish. Evidence-based sport psychology support
              for athletes, teams, and organisations.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-card-muted mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5" role="list">
              {navSections.map((link) => (
                <li key={link.id}>
                  <a
                    href={sectionHref(link.id)}
                    onClick={(e) => {
                      e.preventDefault()
                      handleFooterNav(link.id)
                    }}
                    className="text-sm text-card-muted hover:text-brand-blue transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-card-muted mb-4">
              Contact
            </h3>
            <div className="space-y-2.5">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block text-sm text-card-muted hover:text-brand-blue transition-colors duration-200"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={CONTACT_PHONE_HREF}
                className="block text-sm text-card-muted hover:text-brand-blue transition-colors duration-200"
              >
                {CONTACT_PHONE}
              </a>
              <a
                href={sectionHref('contact')}
                onClick={(e) => {
                  e.preventDefault()
                  handleFooterNav('contact')
                }}
                className="inline-flex items-center mt-2 px-4 py-2 text-xs font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-card-muted">
          <p>&copy; {currentYear} OBSportPsychology. All rights reserved.</p>
          <p className="text-center">
            Sport and Exercise Psychologist (in training) with CASES
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60 flex justify-center">
          <a
            href={WEBFUZSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
            aria-label="WebFuZsion — visit webfuzsion.co.uk"
          >
            <Image
              src={WEBFUZSION_LOGO_SRC}
              alt="WebFuZsion"
              width={160}
              height={48}
              className="h-8 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
