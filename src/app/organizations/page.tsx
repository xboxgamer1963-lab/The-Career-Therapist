import FinalCTA from '@/components/FinalCTA'

export default function OrganizationsPage() {
  const outcomes = ['Clarity of direction', 'Confidence in next steps', 'A preserved sense of professional identity']

  return (
    <>
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">For Organizations</p>
        <h1 className="font-serif italic text-5xl text-charcoal mb-6 leading-tight">
          Modern outplacement that protects your brand and your people.
        </h1>
        <p className="text-lg text-muted leading-relaxed mb-8">
          How you exit employees is just as important as how you hire them. We partner with organizations to support workforce transitions with dignity, clarity, and professionalism.
        </p>

        <div className="border-t border-border pt-10 space-y-6">
          <h2 className="font-serif text-2xl text-charcoal">What we protect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-border rounded-xl p-5">
              <p className="font-medium text-charcoal mb-1">The emotional experience</p>
              <p className="text-sm text-muted">Departing employees leave with dignity, not confusion or resentment.</p>
            </div>
            <div className="bg-white border border-border rounded-xl p-5">
              <p className="font-medium text-charcoal mb-1">Your organization&apos;s reputation</p>
              <p className="text-sm text-muted">Structured transitions preserve your employer brand and integrity.</p>
            </div>
          </div>

          <h2 className="font-serif text-2xl text-charcoal pt-4">Departing talent leaves with:</h2>
          <ul className="space-y-3">
            {outcomes.map(o => (
              <li key={o} className="flex items-start gap-3">
                <span className="material-icons text-sage mt-0.5">check_circle</span>
                <span className="text-charcoal">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCTA />
    </>
  )
}
