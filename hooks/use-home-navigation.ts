'use client'

import { useCallback, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { scrollToSection, sectionHref } from '@/lib/home-navigation'

export function useHomeNavigation() {
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'

  const navigateToSection = useCallback(
    (id: string) => {
      if (isHome) {
        scrollToSection(id)
        window.history.replaceState(null, '', sectionHref(id))
        return
      }
      router.push(sectionHref(id))
    },
    [isHome, router]
  )

  useEffect(() => {
    if (!isHome) return

    const scrollToHash = () => {
      const id = window.location.hash.replace('#', '')
      if (!id) return

      const tryScroll = (attempt = 0) => {
        const el = document.getElementById(id)
        if (el) {
          scrollToSection(id)
          return
        }
        if (attempt < 10) {
          requestAnimationFrame(() => tryScroll(attempt + 1))
        }
      }

      tryScroll()
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [isHome, pathname])

  return { isHome, pathname, navigateToSection }
}
