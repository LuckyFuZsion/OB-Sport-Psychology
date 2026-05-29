import Image from 'next/image'
import { SectionEyebrow, SectionTitle } from '@/components/section-header'

const placements = [
  {
    name: 'Brooke House College Football Academy',
    context: 'Football Academy',
    image: '/images/brooke-house.png',
    imageBg: 'bg-white',
    imageClassName: 'object-contain p-8 sm:p-10',
  },
  {
    name: 'Leicester City Football Club',
    context: 'Professional Football',
    image: '/images/leicester-city-football-club.png',
    imageBg: 'bg-[#003090]',
    imageClassName: 'object-contain p-6 sm:p-8',
  },
]

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="site-section py-24 lg:py-32"
      aria-label="Gallery and experience"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEyebrow>Gallery</SectionEyebrow>

        <SectionTitle className="mb-4 max-w-2xl" highlight="Worked">
          Where I&apos;ve
        </SectionTitle>
        <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl">
          Experience across academy and professional football environments.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {placements.map((item) => (
            <figure
              key={item.name}
              className="content-card group flex flex-col overflow-hidden hover:border-flourish/30 transition-colors"
            >
              <div className={`relative aspect-[16/10] ${item.imageBg}`}>
                <Image
                  src={item.image}
                  alt={`${item.name} logo`}
                  fill
                  className={`${item.imageClassName} transition-transform duration-500 group-hover:scale-105`}
                />
              </div>

              <figcaption className="px-6 py-5 border-t border-card-border text-center">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-blue mb-1.5">
                  {item.context}
                </p>
                <p className="text-lg font-bold text-foreground leading-snug text-balance">
                  {item.name}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
