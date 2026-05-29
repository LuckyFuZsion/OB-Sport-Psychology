import Image from 'next/image'

export function IntroSection() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-background border-b border-border scroll-mt-16"
      aria-label="About Olly"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8 lg:mb-12">
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            About
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-stretch">
          <div className="space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
          <p className="text-foreground text-lg sm:text-xl font-medium">
            My name is Olly and I am a Sport and Exercise
            Psychologist (in training) with the Chartered Association of Sport
            and Exercise Science (CASES).
          </p>

          <p>
            My aim is to help athletes effectively cope with the demands of their
            sport, through providing them with evidence-based, theory driven
            strategies and advice.
          </p>

          <p className="text-foreground font-medium">
            I offer support tailored to your individual needs.
          </p>

          <p>
            Are you looking to elevate your game? Whether you are currently
            experiencing problems with your sporting performance or just looking
            to gain that extra 5% over your opponents, sport psychology can help.
          </p>

          <p>
            I have expertise in football and cricket, with a deep understanding
            of a plethora of sports.
          </p>
          </div>

          <figure className="relative mx-auto w-full max-w-sm aspect-[4/5] lg:aspect-auto lg:h-full lg:max-w-none lg:mx-0 min-h-[280px] lg:min-h-0">
            <Image
              src="/images/Olly.webp"
              alt="Olly, sport and exercise psychologist in training"
              fill
              className="object-contain object-bottom lg:object-center"
              sizes="(max-width: 1024px) 384px, 480px"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  )
}