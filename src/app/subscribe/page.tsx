"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const benefits = [
  "Practical tips you can apply immediately — not vague inspiration",
  "Insider perspective on how employers think, hire, and promote",
  "Honest answers to the career questions nobody talks about openly",
  "Occasional resources, templates, and tools — completely free",
];

export default function Subscribe() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <div className="relative pt-32 pb-24 px-6 md:px-12 max-w-[1100px] mx-auto">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-32 -left-20 w-96 h-96 bg-secondary/15 rounded-full blur-[120px]" />
          <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        </div>

        {/* Hero */}
        <header className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-secondary-container/60 px-4 py-2 rounded-full mb-8">
              <span className="material-symbols-outlined text-secondary text-base">mark_email_unread</span>
              <span className="text-primary font-bold text-xs tracking-widest uppercase">
                The Career Therapist Newsletter
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.02] tracking-tight mb-8 max-w-4xl mx-auto">
              Weekly career advice from someone who's been on the{" "}
              <span className="relative inline-block">
                <span className="italic text-secondary">other side.</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 220 14" fill="none" preserveAspectRatio="none">
                  <path d="M2 8 Q55 1 110 8 T218 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-6">
              Every week I send a short, practical email to professionals who want to get ahead. Job search tactics. Promotion strategies. Career change thinking. And the insider knowledge from years in HR — the stuff that usually only gets shared behind closed doors.
            </p>
            <p className="font-serif italic text-2xl text-primary">
              No fluff. No filler. Just useful insight, once a week.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#1d4ed8", "#fbbf24", "#fb7185"].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white" style={{ background: c }} />
                  ))}
                </div>
                <span className="text-on-surface-variant text-sm">
                  <span className="font-bold text-primary">5,000+</span> subscribers
                </span>
              </div>
              <span className="text-outline">·</span>
              <span className="text-on-surface-variant text-sm">
                Read in <span className="font-bold text-primary">12 countries</span>
              </span>
              <span className="text-outline hidden md:inline">·</span>
              <span className="text-on-surface-variant text-sm hidden md:inline">
                <span className="font-bold text-primary">Free forever</span>
              </span>
            </div>
          </motion.div>
        </header>

        {/* Subscribe Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-primary text-white p-10 md:p-14 rounded-2xl mb-16 shadow-xl"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-center">Join the Newsletter</h2>
          <p className="text-blue-100/90 text-center mb-8">
            Free. Weekly. Unsubscribe anytime.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="First name"
              className="bg-white/10 border border-white/20 rounded-lg px-5 py-4 placeholder:text-blue-100/60 text-white focus:outline-none focus:ring-2 focus:ring-secondary-container/50"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border border-white/20 rounded-lg px-5 py-4 placeholder:text-blue-100/60 text-white focus:outline-none focus:ring-2 focus:ring-secondary-container/50"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-secondary text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Me the Weekly Email
            </button>
          </form>
          <p className="text-blue-100/60 text-xs text-center mt-6">
            No spam. Unsubscribe at any time. Your details are never shared.
          </p>
        </motion.div>

        {/* What you'll get */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              What's in each email
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">What you'll get</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-surface-container-low rounded-lg">
                <span className="material-symbols-outlined text-secondary mt-0.5 shrink-0">check_circle</span>
                <p className="text-on-surface leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social proof */}
        <section className="bg-surface-container-low p-10 rounded-2xl text-center">
          <span className="material-symbols-outlined text-secondary text-4xl mb-4 block">format_quote</span>
          <p className="font-serif italic text-2xl text-primary mb-6 max-w-2xl mx-auto leading-relaxed">
            "Aisha's emails are the only career newsletter I actually read. Every one is useful."
          </p>
          <p className="text-on-surface-variant text-sm font-bold">— Subscriber</p>
          <p className="text-on-surface-variant text-sm mt-8">
            Read by professionals across the UK, Europe, North America, the Middle East, and beyond.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}
