"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  "You book a time that suits you using the calendar above.",
  "You'll receive a confirmation with the video call link.",
  "We spend 20 minutes talking about your situation — no prep needed from you.",
  "I'll share my honest thoughts on what I think could help.",
  "If it feels like a good fit, we talk about next steps. If not, I'll point you in the right direction.",
];

const otherOptions = [
  {
    icon: "school",
    title: "Free 5-Day Email Course",
    desc: "Five days of career clarity, delivered to your inbox.",
    href: "/free-course",
    cta: "Start the course",
  },
  {
    icon: "mail",
    title: "Weekly Newsletter",
    desc: "Practical career advice, once a week, completely free.",
    href: "/subscribe",
    cta: "Join the list",
  },
  {
    icon: "groups",
    title: "The Career Alignment Club",
    desc: "Ongoing monthly support from £24/month — community + monthly group calls.",
    href: "/club",
    cta: "Explore the Club",
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <main className="relative pt-32 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Background decoration — clipped separately so floating badges aren't cut off */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-32 -right-32 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px]" />
          <div className="absolute top-40 -left-20 w-80 h-80 bg-primary/8 rounded-full blur-[100px]" />
        </div>

        {/* Hero */}
        <section className="mb-20 grid grid-cols-12 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 bg-secondary-container/60 px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              <span className="text-primary font-bold text-xs tracking-widest uppercase">
                Free · 20 Minutes · No Obligation
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.02] mb-8 font-serif">
              Book a Free{" "}
              <span className="relative inline-block">
                <span className="italic text-secondary">Discovery Call.</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 350 14" fill="none" preserveAspectRatio="none">
                  <path d="M2 8 Q87 1 175 8 T348 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary" />
                </svg>
              </span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-4 max-w-2xl">
              Not sure if career coaching is right for you? A discovery call is a free 20-minute conversation — completely informal, no pressure, no obligation.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
              We'll talk about where you are, what you're finding difficult, and what you're hoping to achieve. I'll tell you honestly whether I think coaching could help — and what that might look like.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="col-span-12 lg:col-span-5 relative"
          >
            <div className="bg-primary text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-[60px] -mr-12 -mt-12" />
              <div className="relative">
                <span className="material-symbols-outlined text-6xl text-secondary-container mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                  event_available
                </span>
                <h3 className="font-serif text-2xl font-bold mb-4">What you'll get</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container shrink-0 text-base mt-1">check</span>
                    <span>20 minutes of focused conversation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container shrink-0 text-base mt-1">check</span>
                    <span>An honest assessment from someone with HR experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container shrink-0 text-base mt-1">check</span>
                    <span>Clear next steps — whether we work together or not</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container shrink-0 text-base mt-1">check</span>
                    <span>Zero pressure. Zero pitch.</span>
                  </li>
                </ul>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, rotate: 10 }}
              animate={{ opacity: 1, rotate: -6 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-4 -left-4 bg-secondary text-white px-5 py-3 rounded-2xl shadow-xl"
            >
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">100%</p>
              <p className="font-serif text-lg font-black">Free</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Booking + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          {/* Calendar Embed Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-xl shadow-[0_32px_64px_-12px_rgba(23,28,31,0.06)] border border-outline-variant/10"
          >
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">
              Step 1
            </span>
            <h2 className="text-3xl font-bold text-primary mb-6 font-serif">Pick a time that suits you</h2>
            <div className="bg-surface-container-low rounded-xl p-12 text-center border-2 border-dashed border-outline-variant/30">
              <span className="material-symbols-outlined text-5xl text-primary mb-4 block">
                calendar_today
              </span>
              <p className="text-on-surface-variant mb-6 max-w-md mx-auto">
                Your booking calendar (Calendly or similar) will appear here. Pick a 20-minute slot that works for you and you'll receive a confirmation by email.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                Open Calendar
              </button>
            </div>
          </motion.div>

          {/* What to expect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-surface-container-low rounded-xl p-10 h-full">
              <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">
                What happens next
              </span>
              <h3 className="text-2xl font-bold text-primary mb-8 font-serif">From booking to call</h3>
              <ol className="space-y-5">
                {steps.map((step, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="bg-primary text-white font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <p className="text-on-surface-variant text-sm leading-relaxed pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>

        {/* Message form */}
        <section className="mb-24">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_32px_64px_-12px_rgba(23,28,31,0.06)] border border-outline-variant/10 max-w-3xl mx-auto">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">
              Prefer to send a message?
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Drop me a line</h2>
            <p className="text-on-surface-variant mb-8">
              If you'd prefer to reach out by email before booking a call, you're welcome to do that. Aisha reads every message personally and responds within 2 business days.
            </p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant ml-1">First name</label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline"
                    placeholder="Your first name"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant ml-1">Email</label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline"
                    placeholder="you@email.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant ml-1">What's going on?</label>
                <textarea
                  className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline"
                  placeholder="Briefly tell me where you are and what you're hoping to work on..."
                  rows={5}
                />
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-lg flex justify-center items-center gap-3 hover:opacity-90 transition-all group">
                Send Message
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </form>
          </div>
        </section>

        {/* Other options */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">
              Not ready for a call yet?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Other ways to start</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherOptions.map((opt, idx) => (
              <Link
                key={idx}
                href={opt.href}
                className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-colors group"
              >
                <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">{opt.icon}</span>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{opt.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{opt.desc}</p>
                <span className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                  {opt.cta}
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </main>
  );
}
