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

const WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbzZHf6-XWZ3T-doZEW22Q9jk46ohjzBSKeIwZijEtZ9Tq04SUlRWg26K4pJgsx-T8DS0A/exec'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      help: String(formData.get('reason') || '').trim(),
      about: String(formData.get('message') || '').trim(),
    }

    console.log('[contact] submitting payload', payload)

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        // text/plain avoids a CORS preflight against Google Apps Script;
        // the Script still parses e.postData.contents as JSON.
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        redirect: 'follow',
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      console.log('[contact] submission successful', response.status)
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error('[contact] submission failed:', err)
      setStatus('error')
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong sending your message. Please try again or email us directly.'
      )
    }
  }

  const submitting = status === 'submitting'

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
          {status === 'success' ? (
            <div className="text-center py-12">
              <span className="material-icons text-sage text-6xl mb-4">check_circle</span>
              <h2 className="font-serif text-3xl text-charcoal mb-3">Got it. Thank you.</h2>
              <p className="text-muted leading-relaxed">I&apos;ll be in touch within 1 working day with available times. Check your inbox — and your spam folder, just in case.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-sage hover:underline"
              >
                Send another message <span className="material-icons text-sm">arrow_forward</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Your name</label>
                  <input id="name" name="name" required type="text" disabled={submitting} className="w-full px-4 py-3 rounded-xl border border-border bg-cream text-charcoal focus:outline-none focus:border-sage transition-colors disabled:opacity-60" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email</label>
                  <input id="email" name="email" required type="email" disabled={submitting} className="w-full px-4 py-3 rounded-xl border border-border bg-cream text-charcoal focus:outline-none focus:border-sage transition-colors disabled:opacity-60" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-3">What can I help you with?</label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {reasons.map(r => (
                    <label
                      key={r.label}
                      className="flex flex-col items-center gap-2 border border-border bg-cream rounded-xl px-3 py-4 cursor-pointer transition-colors hover:border-sage hover:bg-sage-light has-[:checked]:border-sage has-[:checked]:bg-sage-light has-[:checked]:ring-2 has-[:checked]:ring-sage/30"
                    >
                      <input type="radio" name="reason" value={r.label} disabled={submitting} className="sr-only peer" />
                      <span className="material-icons text-muted peer-checked:text-sage transition-colors">{r.icon}</span>
                      <span className="text-xs text-charcoal peer-checked:text-sage peer-checked:font-semibold text-center leading-snug transition-colors">{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">Tell me a bit about where you are</label>
                <textarea id="message" name="message" required rows={5} disabled={submitting} placeholder="A sentence or two is fine — current role, what you want to change, any deadlines I should know about." className="w-full px-4 py-3 rounded-xl border border-border bg-cream text-charcoal focus:outline-none focus:border-sage transition-colors resize-none disabled:opacity-60"></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-3 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl px-4 py-3 text-sm">
                  <span className="material-icons text-rose-500 text-base mt-0.5">error_outline</span>
                  <div>
                    <p className="font-medium">Message didn&apos;t send.</p>
                    <p className="opacity-80">{errorMessage} You can also email <a href="mailto:hello@mycareertherapist.com" className="underline">hello@mycareertherapist.com</a> directly.</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <span className="material-icons text-base animate-spin">progress_activity</span>
                    Sending…
                  </>
                ) : (
                  <>
                    Send — Book My Free Call <span className="material-icons text-base">arrow_right_alt</span>
                  </>
                )}
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
            <a href="mailto:hello@mycareertherapist.com" className="text-charcoal font-medium hover:text-sage transition-colors">hello@mycareertherapist.com</a>
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
