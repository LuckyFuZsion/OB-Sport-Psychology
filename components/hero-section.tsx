import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-end md:items-center overflow-hidden"
      aria-label="OBSportPsychology: Helping people flourish"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/OB Sport Psychology.png"
          alt="OBSportPsychology brand graphic"
          fill
          sizes="100vw"
          className="object-cover object-left md:object-[80%_center] lg:object-left"
          priority
          quality={90}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full pt-28 pb-20 lg:py-32">
        <div className="max-w-3xl w-full lg:ml-auto text-left lg:text-right rounded-2xl border border-card-border bg-card/95 text-card-foreground backdrop-blur-sm shadow-xl shadow-black/25 p-6 sm:p-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:text-white lg:shadow-none lg:backdrop-blur-none lg:p-0">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-card-foreground lg:text-white leading-[1.05] tracking-tight mb-4 lg:[text-shadow:0_2px_24px_rgba(0,0,0,0.9)]">
            <span className="block">OB</span>
            <span className="block">SPORT</span>
            <span className="block">PSYCHOLOGY</span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-card-foreground lg:text-white leading-snug mb-8 lg:mb-10 lg:[text-shadow:0_2px_24px_rgba(0,0,0,0.9)]">
            <span>Helping people </span>
            <span className="text-brand-blue">flourish.</span>
          </p>

          <a
            href="#services"
            className="inline-flex items-center justify-center px-7 py-4 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring w-full sm:w-auto lg:ml-auto"
          >
            View services
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-white/60 animate-bounce [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]"
        aria-hidden="true"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </section>
  )
}
