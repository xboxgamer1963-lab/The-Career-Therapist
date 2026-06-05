import Link from 'next/link'

const coaching = [
  { label: '1-on-1 Coaching', href: '/coaching' },
  { label: 'Job Search', href: '/job-search-coaching' },
  { label: 'Get Promoted', href: '/get-promoted' },
  { label: 'Laid Off?', href: '/laid-off' },
  { label: 'Career Change', href: '/career-change' },
]

const resources = [
  { label: 'The Career Alignment Club', href: '/club' },
  { label: 'Free 5-Day Course', href: '/free-course' },
  { label: 'Weekly Newsletter', href: '/subscribe' },
  { label: 'Career Blog', href: '/blog' },
  { label: 'Client Results', href: '/results' },
  { label: 'FAQ', href: '/faq' },
]

const contact = [
  { label: 'About Aisha', href: '/about' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Book a Free Call', href: '/contact' },
]

const INSTAGRAM_URL = 'https://www.instagram.com/mycareertherapist/'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img src="/logo.png" alt="My Career Therapist" className="h-20 w-auto mb-4 object-contain" />
          <p className="text-sm text-muted leading-relaxed">
            1-on-1 career coaching with Aisha — a coach with an HR background, helping professionals find jobs, earn promotions, and change careers with real insider knowledge.
          </p>
          <a href="mailto:hello@mycareertherapist.com" className="mt-4 inline-block text-sm text-sage hover:underline">
            hello@mycareertherapist.com
          </a>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border text-charcoal hover:text-sage hover:border-sage transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <span className="text-xs text-muted">@mycareertherapist</span>
          </div>
        </div>

        {/* Coaching */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Coaching</h4>
          <ul className="space-y-2">
            {coaching.map(l => <li key={l.href}><Link href={l.href} className="text-sm text-charcoal hover:text-sage transition-colors">{l.label}</Link></li>)}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Resources</h4>
          <ul className="space-y-2">
            {resources.map(l => <li key={l.href}><Link href={l.href} className="text-sm text-charcoal hover:text-sage transition-colors">{l.label}</Link></li>)}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Get in Touch</h4>
          <ul className="space-y-2">
            {contact.map(l => <li key={l.href}><Link href={l.href} className="text-sm text-charcoal hover:text-sage transition-colors">{l.label}</Link></li>)}
          </ul>
        </div>
      </div>

      {/* Brand clarification — reframed from a legal footnote into a confident line */}
      <div className="border-t border-border bg-sage-light/50">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-xs text-charcoal/80 leading-relaxed">
          The word <span className="font-serif italic text-charcoal">&ldquo;Therapist&rdquo;</span> isn&apos;t clinical — it&apos;s intentional. We go deeper than career coaching:
          workplace strategy, communication under pressure, and the unspoken rules of work. <span className="text-muted">(Professional development — not mental health therapy.)</span>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-muted">
          © 2026 My Career Therapist · Workplace strategy & professional development. Sessions held online, U.S.-wide.
        </div>
      </div>
    </footer>
  )
}
