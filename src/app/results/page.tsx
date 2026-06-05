import Link from 'next/link'
import FinalCTA from '@/components/FinalCTA'

const stats = [
  { value: '100+', label: 'Professionals coached' },
  { value: '21', label: 'Years inside HR' },
  { value: 'All', label: 'Industries served' },
  { value: 'USA', label: 'Coast to coast' },
]

const cases = [
  {
    tag: 'Promotion',
    name: 'David L.',
    role: 'Head of Operations',
    company: 'Financial Services · Chicago',
    headline: 'Promoted to Head of Department in 6 months',
    before: 'Four years in the same senior role. Strong performance reviews. Repeatedly passed over for the next level. Told to be "more visible" with no one able to explain what that meant.',
    work: 'We unpacked the political map of his organization — who actually decided promotions, what they were rewarding, and where his work was landing (and where it wasn\'t). Then we rebuilt how he positioned himself in meetings, written updates, and skip-levels.',
    after: 'Promoted to Head of Department within 6 months. Now sits in the leadership team he was previously presenting to.',
    color: 'bg-sage-light text-sage',
  },
  {
    tag: 'Job Search',
    name: 'Sarah M.',
    role: 'Marketing Manager',
    company: 'B2B SaaS · New York',
    headline: '3 interviews in 2 weeks → offer accepted',
    before: 'Three months of applying with no responses. Polished resume on paper, no callbacks in practice. Beginning to question whether she\'d misjudged the market.',
    work: 'In the first session we rebuilt the resume around outcomes a hiring manager would actually scan for, and rewrote her LinkedIn so recruiters could find her. We also reframed her "why I\'m looking" answer so it didn\'t telegraph desperation.',
    after: 'Three first-round interviews in two weeks. Accepted an offer with a 14% bump from her previous role.',
    color: 'bg-amber-200 text-amber-900',
  },
  {
    tag: 'Layoff Recovery',
    name: 'Priya N.',
    role: 'Senior Project Manager',
    company: 'Healthcare · Austin',
    headline: 'New senior role in 7 weeks',
    before: 'Laid off after eight years at the same company. No active network, no recent interview practice, and an identity heavily tied to the company she\'d just left.',
    work: 'We separated the grief from the strategy. Built a 60-day plan with specific weekly actions, reactivated her network without it feeling transactional, and prepped her for the exact questions she\'d be asked about the layoff.',
    after: 'Signed a new senior role within seven weeks — at a company with a healthier culture and a clearer growth path.',
    color: 'bg-sky-200 text-sky-900',
  },
  {
    tag: 'Toxic Workplace',
    name: 'Jordan R.',
    role: 'Product Lead',
    company: 'Consumer Tech · San Francisco',
    headline: 'Left on her own terms — with a plan',
    before: 'A new manager and a shifting culture had turned a job she loved into one she dreaded. Confidence dropping, sleep going, second-guessing every decision.',
    work: 'We separated what was actually happening from how she was internalizing it. Built language and boundaries for the day-to-day, and ran a parallel job search so she wasn\'t deciding under panic.',
    after: 'Resigned on her own terms with a stronger role lined up. Took two weeks off in between for the first time in years.',
    color: 'bg-rose-200 text-rose-900',
  },
  {
    tag: 'Career Change',
    name: 'Marcus T.',
    role: 'From Finance → Strategy',
    company: 'Tech · Seattle',
    headline: 'Cross-industry pivot in 4 months',
    before: 'Eight years in finance, increasingly sure it wasn\'t the right long-term fit. No clear sense of what came next and a fear that he\'d have to "start over."',
    work: 'We ran a structured exploration — not a career quiz — to identify the skills that traveled and the ones that didn\'t. Then we built a positioning story that read as a deliberate move, not a retreat.',
    after: 'Landed a Strategy role at a major tech company. No pay cut. No starting over.',
    color: 'bg-violet-200 text-violet-900',
  },
  {
    tag: 'Visibility',
    name: 'Elena K.',
    role: 'Senior Engineer',
    company: 'Enterprise SaaS · Boston',
    headline: 'Recognized by leadership within weeks',
    before: 'Consistently top-performing on the team and consistently overlooked when opportunities came up. Delivering quietly. Being credited quietly.',
    work: 'We rebuilt how her work was being communicated — weekly updates, demo days, skip-levels, and the specific phrasing that made impact land with non-technical leadership.',
    after: 'Pulled into two visible cross-functional initiatives within weeks. Now on the shortlist for staff engineer.',
    color: 'bg-emerald-200 text-emerald-900',
  },
  {
    tag: 'Salary Negotiation',
    name: 'Aaron W.',
    role: 'Director of Partnerships',
    company: 'Media · Los Angeles',
    headline: '22% increase on the table',
    before: 'About to accept an offer he was nervous to negotiate, worried he\'d "annoy" the recruiter and lose it.',
    work: 'We built the actual scripts — for the recruiter call, the counter, and the silence in between. Mapped where the flex usually sits in offers at that level.',
    after: 'Negotiated a 22% increase on base, an additional sign-on, and a faster equity vest. The recruiter thanked him for being clear.',
    color: 'bg-amber-200 text-amber-900',
  },
]

function initials(name: string) {
  return name.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase()
}

export default function Results() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Client Results</p>
        <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
          What changes when you stop guessing.
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          Real outcomes from real clients — promotions, pivots, new roles, salary jumps, and the quieter wins that don&apos;t fit on a LinkedIn post. Names lightly anonymised at client request.
        </p>
      </section>

      {/* Stats strip */}
      <section className="bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-4xl text-charcoal mb-1">{s.value}</div>
              <div className="text-xs text-muted uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">
        {cases.map(c => (
          <article key={c.headline} className="bg-white border border-border rounded-2xl p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="inline-block bg-sage-light text-sage text-xs font-semibold px-3 py-1 rounded-full">{c.tag}</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sage">
                <span className="material-icons text-base">trending_up</span> {c.headline}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-full ${c.color} flex items-center justify-center text-sm font-semibold shrink-0`}>
                {initials(c.name)}
              </div>
              <div>
                <div className="text-sm font-semibold text-charcoal leading-tight">{c.name}</div>
                <div className="text-xs text-muted leading-tight">{c.role} · {c.company}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">Before</p>
                <p className="text-sm text-charcoal/90 leading-relaxed">{c.before}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">The work</p>
                <p className="text-sm text-charcoal/90 leading-relaxed">{c.work}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-2">After</p>
                <p className="text-sm text-charcoal leading-relaxed font-medium">{c.after}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Mid CTA before FinalCTA */}
      <section className="max-w-3xl mx-auto px-6 pb-8 text-center">
        <p className="text-muted mb-6">Your situation is more specific than any case study. The first call is where we look at yours.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors">
          Book a Free Discovery Call <span className="material-icons text-base">arrow_right_alt</span>
        </Link>
      </section>

      <FinalCTA />
    </>
  )
}
