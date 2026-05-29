import { buildSiteJsonLd } from '@/lib/site-schema'

export function SiteJsonLd() {
  const jsonLd = buildSiteJsonLd()

  return (
    <script
      id="json-ld-site"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
