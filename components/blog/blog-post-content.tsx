import type { BlogBlock, BlogPost } from '@/lib/blog/posts'
import { TableOfContents } from './table-of-contents'

function RenderBlock({ block }: { block: BlogBlock }) {
  if (block.type === 'paragraph') {
    return (
      <p className="text-muted-foreground leading-relaxed text-base sm:text-[1.05rem]">
        {block.text}
      </p>
    )
  }

  if (block.type === 'list') {
    const Tag = block.ordered ? 'ol' : 'ul'
    return (
      <Tag
        className={`space-y-3 pl-1 ${
          block.ordered ? 'list-none counter-reset-item' : 'list-none'
        }`}
      >
        {block.items.map((item, index) => (
          <li
            key={item}
            className={`flex gap-3 text-muted-foreground leading-relaxed text-base sm:text-[1.05rem] ${
              block.ordered ? '' : ''
            }`}
          >
            <span
              className="flex-shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue"
              aria-hidden="true"
            >
              {block.ordered ? index + 1 : '•'}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </Tag>
    )
  }

  if (block.type === 'callout') {
    return (
      <aside
        className={`rounded-xl border p-5 sm:p-6 ${
          block.variant === 'disclaimer'
            ? 'border-primary/30 bg-primary/5'
            : 'border-border bg-secondary/50'
        }`}
      >
        {block.title && (
          <p className="text-sm font-semibold text-foreground mb-2">
            {block.title}
          </p>
        )}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {block.text}
        </p>
      </aside>
    )
  }

  return null
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  const tocItems = post.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }))

  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10 lg:gap-14 items-start">
      <article className="min-w-0">
        {post.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 mb-12 last:mb-0"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight tracking-tight mb-5 pb-3 border-b border-border">
              {section.title}
            </h2>
            <div className="space-y-5">
              {section.blocks.map((block, index) => (
                <RenderBlock key={`${section.id}-${index}`} block={block} />
              ))}
            </div>
          </section>
        ))}

        {post.references.length > 0 && (
          <section
            id="references"
            className="scroll-mt-28 mt-14 pt-10 border-t border-border"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight tracking-tight mb-6">
              References
            </h2>
            <ol className="space-y-4">
              {post.references.map((ref, index) => (
                <li
                  key={ref.url}
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="font-semibold text-brand-blue mr-2">
                    [{index + 1}]
                  </span>
                  <cite className="not-italic">{ref.text}</cite>{' '}
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline break-all"
                  >
                    {ref.url}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        )}
      </article>

      <aside className="hidden lg:block">
        <TableOfContents
          items={[
            ...tocItems,
            ...(post.references.length > 0
              ? [{ id: 'references', title: 'References' }]
              : []),
          ]}
        />
      </aside>
    </div>
  )
}
