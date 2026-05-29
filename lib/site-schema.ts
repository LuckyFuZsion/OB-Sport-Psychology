import { CONTACT_PHONE_E164 } from '@/lib/contact-mailto'
import { SITE_URL } from '@/lib/site'

export const SITE_ORGANIZATION_ID = `${SITE_URL}/#organization`

export function buildSiteOrganizationNode() {
  return {
    '@type': 'Organization' as const,
    '@id': SITE_ORGANIZATION_ID,
    name: 'OBSportPsychology',
    description:
      'Sport and Exercise Psychology practice offering 1-on-1 sessions, group workshops, and organisational support.',
    url: SITE_URL,
    telephone: CONTACT_PHONE_E164,
    logo: {
      '@type': 'ImageObject' as const,
      url: `${SITE_URL}/images/OB%20Sport%20Psychology.png`,
    },
    address: {
      '@type': 'PostalAddress' as const,
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'Country' as const,
      name: 'United Kingdom',
    },
  }
}

/** Site-wide Organization schema with a typed root (not @graph). */
export function buildSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    ...buildSiteOrganizationNode(),
  }
}
