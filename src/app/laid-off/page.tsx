"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const firstSteps = [
  {
    type: "Don't",
    text: "rush into applications before your CV and LinkedIn are in shape — a weak first impression sticks.",
    color: "bg-red-50 border-red-200",
    icon: "warning",
    iconColor: "text-red-500",
  },
  {
    type: "Don't",
    text: "take the first offer that comes along out of panic — we can do better.",
    color: "bg-red-50 border-red-200",
    icon: "warning",
    iconColor: "text-red-500",
  },
  {
    type: "Do",
    text: "take a breath, get a clear picture of your options, and build a plan.",
    color: "bg-green-50 border-green-200",
    icon: "check_circle",
    iconColor: "text-green-600",
  },
];

const areas = [
  {
    title: "Immediate Stabilisation",
    desc: "In our first session we'll get you oriented: what you want from your next role, what's realistic in your current market, and what needs to happen in what order. Clarity is the fastest antidote to panic.",
    icon: "anchor",
  },
  {
    title: "CV & LinkedIn Overhaul",
    desc: "If your CV and LinkedIn haven't been touched in years, now is the time. We'll update everything to reflect where you are today and where you want to go — not where you've been.",
    icon: "auto_fix_high",
  },
  {
    title: "Job Search Strategy",
    desc: "We build a targeted job search: the right roles, the right companies, the right approach for each. I'll show you how to reach out to hiring managers directly and use your network without it feeling awkward.",
    icon: "track_changes",
  },
  {
    title: "Interview Preparation",
    desc: "If you haven't interviewed in years, it's a skill that needs refreshing. We'll practise the questions you're likely to face — including how to handle the conversation about why you left your last role.",
    icon: "record_voice_over",
  },
  {
    title: "Offer Negotiation",
    desc: "When offers start coming in, you'll be ready to evaluate them properly and negotiate from a position of knowledge. Don't accept less than you deserve because you're in a hurry.",
    icon: "payments",
  },
];

export default function LaidOff() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Hero */}
        <header className="relative mb-24 rounded-[2rem] bg-gradient-to-br from-amber-50 via-background to-background">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
            <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-[120px]" />
          </div>

          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-12 lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full mb-8 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-base">support</span>
                <span className="text-primary font-bold text-xs tracking-widest uppercase">
                  Redundancy & Layoff Coaching
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.02] tracking-tight mb-8">
                Just been laid off?{" "}
                <span className="relative inline-block">
                  <span className="italic text-secondary">Here's what to do next.</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 500 14" fill="none" preserveAspectRatio="none">
                    <path d="M2 8 Q125 1 250 8 T498 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mb-4">
                Redundancy is a shock. Even when it's not a surprise, losing a job you've poured yourself into can knock you sideways — and the pressure to figure out your next move quickly makes everything harder.
              </p>
              <p className="font-serif italic text-2xl text-primary mb-8">
                I've helped dozens of professionals go from the shock of a layoff to a new role — often a better one.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-primary text-white px-7 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
                >
                  Book a Free Call
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </Link>
                <span className="text-on-surface-variant text-sm">Let's talk through what you need</span>
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
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                  alt="Quiet moment of reflection — fresh start"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl max-w-[280px] border border-outline-variant/10"
              >
                <p className="text-secondary text-xs uppercase tracking-widest font-bold mb-2">Client outcome</p>
                <p className="font-serif text-3xl font-black text-primary leading-none mb-1">7 weeks</p>
                <p className="text-xs text-on-surface-variant leading-snug">
                  From layoff to new role — Senior Project Manager
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: 10 }}
                animate={{ opacity: 1, rotate: -8 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-secondary text-white px-5 py-3 rounded-2xl shadow-xl"
              >
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">Move</p>
                <p className="font-serif text-lg font-black">Quickly</p>
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* First two weeks */}
        <section className="mb-24 bg-surface-container-low p-12 md:p-16 rounded-2xl">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
            First things first
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            The first two weeks matter most.
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-3xl">
            The decisions you make in the days and weeks immediately after a layoff can significantly affect how your next job search goes. Before you start applying everywhere, it's worth getting a few things right.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {firstSteps.map((s, idx) => (
              <div key={idx} className={`p-6 rounded-lg border ${s.color}`}>
                <span className={`material-symbols-outlined ${s.iconColor} text-2xl mb-3 block`}>{s.icon}</span>
                <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${s.iconColor}`}>
                  {s.type}
                </span>
                <p className="text-on-surface leading-relaxed text-sm">{s.text}</p>
              </div>
            ))}
          </div>
          <p className="text-primary font-bold text-lg mt-10">
            That's where I come in. We move quickly — but we move smart.
          </p>
        </section>

        {/* What we work on */}
        <section className="mb-24">
          <div className="mb-16">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              What we work on
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
              Your redundancy recovery plan.
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

        {/* Emotional Reality */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-surface-container-low p-10 rounded-2xl">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              The emotional side
            </span>
            <h3 className="font-serif text-3xl font-bold text-primary mb-6 leading-tight">
              It's okay if this is hard.
            </h3>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Being laid off isn't just a logistical challenge — it can shake your confidence and your sense of identity. I won't gloss over that. Part of what we do together is make sure you're showing up to job applications and interviews as the best version of yourself — not someone who's still in shock.
              </p>
              <p className="text-primary font-bold">
                You don't have to have it all together before you reach out. That's what I'm here for.
              </p>
            </div>
          </div>
          <div className="bg-primary text-white p-10 rounded-2xl">
            <span className="material-symbols-outlined text-secondary-container text-5xl mb-6 block">
              format_quote
            </span>
            <p className="font-serif italic text-xl leading-relaxed mb-6">
              "I was made redundant after eight years and felt completely lost. Aisha helped me understand that being laid off didn't mean I wasn't good enough — it meant I had an opportunity to find something better. Seven weeks later, I did."
            </p>
            <p className="text-blue-100/80 text-sm font-bold">— Senior Project Manager</p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 max-w-3xl mx-auto leading-tight">
            You don't have to figure this out alone.
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
            Book a free 20-minute call. We'll talk through where you are and what you need to move forward.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-white px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-secondary/20"
          >
            Book a Free Call
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}
