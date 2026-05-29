'use client'

import { useEffect, type ReactNode } from 'react'

export function MotionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')

    const sync = () => {
      document.documentElement.classList.toggle('motion-enhanced', !media.matches)
    }

    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return children
}
