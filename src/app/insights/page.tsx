"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const categories = ["All Resources", "Future of Work", "Compliance Updates", "Executive Leadership"];

const articles = [
  {
    category: "Future of Work",
    title: "The Hybrid Mandate: Why 'Middle Ground' is Failing",
    desc: "Analyzing the data behind the recent friction in return-to-office policies and the emergence of radical flexibility.",
    readTime: "5 min read",
    date: "Oct 14, 2024",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHhq-ZVpR88v1jAN0fYkGLHYiThNFyrB4UaxBz-5eUbQrsFM184o9R8L5KcAoBuNhd2WF6kwwQBNzbsazY5sPMsZJLGUXd_tSYjRSTg19CptpWoogm2T7T8F2dEH2nIEF7MbTQN4r4V3UbYrK5wj5AOneq3WgPVh0Cw0eCJQRFnmRG1uIz_X07Y-v0fPMVZVzZvCiQ_89pPzk8T91mf180noylPeUPgAC7M7yBKn4vQsDZnvtQ-LNhyOQwAcsyfcqc0AFcPzSXY_GD"
  },
  {
    category: "Compliance Updates",
    title: "2025 Global Labor Standards: A Strategic Audit",
    desc: "A comprehensive breakdown of the upcoming regulatory shifts in EU and North American employment law.",
    readTime: "12 min read",
    date: "Oct 10, 2024",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJR7vhXv0V6rFkeFNNmGrHE_ZaWIeiSh0qi3TGlX939Pp3Is_zFCb8SAUfnuBJRgr0UDfJJswLWNcl45eiDcLAMCqdQDjyYzYI1qPmquBTXbmbpcR5M_iSg6AbSXIItuAiCIdy7wcVNLfep0Jb_tpfFu9muYoVh-TSb6ibAgtPYhcALVsMVrQCBjOku6jN7vuWL6oIzQrr7d_zMnw3ty2VDQ0GtGe2zSBL12oW_-x_3x1HGZ1ZDDWnr9IqhC-mqIGfArR08unEkRms"
  },
  {
    category: "Executive Leadership",
    title: "Cognitive Diversity as a Competitive Advantage",
    desc: "Moving beyond demographics to build leadership teams that think differently under pressure.",
    readTime: "8 min read",
    date: "Oct 08, 2024",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdYN-LqCaD1_5hdYO9zSd3Z5p44_T0dkrL7iDbR1jL0SsLm5ED-0HMJFBlWQc4ZUsbYRBizI6W2D6HIZIX2pUfKfPPa0XPigTTC7y-YrGI-bALlh4eWveH-6AbRmV5w1KGWOclkrGgP5KDY1uin9Q8E8pdZKFS-rnZDxSuy4R_oC81D5xjQr-5sYSusYCV6-4Ssgls9_r_8boeRZuxgg970KzfGAQC57fObGpQ0oGdMgLfMdpWEC_vKK2-kZgAkQ2lx9MQeTFYL9zH"
  }
];

const dossiers = [
  { tag: "Report", title: "Q3 2024 Remote Sentiment Index", icon: "download", linkText: "Download PDF" },
  { tag: "Webinar", title: "AI in Talent Acquisition: Limits & Legality", icon: "play_circle", linkText: "Watch Recording" },
  { tag: "Briefing", title: "The CEO's Guide to Succession Planning", icon: "menu_book", linkText: "Read Online" },
  { tag: "Tooling", title: "Diversity ROI Calculation Framework", icon: "open_in_new", linkText: "Access Tool" }
];

export default function Insights() {
  return (
    <main className="min-h-screen bg-background text-on-surface selection:bg-secondary-container">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Featured Article Section */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-surface-container-low rounded-lg overflow-hidden shadow-sm"
          >
            <div className="lg:col-span-7 relative min-h-[400px]">
              <img 
                alt="Featured Insight" 
                className="absolute inset-0 w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9pZRq_ViKqvJ755UN1CS9Q28y-Y4q74--FhKcS665zU_U-LkKcsYT23tegqBmUVCopVesHUdR5lykbMNsXD4X-Zhso4-B6PTr_-AFwfr25lnlahbiJBfc1bNGtND6wQHGaDD-h_RmGlsPVX2TApVTaGcPIteEvPfjGV6qECaqtl2ecAXn3K-ZGuyJNRXjSpLg-nuQWaIc4K-IbeWjLB1ggI7MiYBeGtIhQfqSj5t2RH-DU20pzC8dXzvrh3pm-rPR6jfajEgIVDhO" 
              />
              <div className="absolute top-6 left-6">
                <span className="bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  Featured Insight
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 p-12 flex flex-col justify-center">
              <p className="text-secondary font-bold text-sm tracking-widest mb-4 uppercase">Executive Leadership</p>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary leading-tight mb-6">
                The Architecture of Resilience: Leading Through Displacement
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                How top-tier executives are redefining organizational stability in an era of unprecedented workforce mobility and digital decentralization.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Elena Vance</p>
                  <p className="text-xs text-on-surface-variant">Senior HR Strategist</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Read Dossier <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </motion.div>
        </section>

        {/* Category Filter */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-outline-variant/20 pb-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Curated Knowledge</h2>
              <p className="text-on-surface-variant">Filtering the noise to deliver surgical precision in HR strategy and workforce evolution.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, idx) => (
                <button 
                  key={cat}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${idx === 0 ? 'bg-primary text-white' : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-lg mb-6 bg-surface-container-highest">
                <img 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={article.img} 
                />
              </div>
              <div className="px-2">
                <span className="text-secondary font-bold text-xs tracking-tighter uppercase mb-2 block">{article.category}</span>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.desc}
                </p>
                <div className="flex items-center text-xs text-outline font-medium">
                  <span>{article.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Newsletter Section */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 mt-24">
          <motion.div 
            whileInView={{ scale: [0.98, 1] }}
            className="relative rounded-lg bg-primary overflow-hidden p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-container rounded-full blur-[120px]" />
            </div>
            <div className="relative z-10 lg:w-1/2">
              <span className="text-secondary-container font-bold text-sm tracking-widest uppercase mb-4 block">The Strategic Brief</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">Expertise, Delivered Weekly.</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Join 5,000+ HR directors and CEOs who receive our curated dossiers on global workforce trends every Tuesday morning.
              </p>
            </div>
            <div className="relative z-10 lg:w-1/2 w-full">
              <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/10 backdrop-blur-md rounded-lg">
                <input 
                  className="flex-grow bg-transparent border-none text-white placeholder:text-blue-200 focus:ring-0 px-4 py-3" 
                  placeholder="professional@company.com" 
                  type="email" 
                />
                <button className="bg-secondary text-white px-8 py-3 rounded-md font-bold hover:opacity-90 transition-all whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
              <p className="text-blue-200/60 text-xs mt-4">
                We value your privacy. Unsubscribe at any time. View our <a className="underline" href="#">Privacy Policy</a>.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Historical Dossiers */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 mt-24">
          <h2 className="text-2xl font-serif font-bold text-primary mb-12 flex items-center gap-4">
            Historical Dossiers <span className="h-[1px] flex-grow bg-outline-variant/30" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dossiers.map((dossier, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-surface-container-low p-6 rounded-lg hover:bg-surface-container transition-colors"
              >
                <span className="text-xs font-bold text-secondary mb-2 block uppercase">{dossier.tag}</span>
                <h4 className="font-bold text-primary mb-4 leading-tight">{dossier.title}</h4>
                <a className="inline-flex items-center text-xs font-bold text-primary group" href="#">
                  {dossier.linkText} 
                  <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">
                    {dossier.icon}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </main>
  );
}
