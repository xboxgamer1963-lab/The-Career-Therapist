'use client'
import { useState } from 'react'
import Link from 'next/link'
import FinalCTA from '@/components/FinalCTA'

const groups = [
  {
    section: 'General',
    items: [
      { q: 'How is this different from therapy?', a: "The name is intentional, but the work isn't clinical. We don't treat mental health conditions. We work on the structural side of your career — how you're perceived, how you communicate under pressure, and how you navigate the unspoken rules of work. If you'd benefit from clinical support, a licensed therapist is the right person; the two complement each other well." },
      { q: 'How is Aisha different from other career coaches?', a: '21 years inside Human Capital — advising executives, leading employee relations, shaping how organizations actually hire, promote, and exit people. Most career coaches teach you to apply. Aisha teaches you what\'s happening on the other side of the table while you\'re applying.' },
      { q: 'Who do you work with?', a: 'Professionals at all career stages — from people just starting out to experienced leaders. Whether you\'re looking for your first professional role, a lateral move, a big promotion, or a total career change, there\'s a path forward.' },
      { q: 'Do you work with senior executives?', a: 'Yes. A significant portion of clients are at director, VP, and C-suite level. The challenges shift at that altitude — boardroom dynamics, succession, executive presence, organizational power — and the work is tailored accordingly.' },
      { q: 'Where are your clients based?', a: 'Across the United States. Sessions are held online so it works wherever you are in the country — coast to coast.' },
    ],
  },
  {
    section: 'Working together',
    items: [
      { q: "What if I'm employed and not actively job searching?", a: "Most clients are employed. The work is rarely about the job market — it's about visibility, promotions, difficult managers, internal politics, and positioning yourself for what's next while you're still in the current role. Don't wait until you're unhappy enough to leave." },
      { q: 'What does a typical engagement look like?', a: 'Most 1-on-1 work runs as a 60-minute video session every 1–2 weeks, with async support between sessions for the work that comes up live — a tricky email, an offer to think through, a meeting that didn\'t go how you wanted. Engagement lengths range from focused sprints to ongoing partnerships.' },
      { q: 'How long does it take to see results?', a: "Most clients see meaningful shifts within the first 4–6 weeks — usually in how they're showing up in meetings, how they're being perceived by leadership, or how recruiters are responding to their LinkedIn. Bigger outcomes (promotions, new roles, pivots) typically land in the 2–6 month range." },
      { q: 'How are sessions held?', a: 'Online — Zoom or Google Meet, your choice. No travel, no logistics. You can do them from your sofa.' },
      { q: 'Do you help with resumes, LinkedIn, and interview prep?', a: "Yes, but rarely as standalone services. They're part of the strategic work — your resume and LinkedIn only matter once you're targeting the right roles, and interview prep lands better once you understand what the hiring side is actually evaluating. We do all of it; we just sequence it." },
    ],
  },
  {
    section: 'Getting started',
    items: [
      { q: 'Is the discovery call really free, and is it a sales pitch?', a: "Yes, it's genuinely free — and no, it's not a pitch. It's a 20-minute conversation where you describe what's going on and Aisha gives you an honest read on whether coaching is the right next step. If it isn't, she'll tell you." },
      { q: "What if I'm not sure what I actually want to do?", a: "That's where a lot of clients start. The first part of the work is often making the underlying question precise — separating the symptoms (bored, underpaid, stuck) from the actual decision. You don't need to have it figured out before booking." },
      { q: 'How quickly can we start?', a: "Usually within 1–2 weeks of the discovery call. If you're in an active layoff or have a tight deadline (an interview, a critical conversation) emergency slots are available and we can often start within days." },
      { q: 'Can I expense coaching?', a: 'Often, yes. Many employers fund career or leadership coaching, especially as part of L&D budgets. Invoices are provided in a format that works for expensing.' },
    ],
  },
]

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-6 py-5 text-left text-charcoal font-medium hover:text-sage transition-colors">
        <span>{q}</span>
        <span className="material-icons text-muted transition-transform shrink-0" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
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
