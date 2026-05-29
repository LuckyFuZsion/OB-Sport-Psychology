import { getAllBlogPosts } from '@/lib/blog/posts'
import { buildBlogListingSchema } from '@/lib/blog/schema'
import { BlogCard } from '@/components/blog/blog-card'

export function BlogSection() {
  const posts = getAllBlogPosts()
  const listingSchema = buildBlogListingSchema(posts)

  return (
    <section
      id="blog"
      className="py-24 lg:py-32 bg-background"
      aria-label="Blog"
    >
      <script
        id="blog-listing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Blog
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance mb-4 max-w-2xl">
          Insights &amp; <span className="text-primary">Updates</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl">
          Evidence-based articles on sport psychology, youth athletes, and
          performance.
        </p>

        <div className="grid gap-6 max-w-2xl">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
