import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BlogPostContent } from '@/components/blog/blog-post-content'
import { TableOfContents } from '@/components/blog/table-of-contents'
import { getAllBlogPosts, getBlogPost, getBlogPostUrl, SITE_BASE_URL } from '@/lib/blog/posts'
import { buildBlogPostSchema } from '@/lib/blog/schema'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  const url = getBlogPostUrl(post.slug)
  const imageUrl = `${SITE_BASE_URL}${post.thumbnail.src}`

  return {
    title: `${post.title} | OBSportPsychology Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author.name, url: post.author.url }],
    creator: post.author.name,
    publisher: 'OBSportPsychology',
    category: 'Sport Psychology',
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url,
      locale: 'en_GB',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: imageUrl,
          width: post.thumbnail.width,
          height: post.thumbnail.height,
          alt: post.thumbnail.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const schema = buildBlogPostSchema(post)
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const tocItems = [
    ...post.sections.map((s) => ({ id: s.id, title: s.title })),
    ...(post.references.length > 0
      ? [{ id: 'references', title: 'References' }]
      : []),
  ]

  return (
    <>
      <script
        id={`blog-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />
      <main className="pt-16">
        <header className="relative border-b border-border bg-card">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={post.thumbnail.src}
              alt=""
              fill
              className="object-cover"
              aria-hidden="true"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 py-12 lg:py-16">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase border border-primary/30 text-primary bg-primary/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight text-balance mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4 text-primary" aria-hidden="true" />
                {post.author.name}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                {post.readTimeMinutes} min read
              </span>
            </div>
          </div>
        </header>

        <div className="border-b border-border bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 py-6 lg:py-8">
            <Image
              src={post.thumbnail.src}
              alt={post.thumbnail.alt}
              width={post.thumbnail.width}
              height={post.thumbnail.height}
              className="w-full h-auto rounded-xl border border-border"
              priority
            />
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-12 lg:py-16">
          <div className="lg:hidden mb-10">
            <TableOfContents items={tocItems} />
          </div>

          <BlogPostContent post={post} />
        </div>
      </main>
      <Footer />
    </>
  )
}
