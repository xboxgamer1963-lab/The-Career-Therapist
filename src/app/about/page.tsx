"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const values = [
  {
    icon: "diamond",
    title: "Precision Selection",
    desc: "We treat talent acquisition as an editorial process, identifying only the most resonant candidates for high-stakes roles."
  },
  {
    icon: "gavel",
    title: "Ethical Governance",
    desc: "Upholding global standards with an uncompromising commitment to integrity and strategic transparency."
  },
  {
    icon: "insights",
    title: "Data Wisdom",
    desc: "Translating complex HR metrics into actionable dossiers that drive executive decision-making."
  },
  {
    icon: "public",
    title: "Global Resonance",
    desc: "Designing cultures that speak across borders, fostering diversity through unified strategic vision."
  }
];

const leaders = [
  {
    name: "Dr. Elena Sterling",
    role: "STRATEGIC VISIONARY",
    tag: "FOUNDING PARTNER",
    desc: "Former CHRO of Global Tech Synergies, Dr. Sterling has spent 25 years redefining corporate governance and leadership development on three continents.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDllUgK-8YE94knwCuTrbQPJOy0hAU_l1fsHwBP5Q5SbiuI1JPSgWR4o7H8OpOg3xQBDSpv5nHirQAzvy5bdCNNnu5Ucu1vOOkOZ14dZIHtyZeKrZoKkiL5sDW_Ws-ehuZe3Rbg2mT9oRsElNBmpOrj12ZqjbO0Ez6T5KL0t1AcY5t6PpB-v72VcB0AC53Gn0IwXtTKR6aJkFd-ij4onEm2OhQUn2tgyIRjBZ7J4sWttGTQ4Po3L0JsZVi3_AJyDqjrXoOYvj2eiFlh"
  },
  {
    name: "Marcus Thorne",
    role: "DATA ARCHITECT",
    tag: "CHIEF ANALYST",
    desc: "Specializing in algorithmic talent mapping, Marcus brings a rigorous analytical framework to human capital evaluation and retention strategies.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4iEV4AG7OhTA15Oz-y7o6chZJqZDRFFP3HZok2-dowTCxqny74WKfb0O_JC-BEu_AP1JxD5n399GJjUUWe04G4NH6e3LSziRbo5TIcb5Ipu15NrXRcQI3knReE17Gx2mSgkK1gknhjIzS9TFsAvgnXwSlD0bTmIO_xdWxbNb952mgirmSKTi7-3I0T1tACZBXPeBvxziMjBRHjkriIm0lxob_XgYmPDd61HO3N0ftFfDRh6qChQDsIygQ3Ik6Cwqfmdx0CL92bWRG"
  },
  {
    name: "Julianne Vancover",
    role: "CULTURAL CURATOR",
    tag: "DIRECTOR OF CULTURE",
    desc: "Julianne focuses on the intersection of organizational identity and employee experience, crafting workplaces that attract elite global talent.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhte3Hpe1uFWwQ_yuUKdlAN-IrFm8JnIsHiQLkEZCRlsdMUeR7KkPBZEhXZHmBQKa8vXzpqnXphKrDyCRS2BJWlPu0M9ciNRnSPZXUjvdm-9RFFcNHAMQtfl4T3oMYI7QIVm7sok7Ie672M-pGV8gPIcG3PYboZp8hBt5NsKZzR82aev7zTQUl8D7DrQuOc3K6tInR8FHzsfxxCAeOzN-flv8kXy1jolrPwyFQb4XkIVD0_JQzHtPWE4FPl-61uc5bdPicQ3HoEGdF"
  }
];

