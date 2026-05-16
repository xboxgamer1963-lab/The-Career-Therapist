import Link from 'next/link'

const services = [
  {
    icon: 'psychology',
    title: 'Strategic Career Therapy',
    subtitle: 'For Individuals',
    desc: 'Private, high-touch guidance for professionals navigating complex or high-stakes environments. We focus on executive-level communication, workplace politics, promotion preparation, leadership positioning, and rebuilding confidence under pressure. This is not motivational coaching. This is structured recalibration of how you operate at work.',
    href: '/coaching',
  },
  {
    icon: 'corporate_fare',
    title: 'Workforce Transition & Outplacement',
    subtitle: 'For Organizations',
    desc: 'We partner with organizations to support employees through transitions with dignity, clarity, and professionalism. Our approach protects both the emotional experience of departing employees and the reputation of the organization — so people exit with clarity, confidence, and a preserved sense of professional identity.',
    href: '/organizations',
  },
  {
    icon: 'school',
    title: 'Courses, Tools & Community',
    subtitle: 'For Professionals at Scale',
    desc: 'Structured learning experiences built for real workplace advantage — not theory. Communication frameworks, templates for high-stakes conversations, workshops on influence and perception management, and a private community for ambitious professionals. This is the playbook no one gives you — until now.',
    href: '/club',
  },
]

export default function ServicesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">What We Do</p>
      <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Three tracks. One mission.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.href} className="bg-white border border-border rounded-2xl p-6 flex flex-col hover:shadow-md transition-shadow">
            <span className="material-icons text-sage text-3xl mb-4">{s.icon}</span>
            <span className="inline-block self-start bg-sage-light text-sage text-xs font-semibold px-3 py-1 rounded-full mb-3">{s.subtitle}</span>
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
