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
    slug: 'barriers-to-coach-engagement-sport-psychology',
    title: 'Barriers to Coach Engagement with Sport Psychology',
    excerpt:
      'Why coaches often hesitate to engage with sport psychology — and practical ways practitioners can break down stigma to build psychologically informed environments.',
    publishedAt: '2026-08-02',
    updatedAt: '2026-08-02',
    readTimeMinutes: 6,
    author: {
      name: 'Olly',
      role: 'Sport and Exercise Psychologist (in training)',
      url: `${SITE_URL}/#about`,
    },
    thumbnail: {
      src: '/images/blog/barriers-to-coach-engagement-sport-psychology.webp',
      alt: 'Blog thumbnail illustrating barriers to coach engagement with sport psychology',
      width: 1200,
      height: 800,
    },
    tags: [
      'Coaching',
      'Sport Psychology',
      'Stigma',
      'Elite Sport',
      'Football Academies',
    ],
    keywords: [
      'coach engagement sport psychology',
      'stigma sport psychology',
      'psychologically informed environments',
      'coach education psychology',
      'barriers to sport psychology',
      'mental skills coaching elite sport',
    ],
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        blocks: [
          {
            type: 'paragraph',
            text: 'In my previous blog post, we looked at the value of working within athletes’ immediate environments to enhance the impact of sport psychology work. In theory, all coaches should receive support from sport psychology practitioners relating to how they can effectively implement psychologically-informed practice. However, the hard truth is that coaches often do not engage with sport psychologists, for a number of reasons. In this post, we will explore the barriers that sport psychologists can face when attempting to implement sport psychology into coach education, and advise on how stigmas can be broken down so that psychologically informed environments can be formed.',
          },
        ],
      },
      {
        id: 'stigma',
        title: 'Stigma',
        blocks: [
          {
            type: 'paragraph',
            text: 'Stigmas are sets of beliefs held by an individual or group that are often untrue and lead to discriminatory behaviour. For example, a group of people may seek to avoid a person with a non-contagious health condition due to holding a set of untrue, negative beliefs about them. In sport, stigmas about psychology and mental health exist largely due to historic beliefs about the importance of being ‘tough’ and a ‘just get on with it’ attitude. Vulnerability has often been perceived as weak and so players and coaches have felt the need to dissociate themselves with anything ‘mental health related’ in order to fit in. There are a number of different reasons why stigmas still occur to this day in relation to coach engagement with psychology. Below are a few key examples:',
          },
          {
            type: 'list',
            items: [
              'Negative experience with previous psychologist — if a coach has worked with a psychologist previously, and they did not agree with their methods or just simply didn’t get on, this can reinforce negative beliefs and make the stigma worse.',
              'Lack of understanding — a common misconception about the role of psychology in elite sport is that psychology is only for ‘mentally weak athletes’. Coaches who hold this belief may therefore believe that psychology is not necessary in their environment because they perceive their players to be ‘fine’.',
              'Lack of objectivity and measurability — unlike other performance departments, psychological support can often be perceived as ‘not objective enough’, due to relying less heavily on performance metrics and quantifiable data (in reality, performance can be measured, with the ways in which this is done depending heavily on practitioner philosophy). As such, coaches may doubt the benefits that psychology can have on their team’s performance.',
            ],
          },
          {
            type: 'paragraph',
            text: 'A study by Mortimer et al (2022) highlights the sort of culture that can push coaches away from engaging with sport psychology. They conducted 36 interviews with 11 coaches, 5 support staff, 18 players and 2 parents of players embedded in elite football academies. They found that both players and coaches were reluctant or struggled to discuss stress or show vulnerability, due to a culture existing that leaves them fearing being perceived as weak. In these sorts of environments, it is no wonder coaches are hesitant to engage with psychology.',
          },
        ],
      },
      {
        id: 'tips-to-break-down-stigmas',
        title: 'Tips on How to Break Down Stigmas in Sport',
        blocks: [
          {
            type: 'paragraph',
            text: 'It is important to consider that some stigmas are more deeply engrained within individuals or organisations than others, so breaking them down can be challenging. Below are some tips on how to approach coaches when attempting to break down stigmas:',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Build trusting relationships with coaches. This can be a slow burner, and of course not all sport psychologists have the fortune of being embedded into a sports organisation. However, prioritising building trust with coaches, via attending training sessions, discussing non-psychology topics and showing genuine interest in coaches’ philosophies, can be crucial in helping coaches feel respected and therefore increasing their openness to engagement with psychology.',
              'Engage in good-faithed discussions with coaches, using language they understand. It is important that coaches don’t feel like they are being patronised when discussing their beliefs, as this will likely lead to even greater disapproval. Instead, maintaining respect and acknowledgements of their perspectives whilst nudging them in a helpful direction can help to gain buy in and slowly shift beliefs.',
              'Provide real world examples of how psychology influences players. Rather than just telling coaches that psychology is important, evidencing its impact using real world examples can help coaches see the direct relevance it has to them. If they can see how engaging with psychology can benefit their team, they are more likely to be open to it.',
              'Emphasise the value of psychology for achieving performance outcomes. A coach’s ultimate goal is for their team/athlete to perform well and win matches/competitions. It is therefore crucial to demonstrate to them how psychology can contribute to this success, i.e., by showing them how previous work has lead to success (whilst maintaining confidentiality).',
            ],
          },
        ],
      },
      {
        id: 'the-good-news',
        title: 'The Good News',
        blocks: [
          {
            type: 'paragraph',
            text: 'Despite stigmas still existing in performance sport environments, the landscape is improving, with the field of sport psychology growing every day. Psychology departments are now commonplace in elite sport and a shared understanding of sport psychology is becoming more apparent within multi-disciplinary teams. With advancements in the opportunities and impact that sport psychology is having in elite sport, the future looks bright, and I am hopeful that the idea of a stigma around psychology in sport will eventually become a distant memory.',
          },
        ],
      },
      {
        id: 'final-thoughts',
        title: 'Final Thoughts',
        blocks: [
          {
            type: 'paragraph',
            text: 'I hope that this post has helped shine light on the practical difficulties sport psychologists can face when attempting to implement their practice in sporting environments. No matter how much the field grows and evidence suggests its benefits on sporting performance, you will still get coaches who are hesitant to engage. It is therefore crucial that coaches are engaged with through respectful, open conversations that help them understand the power of sport psychology for both well-being and performance outcomes.',
          },
        ],
      },
    ],
    references: [
      {
        text: 'Mortimer, P., Parris, S., Jones, K., Henry, L., & Moore, S. (2022). The Boy in the Man’s Mask: The Duty of Care on Football Academies. Report. University of Greenwich; Goldsmiths College; British Academy, London, UK.',
        url: 'https://gala.gre.ac.uk/id/eprint/50372/',
      },
    ],
  },
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