export default function About() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />

      <main className="pt-32">
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-24">
          <div className="grid grid-cols-12 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-12 md:col-span-7"
            >
              <h1 className="font-serif text-6xl md:text-8xl font-black text-primary tracking-tighter leading-[0.9] mb-12">
                Architecting <span className="italic text-secondary">High-Performance</span> Cultures.
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
                At The Career Therapist, we don't just manage human resources. We curate excellence. Our approach combines surgical precision with deep institutional wisdom to transform organizational landscapes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="col-span-12 md:col-span-5 flex items-end"
            >
              <div className="bg-surface-container p-8 rounded-xl w-full">
                <div className="text-secondary text-5xl font-serif font-bold mb-2">20+</div>
                <div className="text-on-surface font-bold text-lg mb-4">Years of Authority</div>
                <p className="text-on-surface-variant text-sm">
                  Decades of advising Fortune 500 boards on talent governance, executive succession, and global strategy implementation.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-12 gap-16">
              <div className="col-span-12 lg:col-span-4">
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">Our Mission</h2>
                <div className="w-16 h-1 bg-secondary mb-8" />
                <p className="text-lg leading-relaxed text-on-surface-variant italic">
                  "To elevate the human capital experience to a strategic art form, ensuring that every placement and policy is a catalyst for sustainable, global excellence."
                </p>
              </div>

              <div className="col-span-12 lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {values.map((val, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="bg-white p-10 shadow-sm border border-outline-variant/10"
                    >
                      <span className="material-symbols-outlined text-secondary text-4xl mb-4">{val.icon}</span>
                      <h3 className="font-serif text-2xl font-bold mb-4 text-primary">{val.title}</h3>
                      <p className="text-on-surface-variant">{val.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="mb-20">
            <h2 className="font-serif text-5xl font-bold text-primary mb-4">Meet the Leadership</h2>
            <p className="text-on-surface-variant text-lg">
              The minds behind the dossiers. Intellectual authority meets executive experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/5] bg-surface-container-high mb-6 overflow-hidden relative">
                  <img
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    src={leader.img}
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 text-xs font-bold tracking-widest">
                    {leader.tag}
                  </div>
                </div>
                <h4 className="font-serif text-2xl font-bold text-primary">{leader.name}</h4>
                <p className="text-secondary font-bold text-sm tracking-widest mb-4">{leader.role}</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {leader.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-primary text-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-12 items-center">
            <div className="col-span-12 md:col-span-6">
              <h2 className="font-serif text-5xl font-bold mb-8 text-secondary-container">Our Proven Track Record</h2>
              <div className="space-y-8">
                {[
                  { num: "01", title: "98% Retention in Key Roles", desc: "Our placements are curated for long-term strategic fit, drastically reducing turnover at the executive level." },
                  { num: "02", title: "$40M+ In Strategic Savings", desc: "Optimized workforce planning and audit-ready compliance frameworks for our Fortune 500 partners." },
                  { num: "03", title: "Global Scale-Up Authority", desc: "Successfully guided the talent expansion of 15+ unicorns into European and Asian markets." }
                ].map((track, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <span className="text-secondary-container text-3xl font-serif font-bold">{track.num}</span>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{track.title}</h4>
                      <p className="text-blue-100/70 font-light">{track.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="relative p-12 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <span className="material-symbols-outlined text-6xl text-secondary-container mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
                  format_quote
                </span>
                <p className="text-2xl font-serif italic leading-relaxed mb-8">
                  "The Career Therapist didn't just find us a new leadership team; they rebuilt our cultural foundation. Their authority in the HR space is unparalleled."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                    <img alt="CEO" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApf0d9UHm8iMCyquCqs8VKweuyPJkQYGMIRZ_OX4I38bO7di2sWjzBu-jKayYjUGTE5VqO8DnWQhtk2_6ffNouNBPaSaaIKt_mSXufTHOQIfhRUzILJMFfg0Nyzcap3tVAycZhr17vcbHkdNDflp00e_DRo5VR7UWxvr_7xh00MrhJD_b785Xpd9XiQpugndE13FqGAfytOOmtScO8l2pA4FiVuseZH2qCzoXKyshzgrQ0maR1Ok41NWQcmYHz_eHI92W_h4_5gs3w" />
                  </div>
                  <div>
                    <div className="font-bold">Alistair Beaumont</div>
                    <div className="text-xs text-secondary-container tracking-widest uppercase">CEO, Beaumont Global</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface text-center px-6 md:px-12">
          <h2 className="font-serif text-5xl font-bold text-primary mb-8 max-w-4xl mx-auto">
            Ready to Curate Your Organization's Future?
          </h2>
          <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto font-light">
            Join the ranks of the world's most intentionally built companies. Let's discuss your strategic dossier.
          </p>
          <Link
            href="/contact"
            className="bg-secondary text-white px-10 py-4 rounded-lg font-black text-lg transition-all shadow-xl shadow-secondary/20 hover:scale-105 inline-block"
          >
            Book a Consultation
          </Link>
        </section>
      </main>

      <Footer />
    </main>
  );
}

import Link from "next/link";
