'use client'

import Image from 'next/image'
import { navSections, sectionHref } from '@/lib/home-navigation'
import { useHomeNavigation } from '@/hooks/use-home-navigation'

const LOGO_SRC = '/images/OB-Sport-Psyhcology-Logo.webp'
const currentYear = new Date().getFullYear()

export function Footer() {
  const { navigateToSection } = useHomeNavigation()

  const handleFooterNav = (id: string) => {
    navigateToSection(id)
  }

  return (
    <footer
      className="bg-card border-t border-border"
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
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Helping people flourish. Evidence-based sport psychology support
              for athletes, teams, and organisations.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-4">
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
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Contact
            </h3>
            <div className="space-y-2.5">
              <a
                href="mailto:hello@obsportpsychology.co.uk"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                hello@obsportpsychology.co.uk
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

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} OBSportPsychology. All rights reserved.</p>
          <p className="text-center">
            Sport and Exercise Psychologist (in training) with CASES
          </p>
        </div>
      </div>
    </footer>
  )
}
