import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionEyebrow, SectionTitle } from '@/components/section-header'

const services = [
  {
    id: 'service-1on1',
    title: '1-on-1 Sessions',
    image: '/images/services/1on1-sessions.webp',
    imageAlt:
      '1-on-1 sport psychology sessions thumbnail showing personal athlete support',
    description:
      'Initial, free 30-minute consultation to build rapport and discuss needs. Then sessions will last 50 minutes, conducted online or in person. These sessions are all about creating a safe space to discuss your needs and create collaborative action plans.',
  },
  {
    id: 'service-workshops',
    title: 'Group Workshops',
    image: '/images/services/group-workshops.webp',
    imageAlt: 'Group workshops thumbnail showing team sport psychology session',
    description:
      '1-hour long sessions diving into different sport psychology topics. These interactive sessions are perfect for teams who want to improve their performance.',
  },
  {
    id: 'service-organisational',
    title: 'Organisational Support',
    image: '/images/services/organisational-support.webp',
    imageAlt:
      'Organisational support thumbnail showing embedded sport psychology within a sports organisation',
    description:
      'This involves embedding myself within your organisation, where I can observe training, generate reports on areas of development, deliver workshops and provide 1-on-1 support to players and staff.',
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="site-section py-24 lg:py-32"
      aria-label="Services offered"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionEyebrow>Services</SectionEyebrow>
        </Reveal>

        <Reveal delay={60}>
          <SectionTitle className="mb-14 max-w-2xl" highlight="Athletes & Teams">
            How I Work With
          </SectionTitle>
        </Reveal>

        <div className="space-y-8 lg:space-y-12">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 100}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <article
                id={service.id}
                className={`content-card grid lg:grid-cols-2 gap-0 overflow-hidden border-card-border hover:border-flourish/30 transition-colors ${
                  index % 2 === 1 ? 'lg:[direction:rtl]' : ''
                }`}
              >
              <div className="bg-card-elevated lg:[direction:ltr]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={1536}
                  height={1024}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </div>

              <div className="flex flex-col justify-center p-6 lg:p-10 lg:[direction:ltr]">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="btn-motion inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
