"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const days = [
  {
    day: "Day 1",
    title: "Why You Feel Stuck (And What It's Telling You)",
    desc: "The first step is understanding what's actually wrong. Is it the role? The company? The industry? Or something else entirely? We start here.",
  },
  {
    day: "Day 2",
    title: "What You're Actually Good At",
    desc: "Most people underestimate their transferable skills. On day two, we take a clear-eyed look at what you bring to the table — and why it's more valuable than you think.",
  },
  {
    day: "Day 3",
    title: "What You Want From Work (Honestly)",
    desc: "Not what you should want. Not what looks good. What you actually want. This is harder than it sounds — and it's the most important question.",
  },
  {
    day: "Day 4",
    title: "What's Holding You Back",
    desc: "Fear. Practicality. Other people's expectations. We look honestly at what's been stopping you from making a move — and how to work through it.",
  },
  {
    day: "Day 5",
    title: "Your Next Step",
    desc: "By day five, you'll have a clearer picture of your direction and one concrete thing to do next. No big dramatic leap required — just one clear step.",
  },
];

const audience = [
  "You feel stuck in your career but aren't sure why",
  "You've been thinking about a change for a while but haven't made any progress",
  "You're not sure what you want next — only that something needs to shift",
  "You want a structured way to think through your career before committing to a direction",
];

export default function FreeCourse() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <div className="relative pt-32 pb-24 px-6 md:px-12 max-w-[1100px] mx-auto">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-32 left-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px]" />
          <div className="absolute top-40 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
        </div>

        {/* Hero */}
        <header className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-secondary-container/60 px-4 py-2 rounded-full mb-8">
              <span className="material-symbols-outlined text-secondary text-base">school</span>
              <span className="text-primary font-bold text-xs tracking-widest uppercase">
                Free 5-Day Email Course · 100% Free
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.02] tracking-tight mb-8 max-w-4xl mx-auto">
              5 Days to a Clearer{" "}
              <span className="relative inline-block">
                <span className="italic text-secondary">Career Direction.</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 14" fill="none" preserveAspectRatio="none">
                  <path d="M2 8 Q100 1 200 8 T398 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary" />
                </svg>
              </span>{" "}
              Free.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-4">
              Feeling stuck, lost, or unsure what your next career move should be? This free 5-day email course was built for exactly that.
            </p>
            <p className="text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              Each day you'll receive a short, practical lesson from Aisha — designed to help you understand what's not working, reconnect with what matters to you, and start building a direction that feels right.
            </p>

            {/* Day pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-10">
              {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"].map((d, i) => (
                <div
                  key={d}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase ${
                    i === 0 ? "bg-primary text-white" : "bg-white border border-outline-variant/20 text-primary"
                  }`}
                >
                  {d}
                </div>
              ))}
            </div>
          </motion.div>
        </header>

        {/* Sign up form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-primary text-white p-10 md:p-14 rounded-2xl mb-20 shadow-xl"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-center">Start the free course</h2>
          <p className="text-blue-100/90 text-center mb-8">
            Your first email arrives within minutes.
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
              Start the Free Course
            </button>
          </form>
          <p className="text-blue-100/60 text-xs text-center mt-6">
            You'll receive your first email within minutes. No spam. Unsubscribe anytime.
          </p>
        </motion.div>

        {/* What the 5 days cover */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              What you'll learn
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">What the 5 days cover</h2>
          </div>
          <div className="space-y-4">
            {days.map((d, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-surface-container-low p-8 rounded-xl flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="md:w-32 shrink-0">
                  <span className="text-secondary font-bold text-xs uppercase tracking-widest block">{d.day}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">{d.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-surface-container-low p-12 rounded-2xl">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
            Who it's for
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
            This course is for you if…
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audience.map((a, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 bg-white rounded-lg">
                <span className="material-symbols-outlined text-secondary mt-0.5 shrink-0">check_circle</span>
                <p className="text-on-surface leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
