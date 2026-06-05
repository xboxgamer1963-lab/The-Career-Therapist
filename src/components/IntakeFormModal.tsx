'use client'

import { useEffect, useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

const INDUSTRIES = [
  'Technology',
  'Healthcare',
  'Finance & Banking',
  'Legal',
  'Education',
  'Retail & E-Commerce',
  'Government / Public Sector',
  'Non-Profit',
  'Marketing & Advertising',
  'Real Estate',
  'Manufacturing',
  'Other',
]

const EMPLOYMENT_STATUSES = [
  'Employed — actively looking',
  'Employed — exploring options',
  'Recently laid off / forced out',
  'Resigned / left voluntarily',
  'Unemployed — job searching',
  'Contract / freelance',
  'Returning to workforce',
]

const CHALLENGES = [
  'Wrongful termination / forced out',
  'Hostile work environment',
  'Toxic workplace / manager',
  'Stalled career / no advancement',
  'Negotiating severance or salary',
  'Job search strategy',
  'Resume / LinkedIn optimization',
  'Career pivot / change',
  'Burnout / workplace stress',
  'Discrimination or HR issue',
]

const HEAR_OPTIONS = [
  'Instagram',
  'TikTok',
  'LinkedIn',
  'Google Search',
  'Referral from a friend',
  'Podcast / Media',
  'Direct message / cold outreach',
  'Other',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbzFgfDmljVALK9TSDrWNzuwumFD7Ycz7olMX7t3W_nEgQRv0Ww_HPaNG4FmKUmY3f_v/exec'

const inputBase =
  'w-full px-3.5 py-3 text-sm text-charcoal bg-cream border border-border rounded-lg outline-none transition-colors focus:border-sage focus:bg-white focus:ring-2 focus:ring-sage/20'

export default function IntakeFormModal({ open, onClose }: Props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [currentRole, setCurrentRole] = useState('')
  const [industry, setIndustry] = useState('')
  const [employmentStatus, setEmploymentStatus] = useState('')
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([])
  const [situation, setSituation] = useState('')
  const [urgency, setUrgency] = useState<number | null>(null)
  const [goal, setGoal] = useState('')
  const [hearAbout, setHearAbout] = useState('')
  const [availability, setAvailability] = useState('')
  const [consent, setConsent] = useState(false)

  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // ESC to close + scroll lock
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  const toggleChallenge = (c: string) => {
    setSelectedChallenges(prev =>
      prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const next: Record<string, boolean> = {}
    if (!firstName.trim()) next.firstName = true
    if (!lastName.trim()) next.lastName = true
    if (!EMAIL_RE.test(email.trim())) next.email = true
    if (!currentRole.trim()) next.currentRole = true
    if (!industry) next.industry = true
    if (!employmentStatus) next.employmentStatus = true
    if (selectedChallenges.length === 0) next.challenges = true
    if (situation.trim().length < 10) next.situation = true
    if (!goal.trim()) next.goal = true
    if (!consent) next.consent = true

    setErrors(next)
    if (Object.keys(next).length > 0) return

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      linkedin: linkedin.trim(),
      currentRole: currentRole.trim(),
      industry,
      employmentStatus,
      challenges: selectedChallenges.join(' | '),
      situation: situation.trim(),
      urgency: urgency ?? '',
      goal: goal.trim(),
      hearAbout,
      availability: availability.trim(),
      consent,
      source: 'Intake Modal',
    }

    setSubmitting(true)
    setSubmitError(null)
    console.log('[intake] submitting payload', payload)

    try {
      // Google Apps Script /exec redirects to script.googleusercontent.com
      // which doesn't set Access-Control-Allow-Origin, so we use no-cors.
      // The request still reaches the Script; the response is opaque and
      // a thrown error is the only signal of a real network failure.
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        redirect: 'follow',
      })
      console.log('[intake] submission dispatched')
      setSuccess(true)
    } catch (err) {
      console.error('[intake] submission failed:', err)
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Something went wrong sending your intake. Please try again or email hello@mycareertherapist.com directly.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  const handleClose = () => {
    onClose()
    // Reset success after close animation completes
    setTimeout(() => {
      if (success) {
        setSuccess(false)
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setLinkedin('')
        setCurrentRole('')
        setIndustry('')
        setEmploymentStatus('')
        setSelectedChallenges([])
        setSituation('')
        setUrgency(null)
        setGoal('')
        setHearAbout('')
        setAvailability('')
        setConsent(false)
        setErrors({})
        setSubmitError(null)
      }
    }, 300)
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" role="dialog" aria-modal="true" aria-label="Client Intake Form">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />

      {/* Modal panel */}
      <div className="relative min-h-full flex items-start justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-2xl bg-cream border border-border rounded-2xl shadow-2xl my-4 sm:my-8 overflow-hidden">
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close form"
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 border border-border text-charcoal hover:bg-sage hover:text-cream hover:border-sage transition-colors flex items-center justify-center"
          >
            <span className="material-icons text-base">close</span>
          </button>

          {success ? (
            <div className="px-8 sm:px-10 py-14 text-center">
              <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-5">
                <span className="material-icons text-sage text-3xl">check_circle</span>
              </div>
              <h2 className="font-serif italic text-3xl text-charcoal mb-3">
                You&apos;re all set, {firstName}.
              </h2>
              <p className="text-muted leading-relaxed max-w-sm mx-auto mb-8">
                Your intake form has been received. Aisha will review it before your call and reach out to confirm your appointment within 24 hours.
              </p>
              <button
                onClick={handleClose}
                className="inline-flex items-center gap-2 bg-charcoal text-cream px-6 py-3 rounded-full font-medium hover:bg-sage transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="px-8 sm:px-10 pt-10 pb-6 text-center border-b border-border bg-sage-light/30">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-sage bg-sage-light px-3 py-1 rounded-full mb-3">
                  New Client Intake
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight mb-2">
                  Let&apos;s start your <em className="italic text-sage">career journey</em>.
                </h2>
                <p className="text-sm text-muted max-w-md mx-auto">
                  Complete this short form so Aisha can understand your situation and prepare for your discovery call. Takes 3–5 minutes.
                </p>
              </div>

              {/* Form body */}
              <form onSubmit={handleSubmit} noValidate className="px-6 sm:px-10 py-8 space-y-8">
                {/* Section 1 */}
                <div>
                  <SectionLabel>01 — About You</SectionLabel>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="First Name" required error={errors.firstName}>
                      <input className={inputBase} value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Jane" />
                    </Field>
                    <Field label="Last Name" required error={errors.lastName}>
                      <input className={inputBase} value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Smith" />
                    </Field>
                  </div>

                  <Field label="Email Address" required error={errors.email} errorText="Please enter a valid email">
                    <input type="email" className={inputBase} value={email} onChange={e => setEmail(e.target.value)} placeholder="jane@example.com" />
                  </Field>

                  <Field label="Phone Number" hint="(optional)">
                    <input type="tel" className={inputBase} value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 (555) 000-0000" />
                  </Field>

                  <Field label="LinkedIn Profile URL" hint="(optional but helpful)">
                    <input type="text" className={inputBase} value={linkedin} onChange={e => setLinkedin(e.target.value)} placeholder="linkedin.com/in/yourname" />
                  </Field>
                </div>

                {/* Section 2 */}
                <div>
                  <SectionLabel>02 — Your Current Situation</SectionLabel>

                  <Field label="Current or Most Recent Job Title" required error={errors.currentRole}>
                    <input className={inputBase} value={currentRole} onChange={e => setCurrentRole(e.target.value)} placeholder="e.g. Marketing Manager" />
                  </Field>

                  <Field label="Industry" required error={errors.industry}>
                    <select className={inputBase} value={industry} onChange={e => setIndustry(e.target.value)}>
                      <option value="" disabled>Select your industry</option>
                      {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </Field>

                  <Field label="Current Employment Status" required error={errors.employmentStatus}>
                    <select className={inputBase} value={employmentStatus} onChange={e => setEmploymentStatus(e.target.value)}>
                      <option value="" disabled>Select status</option>
                      {EMPLOYMENT_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>
                </div>

                {/* Section 3 */}
                <div>
                  <SectionLabel>03 — What You Need Help With</SectionLabel>

                  <div className="mb-5">
                    <div className="flex items-baseline gap-1 mb-2">
                      <label className="text-sm font-medium text-charcoal">What challenges are you facing?</label>
                      <span className="text-sage text-sm">*</span>
                      <span className="text-xs text-muted font-light ml-1">Select all that apply</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {CHALLENGES.map(c => {
                        const checked = selectedChallenges.includes(c)
                        return (
                          <label
                            key={c}
                            className={`flex items-center gap-2.5 px-3 py-2.5 border rounded-lg cursor-pointer text-sm transition-colors ${
                              checked ? 'border-sage bg-sage-light/60 text-charcoal' : 'border-border bg-white text-charcoal hover:border-sage'
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4 accent-sage shrink-0"
                              checked={checked}
                              onChange={() => toggleChallenge(c)}
                            />
                            <span>{c}</span>
                          </label>
                        )
                      })}
                    </div>
                    {errors.challenges && <p className="text-xs text-red-700 mt-1.5">Please select at least one</p>}
                  </div>

                  <Field label="In your own words, what happened or what are you dealing with?" required error={errors.situation} errorText="Please share at least a sentence">
                    <textarea
                      className={`${inputBase} resize-y min-h-[110px] leading-relaxed`}
                      value={situation}
                      onChange={e => setSituation(e.target.value)}
                      placeholder="Share as much or as little as you're comfortable with. This helps Aisha understand your situation before you speak."
                    />
                  </Field>

                  <div className="mb-1">
                    <label className="block text-sm font-medium text-charcoal mb-2">How urgent is your situation?</label>
                    <div className="flex flex-wrap gap-1.5">
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                        <button
                          type="button"
                          key={n}
                          onClick={() => setUrgency(n)}
                          className={`w-9 h-9 rounded-md border text-sm font-medium transition-colors ${
                            urgency === n
                              ? 'bg-sage border-sage text-cream'
                              : 'bg-cream border-border text-charcoal hover:border-sage hover:text-sage'
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between text-[11px] text-muted mt-1.5 px-0.5">
                      <span>Not urgent at all</span>
                      <span>Extremely urgent</span>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div>
                  <SectionLabel>04 — Goals & Logistics</SectionLabel>

                  <Field label="What does success look like for you in 3–6 months?" required error={errors.goal}>
                    <textarea
                      className={`${inputBase} resize-y min-h-[100px] leading-relaxed`}
                      value={goal}
                      onChange={e => setGoal(e.target.value)}
                      placeholder="e.g. Earn the promotion I've been waiting on, resolve my severance situation, feel confident navigating my workplace…"
                    />
                  </Field>

                  <Field label="How did you hear about My Career Therapist?">
                    <select className={inputBase} value={hearAbout} onChange={e => setHearAbout(e.target.value)}>
                      <option value="" disabled>Select one</option>
                      {HEAR_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </Field>

                  <Field label="What's your general availability for the discovery call?">
                    <input className={inputBase} value={availability} onChange={e => setAvailability(e.target.value)} placeholder="e.g. Weekday mornings, or anytime after 5pm EST" />
                  </Field>
                </div>

                {/* Consent */}
                <label className={`flex gap-3 items-start p-4 rounded-xl border cursor-pointer transition-colors ${
                  errors.consent ? 'border-red-300 bg-red-50/40' : 'border-sage/30 bg-sage-light/40'
                }`}>
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] accent-sage mt-0.5 shrink-0"
                    checked={consent}
                    onChange={e => setConsent(e.target.checked)}
                  />
                  <p className="text-xs text-muted leading-relaxed">
                    <span className="font-semibold text-charcoal">Privacy & Consent:</span> I understand that the information I share will be kept strictly confidential and used only to prepare for my consultation with My Career Therapist. I consent to being contacted via email or phone regarding my inquiry.
                  </p>
                </label>

                {submitError && (
                  <div className="flex items-start gap-3 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl px-4 py-3 text-sm">
                    <span className="material-icons text-rose-500 text-base mt-0.5">error_outline</span>
                    <div>
                      <p className="font-medium">Intake didn&apos;t send.</p>
                      <p className="opacity-80">{submitError}</p>
                    </div>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-charcoal text-cream px-6 py-4 rounded-xl font-medium hover:bg-sage transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting && <span className="material-icons text-base animate-spin">progress_activity</span>}
                  {submitting ? 'Submitting…' : 'Submit My Intake Form'}
                  {!submitting && <span className="material-icons text-base">arrow_right_alt</span>}
                </button>

                {/* Trust signals */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2 text-[11.5px] text-muted">
                  <span className="inline-flex items-center gap-1.5"><span className="material-icons text-sage text-sm">verified_user</span> 100% Confidential</span>
                  <span className="inline-flex items-center gap-1.5"><span className="material-icons text-sage text-sm">schedule</span> Response within 24 hrs</span>
                  <span className="inline-flex items-center gap-1.5"><span className="material-icons text-sage text-sm">favorite_border</span> No judgment, just support</span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[10px] font-semibold tracking-widest uppercase text-sage">{children}</span>
      <span className="flex-1 h-px bg-border" />
    </div>
  )
}

function Field({
  label,
  required,
  hint,
  error,
  errorText = 'Required',
  children,
}: {
  label: string
  required?: boolean
  hint?: string
  error?: boolean
  errorText?: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex items-baseline gap-1 mb-1.5">
        <label className="text-sm font-medium text-charcoal">{label}</label>
        {required && <span className="text-sage text-sm">*</span>}
        {hint && <span className="text-xs text-muted font-light ml-1">{hint}</span>}
      </div>
      {children}
      {error && <p className="text-xs text-red-700 mt-1.5">{errorText}</p>}
    </div>
  )
}
