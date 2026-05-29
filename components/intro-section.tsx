import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionEyebrow } from '@/components/section-header'

export function IntroSection() {
  return (
    <section
      id="about"
      className="site-section py-20 lg:py-28 scroll-mt-16"
      aria-label="About Olly"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionEyebrow>About</SectionEyebrow>
        </Reveal>

        <Reveal className="panel-elevated p-6 sm:p-8 lg:p-10" delay={80}>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-stretch">
            <Reveal className="space-y-6 text-card-muted leading-relaxed text-base sm:text-lg" delay={120}>
              <p className="text-card-foreground text-lg sm:text-xl font-medium">
                My name is Olly and I am a Sport and Exercise Psychologist (in
                training) with the Chartered Association of Sport and Exercise
                Science (CASES).
              </p>

              <p>
                My aim is to help athletes effectively cope with the demands of
                their sport, through providing them with evidence-based, theory
                driven strategies and advice.
              </p>

              <p className="text-card-foreground font-medium">
                I offer support tailored to your individual needs.
              </p>

              <p>
                Are you looking to elevate your game? Whether you are currently
                experiencing problems with your sporting performance or just
                looking to gain that extra 5% over your opponents, sport
                psychology can help.
              </p>

              <p>
                I have expertise in football and cricket, with a deep
                understanding of a plethora of sports.
              </p>
            </Reveal>

            <Reveal
              className="relative mx-auto w-full max-w-sm aspect-[4/5] lg:aspect-auto lg:h-full lg:max-w-none lg:mx-0 min-h-[280px] lg:min-h-0"
              delay={200}
            >
              <Image
                src="/images/Olly.webp"
                alt="Olly, sport and exercise psychologist in training"
                fill
                className="object-contain object-bottom lg:object-center"
                sizes="(max-width: 1024px) 100vw, 480px"
                loading="lazy"
              />
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
