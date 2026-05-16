import HeroSection     from '@/components/HeroSection'
import AboutSection    from '@/components/AboutSection'
import ServicesGrid    from '@/components/ServicesGrid'
import Testimonials    from '@/components/Testimonials'
import WhyMe           from '@/components/WhyMe'
import NewsletterCTA   from '@/components/NewsletterCTA'
import FAQAccordion    from '@/components/FAQAccordion'
import FinalCTA        from '@/components/FinalCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <Testimonials />
      <WhyMe />
      <NewsletterCTA />
      <FAQAccordion />
      <FinalCTA />
    </>
  )
}
