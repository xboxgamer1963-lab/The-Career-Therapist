"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const services = [
  {
    title: "Recruitment & Talent Acquisition",
    desc: "We don't just fill seats; we curate high-performance teams through psychological profiling and executive-level search protocols.",
    icon: "search_insights",
    tags: ["Executive Search", "Cultural Fit"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgk-LjvqVUQ9ejDKRxS8OEAu9rD0mrdmorrwyjwbAH_SxCQ3QR4ydj7_6F4tro91ShMetDSvXv32UNLsIW9IXCQ1eKg8sR1e_ENTlwTC4g9zjm6Z2LdQKuhL-iZdMcW6P5Gc3qYv2RER4jcOHH5EjFAD0qCjSMIcSOEgBOo5PCj5eqtq6XFomClE1CICD9SNwrKCNlk0unRxKHJ7I8jWevqRwroA4FBxeoD8QiQZSs2Buv3sc6Z19yJaocN2QnNmpEM9v8gjEtKZPI",
    cols: "md:col-span-7",
    color: "bg-surface-container-low"
  },
  {
    title: "Organizational Development",
    desc: "Structural evolution through diagnostic auditing. We transform legacy hierarchies into agile, outcome-driven ecosystems.",
    icon: "account_tree",
    tags: [],
    cols: "md:col-span-5",
    color: "bg-surface-container",
    border: "border-l-4 border-secondary",
    hasButton: true
  },
  {
    title: "HR Compliance & Audit",
    desc: "Protecting your sovereignty. Comprehensive risk mitigation across global labor standards and regulatory landscapes.",
    icon: "verified_user",
    tags: ["Global Policy Standards", "Liability Assessment"],
    cols: "md:col-span-5",
    color: "bg-primary text-white",
    dark: true
  },
  {
    title: "Employee Relations",
    desc: "Mediation, retention strategies, and engagement frameworks that foster a high-trust, elite performance culture.",
    icon: "handshake",
    tags: [],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUa29WI_GvE4VoAwyYImjSV0Q4klrLlFMx0FMmvCDloCcNQOOjywsU1B7b0Oycg8f52jtZasg16FaW7F66uXgE2zOywiU-q28cjY5Kg0AQbbvc37xSwOLa6SpO8BEl1oO6izD-2pY2b6ZzXLSjHQPr2Ilktsqx2M74dqSqEbuyh-8dW4wiTSD5BhpgMe1nUVp3I9AEZYRfWx4C3mkZf6gI6hLwlwM_1phSJt8lBMgDSNuD7EnCmA-ryB0mUI_BDFj4JtExa4zx5kYo",
    cols: "md:col-span-7",
    color: "bg-surface-container-high"
  }
];

export default function Expertise() {
  return (
    <main className="min-h-screen bg-background text-on-surface selection:bg-secondary-container">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <header className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
              Architecting Excellence
            </span>
            <h1 className="font-serif text-6xl md:text-8xl font-black text-primary leading-none tracking-tighter">
              Service <span className="italic font-normal">Dossier</span>
            </h1>
            <p className="mt-8 text-xl text-on-surface-variant leading-relaxed max-w-xl">
              Tailored human capital frameworks designed for organizations that demand precision, compliance, and strategic cultural alignment.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 12 }}
            className="hidden lg:flex w-48 h-48 bg-secondary-container rounded-full items-center justify-center p-8"
          >
            <span className="material-symbols-outlined text-primary text-6xl">cognition</span>
          </motion.div>
        </header>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${service.cols} ${service.color} ${service.border || ""} p-12 rounded-lg flex flex-col justify-between min-h-[480px] relative overflow-hidden group transition-all`}
            >
              {service.img && (
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <img src={service.img} className="w-full h-full object-cover" alt="" />
                </div>
              )}
              
              <div>
                <div className={`w-16 h-16 ${service.dark ? 'bg-secondary-container text-primary' : 'bg-primary text-white'} flex items-center justify-center rounded-lg mb-8 shadow-lg`}>
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h2 className="font-serif text-4xl font-bold mb-6">{service.title}</h2>
                <p className={`text-lg ${service.dark ? 'text-blue-100' : 'text-on-surface-variant'} max-w-md`}>
                  {service.desc}
                </p>
              </div>

              {service.tags.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-8">
                  {service.tags.map(tag => (
                    <span key={tag} className={`px-4 py-1 ${service.dark ? 'bg-primary-container' : 'bg-surface-container-highest'} rounded-full text-xs font-bold tracking-widest uppercase`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {service.hasButton && (
                <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group mt-8">
                  View Methodology 
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </button>
              )}
            </motion.div>
          ))}
        </section>

        {/* Secondary CTA */}
        <section className="mt-32 p-16 rounded-lg bg-surface-container-low flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          <h3 className="font-serif text-4xl font-bold text-primary mb-6">Seeking a Bespoke Protocol?</h3>
          <p className="text-xl text-on-surface-variant max-w-2xl mb-10">
            Our consultancy excels in crafting non-standardized solutions for complex multi-national challenges. Let us design your custom strategic roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-secondary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl shadow-secondary/20">
              Request Customized Strategy
            </button>
            <button className="border-2 border-outline-variant text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-colors">
              Download Case Studies
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
