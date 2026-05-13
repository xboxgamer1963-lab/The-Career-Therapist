"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const rightPlace = [
  "You've been applying for jobs and getting nowhere — and you're not sure why.",
  "You're due a promotion but haven't been able to make it happen.",
  "You've just been made redundant and need to get moving, fast.",
  "You want to change careers but feel stuck trying to figure out how.",
  "You're tired of generic career advice and want someone who actually knows how hiring works.",
  "You want a proper strategy, not just a pep talk.",
];

const areas = [
  {
    title: "Job Search Strategy",
    desc: "We build a targeted, focused job search plan. We identify the right roles, fix your CV and LinkedIn profile, prepare you for interviews, and make sure you're negotiating the best possible offer. No more guessing. No more applying into the void.",
    icon: "search",
    href: "/job-search-coaching",
  },
  {
    title: "Promotion Strategy",
    desc: "Getting promoted requires more than doing good work. We map out exactly what's standing between you and that next step, build your visibility and influence, and help you have the conversations with decision-makers that move things forward.",
    icon: "trending_up",
    href: "/get-promoted",
  },
  {
    title: "Redundancy Recovery",
    desc: "Being laid off can feel like a crisis. We turn it into a focused plan. We update your positioning, sharpen your CV and LinkedIn, identify your best opportunities, and build a job search strategy that gets you to your next role quickly.",
    icon: "support",
    href: "/laid-off",
  },
  {
    title: "Career Change Navigation",
    desc: "Changing direction is one of the hardest career challenges — and one of the most rewarding. We'll get clear on what you want, identify which skills translate, and build a realistic, step-by-step plan to get you there.",
    icon: "moving",
    href: "/career-change",
  },
  {
    title: "Interview Coaching",
    desc: "Most candidates prepare for interviews the wrong way. I'll help you understand what interviewers are really evaluating, build compelling answers to tough questions, and walk into every interview feeling genuinely prepared.",
    icon: "record_voice_over",
  },
  {
    title: "Salary & Offer Negotiation",
    desc: "Most professionals leave money on the table because they don't know how to negotiate — or they're too nervous to try. We'll prepare you to negotiate confidently, with specific tactics that work.",
    icon: "payments",
  },
];

const steps = [
  {
    title: "Book a free discovery call",
    desc: "20 minutes via video. We talk about where you are and what you need. No obligation.",
  },
  {
    title: "Book your first session",
    desc: "If it feels like a good fit, we schedule your first session — 60 minutes via video, at a time that suits you.",
  },
  {
    title: "Leave with a clear action plan",
    desc: "Every session ends with concrete next steps. You always know exactly what to do next.",
  },
  {
    title: "Continue until you reach your goal",
    desc: "A job offer. A promotion. A career change you're confident in. We keep going until you get there.",
  },
];

const packages = [
  {
    name: "Single Session",
    duration: "60 minutes",
    desc: "Focused on one key challenge — interview prep, a tough conversation, a specific decision.",
    highlight: false,
  },
  {
    name: "3-Session Package",
    duration: "Three 60-min sessions",
    desc: "Ideal for job search or promotion planning. Enough depth to build a real strategy and execute it.",
    highlight: true,
  },
  {
    name: "6-Session Package",
    duration: "Six 60-min sessions",
    desc: "Full career change or extended job search support. The most popular package for transformational work.",
    highlight: false,
  },
];

const faqs = [
  {
    q: "How is this different from normal career coaching?",
    a: "Most career coaches offer generic advice. Because Aisha has a background in HR and recruiting, she knows exactly how employers make decisions. That means the advice you get is specific, practical, and based on how the real world actually works — not how it's supposed to work.",
  },
  {
    q: "How many sessions will I need?",
    a: "It depends on what you're working on. Clients with a specific goal — like preparing for an interview or finalising a promotion strategy — might only need 2 to 3 sessions. Those working through a full job search or career change typically get the most from 5 to 6 sessions. We'll talk about this on your discovery call.",
  },
  {
    q: "Do you offer sessions in person?",
    a: "All sessions are held online via video call, which means Aisha can work with clients anywhere in the world. Sessions are available at flexible times to suit your schedule.",
  },
  {
    q: "What if I'm not sure what I need?",
    a: "That's what the discovery call is for. Come as you are — we'll work it out together.",
  },
];

