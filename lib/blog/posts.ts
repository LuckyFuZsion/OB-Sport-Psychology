import { SITE_URL } from '@/lib/site'

export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'callout'; title?: string; text: string; variant?: 'note' | 'disclaimer' }

export type BlogSection = {
  id: string
  title: string
  blocks: BlogBlock[]
}

export type BlogReference = {
  text: string
  url: string
}

export type BlogPost = {
  slug: string
  title: string
  subtitle?: string
  excerpt: string
  publishedAt: string
  updatedAt: string
  readTimeMinutes: number
  author: {
    name: string
    role: string
    url: string
  }
  thumbnail: {
    src: string
    alt: string
    width: number
    height: number
  }
  tags: string[]
  keywords: string[]
  sections: BlogSection[]
  references: BlogReference[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'systems-approach-youth-athletes',
    title: 'Using a Systems Approach to Help Youth Athletes Thrive',
    excerpt:
      'Why sport psychology work with young athletes is most effective when coaches, parents, and support staff are part of the process.',
    publishedAt: '2026-05-29',
    updatedAt: '2026-05-29',
    readTimeMinutes: 6,
    author: {
      name: 'Olly',
      role: 'Sport and Exercise Psychologist (in training)',
      url: `${SITE_URL}/#about`,
    },
    thumbnail: {
      src: '/images/blog/systems-approach-youth-athletes.webp',
      alt: 'Blog thumbnail illustrating a systems approach to youth athlete support in sport psychology',
      width: 1200,
      height: 800,
    },
    tags: [
      'Youth Sport',
      'Sport Psychology',
      'Coaching',
      'Autonomy Support',
      'Football Academies',
    ],
    keywords: [
      'sport psychology youth athletes',
      'systems approach sport psychology',
      'autonomy supportive coaching',
      'youth football academy psychology',
      'self-determined motivation athletes',
      'sport psychology practitioners coaches parents',
    ],
    sections: [
      {
        id: 'use-of-sport-psychology',
        title: 'Use of Sport Psychology with Athletes',
        blocks: [
          {
            type: 'paragraph',
            text: 'It is becoming increasingly common for youth athletes to utilise the services of sport psychology practitioners (SPPs). Whether it be in elite performance setups (i.e., football academies) or through private work, working on the mental side of sport has become less of a taboo topic in recent years.',
          },
        ],
      },
      {
        id: 'impact-of-immediate-environment',
        title: 'Impact of the Immediate Environment',
        blocks: [
          {
            type: 'paragraph',
            text: 'To optimise the impact of sport psychology work with young people, it is strongly encouraged that SPPs work with the individuals in the immediate surroundings of the players, such as coaches and parents.',
          },
          {
            type: 'paragraph',
            text: 'There are two fundamental reasons for this:',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Working with support networks can help to reinforce habits. With the attention spans of young people varying greatly, having more people that understand psychological principles in a players environment makes it easier for players to internalise new skills due to more consistent reinforcement.',
              'Being presented with new information from coaches and parents may lead to greater internalisation, as a trusting relationship has already been built, unlike with an external SPP.',
            ],
          },
        ],
      },
      {
        id: 'working-with-parents-and-coaches',
        title:
          'How SPPs Can Work with Parents and Coaches to Create Optimal Sporting Environments',
        blocks: [
          {
            type: 'paragraph',
            text: "Research suggests that an optimal youth sport environment is one that supports a players' autonomy (feeling of control over one's actions), competence (feeling of effectiveness) and relatedness (feeling of belongingness). Satisfaction of these three needs enhances players' self-determined motivation, meaning their motivation is perceived to come from within and not influenced by external factors. In turn, a number of benefits have been found on sporting outcomes, including decreased burnout, increased prosocial behaviour and objective sporting performance (Li et al, 2013; Gillet et al, 2010; Hodge & Lonsdale, 2011).",
          },
          {
            type: 'paragraph',
            text: 'Therefore, it is imperative that SPPs educate coaches on how to implement autonomy, competence and relatedness-supportive behaviours into their training sessions.',
          },
        ],
      },
      {
        id: 'autonomy-supportive-behaviours',
        title:
          '5 Top Tips on How Coaches Can Implement Autonomy-Supportive Behaviours into Their Practices',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Providing players with meaningful choice in sessions.',
              'Providing players with opportunities to use their initiative in sessions.',
              'Acknowledging players feelings.',
              'Using process goals and discouraging outcome goals.',
              'Providing non-judgemental, constructive feedback.',
            ],
          },
        ],
      },
      {
        id: 'disclaimer',
        title: 'Disclaimer',
        blocks: [
          {
            type: 'callout',
            variant: 'disclaimer',
            title: 'Disclaimer',
            text: "This is not to say that every coach should coach the same way! Individual styles and perspectives are what make coaches who they are, and this post is not to say that coaches shouldn't bring their own unique blend of experiences and beliefs to their sessions. What this is saying is that embedding autonomy-supportive behaviours into sessions helps enhance players' self-determined motivation for their sport, which has a number of beneficial outcomes.",
          },
        ],
      },
      {
        id: 'summary',
        title: 'Summary',
        blocks: [
          {
            type: 'paragraph',
            text: 'Whilst direct work with youth athletes can be fruitful, working within their systems allows for greater reinforcement and deeper understanding.',
          },
          {
            type: 'paragraph',
            text: 'Educating coaches, parents and support staff on the benefits of autonomy support allows for an environment to emerge which ultimately facilitates success!',
          },
        ],
      },
    ],
    references: [
      {
        text: 'Gillet, N., Vallerand, R. J., Amoura, S., & Baldes, B. (2010). Influence of coaches\' autonomy support on athletes\' motivation and sport performance: A test of the hierarchical model of intrinsic and extrinsic motivation. Psychology of Sport and Exercise, 11(2), 155-161.',
        url: 'https://doi.org/10.1016/j.psychsport.2009.10.004',
      },
      {
        text: 'Li, C., Wang, C. J., & Kee, Y. H. (2013). Burnout and its relations with basic psychological needs and motivation among athletes: A systematic review and meta-analysis. Psychology of Sport and Exercise, 14(5), 692-700.',
        url: 'https://doi.org/10.1016/j.psychsport.2013.04.009',
      },
      {
        text: 'Hodge, K., & Lonsdale, C. (2011). Prosocial and antisocial behavior in sport: The role of coaching style, autonomous vs. controlled motivation, and moral disengagement. Journal of Sport and Exercise Psychology, 33(4), 527-547.',
        url: 'https://doi.org/10.1123/jsep.33.4.527',
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getBlogPostUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`
}

export const SITE_BASE_URL = SITE_URL
