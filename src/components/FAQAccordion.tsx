'use client'
import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    q: 'How is this different from therapy?',
    a: "The name is intentional, but the work isn't clinical. We don't treat mental health conditions. We work on the structural side of your career — how you're perceived, how you communicate under pressure, and how you navigate the unspoken rules of work. If you'd benefit from clinical support, a licensed therapist is the right person; the two complement each other well.",
  },
  {
    q: 'How is Aisha different from other career coaches?',
    a: "21 years inside Human Capital — advising executives, leading employee relations, shaping how organizations actually hire, promote, and exit people. Most career coaches teach you to apply. Aisha teaches you what's happening on the other side of the table while you're applying.",
  },
  {
    q: "What if I'm employed and not actively job searching?",
    a: "Most of Aisha's clients are employed. The work is rarely about the job market — it's about visibility, promotions, difficult managers, internal politics, and positioning yourself for what's next while you're still in the current role. Don't wait until you're unhappy enough to leave.",
  },
  {
    q: 'Do you work with senior executives?',
    a: "Yes. A significant portion of clients are at director, VP, and C-suite level. The challenges shift at that altitude — boardroom dynamics, succession, executive presence, navigating organizational power — and the work is tailored accordingly.",
  },
  {
    q: 'How long does it take to see results?',
    a: "Most clients see meaningful shifts within the first 4–6 weeks — usually in how they're showing up in meetings, how they're being perceived by leadership, or how recruiters are responding to their LinkedIn. Bigger outcomes (promotions, new roles, pivots) typically land in the 2–6 month range.",
  },
  {
    q: 'Who do you work with?',
    a: "Professionals at all career stages, from people just starting out to experienced leaders. Whether you're looking for your first professional role, a lateral move, a big promotion, or a total career change, there's a path forward.",
  },
  {
    q: 'What does a typical engagement look like?',
    a: "Most 1-on-1 work runs as a 60-minute video session every 1–2 weeks, with async support between sessions for the work that comes up live — a tricky email, an offer to think through, a meeting that didn't go how you wanted. Engagement lengths range from focused 4-session sprints to ongoing partnerships.",
  },
  {
    q: 'Is this online or in person?',
    a: "All 1-on-1 coaching is online, by video. Clients are based across the U.S., and sessions are booked at times that work across time zones. For organizations, in-person workshops and keynotes are available on request.",
  },
  {
    q: "Is the discovery call really free, and is it a sales pitch?",
    a: "Yes, it's genuinely free — and no, it's not a pitch. It's a 20-minute conversation where you describe what's going on and Aisha gives you an honest read on whether coaching is the right next step. If it isn't, she'll tell you.",
  },
  {
    q: "What if I'm not sure what I actually want to do?",
    a: "That's where a lot of clients start. The first part of the work is often making the underlying question precise — separating the symptoms (bored, underpaid, stuck) from the actual decision. You don't need to have it figured out before booking.",
  },
  {
    q: 'Do you help with resumes, LinkedIn, and interview prep?',
    a: "Yes, but rarely as standalone services. They're part of the strategic work — your resume and LinkedIn only matter once you're targeting the right roles, and interview prep lands better once you understand what the hiring side is actually evaluating. We do all of it; we just sequence it.",
  },
  {
    q: 'How do I know if this is right for me?',
    a: "Book the discovery call. It's free, it's 20 minutes, and you'll leave with a clearer sense of what's actually going on and what the next move is — whether or not you decide to work with Aisha after.",
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0)

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
                className="w-full flex items-center justify-between gap-6 py-5 text-left text-charcoal font-medium hover:text-sage transition-colors"
              >
                <span>{f.q}</span>
                <span className="material-icons text-muted transition-transform duration-200 shrink-0" style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
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
