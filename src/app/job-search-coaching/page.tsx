"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const problems = [
  "CVs that are well-intentioned but don't communicate value quickly enough — so they get skipped.",
  "LinkedIn profiles that are invisible to recruiters because they're not optimised for search.",
  "Applications sent to the wrong roles, or framed in the wrong way for the target company.",
  "Interview prep that practises the wrong things — and leaves candidates flat-footed on the real questions.",
  "Offers accepted without negotiation, leaving thousands on the table.",
];

const services = [
  {
    title: "CV Review & Rewrite",
    desc: "I'll read your CV the way a recruiter does — quickly and critically. I'll tell you exactly what's working, what isn't, and what needs to change. Then we'll rewrite it together so it communicates your value clearly and quickly.",
    icon: "description",
  },
  {
    title: "LinkedIn Optimisation",
    desc: "Most professionals have LinkedIn profiles that are outdated, keyword-poor, or written to impress colleagues rather than attract recruiters. I'll help you fix that — so the right people start finding you.",
    icon: "share",
  },
  {
    title: "Job Search Strategy",
    desc: "Instead of applying to everything, we build a targeted list of the right roles at the right companies. I'll show you how to research employers, reach out to hiring managers directly, and use your network more effectively.",
    icon: "track_changes",
  },
  {
    title: "Interview Preparation",
    desc: "We go far beyond standard interview prep. I'll help you understand what interviewers are actually evaluating, build compelling stories from your experience, and practise until you feel genuinely ready — not just rehearsed.",
    icon: "record_voice_over",
  },
  {
    title: "Offer & Salary Negotiation",
    desc: "Most people accept the first offer they receive. With the right preparation, most people can negotiate a better one. I'll give you the tools, the language, and the confidence to ask for what you're worth.",
    icon: "payments",
  },
];

const audience = [
  "You've been applying for weeks or months without getting interviews",
  "You're getting interviews but not making it through to the next stage",
  "You've just started a job search and want to do it properly from the start",
  "You're returning to work after a career break and aren't sure how to position yourself",
  "You want to move into a new sector or type of role and need help repositioning",
];

const outcomes = [
  "From zero responses to three interviews in two weeks after a CV and LinkedIn overhaul",
  "Landed a senior role after negotiating a salary 18% higher than the initial offer",
  "Transitioned from corporate to start-up in three months with a clear strategy",
  "Got shortlisted for a director-level role after 14 months of being overlooked",
];

export default function JobSearchCoaching() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Hero */}
        <header className="relative mb-24 rounded-[2rem] bg-gradient-to-br from-secondary-container/30 via-background to-background">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
            <div className="absolute top-10 -right-20 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px]" />
          </div>

          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-12 lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full mb-8 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-base">work</span>
                <span className="text-primary font-bold text-xs tracking-widest uppercase">
                  Job Search Coaching
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.02] tracking-tight mb-8">
                Stop applying into the void.{" "}
                <span className="relative inline-block">
                  <span className="italic text-secondary">Start getting interviews.</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 14" fill="none" preserveAspectRatio="none">
                    <path d="M2 8 Q100 1 200 8 T398 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mb-4">
                Most people approach their job search the same way — send out as many applications as possible, wait, and hope. It rarely works. A smart job search is targeted, strategic, and built around how employers actually make decisions.
              </p>
              <p className="font-serif italic text-2xl text-primary">That's where I come in.</p>

              {/* Inline stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 max-w-xl">
                {[
                  { val: "3x", label: "Interview rate" },
                  { val: "+18%", label: "Salary uplift" },
                  { val: "7 wks", label: "Avg to offer" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-3xl font-black text-primary">{s.val}</p>
                    <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-1">{s.label}</p>
                  </div>
                ))}
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
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional preparing for job interview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl max-w-[260px] border border-outline-variant/10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-green-600 text-xl">check</span>
                  </div>
                  <p className="font-serif font-bold text-primary">CV approved</p>
                </div>
                <p className="text-xs text-on-surface-variant leading-snug">
                  From zero responses to three interviews in two weeks.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: 10 }}
                animate={{ opacity: 1, rotate: -6 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-primary text-white px-5 py-3 rounded-2xl shadow-xl"
              >
                <p className="text-[10px] uppercase tracking-widest font-bold text-secondary-container">Targeted</p>
                <p className="font-serif text-lg font-black">Strategy</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="px-6 md:px-12 pb-8 md:pb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary text-white px-7 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
            >
              Book a Free Job Search Consultation
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
            <span className="ml-4 text-on-surface-variant text-sm">20 minutes · No obligation</span>
          </div>
        </header>

        {/* The Problem */}
        <section className="mb-24 bg-surface-container-low p-12 md:p-16 rounded-2xl">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
            What I see constantly
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Why most job searches don't work.
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-3xl">
            Here's what I see constantly, from years working in HR and recruiting:
          </p>
          <div className="space-y-4">
            {problems.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-4 p-5 bg-white rounded-lg"
              >
                <span className="material-symbols-outlined text-secondary mt-0.5 shrink-0">close</span>
                <p className="text-on-surface leading-relaxed">{p}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-primary font-bold text-lg mt-10">
            None of these are failures of ability. They're fixable problems. And once they're fixed, everything changes.
          </p>
        </section>

        {/* What we do */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
            <div>
              <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
                What we do together
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
                Your job search — rebuilt from the ground up.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-xl border border-outline-variant/15 hover:border-secondary/40 hover:shadow-md transition-all"
              >
                <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">{s.icon}</span>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Who this is for + Results */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-surface-container-low p-10 rounded-2xl">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              Who this is for
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6 leading-tight">
              This coaching is right for you if…
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
          <div className="bg-primary text-white p-10 rounded-2xl">
            <span className="text-secondary-container font-bold tracking-widest text-xs uppercase mb-4 block">
              What clients have achieved
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6 leading-tight">Real outcomes.</h3>
            <ul className="space-y-4">
              {outcomes.map((o, idx) => (
                <li key={idx} className="flex items-start gap-3 leading-relaxed">
                  <span className="material-symbols-outlined text-secondary-container mt-0.5 shrink-0">star</span>
                  <span className="text-blue-100">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 max-w-3xl mx-auto leading-tight">
            Ready to change how your job search works?
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
            Book a free 20-minute discovery call and we'll talk about where you're getting stuck and what to do about it.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-white px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-secondary/20"
          >
            Book a Free Discovery Call
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}
