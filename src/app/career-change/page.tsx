import Link from 'next/link'
import FinalCTA from '@/components/FinalCTA'

const fears = [
  { fear: "It's too late for me.", answer: "It's not. I've coached clients through career changes in their 30s, 40s, 50s and 60s. The only career change that\'s too late is the one you never start." },
  { fear: "I'll have to start at the bottom again.", answer: "Usually no. Most career changes are pivots, not resets. Your existing experience, skills and credibility almost always transfer further than you think." },
  { fear: "I don't know what I want.", answer: "Most people don't, at first. We don't need a final answer — we need a working hypothesis and a way to test it cheaply. That's the bulk of what we'll do." },
  { fear: "I can't afford a pay cut.", answer: "You might not have to take one. And if you do, it's usually short-lived. We plan the move with the financial reality of your life front and centre." },
]

const phases = [
  { title: 'Clarity', desc: 'Get clear on what you actually want — and what\'s really driving the urge to change. Sometimes the answer is a new career; sometimes it\'s a new role at the same company; sometimes it\'s something more fundamental. We figure out which.' },
  { title: 'Mapping', desc: 'Identify what transfers. Skills, experience, credibility, network — most career changers underestimate what they already have. We map it.' },
  { title: 'Experiments', desc: 'Before you blow up your career, we test the new path cheaply. Informational interviews, side projects, conversations with people doing the thing. Real data, not just dreams.' },
  { title: 'Bridge', desc: 'A practical, sequenced plan to move across — typically over 6-18 months. Money, timing, training (if needed), positioning. The move itself, broken into manageable steps.' },
  { title: 'Land', desc: 'The actual transition. Updated resume, repositioned LinkedIn, new network, new role. We don\'t stop at the strategy — we get you there.' },
]

export default function CareerChange() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Career Change</p>
        <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">Ready for a new direction? Let&apos;s make it real.</h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          Clarity on what you want, and a practical plan to get there. Career changes don&apos;t have to be reckless leaps — they can be carefully designed moves with the financial and emotional reality of your life front and centre.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors mt-8">
          Book a Free Discovery Call <span className="material-icons text-base">arrow_right_alt</span>
        </Link>
      </section>

      {/* Fears */}
      <section className="bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">The fears that keep you stuck</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Let&apos;s deal with these head-on.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fears.map(f => (
              <div key={f.fear} className="border border-border rounded-2xl p-6 bg-cream">
                <p className="font-serif italic text-xl text-charcoal mb-3 leading-snug">&ldquo;{f.fear}&rdquo;</p>
                <p className="text-muted leading-relaxed text-sm">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">The journey</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Five phases. One real career change.</h2>
        <div className="relative pl-8 border-l-2 border-border space-y-10">
          {phases.map((p, i) => (
            <div key={p.title} className="relative">
              <div className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-sage text-cream flex items-center justify-center text-xs font-semibold">{i + 1}</div>
              <h3 className="font-serif text-2xl text-charcoal mb-2">{p.title}</h3>
              <p className="text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
