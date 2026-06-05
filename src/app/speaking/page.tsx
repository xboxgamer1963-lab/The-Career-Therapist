import Link from 'next/link'
import FinalCTA from '@/components/FinalCTA'

const topics = [
  {
    icon: 'theater_comedy',
    title: 'The Unwritten Rules of Work',
    desc: 'Why talented people get overlooked, and the hidden mechanics of how organizations actually decide who rises. A grounded, jargon-free look at workplace power.',
  },
  {
    icon: 'forum',
    title: 'Communicating Under Pressure',
    desc: 'How to speak with clarity and authority in the moments that matter — performance reviews, escalations, layoffs, and the meetings you didn\'t prepare for.',
  },
  {
    icon: 'visibility',
    title: 'Visibility Without Self-Promotion',
    desc: 'A practical framework for being seen and valued by leadership — without performing, posturing, or playing politics in ways that feel inauthentic.',
  },
  {
    icon: 'sentiment_satisfied',
    title: 'Career Identity After a Layoff',
    desc: 'For HR leaders running outplacement and for groups of impacted employees — how to protect dignity, identity, and momentum during involuntary transitions.',
  },
  {
    icon: 'diversity_3',
    title: 'Difficult Conversations at Work',
    desc: 'The conversations most managers and ICs avoid — pay, expectations, boundaries, and feedback that lands. Frameworks people can use the next day.',
  },
  {
    icon: 'workspace_premium',
    title: 'Designing a Career That Survives Change',
    desc: 'Building a career strategy resilient to layoffs, restructures, and industry shifts. For mid-career professionals navigating an uncertain decade.',
  },
]

const formats = [
  { title: 'Keynote', desc: '45–60 min keynote for conferences, leadership offsites, and ERG events.' },
  { title: 'Workshop', desc: '90 min – half day interactive session for teams of 15–150.' },
  { title: 'Fireside chat / panel', desc: 'Moderated conversations and panels on workplace, career, and HR themes.' },
  { title: 'Internal company session', desc: 'Tailored sessions for L&D programs, manager training, or all-hands.' },
]

export default function Speaking() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Speaking</p>
          <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
            Talks on the real mechanics of work.
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-8">
            21 years inside Human Capital, advising leaders and decoding what actually determines whose careers move. I speak to companies, conferences, and ERGs on workplace power, communication, and career strategy — practical content, no clichés.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors">
            Enquire About a Talk <span className="material-icons text-base">arrow_right_alt</span>
          </Link>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-cream border border-border rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-4">Who I&apos;ve spoken to</p>
            <ul className="space-y-3 text-sm text-charcoal">
              <li className="flex items-start gap-2"><span className="material-icons text-sage text-base mt-0.5">check_circle</span>Fortune 500 leadership teams</li>
              <li className="flex items-start gap-2"><span className="material-icons text-sage text-base mt-0.5">check_circle</span>HR & People conferences</li>
              <li className="flex items-start gap-2"><span className="material-icons text-sage text-base mt-0.5">check_circle</span>Employee Resource Groups (ERGs)</li>
              <li className="flex items-start gap-2"><span className="material-icons text-sage text-base mt-0.5">check_circle</span>Executive offsites & retreats</li>
              <li className="flex items-start gap-2"><span className="material-icons text-sage text-base mt-0.5">check_circle</span>L&D and manager training programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Signature talks</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Topics I cover.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map(t => (
              <div key={t.title} className="bg-cream border border-border rounded-2xl p-6">
                <span className="material-icons text-sage text-3xl mb-4">{t.icon}</span>
                <h3 className="font-serif text-xl text-charcoal mb-3 leading-snug">{t.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Formats</p>
        <h2 className="font-serif text-4xl text-charcoal mb-10">How we can work together.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formats.map(f => (
            <div key={f.title} className="border border-border rounded-2xl p-6 bg-white">
              <h3 className="font-serif text-2xl text-charcoal mb-2">{f.title}</h3>
              <p className="text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-6 leading-tight">
            Want me to speak at your event?
          </h2>
          <p className="text-cream/80 leading-relaxed mb-8">
            Send the date, audience, and the question you want the talk to answer. I&apos;ll come back with a fit, a format, and a draft outline.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-cream text-charcoal px-7 py-3.5 rounded-full font-medium hover:bg-sage hover:text-cream transition-colors">
            Enquire Now <span className="material-icons text-base">arrow_forward</span>
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
