"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-on-surface selection:bg-secondary-container selection:text-on-surface">
      <Navbar />

      {/* Hero Section */}
      <header className="pt-40 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-12 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-12 lg:col-span-8"
        >
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Elevating Your People Strategy
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl font-black text-primary leading-[1.1] tracking-tight">
            Strategic <span className="italic text-secondary">HR Consulting</span> <br /> 
            for the Modern Enterprise.
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="col-span-12 lg:col-span-4"
        >
          <p className="text-on-surface-variant text-xl leading-relaxed max-w-sm mb-8">
            Aligning talent strategy with organizational performance. We partner with you to foster employee engagement and build resilient, high-performing cultures.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/expertise"
              className="bg-primary text-white px-6 py-4 rounded-lg font-bold flex items-center gap-2 hover:opacity-90 transition-opacity group"
            >
              Explore Our Approach 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </Link>
          </div>
        </motion.div>
      </header>

      {/* Visual Anchor */}
      <section className="px-6 md:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden relative group"
        >
          <img
            alt="Collaborative Team"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXZWdKg9V_SLYnoMmJhCLupQNhOWWALFpLfzTr1VxK5X3jIXKWSePXqBnht4EszTzGGfQ5xSc9qWy98s4gO6mWxBqqBhYRlMXeWfJlhJzOnJW_3BP7HarDFu0lvZbMwut-q6Gcqv0_-suvDVwo8TK1_UW7Yy8eu9ciIzQMkLsihxG8-BRKA7z_omlR0db17IkQz6JmtGU45zQL9AKKjTUQOElB8Hvia1Wi4qvUx5i4Uf5GHDte2I1NJMP6l6kndezgqEdvLr1a6P3X"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          <div className="absolute bottom-12 left-12">
            <div className="glass-card p-8 rounded-lg border-l-4 border-secondary-container">
              <p className="font-serif italic text-2xl text-primary max-w-md">
                "Human-Centric Strategy. Data-Driven Results."
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Expertise Section */}
      <section className="bg-surface-container-low py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <h2 className="font-serif text-5xl font-bold text-primary">Core Expertise</h2>
            <div className="h-[2px] flex-grow bg-outline-variant/30 hidden md:block mx-12"></div>
            <p className="text-on-surface-variant font-medium uppercase tracking-widest text-sm">
              Strategic Partnership Models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-outline-variant/20 rounded-xl overflow-hidden">
            {[
              {
                title: "Strategic Talent Planning",
                desc: "Anticipating future workforce needs through integrated forecasting and agile recruitment strategies that secure your competitive edge.",
                icon: "groups"
              },
              {
                title: "Employee Experience & Culture",
                desc: "Designing human-centered environments that spark engagement, foster belonging, and significantly reduce turnover through cultural alignment.",
                icon: "psychology"
              },
              {
                title: "Leadership Development",
                desc: "Cultivating the next generation of visionaries through bespoke coaching frameworks and evidence-based performance mentoring.",
                icon: "leaderboard"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface p-12 hover:bg-surface-container-highest transition-colors group"
              >
                <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mb-8 group-hover:bg-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-serif text-5xl font-bold text-primary mb-6">Our Impact</h2>
            <p className="text-on-surface-variant text-lg">
              Partnering with global leaders to navigate complex HR transformations and deliver measurable organizational growth.
            </p>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar">
          {[
            {
              tag: "Retention Success",
              quote: "A complete HR transformation.",
              desc: "The Career Therapist helped us overhaul our entire employee experience. By focusing on culture and clear career pathways, we saw a 35% improvement in retention within the first year.",
              author: "Elena Rodriguez",
              role: "Chief People Officer, Global Tech Solutions",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXMU9C_aQIQAZilGGKCThah5EF9gRRUPY0kFhcTTPHfv1fcx4EG3YKX90mWip6x_M7LsO822Wx5FxWJOF9JUrdD86k-OEzsM5YCxn-eL05BmrPgkoYAahhhoTFzZ_35qbOxNyZN67FqPExiJ5QX9d6chOKE8wnl-GT4SEbCmTwOsmomXJXuKNo9bSMLIuA92y9Q4brxbMzoFmXAP5lvQGNYC5xrkMukvVn1j-aclTWgcvBBi7R8KHwXz1OHHeOjzBKVfduxzCuZLcD"
            },
            {
              tag: "Leadership Pivot",
              quote: "Unlocking leadership potential.",
              desc: "Their approach to leadership development is unparalleled. We've seen a direct correlation between their coaching programs and our increased operational efficiency across regions.",
              author: "Marcus Chen",
              role: "VP of Operations, IndusStream",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI0Brn3HMhIh0QJCxM9lVtgnOE-HqTy2pgP43TIUmULY6m2PC_0NFSV-RdQZwon7W6p4Na25HN1cBhiGb7xMzbAJjnIi0R1NKIovQTME9QXGbpu15X0yJcis35-yJKiL-jT9nPCj1kn_YwG6Rk-dfvrXWeJpgM_0HzZx9GRpRvjL0aOmiHJyUpIrMkWqFwkYjYbwlAB_QUgqK2438nIY0MX7B3Ls1bKXCmQ1kLqobY3RTwss0drH05BnG-s6Ol1QfiE2WM2zFRlqs2"
            }
          ].map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="min-w-[320px] md:min-w-[600px] snap-start"
            >
              <div className="bg-white rounded-lg overflow-hidden group border border-outline-variant/30 h-full flex flex-col">
                <div className="h-[300px] md:h-[400px] relative overflow-hidden">
                  <img
                    alt={story.tag}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={story.img}
                  />
                  <div className="absolute top-6 left-6 bg-secondary text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full">
                    {story.tag}
                  </div>
                </div>
                <div className="p-8 bg-white flex-grow">
                  <h4 className="font-serif text-3xl font-bold text-primary mb-4">"{story.quote}"</h4>
                  <p className="text-on-surface-variant mb-6">{story.desc}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high" />
                    <div>
                      <p className="font-bold text-primary">{story.author}</p>
                      <p className="text-sm text-on-surface-variant">{story.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Footprint */}
      <section className="bg-primary text-white py-32 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="relative w-full aspect-video bg-primary-container rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary to-transparent"></div>
              <img
                alt="Global Connectivity"
                className="w-full h-full object-cover mix-blend-overlay"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKF6JEnqb2S39M-pQNaGlDL0tddJ5hp7MbceJGcRU91MyizS3ESuoA9yyeoxGB-nNHvfvhn6Hp3s6nhec4x6Wy9Td5JlQrmqEFvCs7IopsUtI6E8Csy9xltyqXdp3gsHrX25uOW0CztuxcT4CZaHmBMaaXX-PD-INElcP23AxHrVoRmog2fAWWCgQ3ajvi2_gDuUPMzih2-xz7XviINSb0klDc17V_t307w3fVxD9zdLY99oqBEYVlSKy3bpTFvf9-zIePcxh6i54E"
              />
              <div className="absolute p-4 glass-card rounded-lg flex items-center gap-3 top-1/4 left-1/4 animate-pulse">
                <div className="w-3 h-3 bg-secondary-container rounded-full" />
                <span className="text-primary font-bold text-sm">Strategic Partner Network</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <span className="text-on-primary-container font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Proven Results
            </span>
            <h2 className="font-serif text-5xl font-bold mb-12">Global reach. Localized human insight.</h2>
            <div className="grid grid-cols-2 gap-8">
              {[
                { val: "150+", label: "HR Transformations" },
                { val: "25%", label: "Avg. Retention Boost" },
                { val: "12", label: "Industry Awards" },
                { val: "99%", label: "Partner Satisfaction" }
              ].map((stat, idx) => (
                <div key={idx}>
                  <span className="block text-secondary-container font-serif text-5xl font-bold mb-2">
                    {stat.val}
                  </span>
                  <p className="text-slate-300 text-sm font-bold uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Inquiries */}
      <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-serif text-5xl font-bold text-primary mb-4">Partner Inquiries</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Exploring how our collaborative approach addresses your unique organizational needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              q: "How do you approach a new HR transformation project?",
              a: "We begin with a deep-dive immersion into your current culture and business objectives. We don't believe in one-size-fits-all; we curate a strategy that aligns your people processes with your long-term vision."
            },
            { q: "What metrics do you use to measure success?", a: "We track KPIs tailored to your goals, including retention rates, employee NPS, and operational efficiency metrics." },
            { q: "Can you support our global offices with localized strategies?", a: "Yes, we specialize in scaling HR strategies while respecting local cultural nuances and labor laws." },
            { q: "How do you ensure employee buy-in during cultural shifts?", a: "Through transparent communication, leadership alignment, and inclusive design sessions that empower employees." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-surface-container-low rounded-lg p-8 group cursor-pointer hover:bg-surface-container transition-colors">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-primary">{faq.q}</h3>
                <span className="material-symbols-outlined text-outline">expand_more</span>
              </div>
              {idx === 0 && (
                <div className="mt-6 text-on-surface-variant leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
