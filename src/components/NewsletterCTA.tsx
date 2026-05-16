import Link from 'next/link'

export default function NewsletterCTA() {
  return (
    <section className="bg-sage">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage-light mb-3">Stay Sharp</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-4">The playbook no one gives you — delivered weekly.</h2>
        <p className="text-cream/80 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Practical career strategy, communication frameworks, and workplace insight for professionals who want an edge. No fluff. Built for implementation.
        </p>
        <Link href="/subscribe" className="inline-flex items-center gap-2 bg-cream text-sage px-8 py-3.5 rounded-full font-medium hover:bg-white transition-colors">
          Join the Newsletter — It&apos;s Free <span className="material-icons text-sm">arrow_forward</span>
        </Link>
      </div>
    </section>
  )
}
