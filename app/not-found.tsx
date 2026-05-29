import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found | OBSportPsychology',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="site-section flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold text-foreground mb-4">Page not found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Back to home
      </Link>
    </main>
  )
}