export default function Coaching() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Hero */}
        <header className="relative mb-24 rounded-[2rem] bg-gradient-to-br from-secondary-container/40 via-background to-background">
          {/* Blobs clipped to rounded corners — floating badges sit outside */}
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
          </div>

          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="col-span-12 lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full mb-8 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-base">workspace_premium</span>
                <span className="text-primary font-bold text-xs tracking-widest uppercase">
                  Work With Me · 1-on-1
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.02] tracking-tight mb-8">
                1-on-1 Career{" "}
                <span className="relative inline-block">
                  <span className="italic text-secondary">Coaching.</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 240 14" fill="none" preserveAspectRatio="none">
                    <path d="M2 8 Q60 1 120 8 T238 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary" />
                  </svg>
                </span>
              </h1>
              <p className="font-serif italic text-2xl md:text-3xl text-primary leading-tight max-w-2xl mb-6">
                Practical. Personal. Built entirely around you.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl mb-10">
                Every session is focused on your specific situation — your goals, your challenges, your next steps. No generic scripts. No one-size-fits-all frameworks. Just honest, expert support from a coach who's been inside the system you're trying to navigate.
              </p>

              {/* CTAs in the column, not floating on image */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-7 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                >
                  Book a Free Discovery Call
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </Link>
                <Link
                  href="#areas"
                  className="border-2 border-primary text-primary px-7 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors"
                >
                  See What We Cover
                </Link>
              </div>
              <p className="text-on-surface-variant text-sm mt-4">
                20 minutes · No obligation · Just a conversation about what you need.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="col-span-12 lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80"
                  alt="1-on-1 coaching session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
              </div>

              {/* Single floating badge — no overlay card */}
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 6 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-secondary text-white px-5 py-4 rounded-2xl shadow-xl"
              >
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">Online</p>
                <p className="font-serif text-xl font-black">Worldwide</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl max-w-[240px] border border-outline-variant/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary">event_available</span>
                  </div>
                  <div>
                    <p className="font-serif text-lg font-bold text-primary leading-none mb-1">60 min</p>
                    <p className="text-xs text-on-surface-variant">video sessions</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* Right place? */}
        <section className="mb-24 bg-surface-container-low p-12 md:p-16 rounded-2xl">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
            Is this for you?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-10 leading-tight">
            You're in the right place if…
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rightPlace.map((item, idx) => (
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

        {/* Areas we cover */}
        <section id="areas" className="mb-24 scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Areas we cover in sessions</h2>
            <p className="text-on-surface-variant font-medium uppercase tracking-widest text-sm">
              Whatever you're working on
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-xl border border-outline-variant/15 hover:border-secondary/40 hover:shadow-md transition-all"
              >
                <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">{area.icon}</span>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{area.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{area.desc}</p>
                {area.href && (
                  <Link href={area.href} className="text-secondary font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Learn more <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-24 bg-primary text-white p-12 md:p-16 rounded-2xl">
          <span className="text-secondary-container font-bold tracking-widest text-xs uppercase mb-4 block">
            How it works
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 leading-tight">
            Working together — step by step.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start p-6 bg-white/5 backdrop-blur rounded-lg border border-white/10">
                <span className="text-secondary-container text-3xl font-serif font-bold shrink-0">
                  0{idx + 1}
                </span>
                <div>
                  <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-blue-100/80 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              Investment
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Coaching packages</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              All sessions are held online via video call. Discovery calls are always free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((p, idx) => (
              <div
                key={idx}
                className={`p-10 rounded-2xl ${
                  p.highlight ? "bg-primary text-white shadow-xl scale-105" : "bg-surface-container-low"
                }`}
              >
                {p.highlight && (
                  <span className="bg-secondary-container text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-serif text-2xl font-bold mb-2 ${p.highlight ? "" : "text-primary"}`}>
                  {p.name}
                </h3>
                <p className={`text-sm mb-6 font-medium ${p.highlight ? "text-secondary-container" : "text-secondary"}`}>
                  {p.duration}
                </p>
                <p className={`text-sm leading-relaxed mb-8 ${p.highlight ? "text-blue-100/90" : "text-on-surface-variant"}`}>
                  {p.desc}
                </p>
                <Link
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded-lg font-bold transition-opacity hover:opacity-90 ${
                    p.highlight ? "bg-secondary-container text-primary" : "bg-primary text-white"
                  }`}
                >
                  Book a Discovery Call
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-on-surface-variant text-sm mt-8">
            Specific pricing is shared on your discovery call so we can match you to the right package.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              Questions about 1-on-1 coaching
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Common questions</h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-surface-container-low rounded-lg p-6 group cursor-pointer"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-primary pr-4">{faq.q}</h3>
                  <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 text-on-surface-variant leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
