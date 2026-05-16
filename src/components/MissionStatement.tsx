export default function MissionStatement() {
  const pillars = [
    { icon: 'visibility', label: 'How you\'re perceived' },
    { icon: 'record_voice_over', label: 'How you communicate under pressure' },
    { icon: 'hub', label: 'How you navigate politics and influence' },
  ]

  const outcomes = [
    'Clearer in how they speak and position themselves',
    'More strategic in how they navigate work environments',
    'More visible to decision-makers',
    'More aligned between performance and recognition',
  ]

  return (
    <>
      {/* Why This Work Matters */}
      <section className="bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Why This Work Matters</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6 leading-tight">
              Talent without positioning gets ignored.
            </h2>
            <div className="space-y-4 text-cream/70 leading-relaxed">
              <p>Hard work without visibility gets overlooked.</p>
              <p>Success at work is not just about performance — it&apos;s about perception.</p>
              <p className="text-cream font-medium">Most professionals are not failing at their jobs. They are failing at navigating the system around their jobs.</p>
              <p>My Career Therapist exists to change that. We help professionals stop reacting to their careers — and start intentionally shaping them.</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-6">What we focus on</p>
            {pillars.map(p => (
              <div key={p.label} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                <span className="material-icons text-sage text-2xl">{p.icon}</span>
                <span className="text-cream font-medium">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-sage">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage-light mb-4">Our Mission</p>
          <p className="font-serif italic text-2xl lg:text-3xl text-cream leading-relaxed">
            To help professionals understand and navigate the hidden dynamics of work — so they can communicate with clarity, operate with confidence, and build careers rooted in influence, not exhaustion.
          </p>
        </div>
      </section>

      {/* The Outcome */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">The Outcome</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4 leading-tight">
              Clients don&apos;t just &ldquo;feel more confident.&rdquo;
            </h2>
            <p className="text-muted leading-relaxed">They stop being overlooked.</p>
          </div>
          <ul className="space-y-4">
            {outcomes.map(o => (
              <li key={o} className="flex items-start gap-3">
                <span className="material-icons text-sage mt-0.5">check_circle</span>
                <span className="text-charcoal leading-relaxed">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
