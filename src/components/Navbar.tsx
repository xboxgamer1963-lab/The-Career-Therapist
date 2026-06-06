'use client'
import { useState } from 'react'
import Link from 'next/link'
import IntakeFormModal from './IntakeFormModal'

const navLinks = [
  { label: 'For Individuals', href: '/coaching' },
  { label: 'For Organizations', href: '/organizations' },
  { label: 'Courses & Community', href: '/club' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

const INSTAGRAM_URL = 'https://www.instagram.com/mycareertherapist/'
const LINKEDIN_URL = 'https://www.linkedin.com/company/the-career-therapist/'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)

  const openForm = () => {
    setOpen(false)
    setFormOpen(true)
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-cream border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/">
            <img src="/logo.png" alt="My Career Therapist" className="h-20 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-charcoal">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className="hover:text-sage transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right cluster: social + CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full border border-border text-charcoal hover:text-sage hover:border-sage transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-full border border-border text-charcoal hover:text-sage hover:border-sage transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <button
              type="button"
              onClick={openForm}
              className="hidden sm:inline-flex items-center bg-charcoal text-cream px-5 py-2 rounded-full text-sm font-medium hover:bg-sage transition-colors"
            >
              Book a Free Call
            </button>
            <button onClick={() => setOpen(!open)} className="lg:hidden text-charcoal" aria-label="Toggle menu">
              <span className="material-icons">{open ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-border bg-cream px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-charcoal hover:text-sage">
                {l.label}
              </Link>
            ))}
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-sage inline-flex items-center gap-2">
              <span className="material-icons text-base">business_center</span> LinkedIn
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-charcoal hover:text-sage inline-flex items-center gap-2">
              <span className="material-icons text-base">camera_alt</span> Instagram
            </a>
            <button
              type="button"
              onClick={openForm}
              className="mt-2 inline-flex justify-center bg-charcoal text-cream px-5 py-2 rounded-full hover:bg-sage transition-colors"
            >
              Book a Free Call
            </button>
          </div>
        )}
      </nav>

      <IntakeFormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  )
}
