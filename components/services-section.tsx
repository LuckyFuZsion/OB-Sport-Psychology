import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'service-1on1',
    title: '1-on-1 Sessions',
    image: '/images/services/1on1-sessions.webp',
    imageAlt: '1-on-1 sport psychology sessions thumbnail showing personal athlete support',
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
    imageAlt: 'Organisational support thumbnail showing embedded sport psychology within a sports organisation',
    description:
      'This involves embedding myself within your organisation, where I can observe training, generate reports on areas of development, deliver workshops and provide 1-on-1 support to players and staff.',
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-background"
      aria-label="Services offered"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Services
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance mb-14 max-w-2xl">
          How I Work With{' '}
          <span className="text-primary">Athletes &amp; Teams</span>
        </h2>

        <div className="space-y-8 lg:space-y-12">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-0 rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors ${
                index % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className="bg-background lg:[direction:ltr]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={1200}
                  height={675}
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
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
