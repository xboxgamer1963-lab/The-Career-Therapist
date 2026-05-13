"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

type Post = {
  pillar: string;
  title: string;
  desc: string;
  keyword: string;
  readTime: string;
  slug: string;
};

const pillars = [
  { id: "all", label: "All Articles" },
  { id: "Job Search", label: "Job Search" },
  { id: "Promotion", label: "Promotion" },
  { id: "Career Change", label: "Career Change" },
  { id: "HR Insider", label: "Redundancy & HR Insider" },
];

const posts: Post[] = [
  // Job Search
  {
    pillar: "Job Search",
    title: "Why Your Job Applications Aren't Getting Responses (And How to Fix It)",
    desc: "Covers the four most common reasons CVs get rejected — weak opening statement, no keyword optimisation, too generic, poor structure — with specific fixes for each.",
    keyword: "job applications not getting responses",
    readTime: "8 min",
    slug: "why-job-applications-not-getting-responses",
  },
  {
    pillar: "Job Search",
    title: "How to Write a CV That Actually Gets You Interviews in 2026",
    desc: "Comprehensive guide covering format, structure, language, and ATS optimisation. Includes a before/after example.",
    keyword: "how to write a CV",
    readTime: "12 min",
    slug: "how-to-write-a-cv-2026",
  },
  {
    pillar: "Job Search",
    title: "How to Optimise Your LinkedIn Profile So Recruiters Find You",
    desc: "Covers headline, about section, experience descriptions, keyword placement, and activity signals.",
    keyword: "LinkedIn profile tips",
    readTime: "9 min",
    slug: "linkedin-profile-tips-recruiters",
  },
  {
    pillar: "Job Search",
    title: "How to Prepare for a Job Interview: The Complete Guide",
    desc: "Covers types of interviews, common questions, the STAR method, what to research beforehand, and how to handle nerves.",
    keyword: "how to prepare for a job interview",
    readTime: "11 min",
    slug: "how-to-prepare-for-a-job-interview",
  },
  {
    pillar: "Job Search",
    title: "How to Negotiate a Job Offer (Without Losing It)",
    desc: "Step-by-step guide to salary negotiation — including the exact language to use, how to handle counter-offers, and what never to say.",
    keyword: "how to negotiate a job offer",
    readTime: "10 min",
    slug: "how-to-negotiate-a-job-offer",
  },
  // Promotion
  {
    pillar: "Promotion",
    title: "How to Get Promoted at Work: What Actually Works",
    desc: "The definitive guide — covering visibility, positioning, making the business case, and having the conversation.",
    keyword: "how to get promoted at work",
    readTime: "13 min",
    slug: "how-to-get-promoted-at-work",
  },
  {
    pillar: "Promotion",
    title: "Why Hard Work Alone Won't Get You Promoted (And What Will)",
    desc: "Tackles the uncomfortable truth that effort isn't enough — and explains the three things that actually drive promotion decisions.",
    keyword: "how to get a promotion",
    readTime: "8 min",
    slug: "why-hard-work-wont-get-you-promoted",
  },
  {
    pillar: "Promotion",
    title: "How to Ask for a Promotion: A Step-by-Step Guide",
    desc: "Covers when to have the conversation, how to frame the ask, what evidence to bring, and how to handle a 'no'.",
    keyword: "how to ask for a promotion",
    readTime: "9 min",
    slug: "how-to-ask-for-a-promotion",
  },
  {
    pillar: "Promotion",
    title: "How to Negotiate a Salary Increase at Your Current Job",
    desc: "Specific tactics for negotiating a pay rise with your current employer — research, timing, framing, and follow-up.",
    keyword: "how to negotiate a salary increase",
    readTime: "10 min",
    slug: "how-to-negotiate-a-salary-increase",
  },
  {
    pillar: "Promotion",
    title: "How to Build Your Professional Visibility at Work",
    desc: "Covers the specific behaviours that build a reputation beyond your immediate team — and why this matters for promotion.",
    keyword: "how to be more visible at work",
    readTime: "8 min",
    slug: "how-to-build-professional-visibility",
  },
  // Career Change
  {
    pillar: "Career Change",
    title: "How to Change Careers When You Don't Know What You Want",
    desc: "Addresses the most common sticking point: not knowing the destination. Framework for working backwards from values and strengths.",
    keyword: "how to change careers",
    readTime: "11 min",
    slug: "how-to-change-careers-when-you-dont-know-what-you-want",
  },
  {
    pillar: "Career Change",
    title: "Is It Time for a Career Change? 8 Signs It Might Be",
    desc: "Covers the most common signals that a career move is overdue — including subtle ones people often miss.",
    keyword: "signs you need a career change",
    readTime: "7 min",
    slug: "8-signs-you-need-a-career-change",
  },
  {
    pillar: "Career Change",
    title: "How to Change Careers at 40 Without Starting Over",
    desc: "Addresses the specific fears of mid-career changers — financial risk, starting over, age bias — with practical responses to each.",
    keyword: "career change at 40",
    readTime: "10 min",
    slug: "how-to-change-careers-at-40",
  },
  {
    pillar: "Career Change",
    title: "How to Explain a Career Change in an Interview",
    desc: "Very practical — covers exactly how to frame a pivot so it sounds like a logical progression, not an escape.",
    keyword: "how to explain career change in interview",
    readTime: "8 min",
    slug: "how-to-explain-career-change-in-interview",
  },
  {
    pillar: "Career Change",
    title: "How to Identify Your Transferable Skills for a Career Change",
    desc: "Step-by-step exercise for mapping existing experience onto a new direction. Includes a simple framework.",
    keyword: "transferable skills career change",
    readTime: "9 min",
    slug: "transferable-skills-career-change",
  },
  // HR Insider
  {
    pillar: "HR Insider",
    title: "What to Do When You've Just Been Made Redundant: A Step-by-Step Guide",
    desc: "Immediate practical guide covering the first 48 hours, the first two weeks, and the job search phase.",
    keyword: "what to do when made redundant",
    readTime: "12 min",
    slug: "what-to-do-when-made-redundant",
  },
  {
    pillar: "HR Insider",
    title: "How Hiring Managers Really Decide Who Gets the Job (An Insider View)",
    desc: "Aisha's unique angle — what actually happens in the room. Demystifies the process and gives candidates a real advantage.",
    keyword: "how hiring decisions are made",
    readTime: "10 min",
    slug: "how-hiring-decisions-are-made",
  },
  {
    pillar: "HR Insider",
    title: "What Recruiters Actually Look for in a CV (From Someone Who's Read Thousands)",
    desc: "Lists the specific things that get attention — and the things that get CVs binned in 10 seconds.",
    keyword: "what recruiters look for in a CV",
    readTime: "9 min",
    slug: "what-recruiters-look-for-in-a-cv",
  },
  {
    pillar: "HR Insider",
    title: "Why You're Not Getting Promoted (Honest HR Perspective)",
    desc: "Honest, insider view of the real reasons promotions don't happen — including the uncomfortable ones.",
    keyword: "why am I not getting promoted",
    readTime: "8 min",
    slug: "why-youre-not-getting-promoted-hr-perspective",
  },
  {
    pillar: "HR Insider",
    title: "What Does a Career Coach Actually Do? (And Is It Worth It?)",
    desc: "AEO-optimised explainer covering the full scope of coaching, who it's for, what it costs, and how to know if you need it.",
    keyword: "what does a career coach do",
    readTime: "9 min",
    slug: "what-does-a-career-coach-do",
  },
];

