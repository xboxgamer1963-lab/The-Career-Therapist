'use client'
import { useState } from 'react'
import Link from 'next/link'
import FinalCTA from '@/components/FinalCTA'

const groups = [
  {
    section: 'General',
    items: [
      { q: 'What does a career coach actually do?', a: 'A career coach helps you navigate key moments in your professional life — finding a new job, earning a promotion, handling a layoff, or changing direction. We provide strategy, accountability, honest feedback, and the kind of support that means you don\'t have to figure it all out alone.' },
      { q: 'How is Aisha different from other career coaches?', a: 'Aisha has a background in HR and recruiting, which means she has direct experience of how companies hire and promote. This insider perspective is what makes her coaching practical and specific, not generic.' },
      { q: 'Who do you work with?', a: 'Aisha works with professionals at all career stages — from early-career professionals through to experienced leaders. Whether you\'re looking for your first professional role, a lateral move, a big promotion, or a total career change, there\'s a path forward and Aisha can help you find it.' },
      { q: 'Do you work with people outside the US?', a: 'Yes. Roughly 40% of clients are based outside the US. Sessions are held online so it works wherever you are — the only thing we need to manage is timezones.' },
    ]
  },
  {
    section: 'Sessions & pricing',
    items: [
      { q: 'How much does coaching cost?', a: 'Investment depends on the engagement that fits you — a single Power Hour, the six-week Quarterly, or the full three-month Journey. Because every situation is different, we share pricing on the free discovery call once we\'ve determined the right fit.' },
      { q: 'How long is each session?', a: 'Each 1-on-1 session is 60 minutes. You\'ll also get a pre-session questionnaire and a written follow-up with action steps after every call.' },
      { q: 'How are sessions held?', a: 'Online — Zoom or Google Meet, your choice. No travel, no logistics. You can do them from your sofa.' },
      { q: 'Can I expense coaching?', a: 'Often, yes. Many employers will fund career or leadership coaching, especially as part of L&D budgets. I provide invoices that work for expensing.' },
      { q: 'Do you offer payment plans?', a: 'Yes — the full Journey program can be split into 3 monthly payments at no extra cost. Just ask on the call.' },
    ]
  },
  {
    section: 'Getting started',
    items: [
      { q: 'What happens on the free discovery call?', a: 'A 20-minute, no-pressure chat to understand where you are, what you want to change, and whether I\'m the right coach for you. No script, no sales pitch — just a conversation. If we\'re not a fit, I\'ll tell you and recommend someone else if I can.' },
      { q: 'How quickly can we start?', a: 'Usually within 1-2 weeks of the discovery call. If you\'re in an active layoff or have a tight deadline (an interview, a critical conversation) I keep emergency slots open and can often start within days.' },
      { q: 'What if I don\'t know what I want yet?', a: 'Most clients don\'t, at the start. Getting clear is part of the work. You don\'t need to have it figured out before we start — you need to want to figure it out.' },
    ]
  },
]

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-6 py-5 text-left text-charcoal font-medium hover:text-sage transition-colors">
        <span>{q}</span>
        <span className="material-icons text-muted transition-transform" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
      </button>
      {open && <p className="pb-5 text-muted leading-relaxed">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">FAQ</p>
        <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">Frequently asked questions.</h1>
        <p className="text-lg text-muted leading-relaxed">Everything you might want to know before working together. Can&apos;t find your question here? Bring it to the free discovery call.</p>
      </section>

      {/* Groups */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        {groups.map(g => (
          <div key={g.section} className="mb-12">
            <h2 className="font-serif text-2xl text-charcoal mb-4">{g.section}</h2>
            <div className="bg-white border border-border rounded-2xl px-6">
              {g.items.map(item => <Item key={item.q} {...item} />)}
            </div>
          </div>
        ))}

        <div className="text-center mt-16">
          <p className="text-muted leading-relaxed mb-6">Still have questions?</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors">
            Book a Free Call <span className="material-icons text-base">arrow_right_alt</span>
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
