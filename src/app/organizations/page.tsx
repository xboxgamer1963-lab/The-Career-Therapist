import Link from 'next/link'
import FinalCTA from '@/components/FinalCTA'

const protect = [
  { icon: 'favorite_border', title: 'The emotional experience', desc: 'Departing employees leave with dignity, not confusion or resentment. The conversation they tell their friends about reflects well on you.' },
  { icon: 'shield', title: 'Your employer brand', desc: 'How you exit people becomes part of how candidates evaluate joining. Structured transitions protect what your recruiters spend money to build.' },
  { icon: 'groups', title: 'The team that stays', desc: 'Layoff survivors watch how you handled the people who left. Their trust, engagement, and retention depend on the dignity of that exit.' },
  { icon: 'gavel', title: 'Legal and reputational risk', desc: 'Clear communication, structured support, and proper documentation reduce the risk of complaints, claims, and reputation damage downstream.' },
]

const offerings = [
  {
    tag: 'Outplacement',
    title: 'Career transition support for impacted employees',
    desc: 'Individual coaching for employees being let go: resume, LinkedIn, interview prep, job search strategy, and the emotional reset most outplacement programs skip. Senior tracks available for VP+ and C-suite exits.',
  },
  {
    tag: 'Manager training',
    title: 'How to deliver difficult news, well',
    desc: 'Workshops for managers who will be running layoff conversations, performance exits, or restructure announcements. Scripts, frameworks, and live practice — not a PDF.',
  },
  {
    tag: 'L&D programs',
    title: 'Career strategy & communication for your people',
    desc: 'Talks and workshops for high-potential cohorts, ERGs, and L&D programs — on workplace communication, executive presence, and the unwritten rules of organizations.',
  },
  {
    tag: 'Executive coaching',
    title: '1-on-1 coaching for senior leaders',
    desc: 'Selective 1-on-1 work with VPs, executives, and recent promotes navigating new altitude — board dynamics, succession, communication under pressure, and the political map of their organization.',
  },
]

const process = [
  { step: '01', title: 'Discovery call', desc: 'A working session to understand the situation — headcount, timeline, sensitivities, and what success looks like for your team.' },
  { step: '02', title: 'Tailored proposal', desc: 'A scoped engagement: what\'s included, how it\'s delivered, what your people experience, and what your leadership reports up.' },
  { step: '03', title: 'Delivery & support', desc: 'Confidential 1-on-1 work with impacted employees, plus weekly status to your HR lead. No surprises.' },
  { step: '04', title: 'Wrap & report', desc: 'A summary of outcomes — placement progress, themes from the cohort, and recommendations for the team that remains.' },
]

export default function OrganizationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">For Organizations</p>
        <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal leading-tight mb-6 max-w-3xl">
          Modern outplacement that protects your brand and your people.
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mb-8">
          How you exit employees is just as important as how you hire them. We partner with HR and People leaders to support workforce transitions with dignity, clarity, and professionalism — and to build the kind of internal capability that prevents the next round being harder than the last.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors">
            Talk to Aisha <span className="material-icons text-base">arrow_right_alt</span>
          </Link>
          <Link href="/speaking" className="inline-flex items-center px-7 py-3.5 rounded-full border border-border font-medium text-charcoal hover:bg-border transition-colors">
            See Speaking & Workshops
          </Link>
        </div>
      </section>

      {/* What we protect */}
      <section className="bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">What we protect</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Four things that are on the line every time.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {protect.map(p => (
              <div key={p.title} className="bg-cream border border-border rounded-2xl p-6">
                <span className="material-icons text-sage text-3xl mb-4">{p.icon}</span>
                <h3 className="font-serif text-xl text-charcoal mb-2">{p.title}</h3>
                <p className="text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">How we partner</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Four ways organizations work with us.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offerings.map(o => (
            <div key={o.title} className="bg-white border border-border rounded-2xl p-7">
              <span className="inline-block bg-sage-light text-sage text-xs font-semibold px-3 py-1 rounded-full mb-4">{o.tag}</span>
              <h3 className="font-serif text-2xl text-charcoal mb-3 leading-snug">{o.title}</h3>
              <p className="text-muted leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">How it works</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">A clear four-step process.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(p => (
              <div key={p.step} className="bg-cream border border-border rounded-2xl p-6">
                <div className="font-serif text-3xl text-sage mb-3">{p.step}</div>
                <h3 className="font-serif text-lg text-charcoal mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Who we work with</p>
        <h2 className="font-serif text-4xl text-charcoal mb-8">Built with HR & People leaders in mind.</h2>
        <p className="text-lg text-muted leading-relaxed mb-8">
          Most often: Heads of People, CHROs, and Employee Relations leads navigating restructures, performance exits, executive transitions, or one-off senior departures. Engagements range from a single executive exit handled with care, through to cohort-level outplacement and L&D partnerships.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors">
          Start a Conversation <span className="material-icons text-base">arrow_right_alt</span>
        </Link>
      </section>

      <FinalCTA />
    </>
  )
}
