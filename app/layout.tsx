import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {
  SITE_OG_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_URL,
  getCanonicalUrl,
  getSiteOgImageUrl,
} from '@/lib/site'
import { buildSiteJsonLd } from '@/lib/site-schema'
import { MotionProvider } from '@/components/motion-provider'
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
  alternates: {
    canonical: getCanonicalUrl('/'),
  },
  openGraph: {
    title: 'OBSportPsychology | Helping people flourish',
    description: SITE_OG_DESCRIPTION,
    url: getCanonicalUrl('/'),
    type: 'website',
    locale: 'en_GB',
    siteName: 'OB Sport Psychology',
    images: [
      {
        url: getSiteOgImageUrl(),
        width: SITE_OG_IMAGE.width,
        height: SITE_OG_IMAGE.height,
        alt: SITE_OG_IMAGE.alt,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OBSportPsychology | Helping people flourish',
    description: SITE_OG_DESCRIPTION,
    images: [getSiteOgImageUrl()],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'OB Sport Psychology',
    statusBarStyle: 'default',
  },
  themeColor: '#00142c',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: true,
  },
}

const jsonLd = buildSiteJsonLd()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="site-bg" aria-hidden="true" />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
