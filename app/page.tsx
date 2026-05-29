import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { IntroSection } from '@/components/intro-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { GallerySection } from '@/components/gallery-section'
import { BlogSection } from '@/components/blog-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
