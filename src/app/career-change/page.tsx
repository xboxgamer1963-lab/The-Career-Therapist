"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const areas = [
  {
    title: "Getting Clear on What You Want",
    desc: "Before we talk about what's next, we get honest about what hasn't been working and what you're genuinely moving towards — not just away from. This clarity makes everything else easier.",
    icon: "compass_calibration",
  },
  {
    title: "Identifying Transferable Skills",
    desc: "You have more relevant experience than you think. We map your existing skills onto your target direction and build a narrative that explains your move in a way that makes sense to employers.",
    icon: "swap_horiz",
  },
  {
    title: "Researching Your Target Field",
    desc: "Most people change careers without fully understanding what they're moving into. We do the research — talking to people in the field, understanding what employers actually look for, and reality-testing your assumptions.",
    icon: "explore",
  },
  {
    title: "Repositioning Your CV & LinkedIn",
    desc: "Your CV and LinkedIn need to be rebuilt for your new direction. We reframe your experience so it speaks to where you're going, not just where you've been.",
    icon: "auto_fix_high",
  },
  {
    title: "Managing the Transition",
    desc: "Career changes often involve a period of ambiguity — maybe retraining, maybe a lateral move first. We build a realistic timeline and manage the practical steps so you're moving forward, not just thinking about it.",
    icon: "timeline",
  },
];

const audience = [
  "You've been in the same industry or role type for years and know something needs to change",
  "You've always wanted to do something different but have been afraid to make the leap",
  "You're worried it's too late, or that you've left it too long",
  "You don't know what you want next, only that it's not this",
  "You've been thinking about a career change for ages but haven't made any progress",
];

export default function CareerChange() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Hero */}
        <header className="relative mb-24 rounded-[2rem] bg-gradient-to-br from-secondary-container/30 via-background to-background">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
            <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px]" />
          </div>

          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-12 lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full mb-8 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-base">moving</span>
                <span className="text-primary font-bold text-xs tracking-widest uppercase">
                  Career Change Coaching
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.02] tracking-tight mb-8">
                It's not too late. It's not too hard.{" "}
                <span className="relative inline-block">
                  <span className="italic text-secondary">You probably don't have to start from zero.</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 700 14" fill="none" preserveAspectRatio="none">
                    <path d="M2 8 Q175 1 350 8 T698 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mb-4">
                Most career changes feel overwhelming because people try to tackle the whole thing at once — figure out what they want, work out how to get there, deal with the fear of starting over, and do all of this while still holding down their current job.
              </p>
              <p className="font-serif italic text-2xl text-primary mb-8">
                We do it differently. One step at a time. With a clear plan.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-primary text-white px-7 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
                >
                  Book a Free Consultation
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
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1200&q=80"
                  alt="Person at a career crossroads"
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
                <p className="text-secondary text-xs uppercase tracking-widest font-bold mb-2">Supporting</p>
                <p className="font-serif text-2xl font-black text-primary leading-tight mb-1">20s · 30s · 40s · 50s</p>
                <p className="text-xs text-on-surface-variant leading-snug">
                  Career changes at every age and stage.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 8 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -left-4 bg-primary text-white px-5 py-3 rounded-2xl shadow-xl"
              >
                <p className="text-[10px] uppercase tracking-widest font-bold text-secondary-container">Step</p>
                <p className="font-serif text-lg font-black">By Step</p>
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* The Reality */}
        <section className="mb-24 bg-surface-container-low p-12 md:p-16 rounded-2xl">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
            The reality of career change
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
            What you need to know before you start.
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-3xl">
            <p>
              The biggest thing I see holding people back from a career change is not knowing where to start — so they never start at all. Or they start in the wrong place: picking a new career before they've got clear on what was missing from the old one.
            </p>
            <p>
              A career change done well begins with clarity. What do you want more of? What do you want less of? What are you actually good at that crosses over into your target direction?
            </p>
            <p className="text-primary font-bold">The answers to these questions determine everything.</p>
          </div>
        </section>

        {/* What we work on */}
        <section className="mb-24">
          <div className="mb-16">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              What we work on
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
              Your career change — from idea to reality.
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

        {/* Who this is for */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-surface-container-low p-10 rounded-2xl">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              Who this is for
            </span>
            <h3 className="font-serif text-3xl font-bold text-primary mb-6 leading-tight">
              This is for you if…
            </h3>
            <ul className="space-y-3">
              {audience.map((a, idx) => (
                <li key={idx} className="flex items-start gap-3 text-on-surface leading-relaxed">
                  <span className="material-symbols-outlined text-secondary mt-0.5 shrink-0 text-lg">check_circle</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary text-white p-10 rounded-2xl flex flex-col justify-center">
            <span className="text-secondary-container font-bold tracking-widest text-xs uppercase mb-4 block">
              At every age & stage
            </span>
            <h3 className="font-serif text-3xl font-bold mb-6 leading-tight">
              It's never too late.
            </h3>
            <p className="text-blue-100/90 leading-relaxed text-lg">
              Career changes happen at every age and every stage. Aisha has supported professionals in their 20s, 30s, 40s, and 50s through successful transitions. It's never too late — and it's rarely as hard as it feels from the outside.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 max-w-3xl mx-auto leading-tight">
            Your career change starts with one conversation.
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
            Book a free 20-minute call and we'll talk about where you want to go and what's been stopping you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-white px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-secondary/20"
          >
            Book a Free Career Change Consultation
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}
