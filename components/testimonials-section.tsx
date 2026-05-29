import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Working with OB Sport Psychology has completely transformed the way I approach competition. The techniques I have learned have allowed me to perform with freedom and confidence, even under the most intense pressure. I genuinely wish I had accessed this support years earlier in my career.',
    author: 'Elite Athlete',
    role: 'National Level Competitor',
    initial: 'A',
  },
  {
    quote:
      'As a parent, seeing my son struggle with performance anxiety was incredibly difficult. The sessions were structured, professional, and delivered such clear progress. His mindset going into matches is unrecognisable: calm, focused, and back to enjoying his sport.',
    author: 'Parent of Academy Player',
    role: 'Academy Football',
    initial: 'P',
  },
  {
    quote:
      'The team workshop we commissioned exceeded every expectation. The content was tailored perfectly to our squad and the psychological safety it created had a tangible impact on our training environment and results within weeks.',
    author: 'Head Coach',
    role: 'Professional Club, UK',
    initial: 'C',
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-secondary/30"
      aria-label="Client testimonials"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Testimonials
          </span>
        </div>
        <div className="mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance max-w-2xl">
            What Athletes &amp;{' '}
            <span className="text-primary">Coaches Say</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col p-7 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote
                className="h-8 w-8 text-primary/30 mb-5 flex-shrink-0"
                aria-hidden="true"
              />

              <blockquote className="flex-1">
                <p className="text-foreground/80 text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              <figcaption className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                {/* Avatar placeholder */}
                <div
                  className="h-9 w-9 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-primary font-bold text-sm">
                    {t.initial}
                  </span>
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">
                    {t.author}
                  </p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Placeholder note */}
        <p className="mt-8 text-center text-muted-foreground text-xs">
          Testimonials anonymised to protect client confidentiality.
        </p>
      </div>
    </section>
  )
}
