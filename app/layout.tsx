import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'OBSportPsychology | Helping people flourish',
  description:
    'Sport and Exercise Psychology support from Olly. 1-on-1 sessions, group workshops, and organisational support for athletes across the UK.',
  keywords: [
    'sport psychology',
    'OBSportPsychology',
    'Olly sport psychologist',
    'football psychology',
    'cricket psychology',
    'mental skills coaching',
    'CASES',
  ],
  openGraph: {
    title: 'OBSportPsychology | Helping people flourish',
    description:
      'Evidence-based sport psychology support for athletes, teams, and organisations.',
    type: 'website',
    locale: 'en_GB',
  },
  themeColor: '#0a192f',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'OBSportPsychology',
  description:
    'Sport and Exercise Psychology practice offering 1-on-1 sessions, group workshops, and organisational support.',
  url: SITE_URL,
  telephone: '',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  knowsAbout: [
    'Sport Psychology',
    'Football Psychology',
    'Cricket Psychology',
    'Mental Skills Training',
    'Group Workshops',
  ],
  sameAs: [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <head>
        <script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
