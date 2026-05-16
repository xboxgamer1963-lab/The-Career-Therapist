import Link from 'next/link'
import Image from 'next/image'
import FinalCTA from '@/components/FinalCTA'

const packages = [
  {
    name: 'The Power Hour',
    price: '$225',
    duration: 'Single session',
    desc: 'A focused 60-minute deep dive. Perfect when you have one specific problem you need solved — a resume, a tricky conversation, a single interview, a job offer you\'re weighing up.',
    includes: [
      '60-minute 1-on-1 coaching call',
      'Pre-session questionnaire',
      'Written follow-up with action steps',
      'One week of email support after',
    ],
    cta: 'Book a Power Hour',
  },
  {
    name: 'The Full Journey',
    price: '$1,250',
    duration: '6 sessions over 3 months',
    desc: 'The full program. We work together over three months to land you somewhere genuinely better — a new role, a promotion, a clear career pivot, or a strategy that finally works.',
    includes: [
      'Six 60-minute coaching sessions',
      'Full resume and LinkedIn review',
      'Interview prep and offer negotiation',
      'Unlimited WhatsApp & email between sessions',
      'Bespoke career action plan',
    ],
    cta: 'Start the Journey',
    featured: true,
  },
  {
    name: 'The Quarterly',
    price: '$595',
    duration: '3 sessions over 6 weeks',
    desc: 'A focused six-week block. The right fit when you know the goal but need a coach, accountability, and a clear plan to get there fast.',
    includes: [
      'Three 60-minute coaching sessions',
      'Resume or LinkedIn review (your pick)',
      'Two weeks of email support after',
      'Tailored action plan',
    ],
    cta: 'Choose The Quarterly',
  },
]

const process = [
  { n: '01', title: 'Free discovery call', desc: 'A 20-minute, no-pressure chat to understand where you are, what you want, and whether we\'re the right fit.' },
  { n: '02', title: 'Deep-dive questionnaire', desc: 'Before our first session you\'ll share your story, your goals, and what\'s been getting in the way. We don\'t waste session time on history.' },
  { n: '03', title: 'Strategy and action', desc: 'Every session ends with a clear next step. You\'ll never leave a call wondering what you\'re meant to do.' },
  { n: '04', title: 'Accountability and support', desc: 'I\'m here between sessions. Got an interview tomorrow? A weird email from your boss? Send it over.' },
]

export default function Coaching() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Work With Me</p>
          <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">1-on-1 Career Coaching</h1>
          <p className="text-lg text-muted leading-relaxed mb-8">
            Personalised career coaching for professionals at every stage. Whether you&apos;re job hunting, chasing a promotion, recovering from a layoff, or rethinking the whole thing — we&apos;ll build a plan together and I&apos;ll be in your corner every step of the way.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors">
            Book a Free Discovery Call <span className="material-icons text-base">arrow_right_alt</span>
          </Link>
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:ml-auto">
          <Image src="/aisha.jpg" alt="Aisha — career coach" fill className="object-cover" />
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Coaching Packages</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Pick the package that fits where you are.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packages.map(p => (
              <div key={p.name} className={`rounded-2xl p-8 flex flex-col border ${p.featured ? 'bg-charcoal text-cream border-charcoal' : 'bg-cream border-border'}`}>
                {p.featured && <span className="inline-block self-start bg-sage text-cream text-xs font-semibold px-3 py-1 rounded-full mb-4">Most popular</span>}
                <h3 className={`font-serif text-2xl mb-1 ${p.featured ? 'text-cream' : 'text-charcoal'}`}>{p.name}</h3>
                <p className={`text-xs uppercase tracking-widest mb-4 ${p.featured ? 'text-cream/60' : 'text-muted'}`}>{p.duration}</p>
                <p className={`font-serif text-4xl mb-6 ${p.featured ? 'text-cream' : 'text-charcoal'}`}>{p.price}</p>
                <p className={`text-sm leading-relaxed mb-6 ${p.featured ? 'text-cream/80' : 'text-muted'}`}>{p.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {p.includes.map(i => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className={`material-icons text-base mt-0.5 ${p.featured ? 'text-sage-light' : 'text-sage'}`}>check</span>
                      <span className={p.featured ? 'text-cream/90' : 'text-charcoal'}>{i}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${p.featured ? 'bg-cream text-charcoal hover:bg-white' : 'bg-charcoal text-cream hover:bg-sage'}`}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">How it works</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">From first call to real change.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map(s => (
            <div key={s.n}>
              <div className="font-serif text-5xl text-sage mb-4">{s.n}</div>
              <h3 className="font-serif text-xl text-charcoal mb-3">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
