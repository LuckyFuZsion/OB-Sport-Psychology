export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.obsportpsychology.co.uk'

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
