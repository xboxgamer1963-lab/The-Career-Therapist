import Link from 'next/link'

const services = [
  {
    icon: 'work',
    title: 'Land Your Next Job',
    desc: 'Stop sending applications into the void. We\'ll build a job search strategy that works — the right roles, a standout resume and LinkedIn, interview prep, and offer negotiation.',
    href: '/job-search-coaching',
  },
  {
    icon: 'trending_up',
    title: 'Get That Promotion',
    desc: 'Hard work alone won\'t get you promoted. I\'ll help you build your visibility, strengthen your case, and have the conversations that move things forward — before someone else gets there first.',
    href: '/get-promoted',
  },
  {
    icon: 'support',
    title: 'Just Been Laid Off?',
    desc: 'Being made redundant is a shock. I\'ll help you get your bearings, update your positioning, and launch a focused job search so you land your next role faster and better.',
    href: '/laid-off',
  },
  {
    icon: 'moving',
    title: 'Ready for a Career Change?',
    desc: 'Changing direction is possible at any age and any stage. I\'ll help you get clear on what you want, identify your transferable strengths, and build a practical path forward.',
    href: '/career-change',
  },
]

export default function ServicesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">How I can help you</p>
      <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Four ways forward</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(s => (
          <div key={s.href} className="bg-white border border-border rounded-2xl p-6 flex flex-col hover:shadow-md transition-shadow">
            <span className="material-icons text-sage text-3xl mb-4">{s.icon}</span>
            <h3 className="font-serif text-xl text-charcoal mb-3">{s.title}</h3>
            <p className="text-sm text-muted leading-relaxed flex-1">{s.desc}</p>
            <Link href={s.href} className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-sage hover:underline">
              Learn more <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
