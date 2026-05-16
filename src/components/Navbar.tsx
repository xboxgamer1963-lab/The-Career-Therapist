'use client'
import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'For Individuals', href: '/coaching' },
  { label: 'For Organizations', href: '/organizations' },
  { label: 'Courses & Community', href: '/club' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

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

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden sm:inline-flex items-center bg-charcoal text-cream px-5 py-2 rounded-full text-sm font-medium hover:bg-sage transition-colors">
              Book a Free Call
            </Link>
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
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center bg-charcoal text-cream px-5 py-2 rounded-full hover:bg-sage transition-colors">
              Book a Free Call
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}
