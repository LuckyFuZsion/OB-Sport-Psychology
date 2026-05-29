import Image from 'next/image'
import type { ReactNode } from 'react'
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
  Flame,
  HeartPulse,
  Shield,
  ScanEye,
  Users,
  MessagesSquare,
  Mountain,
  Gauge,
  Heart,
  Leaf,
} from 'lucide-react'
import { SectionTitle } from '@/components/section-header'

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

const supportAreas: { name: string; icon: LucideIcon }[] = [
  { name: 'Motivation', icon: Flame },
  { name: 'Performance Anxiety', icon: HeartPulse },
  { name: 'Confidence', icon: Shield },
  { name: 'Concentration', icon: ScanEye },
  { name: 'Team Cohesion', icon: Users },
  { name: 'Communication', icon: MessagesSquare },
  { name: 'Resilience', icon: Mountain },
  { name: 'Execution Under Pressure', icon: Gauge },
  { name: 'Emotional Control', icon: Heart },
  {
    name: 'Psychologically Informed Environments',
    icon: Leaf,
  },
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

function BadgePill({
  icon: Icon,
  children,
}: {
  icon: LucideIcon
  children: ReactNode
}) {
  return (
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {children}
    </div>
  )
}

export function AboutSection() {
  return (
    <section
      className="site-section py-24 lg:py-32"
      aria-label="Qualifications, sport psychology background, and FAQs"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle className="mb-16 max-w-2xl" highlight="Understanding">
          Qualifications, Experience &amp;
        </SectionTitle>

        <div className="panel-elevated p-6 sm:p-8 lg:p-10 mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-6">
                <GraduationCap
                  className="h-4 w-4 text-brand-blue"
                  aria-hidden="true"
                />
                Qualifications &amp; Experience
              </h3>
              <ul className="space-y-4">
                {qualifications.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80 flex-shrink-0"
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
                <Briefcase className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                What is Sport Psychology?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Put simply, sport psychology is the mental side of sport. It
                involves the thoughts, feelings and emotions that occur before,
                during and after sporting performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The 4 pillars of any sport are technical, tactical, physical and
                mental skills. Training sessions are used to work on technical
                skills, team meetings/analysis sessions are used to develop
                tactics and gym work/exercise is used to work on the physical
                side. Despite significantly influencing performance, the mental
                side of sport is often neglected. Sport psychology support
                provides athletes with the opportunity to work on the mental
                side of their game in order to gain an advantage.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 lg:mb-20">
          <div className="panel-elevated relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-flourish/12 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mb-8 lg:mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <BadgePill icon={Layers}>Performance Framework</BadgePill>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                  The 4 Pillars of Sport
                </h3>
              </div>
              <p className="max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                Every athlete trains four interconnected areas. Sport
                psychology strengthens the pillar that is too often left behind.
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
                        ? 'border-accent/40 bg-gradient-to-br from-accent/12 via-accent/5 to-card-elevated shadow-md shadow-accent/5 sm:col-span-2 xl:col-span-1'
                        : 'border-card-border bg-card-elevated hover:border-flourish/25 hover:shadow-md hover:shadow-black/20'
                    }`}
                  >
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors ${
                          pillar.featured
                            ? 'border-accent/35 bg-accent/15 text-brand-blue'
                            : 'border-border bg-card-elevated text-brand-blue group-hover:border-accent/30 group-hover:bg-accent/10'
                        }`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span
                        className={`text-xs font-bold tabular-nums ${
                          pillar.featured
                            ? 'text-brand-blue'
                            : 'text-muted-foreground/60'
                        }`}
                        aria-hidden="true"
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <h4
                      className={`mb-2 text-lg font-bold tracking-tight ${
                        pillar.featured ? 'text-brand-blue' : 'text-foreground'
                      }`}
                    >
                      {pillar.name}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                      {pillar.detail}
                    </p>

                    {pillar.featured && (
                      <p className="mt-4 inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-blue">
                        Core focus
                      </p>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mb-16 lg:mb-20">
          <div className="panel-elevated relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent"
              aria-hidden="true"
            />

            <div className="relative mb-8 lg:mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <BadgePill icon={Sparkles}>How I Can Help</BadgePill>
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
              {supportAreas.map((area) => {
                const Icon = area.icon
                return (
                  <li key={area.name}>
                    <div className="group flex h-full flex-col gap-3 rounded-xl border border-card-border bg-card-elevated p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-flourish/30 hover:bg-accent/5 hover:shadow-md hover:shadow-black/20 xl:items-center xl:text-center">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-brand-blue transition-all duration-300 group-hover:scale-105 group-hover:border-accent/35 group-hover:bg-accent/15 xl:mx-auto"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <span className="text-sm font-medium leading-snug text-foreground">
                        {area.name}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="panel-elevated p-6 sm:p-8">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-6">
            <CircleHelp className="h-4 w-4 text-brand-blue" aria-hidden="true" />
            FAQs
          </h3>
          <div className="space-y-3 max-w-3xl">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-card-border bg-card-elevated overflow-hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-foreground hover:bg-white/5 transition-colors [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    className="text-brand-blue text-lg leading-none transition-transform group-open:rotate-45"
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
