import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="bg-white border-y border-border">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0">
          <Image src="/aisha.jpg" alt="Aisha Naser, Founder of My Career Therapist" fill className="object-cover object-top" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">About the Founder</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4 leading-tight">
            I&apos;m Aisha Naser.
          </h2>
          <p className="text-lg text-charcoal mb-6">Founder of My Career Therapist.</p>

          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              A strategic Human Capital leader with 20+ years advising executives and navigating complex workplace dynamics across the U.S., U.K., APAC, and MENA.
            </p>
            <p>
              I&apos;ve been in the rooms where decisions are made — and I noticed a pattern. The people who struggled most weren&apos;t the least capable. They were the least equipped to navigate the unspoken rules of work.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-charcoal text-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-sage transition-colors"
            >
              Read the full story <span className="material-icons text-base">arrow_right_alt</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full border border-border text-sm font-medium text-charcoal hover:bg-cream transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
