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

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)

  const openForm = () => {
    setOpen(false)
    setFormOpen(true)
  }

  return (
    <>
      {/* Announce bar */}
      <div className="bg-sage-light text-sage text-center text-sm py-2 font-medium tracking-wide">
        Now booking — May 2026
      </div>

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
