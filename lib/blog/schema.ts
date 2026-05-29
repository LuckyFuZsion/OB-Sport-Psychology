import type { BlogPost } from './posts'
import { getBlogPostUrl, SITE_BASE_URL } from './posts'
import { toSchemaDateTime } from '@/lib/iso-datetime'
import { buildSiteOrganizationNode } from '@/lib/site-schema'

function buildPublisher() {
  const organization = buildSiteOrganizationNode()
  const { '@id': _id, ...publisher } = organization
  return publisher
}

/** Single BlogPosting block with a typed root (avoids @graph "Unknown" errors in GSC). */
export function buildBlogPostSchema(post: BlogPost) {
  const postUrl = getBlogPostUrl(post.slug)
  const imageUrl = `${SITE_BASE_URL}${post.thumbnail.src}`

  const articleBody = post.sections
    .flatMap((section) =>
      section.blocks.flatMap((block) => {
        if (block.type === 'paragraph') return [block.text]
        if (block.type === 'list') return block.items
        if (block.type === 'callout') return [block.text]
        return []
      })
    )
    .join('\n\n')

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}/#blogposting`,
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    url: postUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    datePublished: toSchemaDateTime(post.publishedAt),
    dateModified: toSchemaDateTime(post.updatedAt),
    inLanguage: 'en-GB',
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      url: post.author.url,
    },
    publisher: buildPublisher(),
    articleBody,
    wordCount: articleBody.split(/\s+/).length,
    timeRequired: `PT${post.readTimeMinutes}M`,
    keywords: post.keywords.join(', '),
    articleSection: post.tags.join(', '),
  }
}

export function buildBlogPostBreadcrumbSchema(post: BlogPost) {
  const postUrl = getBlogPostUrl(post.slug)

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_BASE_URL}/#blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  }
}

export function buildBlogListingSchema(posts: BlogPost[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_BASE_URL}/#blog`,
    url: `${SITE_BASE_URL}/#blog`,
    name: 'OBSportPsychology Blog',
    description:
      'Articles on sport psychology, youth athletes, coaching, and performance.',
    publisher: buildPublisher(),
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: getBlogPostUrl(post.slug),
      datePublished: toSchemaDateTime(post.publishedAt),
      image: `${SITE_BASE_URL}${post.thumbnail.src}`,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
    })),
  }
}
