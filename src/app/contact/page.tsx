'use client'
import { useState } from 'react'
import FinalCTA from '@/components/FinalCTA'

const reasons = [
  { icon: 'work', label: 'Job search support' },
  { icon: 'trending_up', label: 'Get promoted' },
  { icon: 'support', label: 'Layoff recovery' },
  { icon: 'moving', label: 'Career change' },
  { icon: 'help_outline', label: 'Something else' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Book a Call</p>
        <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">Let&apos;s talk about your career.</h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          A free, no-obligation 20-minute discovery call. Tell me a bit about where you are and what you want to change. If we&apos;re a fit, we&apos;ll book the first session. If not, I&apos;ll point you somewhere useful.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-white border border-border rounded-2xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12">
              <span className="material-icons text-sage text-6xl mb-4">check_circle</span>
              <h2 className="font-serif text-3xl text-charcoal mb-3">Got it. Thank you.</h2>
              <p className="text-muted leading-relaxed">I&apos;ll be in touch within 1 working day with available times. Check your inbox — and your spam folder, just in case.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Your name</label>
                  <input id="name" name="name" required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-cream text-charcoal focus:outline-none focus:border-sage transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email</label>
                  <input id="email" name="email" required type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-cream text-charcoal focus:outline-none focus:border-sage transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-3">What can I help you with?</label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {reasons.map(r => (
                    <label key={r.label} className="flex flex-col items-center gap-2 border border-border rounded-xl px-3 py-4 cursor-pointer hover:border-sage transition-colors">
                      <input type="radio" name="reason" value={r.label} className="sr-only peer" />
                      <span className="material-icons text-muted peer-checked:text-sage">{r.icon}</span>
                      <span className="text-xs text-charcoal text-center leading-snug">{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">Tell me a bit about where you are</label>
                <textarea id="message" name="message" required rows={5} placeholder="A sentence or two is fine — current role, what you want to change, any deadlines I should know about." className="w-full px-4 py-3 rounded-xl border border-border bg-cream text-charcoal focus:outline-none focus:border-sage transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors">
                Send — Book My Free Call <span className="material-icons text-base">arrow_right_alt</span>
              </button>

              <p className="text-xs text-muted text-center">I reply personally to every message, usually within 1 working day. No bots, no auto-funnels.</p>
            </form>
          )}
        </div>

        {/* Other contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <span className="material-icons text-sage text-3xl mb-2">mail</span>
            <p className="text-sm text-muted mb-1">Email directly</p>
            <a href="mailto:hello@thecareertherapist.com" className="text-charcoal font-medium hover:text-sage transition-colors">hello@thecareertherapist.com</a>
          </div>
          <div className="text-center">
            <span className="material-icons text-sage text-3xl mb-2">schedule</span>
            <p className="text-sm text-muted mb-1">Response time</p>
            <p className="text-charcoal font-medium">Within 1 working day</p>
          </div>
          <div className="text-center">
            <span className="material-icons text-sage text-3xl mb-2">public</span>
            <p className="text-sm text-muted mb-1">Sessions</p>
            <p className="text-charcoal font-medium">Online · worldwide</p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
