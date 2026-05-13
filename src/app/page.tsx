"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Land Your Next Job",
    desc: "Stop sending applications into the void. We'll build a job search strategy that works — the right roles, a standout CV and LinkedIn, interview prep, and offer negotiation.",
    icon: "work",
    href: "/job-search-coaching",
  },
  {
    title: "Get That Promotion",
    desc: "Hard work alone won't get you promoted. I'll help you build your visibility, strengthen your case, and have the conversations that move things forward — before someone else gets there first.",
    icon: "trending_up",
    href: "/get-promoted",
  },
  {
    title: "Just Been Laid Off?",
    desc: "Being made redundant is a shock. I'll help you get your bearings, update your positioning, and launch a focused job search so you land your next role faster and better.",
    icon: "support",
    href: "/laid-off",
  },
  {
    title: "Ready for a Career Change?",
    desc: "Changing direction is possible at any age and any stage. I'll help you get clear on what you want, identify your transferable strengths, and build a practical path forward.",
    icon: "moving",
    href: "/career-change",
  },
];

const testimonials = [
  {
    quote:
      "I'd been applying for three months with nothing. In our first session, Aisha told me exactly what was wrong with my CV and my LinkedIn. Two weeks later I had three interviews. I got the job I actually wanted.",
    author: "Marketing Manager, London",
    tag: "Job Search",
  },
  {
    quote:
      "I'd been in the same role for four years and couldn't figure out why I kept getting passed over. Aisha helped me see what I was missing — and within six months I'd been promoted to Head of Department.",
    author: "Head of Operations, Financial Services",
    tag: "Promotion",
  },
  {
    quote:
      "I was laid off after eight years and had no idea where to start. Aisha was calm, practical, and knew exactly what I needed to do. I had a new role within seven weeks.",
    author: "Senior Project Manager",
    tag: "Layoff Recovery",
  },
];

const whyMe = [
  "I've worked in HR. I know how hiring decisions are actually made — and what gets CVs binned.",
  "I give you real, honest feedback — not generic advice you could find on Google.",
  "I work 1-on-1. Every session is entirely focused on you, your situation, and your goals.",
  "I support you across the whole career journey — not just one moment in it.",
  "I've helped professionals from graduates to senior leaders, across every industry.",
];

