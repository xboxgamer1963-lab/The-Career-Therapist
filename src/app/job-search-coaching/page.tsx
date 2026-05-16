import Link from 'next/link'
import FinalCTA from '@/components/FinalCTA'

const problems = [
  "You're applying for dozens of jobs and hearing nothing back.",
  "Your resume gets you interviews — but never offers.",
  "You're not sure what roles you should even be aiming for.",
  "LinkedIn feels like shouting into a void.",
  "You freeze in interviews — even though you know your stuff.",
  "You've had offers but never know how to negotiate properly.",
]

const includes = [
  { icon: 'description', title: 'Resume that actually gets read', desc: 'A complete rewrite of your resume by someone who has actually sat on the other side of hiring decisions. Built to pass ATS systems and catch a human reader in the first six seconds.' },
  { icon: 'hub', title: 'LinkedIn profile that pulls', desc: 'A LinkedIn profile that recruiters search for and senior hiring managers respect. Headline, About, Experience — all of it rebuilt.' },
  { icon: 'search', title: 'A targeted search strategy', desc: 'Stop applying to everything. We\'ll narrow down the roles, companies, and angles that actually fit your profile and your goals.' },
  { icon: 'forum', title: 'Interview prep that works', desc: 'Mock interviews, frameworks for the tough questions, and the one thing that turns a good interview into an offer.' },
  { icon: 'handshake', title: 'Offer negotiation', desc: 'Most people leave money on the table. We\'ll work out exactly what to ask for and how — calmly, professionally, without burning bridges.' },
  { icon: 'campaign', title: 'The hidden job market', desc: 'How to find and land the 70% of roles that never get advertised. Networking strategies that work for introverts too.' },
]

export default function JobSearchCoaching() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Job Search Coaching</p>
        <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">Land your next job — and actually want it.</h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          A focused strategy to find the right role, stand out, and get offers. Built on years of seeing how hiring actually happens — not what LinkedIn influencers tell you it does.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors mt-8">
          Book a Free Discovery Call <span className="material-icons text-base">arrow_right_alt</span>
        </Link>
      </section>

      {/* Problems */}
      <section className="bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">If this sounds familiar…</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">You&apos;re not alone — and it&apos;s entirely fixable.</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {problems.map(p => (
              <li key={p} className="flex items-start gap-3 bg-cream border border-border rounded-xl p-5">
                <span className="material-icons text-sage mt-0.5">error_outline</span>
                <span className="text-charcoal leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's included */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">What we&apos;ll work on</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Everything you need — nothing you don&apos;t.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {includes.map(i => (
            <div key={i.title} className="bg-white border border-border rounded-2xl p-6">
              <span className="material-icons text-sage text-3xl mb-4">{i.icon}</span>
              <h3 className="font-serif text-xl text-charcoal mb-3">{i.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Result */}
      <section className="bg-sage-light">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">The outcome</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">A job you actually want — landed faster.</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            On average, my job-search clients land a new role within 9 weeks of starting — with a salary uplift of 18%. But more importantly: in a role that actually fits.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
