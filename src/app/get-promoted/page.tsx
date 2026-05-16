import Link from 'next/link'
import FinalCTA from '@/components/FinalCTA'

const myths = [
  { myth: 'If I just work harder, they\'ll notice.', truth: 'They won\'t. People get promoted because the decision-makers know what they\'ve done, why it mattered, and what they\'re ready for next. Hard work alone is invisible.' },
  { myth: 'Asking for a promotion is pushy.', truth: 'It\'s expected. Promotions are conversations, not gifts. The people who get promoted are the ones who make a clear case, at the right moment, to the right people.' },
  { myth: 'I should wait until performance review.', truth: 'Most promotion decisions are made months before reviews. By the time the review meeting happens, the answer is already decided. We work backwards from there.' },
  { myth: 'My boss already knows what I do.', truth: 'They know roughly 30% of it. The rest needs to be told — clearly, in language that connects to what they care about. Not bragging. Communicating.' },
]

const steps = [
  { n: '01', title: 'Map the landscape', desc: 'Who actually makes the decision? What does the level above you require? What are the unwritten rules of getting promoted in your company?' },
  { n: '02', title: 'Build your evidence', desc: 'Document your wins, in the right language, with the right metrics. We turn your work into a story that lands.' },
  { n: '03', title: 'Increase your visibility', desc: 'Strategic visibility — not corporate theatre. We make sure the right people see the right things, in the right way.' },
  { n: '04', title: 'Have the conversations', desc: 'When, how, and what to say. We script and rehearse the meetings that move things forward.' },
  { n: '05', title: 'Close the deal', desc: 'When the conversation goes well, you need to know how to push for the offer, the title, the pay rise — and lock it in.' },
]

export default function GetPromoted() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Promotion Coaching</p>
        <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">Get that promotion. Before someone else does.</h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          Build visibility, make the case, and have the conversations that get you promoted. I&apos;ve sat in the rooms where these decisions are made — and I know what tips them.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors mt-8">
          Book a Free Discovery Call <span className="material-icons text-base">arrow_right_alt</span>
        </Link>
      </section>

      {/* Myths vs truth */}
      <section className="bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">The myths that hold you back</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">What you&apos;ve been told vs. what actually works.</h2>
          <div className="space-y-6">
            {myths.map(m => (
              <div key={m.myth} className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-border rounded-2xl overflow-hidden">
                <div className="p-6 bg-cream">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">The myth</p>
                  <p className="font-serif italic text-xl text-charcoal leading-snug">&ldquo;{m.myth}&rdquo;</p>
                </div>
                <div className="p-6 bg-sage-light">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-2">The truth</p>
                  <p className="text-charcoal leading-relaxed">{m.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The plan */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">The promotion playbook</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Five steps, six months, one promotion.</h2>
        <div className="space-y-6">
          {steps.map(s => (
            <div key={s.n} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start border border-border rounded-2xl p-6 bg-white">
              <div className="font-serif text-5xl text-sage shrink-0 md:w-24">{s.n}</div>
              <div>
                <h3 className="font-serif text-2xl text-charcoal mb-2">{s.title}</h3>
                <p className="text-muted leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stat */}
      <section className="bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="font-serif italic text-cream/70 text-lg mb-3">On average</p>
          <p className="font-serif text-6xl lg:text-7xl text-cream mb-3">6 months</p>
          <p className="text-cream/80">from starting to coach with me to the promotion conversation that actually lands.</p>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
