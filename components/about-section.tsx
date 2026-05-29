import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import {
  GraduationCap,
  Briefcase,
  CircleHelp,
  Target,
  ClipboardList,
  Dumbbell,
  Brain,
  Layers,
  Sparkles,
} from 'lucide-react'

const qualifications = [
  'BSc and MSc in Sport and Exercise Psychology from Loughborough University',
  'Currently enrolled on CASES SEPAR (Sport and Exercise Psychology Accreditation Route)',
  'Working in a Category 1 football academy',
  'Level 2 (Core) Cricket Coach',
]

const qualificationLogos = [
  {
    src: '/images/qualifications/Loughborough-University-Logo-Vector.svg-.webp',
    alt: 'Loughborough University',
    containerClassName: 'bg-white',
  },
  {
    src: '/images/qualifications/CASES_logo.webp',
    alt: 'Chartered Association of Sport and Exercise Science (CASES)',
    containerClassName: 'bg-white',
  },
]

const pillars: {
  name: string
  detail: string
  icon: LucideIcon
  featured?: boolean
}[] = [
  {
    name: 'Technical',
    detail: 'Training sessions develop technical skills on the pitch or court.',
    icon: Target,
  },
  {
    name: 'Tactical',
    detail: 'Team meetings and analysis sessions shape tactical understanding.',
    icon: ClipboardList,
  },
  {
    name: 'Physical',
    detail: 'Gym work and exercise build the physical side of performance.',
    icon: Dumbbell,
  },
  {
    name: 'Mental',
    detail:
      'Often neglected, yet it significantly influences how you perform when it matters.',
    icon: Brain,
    featured: true,
  },
]

const supportAreas = [
  'Motivation',
  'Performance Anxiety',
  'Confidence',
  'Concentration',
  'Team Cohesion',
  'Communication',
  'Resilience',
  'Execution Under Pressure',
  'Emotional Control',
  'Psychologically Informed Environments',
]

const faqs = [
  {
    question: 'Is sport psychology just for elite athletes?',
    answer:
      'No, sport psychology can benefit athletes of all ability levels, as sport psychology principles (e.g., performance anxiety, pressure) apply at all levels of sport.',
  },
  {
    question:
      'What is the difference between a sport psychologist and a performance coach?',
    answer:
      'Whilst much of the work overlaps, the sport psychologist title is protected. Sport psychologists are required to complete accredited undergraduate and master\'s degrees, followed by further accredited training routes. This means that all work conducted is evidence based and informed by research.',
  },
  {
    question: 'How will I know if sport psychology is for me?',
    answer:
      'If you feel you might benefit from sport psychology support, come and have a chat with me and we can discuss your needs and whether it will be suitable.',
  },
  {
    question: 'Where will the sessions be based?',
    answer:
      'Sessions are online via Microsoft Teams or Zoom, with in person sessions possible on request.',
  },
]

export function AboutSection() {
  return (
    <section
      className="py-24 lg:py-32 bg-card border-b border-border"
      aria-label="Qualifications, sport psychology background, and FAQs"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance mb-16 max-w-2xl">
          Qualifications, Experience &amp;{' '}
          <span className="text-primary">Understanding</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-6">
              <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" />
              Qualifications &amp; Experience
            </h3>
            <ul className="space-y-4">
              {qualifications.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div
              className="mt-8 grid grid-cols-2 gap-4 max-w-md"
              aria-label="Accreditation and university logos"
            >
              {qualificationLogos.map((logo) => (
                <div
                  key={logo.src}
                  className={`flex h-20 sm:h-24 items-center justify-center rounded-xl border border-border px-4 py-3 shadow-sm ${logo.containerClassName}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={48}
                    className="max-h-10 sm:max-h-12 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4">
              <Briefcase className="h-4 w-4 text-primary" aria-hidden="true" />
              What is Sport Psychology?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Put simply, sport psychology is the mental side of sport. It involves
              the thoughts, feelings and emotions that occur before, during and after
              sporting performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The 4 pillars of any sport are technical, tactical, physical and mental
              skills. Training sessions are used to work on technical skills, team
              meetings/analysis sessions are used to develop tactics and gym
              work/exercise is used to work on the physical side. Despite
              significantly influencing performance, the mental side of sport is often
              neglected. Sport psychology support provides athletes with the
              opportunity to work on the mental side of their game in order to gain an
              advantage.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-6 sm:p-8 lg:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(56,189,248,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.6) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mb-8 lg:mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                  Performance Framework
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                  The 4 Pillars of Sport
                </h3>
              </div>
              <p className="max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                Every athlete trains four interconnected areas. Sport psychology
                strengthens the pillar that is too often left behind.
              </p>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <article
                    key={pillar.name}
                    className={`group relative flex flex-col rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 ${
                      pillar.featured
                        ? 'border-primary/50 bg-gradient-to-br from-primary/15 via-primary/5 to-background shadow-lg shadow-primary/10 sm:col-span-2 xl:col-span-1'
                        : 'border-border bg-card/80 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5'
                    }`}
                  >
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                          pillar.featured
                            ? 'border-primary/40 bg-primary/20 text-primary'
                            : 'border-border bg-background text-primary group-hover:border-primary/30 group-hover:bg-primary/10'
                        } transition-colors`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span
                        className={`text-xs font-bold tabular-nums ${
                          pillar.featured ? 'text-primary' : 'text-muted-foreground/60'
                        }`}
                        aria-hidden="true"
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <h4
                      className={`mb-2 text-lg font-bold tracking-tight ${
                        pillar.featured ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {pillar.name}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                      {pillar.detail}
                    </p>

                    {pillar.featured && (
                      <p className="mt-4 inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        Core focus
                      </p>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background via-card to-background p-6 sm:p-8 lg:p-10">
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              aria-hidden="true"
            />

            <div className="relative mb-8 lg:mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  How I Can Help
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                  Common Areas of Support
                </h3>
              </div>
              <p className="max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
                Tailored support across the mental skills that matter most in
                training, competition, and team environments.
              </p>
            </div>

            <ul className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
              {supportAreas.map((area) => (
                <li key={area}>
                  <div className="group flex h-full items-center gap-3 rounded-xl border border-border/80 bg-background/80 px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/5 sm:flex-col sm:items-start sm:gap-3 sm:px-4 sm:py-4 lg:px-3 lg:py-4 xl:items-center xl:text-center">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_10px_rgba(56,189,248,0.45)] group-hover:scale-125 transition-transform sm:mt-0.5 xl:mx-auto"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium leading-snug text-foreground group-hover:text-primary transition-colors">
                      {area}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-6">
            <CircleHelp className="h-4 w-4 text-primary" aria-hidden="true" />
            FAQs
          </h3>
          <div className="space-y-3 max-w-3xl">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-border bg-background overflow-hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-foreground hover:bg-secondary/50 transition-colors [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    className="text-primary text-lg leading-none transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
