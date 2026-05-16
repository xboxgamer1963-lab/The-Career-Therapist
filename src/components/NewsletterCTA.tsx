import Link from 'next/link'

export default function NewsletterCTA() {
  return (
    <section className="bg-sage">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage-light mb-3">The Career Therapist Newsletter</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-4">Weekly career insights — straight to your inbox.</h2>
        <p className="text-cream/80 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Every week I share practical, honest career advice for professionals who want to get ahead. No fluff. No filler. Just the kind of insight I wish someone had given me earlier.
        </p>
        <Link href="/subscribe" className="inline-flex items-center gap-2 bg-cream text-sage px-8 py-3.5 rounded-full font-medium hover:bg-white transition-colors">
          Join the Newsletter — It&apos;s Free <span className="material-icons text-sm">arrow_forward</span>
        </Link>
      </div>
    </section>
  )
}