const faqs = [
  {
    q: "What does a career coach do?",
    a: "A career coach helps you navigate key moments in your professional life — finding a new job, earning a promotion, handling redundancy, or changing direction. They provide strategy, accountability, honest feedback, and support so you don't have to figure it all out alone.",
  },
  {
    q: "How is Aisha different from other career coaches?",
    a: "Aisha has a background in HR and recruiting, which means she has direct experience of how companies hire and promote. This insider perspective is what makes her coaching practical and specific, not generic.",
  },
  {
    q: "Who do you work with?",
    a: "Aisha works with professionals at all career stages — from people just starting out to experienced leaders. Whether you're looking for your first professional role, a lateral move, a big promotion, or a total career change, there's a path forward and Aisha can help you find it.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-on-surface selection:bg-secondary-container selection:text-on-surface">
      <Navbar />

      {/* Hero */}
      <header className="relative pt-32 md:pt-36 pb-24 px-6 md:px-12">
        {/* Decorative background — clipped separately so floating cards aren't cut off */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-32 -right-32 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          <svg className="absolute top-24 left-12 opacity-[0.06] hidden md:block" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <pattern id="dotsHome" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-primary" />
            </pattern>
            <rect width="120" height="120" fill="url(#dotsHome)" />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 bg-secondary-container/60 px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              <span className="text-primary font-bold text-xs tracking-widest uppercase">
                Now booking — May 2026
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary leading-[1.02] tracking-tight mb-8">
              Your career deserves more than{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="italic text-secondary">guesswork.</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 14" fill="none" preserveAspectRatio="none">
                  <path
                    d="M2 8 Q75 1 150 8 T298 7"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="text-secondary"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Whether you're job hunting, chasing a promotion, or figuring out what comes next — I help professionals like you move forward with clarity, confidence, and a plan that <span className="italic text-primary font-medium">actually works.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link
                href="/contact"
                className="bg-primary text-white px-7 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity group shadow-lg shadow-primary/20"
              >
                Book a Free Discovery Call
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
              </Link>
              <Link
                href="/coaching"
                className="border-2 border-primary text-primary px-7 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors"
              >
                See How I Can Help
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex -space-x-3">
                {["#1d4ed8", "#0f172a", "#fbbf24", "#fb7185"].map((color, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: color }}
                  >
                    {["MR", "JL", "SK", "DT"][i]}
                  </div>
                ))}
              </div>
              <p className="text-on-surface-variant text-sm leading-snug">
                <span className="font-bold text-primary">200+ professionals</span> coached across<br className="hidden md:inline" /> 12 countries — and counting.
              </p>
            </div>
          </motion.div>

          {/* Right: hero image with floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="col-span-12 lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
                alt="Career coaching session with Aisha"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
            </div>

            {/* Floating badge — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 6 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-4 -right-4 md:-right-8 bg-secondary text-white px-5 py-4 rounded-2xl shadow-xl"
            >
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">Insider</p>
              <p className="font-serif text-xl font-black">Ex-HR</p>
            </motion.div>

            {/* Floating stat card — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl max-w-[240px] border border-outline-variant/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">trending_up</span>
                </div>
                <div>
                  <p className="font-serif text-2xl font-black text-primary leading-none">+18%</p>
                  <p className="text-xs text-on-surface-variant mt-1">avg salary uplift</p>
                </div>
              </div>
            </motion.div>

            {/* Floating quote — right side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl max-w-[200px] border border-outline-variant/10"
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <p className="text-xs text-on-surface leading-snug font-medium">
                "Two weeks. Three interviews. The job I actually wanted."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Tagline anchor */}
      <section className="px-6 md:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[1440px] mx-auto bg-primary text-white rounded-[2rem] p-12 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="material-symbols-outlined text-secondary-container text-5xl mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                format_quote
              </span>
              <p className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15]">
                Career coaching from someone who's <span className="text-secondary-container">hired</span> — and been hired.
              </p>
            </div>
            <div className="md:col-span-4 grid grid-cols-2 gap-6">
              {[
                { val: "200+", label: "Coached" },
                { val: "92%", label: "Hit their goal" },
                { val: "12", label: "Countries" },
                { val: "7yrs", label: "In HR" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-4xl font-black text-secondary-container">{s.val}</p>
                  <p className="text-xs uppercase tracking-widest text-blue-100/70 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="bg-surface-container-low py-24 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
            Hi, I'm Aisha
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
            Your career coach with an <span className="italic">insider edge.</span>
          </h2>
          <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
            <p>
              I spent years working in HR and recruiting, reading thousands of CVs, sitting in on hiring decisions, and watching brilliant professionals get overlooked for jobs and promotions they absolutely deserved — often for reasons that were entirely fixable.
            </p>
            <p>
              Now I work 1-on-1 with professionals at every stage of their career: people who want to land a better job, finally get the promotion they've earned, survive a redundancy and come out stronger, or make a career change without starting from zero.
            </p>
            <p className="text-primary font-bold">
              I know what employers are actually looking for. And I know how to help you give it to them — on your terms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">How I can help you</h2>
          <div className="h-[2px] flex-grow bg-outline-variant/30 hidden md:block mx-12" />
          <p className="text-on-surface-variant font-medium uppercase tracking-widest text-sm">
            Four ways forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface p-10 rounded-xl border border-outline-variant/15 hover:border-secondary/40 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-2xl text-primary">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">{item.desc}</p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-2 text-secondary font-bold text-sm group/link"
              >
                Learn more
                <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform text-base">
                  arrow_forward
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-primary text-white py-32 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-16">
            <span className="text-secondary-container font-bold tracking-widest text-xs uppercase mb-4 block">
              What clients say
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Real results from real people.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur p-8 rounded-xl border border-white/10"
              >
                <span className="text-secondary-container font-bold text-xs tracking-widest uppercase mb-6 block">
                  {t.tag}
                </span>
                <p className="font-serif italic text-lg leading-relaxed mb-6">"{t.quote}"</p>
                <p className="text-sm text-blue-100/80 font-bold">— {t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Aisha */}
      <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-12 items-start">
          <div className="col-span-12 lg:col-span-5">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              Why work with me
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
              What makes working with me different.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Most career advice is written from the outside looking in. Mine comes from the inside.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-secondary-container pb-1 hover:gap-3 transition-all"
            >
              More about Aisha
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="col-span-12 lg:col-span-7 space-y-4">
            {whyMe.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-start gap-4 p-6 bg-surface-container-low rounded-lg"
              >
                <span className="material-symbols-outlined text-secondary mt-1 shrink-0">check_circle</span>
                <p className="text-on-surface leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Teaser */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-secondary-container/30 rounded-2xl p-12 md:p-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
                  The Career Therapist Newsletter
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                  Weekly career insights — straight to your inbox.
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Every week I share practical, honest career advice for professionals who want to get ahead. No fluff. No filler. Just the kind of insight I wish someone had given me earlier.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Link
                  href="/subscribe"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  Join the Newsletter — It's Free
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-container-low py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              Common questions
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Frequently asked</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-white rounded-lg p-6 group cursor-pointer border border-outline-variant/15"
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

          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              See all FAQs
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 max-w-3xl mx-auto leading-tight">
          Ready to stop guessing about your career?
        </h2>
        <p className="text-on-surface-variant text-xl mb-10 max-w-xl mx-auto">
          Book a free 20-minute discovery call. No obligation. Just a conversation about what you need.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-secondary text-white px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-secondary/20"
        >
          Book a Free Discovery Call
        </Link>
      </section>

      <Footer />
    </main>
  );
}
