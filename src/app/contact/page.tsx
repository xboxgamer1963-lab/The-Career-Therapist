"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <section className="mb-24 flex flex-col md:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <span className="text-secondary font-bold tracking-widest text-sm mb-4 block uppercase">Executive Access</span>
            <h1 className="text-5xl md:text-7xl font-black text-primary leading-[1.1] mb-8 font-serif">
              Architecting Your Human Capital Legacy.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-lg leading-relaxed">
              Connect with our strategic consultants to refine your organizational DNA. We provide the clarity required for high-stakes HR transformations.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2 w-full aspect-[16/9] bg-surface-container rounded-xl overflow-hidden relative group"
          >
            <img 
              alt="Office View" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvImCjMdFnfOZgenWWE791ZH_J0ShH67ucdpHwet0ba7O_B2LSuA0UiSrnYjsvxoGe52LiOJbRf-u6uoEPkBZbeSW7VNnFvA2Hhi0RVftLkhOUJglB6VW8LwWc2oRCFFor3hkQg7k7syBjSsKOmk_9-JKqhVuaATw773Y34k5WkOcXMc5Gktrzh_OxJPKFY2m_97lVyGNr2ZVfh52uMxEQu8g9lEJ1vaRGDNkOay08aiZY-xeiyL-wV5p8ysPip3u5z7gd6ynauvTT" 
            />
            <div className="absolute inset-0 bg-primary/10"></div>
          </motion.div>
        </section>

        {/* Main Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-xl shadow-[0_32px_64px_-12px_rgba(23,28,31,0.06)] border border-outline-variant/10"
          >
            <h2 className="text-3xl font-bold text-primary mb-10 font-serif">Send a Dossier Request</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant ml-1">Full Name</label>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" 
                    placeholder="Johnathan Sterling" 
                    type="text" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant ml-1">Email Address</label>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" 
                    placeholder="j.sterling@firm.com" 
                    type="email" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant ml-1">Company</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" 
                  placeholder="Global Enterprises Inc." 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant ml-1">Strategic Intent</label>
                <textarea 
                  className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" 
                  placeholder="Briefly describe the organizational challenge..." 
                  rows={5}
                />
              </div>
              <button className="w-full bg-primary text-white font-bold py-5 rounded-lg flex justify-center items-center gap-3 hover:bg-opacity-90 transition-all group">
                Dispatch Request 
                <span className="material-symbols-outlined group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
              </button>
            </form>
          </motion.div>

          {/* Scheduling Widget & Info Section */}
          <div className="lg:col-span-5 space-y-8">
            {/* Strategy Dossier Card: Scheduler */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl p-8 rounded-xl border border-outline-variant/15 relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-0 left-0 h-1.5 w-24 bg-secondary"></div>
              <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Discovery Call</h3>
              <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
                Secure a 15-minute diagnostic session with a lead curator to identify structural vulnerabilities.
              </p>
              <div className="space-y-4">
                {[
                  { day: "Tuesday, Nov 12", status: "Available", color: "text-secondary" },
                  { day: "Wednesday, Nov 13", status: "Available", color: "text-secondary" },
                  { day: "Thursday, Nov 14", status: "Full", color: "text-outline", disabled: true }
                ].map((slot, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-transparent transition-all ${slot.disabled ? 'opacity-50' : 'hover:border-primary/20 cursor-pointer'}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary">calendar_today</span>
                      <span className="font-medium">{slot.day}</span>
                    </div>
                    <span className={`${slot.color} font-bold text-sm italic`}>{slot.status}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 bg-secondary text-white font-bold rounded-lg shadow-sm hover:opacity-90 transition-all">
                View Full Calendar
              </button>
            </motion.div>

            {/* Global Contacts */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface-container-low p-8 rounded-xl space-y-8"
            >
              {[
                { icon: "location_on", label: "Global Headquarters", info: "775 Park Avenue, Suite 1200\nNew York, NY 10021" },
                { icon: "call", label: "Direct Liaison", info: "+1 (212) 555-0198" },
                { icon: "mail", label: "Encrypted Correspondence", info: "curator@strategic-consult.com" }
              ].map((contact, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="bg-primary text-white p-3 rounded-lg">
                    <span className="material-symbols-outlined">{contact.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{contact.label}</h4>
                    <p className="text-on-surface-variant text-sm whitespace-pre-line">{contact.info}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 grayscale contrast-125 opacity-20 bg-primary"></div>
            <div className="w-full h-full bg-surface-container-highest">
              <img 
                alt="Location Map" 
                className="w-full h-full object-cover grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcitIIcoxwKG7ZFaERKFynkgGscWz-agV3MYB7eKQ0ZYOMTQaoxRUMwL1YDltZpQK-A9o1PKI_hjj0jF-wkWJ58RJ51kPvDtQwG9xpEbVb2sn5BvS_lFtalDga20Zj2jfokl01m5_dGB_QMj7Bl156_bRW2VBzYGvncEKwZQ95N6aRISNIX0dmFmXaw0_HX2j1gqHi4W4xXuKrvYAOjYszKVdFNUR5D02028W6rYZORcwnCNGZDO-TDbIbvtzLT2fPTtN7M4JJb0-a" 
              />
            </div>
            <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur p-6 rounded-lg max-w-sm shadow-2xl">
              <h4 className="font-black italic text-primary text-xl mb-2 font-serif">Manhattan Hub</h4>
              <p className="text-on-surface-variant text-sm mb-4">
                The core of our global strategic operations. Centrally located for accessibility by our elite partners.
              </p>
              <a className="text-secondary font-bold text-sm flex items-center gap-2" href="#">
                Get Directions <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </main>
  );
}
