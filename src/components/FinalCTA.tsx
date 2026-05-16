import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="bg-charcoal">
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-4">
          If you&apos;re done playing small in rooms you&apos;ve already earned your place in —
        </h2>
        <p className="text-cream/70 text-lg mb-10 leading-relaxed">
          Book a free discovery call. We&apos;ll decode what&apos;s holding you back and map out what comes next.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-cream text-charcoal px-8 py-4 rounded-full font-medium hover:bg-sage hover:text-cream transition-colors">
          Book a Free Discovery Call
          <span className="material-icons text-base">arrow_right_alt</span>
        </Link>
      </div>
    </section>
  )
}