const featured = posts[5];

export default function Blog() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? posts : posts.filter((p) => p.pillar === filter);

  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <div className="relative pt-32 pb-24">
        {/* Background decoration */}
        <div className="absolute top-0 inset-x-0 h-[600px] -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-32 -left-20 w-[500px] h-[500px] bg-secondary/12 rounded-full blur-[120px]" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/8 rounded-full blur-[100px]" />
        </div>

        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-secondary-container/60 px-4 py-2 rounded-full mb-8">
                <span className="material-symbols-outlined text-secondary text-base">menu_book</span>
                <span className="text-primary font-bold text-xs tracking-widest uppercase">
                  The Career Therapist Blog
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.02] tracking-tight mb-6">
                Honest career advice.{" "}
                <span className="relative inline-block">
                  <span className="italic text-secondary">From the inside.</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 320 14" fill="none" preserveAspectRatio="none">
                    <path d="M2 8 Q80 1 160 8 T318 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl">
                Practical articles on job search, promotion, career change, and what really happens behind the hiring table — written from years inside HR and recruiting.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "20+", label: "Articles" },
                  { val: "4", label: "Pillars" },
                  { val: "1,800", label: "Avg words" },
                  { val: "100%", label: "Original" },
                ].map((s) => (
                  <div key={s.label} className="bg-white p-4 rounded-xl border border-outline-variant/10">
                    <p className="font-serif text-2xl font-black text-primary">{s.val}</p>
                    <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-primary text-white rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="lg:col-span-5 bg-gradient-to-br from-primary to-primary-container relative min-h-[300px] flex items-center justify-center p-12">
              <div className="text-center">
                <span className="material-symbols-outlined text-secondary-container text-7xl mb-4 block">
                  workspace_premium
                </span>
                <span className="bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase inline-block">
                  Featured Post
                </span>
              </div>
            </div>
            <div className="lg:col-span-7 p-12 flex flex-col justify-center">
              <p className="text-secondary-container font-bold text-xs tracking-widest mb-4 uppercase">
                {featured.pillar}
              </p>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold leading-tight mb-4">
                {featured.title}
              </h2>
              <p className="text-blue-100/90 text-lg leading-relaxed mb-6">{featured.desc}</p>
              <div className="flex items-center gap-4 text-blue-100/70 text-sm mb-8">
                <span>{featured.readTime} read</span>
                <span>•</span>
                <span>Aisha</span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-2 text-secondary-container font-bold hover:gap-3 transition-all w-fit"
              >
                Read article <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Filters */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant/20 pb-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Browse by topic</h2>
              <p className="text-on-surface-variant">
                Four pillars: job search, promotion, career change, and the HR insider angle.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {pillars.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setFilter(p.id)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                    filter === p.id
                      ? "bg-primary text-white"
                      : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 6) * 0.05 }}
              className="group cursor-pointer bg-surface-container-low p-8 rounded-xl hover:bg-surface-container transition-colors border border-outline-variant/10"
            >
              <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-3 block">
                {post.pillar}
              </span>
              <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4 line-clamp-3">{post.desc}</p>
              <div className="flex items-center justify-between text-xs text-outline font-medium">
                <span>{post.readTime} read</span>
                <span className="text-secondary group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Newsletter */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 mt-24">
          <div className="relative rounded-2xl bg-primary overflow-hidden p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-container rounded-full blur-[120px]" />
            </div>
            <div className="relative z-10 lg:w-1/2">
              <span className="text-secondary-container font-bold text-xs tracking-widest uppercase mb-4 block">
                Weekly career insights
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                Get the best of the blog — in your inbox.
              </h2>
              <p className="text-blue-100/90 text-lg leading-relaxed">
                Every week I send a short, practical email with career advice you can actually use. No fluff. Free forever.
              </p>
            </div>
            <div className="relative z-10 lg:w-1/2 w-full">
              <Link
                href="/subscribe"
                className="block bg-secondary text-white text-center px-8 py-5 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Join the Newsletter
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
