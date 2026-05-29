import { getAllBlogPosts } from '@/lib/blog/posts'
import { buildBlogListingSchema } from '@/lib/blog/schema'
import { BlogCard } from '@/components/blog/blog-card'
import { SectionEyebrow, SectionTitle } from '@/components/section-header'

export function BlogSection() {
  const posts = getAllBlogPosts()
  const listingSchema = buildBlogListingSchema(posts)

  return (
    <section
      id="blog"
      className="site-section py-24 lg:py-32"
      aria-label="Blog"
    >
      <script
        id="blog-listing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEyebrow>Blog</SectionEyebrow>

        <SectionTitle className="mb-4 max-w-2xl" highlight="Updates">
          Insights &amp;
        </SectionTitle>
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
