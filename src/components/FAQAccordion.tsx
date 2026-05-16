'use client'
import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    q: 'What does a career coach do?',
    a: "A career coach helps you navigate key moments in your professional life — finding a new job, earning a promotion, handling a layoff, or changing direction. They provide strategy, accountability, honest feedback, and support so you don't have to figure it all out alone.",
  },
  {
    q: 'How is Aisha different from other career coaches?',
    a: "Aisha has a background in HR and recruiting, which means she has direct experience of how companies hire and promote. This insider perspective is what makes her coaching practical and specific, not generic.",
  },
  {
    q: 'Who do you work with?',
    a: "Aisha works with professionals at all career stages — from people just starting out to experienced leaders. Whether you're looking for your first professional role, a lateral move, a big promotion, or a total career change, there's a path forward and Aisha can help you find it.",
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Common questions</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Frequently asked</h2>
        <div className="divide-y divide-border">
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left text-charcoal font-medium hover:text-sage transition-colors"
              >
                {f.q}
                <span className="material-icons text-muted transition-transform duration-200" style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  expand_more
                </span>
              </button>
              {open === i && (
                <p className="pb-5 text-muted leading-relaxed">{f.a}</p>
              )}
            </div>
          ))}
        </div>
        <Link href="/faq" className="inline-flex items-center gap-1 mt-8 text-sm font-medium text-sage hover:underline">
          See all FAQs <span className="material-icons text-sm">arrow_forward</span>
        </Link>
      </div>
    </section>
  )
}
