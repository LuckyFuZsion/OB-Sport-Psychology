'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navSections, sectionHref } from '@/lib/home-navigation'
import { useHomeNavigation } from '@/hooks/use-home-navigation'

const LOGO_SRC = '/images/OB-Sport-Psyhcology-Logo.webp'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { isHome, pathname, navigateToSection } = useHomeNavigation()

  useEffect(() => {
    if (!isHome) {
      if (pathname.startsWith('/blog')) {
        setActiveSection('blog')
      }
      return
    }

    const handleScroll = () => {
      const sections = navSections.map((l) => l.id)
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome, pathname])

  const handleNavClick = (id: string) => {
    setIsOpen(false)
    navigateToSection(id)
  }

  return (
    <header className="site-nav fixed top-0 left-0 right-0 z-50 w-full">
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          <a
            href={sectionHref('home')}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('home')
            }}
            className="flex shrink-0 items-center"
            aria-label="OBSportPsychology home"
          >
            <Image
              src={LOGO_SRC}
              alt="OB Sport Psychology"
              width={200}
              height={56}
              className="h-10 w-auto"
              priority
            />
          </a>

          <ul className="hidden lg:flex items-center gap-0.5" role="list">
            {navSections.map((link) => {
              const isActive = activeSection === link.id
              return (
                <li key={link.id}>
                  <a
                    href={sectionHref(link.id)}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.id)
                    }}
                    className={cn(
                      'relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md',
                      isActive
                        ? 'text-brand-blue'
                        : 'text-card-muted hover:text-white'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-px bg-brand-blue rounded-full" />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <a
            href={sectionHref('contact')}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('contact')
            }}
            className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Contact
          </a>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-card-muted hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-card-border bg-[var(--nav)] pb-4"
          >
            <ul className="pt-2 space-y-1" role="list">
              {navSections.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <li key={link.id}>
                    <a
                      href={sectionHref(link.id)}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.id)
                      }}
                      className={cn(
                        'block px-4 py-3 text-sm font-medium rounded-md transition-colors',
                        isActive
                          ? 'text-brand-blue bg-brand-blue/10'
                          : 'text-card-muted hover:text-white hover:bg-white/10'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
              <li className="pt-2 px-4">
                <a
                  href={sectionHref('contact')}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('contact')
                  }}
                  className="block w-full text-center px-4 py-3 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
