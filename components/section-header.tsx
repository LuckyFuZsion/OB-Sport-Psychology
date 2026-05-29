import type { ReactNode } from 'react'

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="section-eyebrow-rule" aria-hidden="true" />
      <span className="section-eyebrow">{children}</span>
    </div>
  )
}

export function SectionTitle({
  children,
  highlight,
  className = '',
}: {
  children: ReactNode
  highlight?: ReactNode
  className?: string
}) {
  return (
    <h2
      className={`text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance ${className}`}
    >
      {children}
      {highlight != null && (
        <>
          {' '}
          <span className="section-title-accent">{highlight}</span>
        </>
      )}
    </h2>
  )
}
