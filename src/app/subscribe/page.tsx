'use client'
import { useState } from 'react'
import FinalCTA from '@/components/FinalCTA'

const promises = [
  { icon: 'edit_note', title: 'One email a week', desc: 'Every Tuesday morning. Long enough to actually say something useful. Short enough that you\'ll actually read it.' },
  { icon: 'verified', title: 'No fluff, ever', desc: 'No regurgitated LinkedIn quotes. No 15-step "frameworks." Just real advice from someone who\'s actually been on the hiring side.' },
  { icon: 'lock', title: 'Your inbox is sacred', desc: 'No selling your data. No daily blasts. Unsubscribe in one click, no guilt-trip.' },
]

const recentTopics = [
  'The interview question almost everyone gets wrong',
  'Why your resume is being filtered out before a human sees it',
  'How to ask for a pay rise without burning the bridge',
  'The first 90 days in a new role — what really matters',
  'When to quit (and how to know it\'s actually time)',
]

export default function Subscribe() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">My Career Therapist Newsletter</p>
        <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">Weekly career insights — straight to your inbox.</h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-10">
          Practical, honest career advice for professionals who want to get ahead. 4,800+ readers across 30+ countries. Free, forever.
        </p>

        {/* Signup form */}
        <div className="max-w-md mx-auto">
          {submitted ? (
            <div className="bg-sage-light border border-sage/30 rounded-2xl p-6 text-center">
              <span className="material-icons text-sage text-4xl mb-2">check_circle</span>
              <h3 className="font-serif text-2xl text-charcoal mb-2">You&apos;re in.</h3>
              <p className="text-muted text-sm">Check your inbox to confirm. First email lands Tuesday.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="flex flex-col sm:flex-row gap-3">
              <input required type="email" placeholder="your@email.com" className="flex-1 px-5 py-3.5 rounded-full border border-border bg-white text-charcoal focus:outline-none focus:border-sage transition-colors" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-charcoal text-cream px-6 py-3.5 rounded-full font-medium hover:bg-sage transition-colors whitespace-nowrap">
                Subscribe — Free
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Promises */}
      <section className="bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">What you can expect</p>
          <h2 className="font-serif text-4xl text-charcoal mb-12">Three things I promise.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promises.map(p => (
              <div key={p.title} className="bg-cream border border-border rounded-2xl p-6">
                <span className="material-icons text-sage text-3xl mb-3">{p.icon}</span>
                <h3 className="font-serif text-xl text-charcoal mb-3">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent topics */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Recent issues</p>
        <h2 className="font-serif text-4xl text-charcoal mb-10">A taste of what lands in your inbox.</h2>
        <ul className="space-y-4">
          {recentTopics.map(t => (
            <li key={t} className="flex items-start gap-4 p-5 border border-border rounded-xl bg-white">
              <span className="material-icons text-sage mt-0.5">drafts</span>
              <span className="text-charcoal leading-relaxed">{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Quote */}
      <section className="bg-sage-light">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="font-serif italic text-3xl text-charcoal leading-snug mb-4">&ldquo;Aisha&apos;s newsletter is the only career thing I read all the way through every week.&rdquo;</p>
          <p className="text-sm text-muted">— Maya R., Product Director</p>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
