import Link from 'next/link'

const testimonials = [
  {
    tag: 'Job Search',
    quote: "I'd been applying for three months with nothing. In our first session, Aisha told me exactly what was wrong with my resume and my LinkedIn. Two weeks later I had three interviews. I got the job I actually wanted.",
    name: 'Sarah M.',
    role: 'Marketing Manager',
    company: 'B2B SaaS · New York',
    outcome: '3 interviews in 2 weeks → offer accepted',
    color: 'bg-amber-200 text-amber-900',
  },
  {
    tag: 'Promotion',
    quote: "I'd been in the same role for four years and couldn't figure out why I kept getting passed over. Aisha helped me see what I was missing — and within six months I'd been promoted to Head of Department.",
    name: 'David L.',
    role: 'Head of Operations',
    company: 'Financial Services · Chicago',
    outcome: 'Promoted to Head of Department in 6 months',
    color: 'bg-sage-light text-sage',
  },
  {
    tag: 'Layoff Recovery',
    quote: "I was laid off after eight years and had no idea where to start. Aisha was calm, practical, and knew exactly what I needed to do. I had a new role within seven weeks.",
    name: 'Priya N.',
    role: 'Senior Project Manager',
    company: 'Healthcare · Austin',
    outcome: 'New senior role in 7 weeks',
    color: 'bg-sky-200 text-sky-900',
  },
]

function initials(name: string) {
  return name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase()
}

export default function Testimonials() {
  return (
    <section className="bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">What clients say</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal">Real results from real people.</h2>
          </div>
          <Link href="/results" className="inline-flex items-center gap-1 text-sm font-medium text-sage hover:underline">
            See all client results <span className="material-icons text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.name} className="flex flex-col gap-5 bg-cream border border-border rounded-2xl p-6">
              <span className="inline-block self-start bg-sage-light text-sage text-xs font-semibold px-3 py-1 rounded-full">{t.tag}</span>
              <p className="font-serif italic text-lg text-charcoal leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-3 pt-2">
                <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-sm font-semibold shrink-0`}>
                  {initials(t.name)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-charcoal leading-tight">{t.name}</div>
                  <div className="text-xs text-muted leading-tight">{t.role} · {t.company}</div>
                </div>
              </div>

              <div className="border-t border-border pt-4 -mb-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage">
                  <span className="material-icons text-sm">trending_up</span> {t.outcome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
