import Link from 'next/link'
import FinalCTA from '@/components/FinalCTA'

const benefits = [
  { icon: 'video_library', title: 'Monthly masterclass', desc: 'A live 60-minute masterclass every month on a specific career topic — from negotiating a pay rise to building your personal brand. Recorded if you can\'t make it live.' },
  { icon: 'forum', title: 'Private member community', desc: 'A small, vetted community of ambitious professionals at every stage. No spam, no recruiters, no LinkedIn nonsense — just genuine conversation and support.' },
  { icon: 'menu_book', title: 'Resource library', desc: 'Resume templates, interview prep guides, salary negotiation scripts, LinkedIn frameworks. Everything I use with 1-on-1 clients, available on demand.' },
  { icon: 'event', title: 'Office hours', desc: 'Twice a month, I open the floor for live Q&A. Bring any career question — a tricky email, an offer dilemma, an interview coming up. Real answers from someone who\'s been in the rooms.' },
  { icon: 'star', title: 'Member-only discounts', desc: '15% off 1-on-1 coaching for members, plus discounted access to workshops, courses, and guest sessions with HR leaders and recruiters.' },
  { icon: 'groups', title: 'Accountability pods', desc: 'Small groups of 4-6 members who meet weekly to keep each other on track. Career moves happen faster when you\'re not the only one moving.' },
]

export default function Club() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">The Career Alignment Club</p>
        <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">Your career, on autopilot — in the best possible way.</h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          A monthly membership for professionals who want ongoing support — not just one-off help. Masterclasses, community, resources, and direct access to me, all in one place.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors mt-8">
          Join the Waitlist <span className="material-icons text-base">arrow_right_alt</span>
        </Link>
      </section>

      {/* Benefits */}
      <section className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">What&apos;s included</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Everything you need to keep moving forward.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className="bg-cream border border-border rounded-2xl p-6">
                <span className="material-icons text-sage text-3xl mb-4">{b.icon}</span>
                <h3 className="font-serif text-xl text-charcoal mb-3">{b.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Membership</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-8">Simple monthly pricing.</h2>
        <div className="border border-border rounded-2xl p-10 bg-white max-w-md mx-auto">
          <p className="font-serif text-6xl text-charcoal mb-2">$65<span className="text-2xl text-muted">/mo</span></p>
          <p className="text-muted mb-6">or $650/year — save two months</p>
          <p className="text-sm text-muted mb-8 leading-relaxed">Cancel anytime. First month is half price for newsletter subscribers. We open membership in cohorts of 25 to keep the community real.</p>
          <Link href="/contact" className="inline-flex items-center justify-center w-full gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors">
            Join the Waitlist
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
