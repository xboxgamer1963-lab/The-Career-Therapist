import Link from 'next/link'

const points = [
  "I've worked in HR. I know how hiring decisions are actually made — and what gets resumes tossed.",
  "I give you real, honest feedback — not generic advice you could find on Google.",
  "I work 1-on-1. Every session is entirely focused on you, your situation, and your goals.",
  "I support you across the whole career journey — not just one moment in it.",
  "I've helped professionals from graduates to senior leaders, across every industry.",
]

export default function WhyMe() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Why work with me</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4 leading-tight">What makes working with me different.</h2>
        <p className="text-muted leading-relaxed mb-6">Most career advice is written from the outside looking in. Mine comes from the inside.</p>
        <Link href="/about" className="inline-flex items-center gap-1 text-sm font-medium text-sage hover:underline">
          More about Aisha <span className="material-icons text-sm">arrow_forward</span>
        </Link>
      </div>
      <ul className="space-y-5">
        {points.map(p => (
          <li key={p} className="flex items-start gap-3">
            <span className="material-icons text-sage mt-0.5">check_circle</span>
            <span className="text-charcoal leading-relaxed">{p}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
