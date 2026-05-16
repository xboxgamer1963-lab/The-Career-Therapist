import Link from 'next/link'
import FinalCTA from '@/components/FinalCTA'

const stages = [
  { n: '01', title: 'Steady the ground', desc: 'First — breathe. We deal with the financial picture (severance, COBRA, unemployment, 401(k) decisions), the immediate practical stuff, and the emotional whiplash. You can\'t plan a job search from inside a panic.' },
  { n: '02', title: 'Reset the story', desc: 'Being laid off is not a character flaw. We rewrite the narrative — for your resume, for LinkedIn, and for the moment in interviews when someone asks why you left. You\'ll have a calm, confident answer.' },
  { n: '03', title: 'Sharpen the search', desc: 'Resume refreshed, LinkedIn rebuilt, search strategy targeted. We focus on roles that actually fit you — not whatever\'s adjacent to your last job. This is a chance to land somewhere better, not just somewhere new.' },
  { n: '04', title: 'Move fast, move well', desc: 'Daily and weekly accountability. Interview prep on demand. Offer negotiation. We move quickly without compromising on the kind of role you accept.' },
]

const reassurance = [
  "You will land another role. Most clients in this situation are back in work within 7-9 weeks.",
  "Layoffs do not damage your career story when handled well.",
  "Many of my clients end up in better roles than the one they lost.",
  "You don't have to do this alone — and you shouldn't.",
]

export default function LaidOff() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sage-light">
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Layoff Support</p>
          <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">Just been laid off? Take a breath. We&apos;ll work it out.</h1>
          <p className="text-lg text-charcoal/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Practical, fast support to get you back on your feet and into a role that&apos;s actually right. The first 48 hours after a layoff are disorientating — you don&apos;t have to figure it out alone.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors">
            Book a Free Call — Today <span className="material-icons text-base">arrow_right_alt</span>
          </Link>
        </div>
      </section>

      {/* Reassurance */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Before we go any further</p>
        <h2 className="font-serif text-4xl text-charcoal mb-8 leading-tight">A few things to know.</h2>
        <ul className="space-y-4">
          {reassurance.map(r => (
            <li key={r} className="flex items-start gap-3">
              <span className="material-icons text-sage mt-0.5">favorite</span>
              <span className="text-charcoal text-lg leading-relaxed">{r}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Stages */}
      <section className="bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">How we work through this</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">From the shock to the next chapter.</h2>
          <div className="space-y-6">
            {stages.map(s => (
              <div key={s.n} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start border border-border rounded-2xl p-6 bg-cream">
                <div className="font-serif text-5xl text-sage shrink-0 md:w-24">{s.n}</div>
                <div>
                  <h3 className="font-serif text-2xl text-charcoal mb-2">{s.title}</h3>
                  <p className="text-muted leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-4 leading-tight">If you were laid off this week — please book a call today.</h2>

        <p className="text-muted leading-relaxed mb-8">
          I keep slots in my calendar for people in active layoff. The free call is genuinely free and there&apos;s no obligation. I&apos;d rather you got the right help quickly than struggle alone for two weeks.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors">
          Book a Free Call <span className="material-icons text-base">arrow_right_alt</span>
        </Link>
      </section>

      <FinalCTA />
    </>
  )
}
