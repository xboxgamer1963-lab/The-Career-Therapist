"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const realities = [
  "Are visible to the decision-makers who matter — not just doing good work in the background",
  "Have built a reputation that extends beyond their immediate team",
  "Know how to make a compelling, business-focused case for why they deserve to move up",
  "Have positioned themselves as the obvious choice long before the conversation happens",
  "Are confident advocating for themselves — even when that feels uncomfortable",
];

const areas = [
  {
    title: "Visibility & Influence",
    desc: "We identify who the real decision-makers are in your organisation and build a plan to increase your visibility and impact with the people who matter most. You'll stop being the best-kept secret in your team.",
    icon: "visibility",
  },
  {
    title: "Building Your Case",
    desc: "When the time comes to ask for a promotion, you need more than enthusiasm. We'll build a clear, evidence-based case for your advancement — framed in terms of business value, not just effort.",
    icon: "fact_check",
  },
  {
    title: "The Promotion Conversation",
    desc: "Most people have this conversation poorly — or never have it at all. We'll prepare you thoroughly: what to say, how to say it, how to handle pushback, and how to follow up if the answer is 'not yet.'",
    icon: "forum",
  },
  {
    title: "Executive Presence",
    desc: "Senior roles require a different way of showing up. We work on how you communicate, how you're perceived in the room, and the habits that signal readiness for the next level.",
    icon: "psychology",
  },
  {
    title: "Salary Negotiation",
    desc: "A promotion without a meaningful pay rise is a hollow win. I'll help you research the right number, prepare your negotiation, and make the ask with confidence.",
    icon: "payments",
  },
];

export default function GetPromoted() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Hero */}
        <header className="relative mb-24 rounded-[2rem] bg-gradient-to-br from-secondary-container/30 via-background to-background">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
            <div className="absolute -top-20 right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
          </div>

          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-12 lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full mb-8 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-base">trending_up</span>
                <span className="text-primary font-bold text-xs tracking-widest uppercase">
                  Promotion Coaching
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.02] tracking-tight mb-8">
                You're doing the work.{" "}
                <span className="relative inline-block">
                  <span className="italic text-secondary">So why hasn't the promotion arrived?</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 700 14" fill="none" preserveAspectRatio="none">
                    <path d="M2 8 Q175 1 350 8 T698 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mb-8">
                Doing your job well is necessary — but it's not sufficient. Getting promoted requires being <span className="italic text-primary font-medium">seen</span>, being positioned correctly, and having the right conversations with the right people at the right time. Most professionals never learn how to do this. I'll show you.
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-primary text-white px-7 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
                >
                  Book a Free Promotion Strategy Call
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </Link>
                <span className="text-on-surface-variant text-sm">20 min · No obligation</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="col-span-12 lg:col-span-5 relative"
            >
              <div className="relative aspect-[5/6] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional preparing for promotion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl max-w-[260px] border border-outline-variant/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">military_tech</span>
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-black text-primary leading-none">6 mo</p>
                    <p className="text-xs text-on-surface-variant mt-1">to Head of Dept</p>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant leading-snug italic">
                  "Stuck for 4 years. Promoted in 6 months."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 6 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -left-4 bg-secondary text-white px-5 py-3 rounded-2xl shadow-xl"
              >
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">Insider</p>
                <p className="font-serif text-lg font-black">HR-Backed</p>
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* The reality */}
        <section className="mb-24 bg-surface-container-low p-12 md:p-16 rounded-2xl">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
            HR Insider Truth
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
            What actually drives promotion decisions.
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-3xl">
            After years in HR, I can tell you something most career guides won't: promotions are rarely given purely on merit. They're given to people who:
          </p>
          <div className="space-y-4">
            {realities.map((r, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-4 p-5 bg-white rounded-lg"
              >
                <span className="text-secondary font-bold text-lg shrink-0 w-8">{idx + 1}.</span>
                <p className="text-on-surface leading-relaxed">{r}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-primary font-bold text-lg mt-10">
            The good news? Every one of these is a skill you can develop.
          </p>
        </section>

        {/* What we work on */}
        <section className="mb-24">
          <div className="mb-16">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              What we work on
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
              Your promotion strategy — from the inside out.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((a, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-xl border border-outline-variant/15 hover:border-secondary/40 hover:shadow-md transition-all"
              >
                <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">{a.icon}</span>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{a.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-surface-container-low p-10 rounded-2xl">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              Timing
            </span>
            <h3 className="font-serif text-3xl font-bold text-primary mb-6 leading-tight">
              How long does this take?
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              That depends on where you're starting. Some clients come to me 6 months before they plan to go for a promotion — giving us time to do the deeper work around visibility and positioning. Others come when the opportunity is imminent and need focused preparation quickly. Both approaches work. We'll decide on the right pace together.
            </p>
          </div>
          <div className="bg-primary text-white p-10 rounded-2xl">
            <span className="material-symbols-outlined text-secondary-container text-5xl mb-6 block">
              format_quote
            </span>
            <p className="font-serif italic text-xl leading-relaxed mb-6">
              "I'd been at the same level for four years. Aisha helped me understand that I'd been invisible to the people who made promotion decisions — not because I wasn't capable, but because I'd never learnt how to make my work visible. Six months later, I'm Head of Department."
            </p>
            <p className="text-blue-100/80 text-sm font-bold">— Client, Financial Services</p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 max-w-3xl mx-auto leading-tight">
            Don't wait for a promotion that may never come on its own.
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
            Book a free 20-minute strategy call and we'll talk about what's standing between you and your next step.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-white px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-secondary/20"
          >
            Book a Free Promotion Strategy Call
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}
