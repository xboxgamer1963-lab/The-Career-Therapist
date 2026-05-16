'use client'
import { useState } from 'react'
import FinalCTA from '@/components/FinalCTA'

const days = [
  { day: 'Day 1', title: 'Where are you really?', desc: 'A short, honest assessment of where you actually are in your career today — not where you say you are when someone asks at a dinner party.' },
  { day: 'Day 2', title: 'What do you actually want?', desc: 'A simple exercise to separate what you genuinely want from what you\'ve been told you should want. The single most important question for any career move.' },
  { day: 'Day 3', title: 'The gap and the bridge', desc: 'Map the gap between where you are and what you want. Identify the realistic bridge between the two — usually closer than you think.' },
  { day: 'Day 4', title: 'Your next move', desc: 'Decide what the very next move is. Not the whole plan — just the next move. We work from there.' },
  { day: 'Day 5', title: 'The first action', desc: 'A specific, achievable, do-it-this-week action that starts the whole thing. Plus, what to do if you get stuck.' },
]

const who = [
  "You've been in the same role for a while and you're not sure why you're restless.",
  "You're thinking about changing careers but you don't know where to start.",
  "You know something needs to change but you can't articulate what.",
  "You want to make a move and you want it to actually be the right one.",
]

export default function FreeCourse() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block bg-sage-light text-sage text-xs font-semibold px-3 py-1 rounded-full mb-4">Free · 5 days · By email</span>
          <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">The 5-Day Career Clarity Course</h1>
          <p className="text-lg text-muted leading-relaxed mb-8">
            A free email course to help you get clear on your next career move. One short, focused exercise a day for five days. By the end of the week, you&apos;ll know exactly what your next step is.
          </p>

          {submitted ? (
            <div className="bg-sage-light border border-sage/30 rounded-2xl p-6">
              <span className="material-icons text-sage text-3xl mb-2">check_circle</span>
              <h3 className="font-serif text-xl text-charcoal mb-1">You&apos;re signed up.</h3>
              <p className="text-sm text-muted">Day 1 lands in your inbox in the next 5 minutes.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input required type="email" placeholder="your@email.com" className="flex-1 px-5 py-3.5 rounded-full border border-border bg-white text-charcoal focus:outline-none focus:border-sage transition-colors" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-charcoal text-cream px-6 py-3.5 rounded-full font-medium hover:bg-sage transition-colors whitespace-nowrap">
                Start Day 1 — Free
              </button>
            </form>
          )}

          <p className="text-xs text-muted mt-3">No spam. Unsubscribe in one click. 4,800+ professionals have taken it.</p>
        </div>

        <div className="bg-cream border border-border rounded-2xl p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-4">What you&apos;ll get</p>
          <ul className="space-y-3">
            {[
              '5 short emails, one per day',
              'A simple exercise in each — 10-15 minutes',
              'A working PDF workbook to keep',
              'A clear next action by the end of Day 5',
              'Optional follow-up if you want to go deeper',
            ].map(i => (
              <li key={i} className="flex items-start gap-3 text-sm text-charcoal">
                <span className="material-icons text-sage text-base mt-0.5">check_circle</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-white border-y border-border">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">The course</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Five days. Five exercises. One clear next step.</h2>
          <div className="space-y-4">
            {days.map((d, i) => (
              <div key={d.day} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start border border-border rounded-2xl p-6 bg-cream">
                <div className="shrink-0 md:w-32">
                  <div className="text-xs font-semibold uppercase tracking-widest text-sage mb-1">{d.day}</div>
                  <div className="font-serif text-4xl text-charcoal">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-charcoal mb-2">{d.title}</h3>
                  <p className="text-muted leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Who it&apos;s for</p>
        <h2 className="font-serif text-4xl text-charcoal mb-10">This is for you if…</h2>
        <ul className="space-y-4">
          {who.map(w => (
            <li key={w} className="flex items-start gap-3 text-charcoal leading-relaxed text-lg">
              <span className="material-icons text-sage mt-0.5">check_circle</span>
              <span>{w}</span>
            </li>
          ))}
        </ul>
      </section>

      <FinalCTA />
    </>
  )
}
