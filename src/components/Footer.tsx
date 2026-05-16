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
  { label: 'FAQ', href: '/faq' },
]

const contact = [
  { label: 'About Aisha', href: '/about' },
  { label: 'Book a Free Call', href: '/contact' },
]

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

      {/* Disclaimer strip — clarifies the practice */}
      <div className="border-t border-border bg-sage-light/50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-3 text-xs">
          <span className="inline-flex items-center gap-2 bg-white border border-border text-charcoal font-medium px-3 py-1.5 rounded-full">
            <span className="material-icons text-sage text-sm">check_circle</span>
            Professional development and workplace strategy
          </span>
          <span className="inline-flex items-center gap-2 bg-white border border-border text-muted font-medium px-3 py-1.5 rounded-full">
            <span className="material-icons text-muted text-sm">info</span>
            Not mental health therapy
          </span>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-muted">
          © 2026 My Career Therapist · Workplace strategy & professional development. Sessions held online, worldwide.
        </div>
      </div>
    </footer>
  )
}
