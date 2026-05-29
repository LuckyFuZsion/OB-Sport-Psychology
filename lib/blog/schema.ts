import type { BlogPost } from './posts'
import { getBlogPostUrl, SITE_BASE_URL } from './posts'

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
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_BASE_URL}/#website`,
        url: SITE_BASE_URL,
        name: 'OBSportPsychology',
        description:
          'Sport and Exercise Psychology support for athletes, teams, and organisations.',
        publisher: { '@id': `${SITE_BASE_URL}/#organization` },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_BASE_URL}/#organization`,
        name: 'OBSportPsychology',
        url: SITE_BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_BASE_URL}/images/OB%20Sport%20Psychology.png`,
        },
      },
      {
        '@type': 'Person',
        '@id': `${SITE_BASE_URL}/#author-olly`,
        name: post.author.name,
        jobTitle: post.author.role,
        url: post.author.url,
        worksFor: { '@id': `${SITE_BASE_URL}/#organization` },
        knowsAbout: [
          'Sport Psychology',
          'Youth Athletes',
          'Autonomy-Supportive Coaching',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${postUrl}/#webpage`,
        url: postUrl,
        name: post.title,
        description: post.excerpt,
        isPartOf: { '@id': `${SITE_BASE_URL}/#website` },
        primaryImageOfPage: { '@id': `${postUrl}/#primaryimage` },
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        inLanguage: 'en-GB',
        breadcrumb: { '@id': `${postUrl}/#breadcrumb` },
      },
      {
        '@type': 'ImageObject',
        '@id': `${postUrl}/#primaryimage`,
        url: imageUrl,
        contentUrl: imageUrl,
        width: post.thumbnail.width,
        height: post.thumbnail.height,
        caption: post.thumbnail.alt,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${postUrl}/#breadcrumb`,
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
      },
      {
        '@type': 'BlogPosting',
        '@id': `${postUrl}/#blogposting`,
        mainEntityOfPage: { '@id': `${postUrl}/#webpage` },
        headline: post.title,
        description: post.excerpt,
        image: { '@id': `${postUrl}/#primaryimage` },
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: { '@id': `${SITE_BASE_URL}/#author-olly` },
        publisher: { '@id': `${SITE_BASE_URL}/#organization` },
        url: postUrl,
        articleBody,
        wordCount: articleBody.split(/\s+/).length,
        timeRequired: `PT${post.readTimeMinutes}M`,
        keywords: post.keywords.join(', '),
        articleSection: post.tags,
        inLanguage: 'en-GB',
        about: [
          { '@type': 'Thing', name: 'Sport Psychology' },
          { '@type': 'Thing', name: 'Youth Athletes' },
          { '@type': 'Thing', name: 'Autonomy-Supportive Coaching' },
        ],
        citation: post.references.map((ref) => ({
          '@type': 'CreativeWork',
          name: ref.text,
          url: ref.url,
        })),
      },
      {
        '@type': 'Article',
        '@id': `${postUrl}/#article`,
        headline: post.title,
        description: post.excerpt,
        image: imageUrl,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: { '@id': `${SITE_BASE_URL}/#author-olly` },
        publisher: { '@id': `${SITE_BASE_URL}/#organization` },
        mainEntityOfPage: { '@id': `${postUrl}/#webpage` },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'ItemList',
        '@id': `${postUrl}/#tableofcontents`,
        name: 'Table of Contents',
        description: `Contents of ${post.title}`,
        itemListElement: post.sections.map((section, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: section.title,
          url: `${postUrl}#${section.id}`,
        })),
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
    publisher: {
      '@type': 'Organization',
      name: 'OBSportPsychology',
      url: SITE_BASE_URL,
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: getBlogPostUrl(post.slug),
      datePublished: post.publishedAt,
      image: `${SITE_BASE_URL}${post.thumbnail.src}`,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
    })),
  }
}
