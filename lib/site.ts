export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.obsportpsychology.co.uk'

/** Absolute canonical URL for a pathname (e.g. `/`, `/privacy`). */
export function getCanonicalUrl(pathname = '/'): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return new URL(path, SITE_URL).href
}

/** Open Graph / Twitter description (110–160 characters for social previews). */
export const SITE_OG_DESCRIPTION =
  'Evidence-based sport psychology for athletes, teams and organisations across the UK — 1-on-1 sessions, workshops, and organisational support.'

/** Default Open Graph / social share image (1200×627) */
export const SITE_OG_IMAGE = {
  path: '/opengraph.png',
  width: 1200,
  height: 627,
  alt: 'OB Sport Psychology — Helping people flourish',
} as const

export function getSiteOgImageUrl(baseUrl: string = SITE_URL) {
  return new URL(SITE_OG_IMAGE.path, baseUrl).href
}
