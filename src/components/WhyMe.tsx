import Link from 'next/link'

const points = [
  "We decode the hidden rules of how workplaces actually function.",
  "We go beyond resumes — we rebuild how you're perceived and how you communicate.",
  "We work on the patterns, not just the symptoms.",
  "We give you frameworks and scripts, not motivation and hope.",
  "We support individuals and organizations — because the problem exists on both sides.",
]

export default function WhyMe() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Why This Work Exists</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4 leading-tight">We go deeper than career advice.</h2>
        <p className="text-muted leading-relaxed mb-6">I&apos;m not a &ldquo;career coach.&rdquo; I&apos;m a Career Therapist — which means we unpack the patterns holding you back, rebuild how you show up, and equip you to operate with clarity, confidence, and control.</p>
        <Link href="/about" className="inline-flex items-center gap-1 text-sm font-medium text-sage hover:underline">
          More about our approach <span className="material-icons text-sm">arrow_forward</span>
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
