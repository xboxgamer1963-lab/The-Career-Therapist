"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const beliefs = [
  {
    icon: "psychology",
    title: "Strategy, not slogans",
    desc: "Good career coaching isn't about telling you what to do. It's about helping you understand your options, build a strategy that fits your life, and giving you the tools and confidence to execute it.",
  },
  {
    icon: "verified",
    title: "Honest feedback, always",
    desc: "I'll always give you honest feedback — even when it's not what you want to hear. Because honest feedback is what helps you move forward.",
  },
  {
    icon: "favorite",
    title: "In your corner",
    desc: "Whether you're celebrating an offer or dealing with another rejection, we'll keep going until you get to where you want to be.",
  },
  {
    icon: "diversity_3",
    title: "Insider knowledge",
    desc: "Years in HR and recruiting gave me a clear understanding of how employers actually think, hire, and promote. That knowledge gets handed to you.",
  },
];

const clients = [
  "Job seekers who've been applying for weeks (or months) without traction",
  "Professionals who are ready for a promotion but don't know how to make it happen",
  "People who've just been made redundant and need to move quickly",
  "Professionals considering a career change who want to do it properly",
  "Anyone who feels stuck and wants an honest outside perspective",
];

export default function About() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <main className="pt-32">
        {/* Hero */}
        <section className="relative max-w-[1440px] mx-auto px-6 md:px-12 pb-24">
          {/* Background decoration — clipped separately so floating badges aren't cut off */}
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
            <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/8 rounded-full blur-[100px]" />
          </div>

          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-12 lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 bg-secondary-container/60 px-4 py-2 rounded-full mb-8">
                <span className="material-symbols-outlined text-secondary text-base">person</span>
                <span className="text-primary font-bold text-xs tracking-widest uppercase">
                  About Aisha — Career Coach
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-primary tracking-tight leading-[1.02] mb-10">
                I've been on the other side of the hiring table.{" "}
                <span className="relative inline-block">
                  <span className="italic text-secondary">Now I'm on yours.</span>
                  <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 400 14" fill="none" preserveAspectRatio="none">
                    <path d="M2 8 Q100 1 200 8 T398 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary" />
                  </svg>
                </span>
              </h1>
              <div className="space-y-5 text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
                <p>
                  My name is Aisha, and I've spent a significant part of my career in HR and recruiting — reading CVs, sitting in on interviews, making hiring recommendations, and watching how promotion decisions get made behind closed doors.
                </p>
                <p>
                  I've seen incredible professionals get overlooked because of things they didn't even know were hurting their chances. I've watched people undersell themselves in interviews for roles they were perfectly qualified for. I've seen CVs that should have been interview-getters end up in the reject pile.
                </p>
                <p className="text-primary font-medium italic font-serif text-2xl leading-snug">
                  Most career advice is written from the outside looking in. Mine comes from the inside.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="col-span-12 lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                  alt="Aisha — career coach"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/10" />
              </div>

              {/* Floating credential card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[280px] border border-outline-variant/10"
              >
                <p className="text-secondary text-xs uppercase tracking-widest font-bold mb-2">An insider's view</p>
                <p className="font-serif text-3xl font-black text-primary mb-1">HR + Recruiting</p>
                <p className="text-on-surface-variant text-xs leading-snug">
                  Years inside the rooms where hiring and promotion decisions are made.
                </p>
              </motion.div>

              {/* Floating "1-on-1" badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-primary text-white px-5 py-4 rounded-2xl shadow-xl"
              >
                <p className="text-[10px] uppercase tracking-widest font-bold text-secondary-container">Always</p>
                <p className="font-serif text-xl font-black">1-on-1</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Background */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              Where I've come from
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-10 leading-tight">
              The patterns that made me start coaching.
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>
                After years of working in HR and recruiting across different industries, I started to see the same patterns playing out over and over. Talented professionals stuck in the wrong roles. People who deserved promotions but couldn't get them. Candidates who had everything on paper but kept getting overlooked.
              </p>
              <p>
                I started coaching because I realised I had something genuinely useful to offer: not just career advice, but a clear understanding of how employers think, what they're looking for, and how to position yourself to get what you actually want.
              </p>
              <p>
                I now work 1-on-1 with professionals across all industries and career stages — from graduates figuring out their first steps to senior leaders planning their next big move.
              </p>
            </div>
          </div>
        </section>

        {/* Approach / Beliefs */}
        <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-16 mb-16">
            <div className="col-span-12 lg:col-span-5">
              <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
                My approach
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                What you get when we work together.
              </h2>
              <div className="w-16 h-1 bg-secondary mb-8" />
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Good career coaching is part strategy, part feedback, part accountability. Here's what to expect from me.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {beliefs.map((val, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 shadow-sm border border-outline-variant/10 rounded-lg"
                  >
                    <span className="material-symbols-outlined text-secondary text-3xl mb-4">{val.icon}</span>
                    <h3 className="font-serif text-xl font-bold mb-3 text-primary">{val.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{val.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who I work with */}
        <section className="py-24 bg-primary text-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-12 items-start">
            <div className="col-span-12 md:col-span-5">
              <span className="text-secondary-container font-bold tracking-widest text-xs uppercase mb-4 block">
                My clients
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Who I work with.
              </h2>
              <p className="text-blue-100/80 text-lg leading-relaxed">
                I work with professionals at every stage of their career. I work fully online via video call, which means I can support professionals wherever they are in the world.
              </p>
            </div>

            <div className="col-span-12 md:col-span-7 space-y-4">
              {clients.map((client, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur rounded-lg border border-white/10"
                >
                  <span className="material-symbols-outlined text-secondary-container mt-0.5 shrink-0">check_circle</span>
                  <p className="leading-relaxed">{client}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-surface text-center px-6 md:px-12">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
            Ready to get started?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 max-w-3xl mx-auto leading-tight">
            Book a free 20-minute discovery call.
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
            We'll talk about where you are, what you need, and whether working together is the right fit. No obligation.
          </p>
          <Link
            href="/contact"
            className="bg-secondary text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-secondary/20 hover:scale-105 inline-block"
          >
            Book a Free Discovery Call
          </Link>
        </section>
      </main>

      <Footer />
    </main>
  );
}
