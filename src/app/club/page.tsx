"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const forYou = [
  "You're questioning whether you're in the right role, industry, or career path",
  "You want ongoing career support without committing to a full coaching programme right now",
  "You're working towards a job change or promotion and want regular insight and accountability",
  "You want to think more intentionally about your career — not just react to whatever happens next",
  "You want to feel less alone with the career questions that keep you up at night",
];

const benefits = [
  {
    title: "Monthly Live Career Coaching Call",
    desc: "A live group call with Aisha. Ask questions, get feedback on your specific situation, and hear from others facing similar challenges. Recorded if you can't attend live.",
    icon: "video_call",
  },
  {
    title: "Weekly Career Insights",
    desc: "A short, practical piece of content each week — covering job search tactics, promotion strategies, career change thinking, and the insider knowledge Aisha has built from years in HR.",
    icon: "lightbulb",
  },
  {
    title: "Practical Tools & Resources",
    desc: "Templates, frameworks, and step-by-step guides for the most common career challenges. CV templates, LinkedIn profile checklists, promotion planning worksheets, and more.",
    icon: "build",
  },
  {
    title: "Community Conversations",
    desc: "A private space to share where you are, ask questions, and hear from other professionals navigating similar career moments. Supportive, honest, and genuinely useful.",
    icon: "forum",
  },
  {
    title: "Monthly Mini-Courses",
    desc: "Short video lessons going deep on specific career topics — how to negotiate a salary, how to approach a career change, how to make yourself promotion-ready. Watch at your own pace.",
    icon: "school",
  },
];

const pricing = [
  { currency: "GBP", price: "£24", region: "United Kingdom" },
  { currency: "USD", price: "$32", region: "United States" },
  { currency: "EUR", price: "€29", region: "Europe" },
];

export default function Club() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Hero */}
        <header className="relative mb-24 rounded-[2rem] bg-primary text-white">
          {/* Blobs clipped to rounded corners — floating badges sit outside */}
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative grid grid-cols-12 gap-8 lg:gap-12 items-center p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-12 lg:col-span-8"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-8 border border-white/20">
                <span className="material-symbols-outlined text-secondary-container text-base">groups</span>
                <span className="text-white font-bold text-xs tracking-widest uppercase">
                  Membership · From £24/mo · Cancel anytime
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight mb-8">
                The Career Alignment{" "}
                <span className="relative inline-block">
                  <span className="italic text-secondary-container">Club.</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 14" fill="none" preserveAspectRatio="none">
                    <path d="M2 8 Q50 1 100 8 T198 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary-container" />
                  </svg>
                </span>
              </h1>
              <p className="font-serif italic text-2xl md:text-3xl text-secondary-container leading-tight mb-6 max-w-2xl">
                Monthly support, real insight, and a community of professionals who actually get it.
              </p>
              <p className="text-lg text-blue-100/90 leading-relaxed max-w-2xl">
                Not ready for 1-on-1 coaching yet — or want ongoing support between sessions? The Club gives you access to Aisha's expertise, practical tools, and a thoughtful community working towards careers that fit better.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="col-span-12 lg:col-span-4 relative"
            >
              <div className="bg-white text-primary p-8 rounded-2xl shadow-2xl">
                <p className="text-secondary text-xs uppercase tracking-widest font-bold mb-2">Join from</p>
                <p className="font-serif text-6xl font-black leading-none mb-2">£24<span className="text-2xl font-normal text-on-surface-variant">/mo</span></p>
                <p className="text-on-surface-variant text-sm mb-6">Cancel anytime. No long-term commitment.</p>
                <ul className="space-y-2 mb-6 text-sm">
                  {["Monthly live coaching call", "Weekly insights from Aisha", "Templates & frameworks", "Community space"].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5">check</span>
                      <span className="text-on-surface-variant">{b}</span>
                    </li>
                  ))}
                </ul>
                <button className="block w-full bg-primary text-white text-center px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
                  Join the Club
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0, rotate: 10 }}
                animate={{ opacity: 1, rotate: -8 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-secondary text-white px-4 py-3 rounded-2xl shadow-xl"
              >
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">Private</p>
                <p className="font-serif text-lg font-black">Community</p>
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* Is this for you */}
        <section className="mb-24 bg-surface-container-low p-12 md:p-16 rounded-2xl">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
            Is this for you?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-10 leading-tight">
            This space is for you if…
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {forYou.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-4 p-5 bg-white rounded-lg"
              >
                <span className="material-symbols-outlined text-secondary mt-0.5 shrink-0">check_circle</span>
                <p className="text-on-surface leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What's inside */}
        <section className="mb-24">
          <div className="mb-16">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              What's inside
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
              What you get every month.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-xl border border-outline-variant/15 hover:border-secondary/40 hover:shadow-md transition-all"
              >
                <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">{b.icon}</span>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{b.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Difference */}
        <section className="mb-24 bg-primary text-white p-12 md:p-16 rounded-2xl">
          <span className="text-secondary-container font-bold tracking-widest text-xs uppercase mb-4 block">
            The difference
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Why the Club works differently.
          </h2>
          <div className="space-y-6 text-lg text-blue-100/90 leading-relaxed max-w-3xl">
            <p>
              Most career content is generic. The Career Alignment Club is built around Aisha's specific expertise: the insider knowledge of how companies hire and promote, combined with the coaching skills to help you apply it to your real situation.
            </p>
            <p className="text-white font-bold">
              This isn't a passive newsletter or a course you'll never finish. It's an active, ongoing space where your career gets regular attention.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              Choose your region
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.map((p, idx) => (
              <div key={idx} className="bg-surface-container-low p-10 rounded-2xl text-center">
                <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">{p.region}</p>
                <p className="font-serif text-5xl font-black text-primary mb-2">{p.price}</p>
                <p className="text-on-surface-variant text-sm mb-6">/month · Cancel anytime</p>
                <button className="w-full bg-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                  Join in {p.currency}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Bridge to 1-on-1 */}
        <section className="bg-surface-container-low p-12 md:p-16 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
                Want more personalised support?
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                For your biggest career moments.
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                The Club is a powerful ongoing resource. For clients with a specific goal — an active job search, a promotion they're pushing for, or a career change in progress — 1-on-1 coaching with Aisha offers dedicated, personalised support tailored entirely to your situation.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Many Club members book 1-on-1 sessions at key moments in their career journey.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                href="/coaching"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity group"
              >
                Explore 1-on-1 Coaching
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
