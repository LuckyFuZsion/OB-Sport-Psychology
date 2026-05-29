import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import type { BlogPost } from '@/lib/blog/posts'

export function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="content-card group flex flex-col overflow-hidden hover:border-flourish/30 transition-all duration-300 hover:shadow-2xl hover:shadow-black/25">
      <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.thumbnail.src}
          alt={post.thumbnail.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </Link>

      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {post.readTimeMinutes} min read
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug mb-3 transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium border border-card-border text-card-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-flourish hover:gap-3 transition-all"
        >
          Read article
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
