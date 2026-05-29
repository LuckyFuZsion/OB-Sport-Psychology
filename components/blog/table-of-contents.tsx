import { List } from 'lucide-react'

type TocItem = {
  id: string
  title: string
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="rounded-xl border border-border bg-card p-6 lg:sticky lg:top-24"
    >
      <div className="flex items-center gap-2 mb-4">
        <List className="h-4 w-4 text-brand-blue" aria-hidden="true" />
        <h2 className="text-sm font-semibold text-foreground tracking-wide">
          On this page
        </h2>
      </div>
      <ol className="space-y-2.5">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex gap-3 text-sm text-muted-foreground hover:text-brand-blue transition-colors leading-snug"
            >
              <span
                className="flex-shrink-0 w-5 text-xs font-semibold text-brand-blue/60 group-hover:text-brand-blue tabular-nums"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
