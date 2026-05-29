import {
  Zap,
  Target,
  Shield,
  Flame,
  Users,
  Activity,
} from 'lucide-react'

const areas = [
  {
    icon: Zap,
    title: 'Performance Anxiety',
    desc: 'Bring your practice A-game to competition. Learn to channel nerves as fuel, not fear, under pressure.',
  },
  {
    icon: Target,
    title: 'Focus & Concentration',
    desc: 'Stay dialled-in during key match moments. Build attentional control that holds even when the stakes rise.',
  },
  {
    icon: Shield,
    title: 'Confidence & Self-Belief',
    desc: 'Rebuild momentum through blips and setbacks. Develop the mental resilience to back yourself unconditionally.',
  },
  {
    icon: Flame,
    title: 'Motivation & Burnout',
    desc: 'Rediscover the drive and fire to train. Reconnect with your why and sustain long-term athletic passion.',
  },
  {
    icon: Users,
    title: 'Team Dynamics & Culture',
    desc: 'Build psychological safety for winning teams. Foster trust, communication, and a collective mindset.',
  },
  {
    icon: Activity,
    title: 'Injury Rehabilitation',
    desc: 'Attack physical rehab with a resilient mindset. Navigate the mental challenges of recovery and return-to-sport.',
  },
]

export function PainPointsSection() {
  return (
    <section
      id="support"
      className="site-section py-24 lg:py-32"
      aria-label="Core areas of support"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-brand-blue/70" aria-hidden="true" />
          <span className="text-brand-blue text-xs font-semibold tracking-[0.2em] uppercase">
            Areas of Support
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance max-w-xl">
            What&apos;s Holding You Back{' '}
            <span className="text-brand-blue">from Your Best?</span>
          </h2>
          <p className="text-muted-foreground max-w-sm leading-relaxed lg:text-right">
            Sport psychology addresses the specific mental obstacles athletes
            face, from the training ground to the biggest stage.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                className="content-card group relative p-6 hover:border-flourish/40 transition-all duration-300"
              >
                {/* Top accent bar on hover */}
                <div
                  className="absolute top-0 left-6 right-6 h-px bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
                  aria-hidden="true"
                />

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors duration-300">
                    <Icon
                      className="h-5 w-5 text-brand-blue"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-foreground font-semibold text-base leading-tight">
                    {area.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
