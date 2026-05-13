"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const sections = [
  {
    heading: "About career coaching",
    items: [
      {
        q: "What is career coaching?",
        a: "Career coaching is personalised, 1-on-1 support to help you navigate key moments in your professional life. This might be finding a new job, earning a promotion, recovering from redundancy, making a career change, or preparing for an important interview. A career coach gives you strategy, honest feedback, and accountability — so you're not trying to figure it all out alone.",
      },
      {
        q: "Is career coaching worth it?",
        a: "For most people who commit to it, yes — significantly. The combination of expert guidance, honest feedback, and accountability tends to compress the timeline to achieving your goal considerably. Many clients attribute landing a specific role, earning a promotion, or successfully changing careers directly to their coaching work. Whether it's worth it for you depends on how important your goal is and how much value you place on getting there efficiently.",
      },
      {
        q: "How is career coaching different from mentoring?",
        a: "Mentoring typically involves someone more senior sharing their experience and advice. Coaching is more structured and goal-oriented — focused on helping you develop your own thinking, strategy, and skills rather than simply following someone else's path. Aisha's coaching combines elements of both: she brings real expertise from her HR background, plus structured coaching tools to help you apply it to your specific situation.",
      },
    ],
  },
  {
    heading: "Working with Aisha",
    items: [
      {
        q: "What makes Aisha different from other career coaches?",
        a: "Aisha has a background in HR and recruiting — which means she has direct experience of how companies make hiring and promotion decisions. Most career coaches work from the outside looking in. Aisha's coaching is informed by the inside view: what actually gets CVs shortlisted, how promotion decisions really get made, and what employers are thinking but often don't say. This makes the advice specific, practical, and grounded in how things actually work — not how they should work.",
      },
      {
        q: "Who does Aisha work with?",
        a: "Aisha works with professionals at all stages of their careers — from those early in their working life to senior leaders with decades of experience. She supports people across all industries and job functions. The common thread is a desire to make progress: whether that means finding a better job, earning a promotion, rebuilding after redundancy, or changing direction entirely.",
      },
      {
        q: "Does Aisha only work with people in the UK?",
        a: "No. All sessions are held online via video call, which means Aisha works with clients globally. She currently supports professionals in the UK, Europe, North America, the Middle East, and beyond.",
      },
    ],
  },
  {
    heading: "The sessions themselves",
    items: [
      {
        q: "What happens in a coaching session?",
        a: "Sessions are 60 minutes, held via video call. The structure varies depending on where you are and what you need — some sessions are very practical (working through your CV, preparing for an interview, planning a promotion conversation), others are more strategic (mapping out your career change, identifying what's been holding you back). Every session ends with a clear action plan so you always know what to do next.",
      },
      {
        q: "How many sessions will I need?",
        a: "That depends on your goal. If you're preparing for a specific event — a job interview or a salary negotiation — 1 to 2 sessions is often enough. If you're working through a full job search, promotion push, or career change, most clients find 4 to 6 sessions gives them the foundation they need, with additional sessions as required. We discuss this on your discovery call.",
      },
      {
        q: "Can I book just one session?",
        a: "Yes. Single sessions are available for clients with a specific, focused need. If you're not sure whether you need one session or more, the discovery call is the right place to start.",
      },
      {
        q: "What's the discovery call?",
        a: "The discovery call is a free 20-minute video call with Aisha. It's an informal conversation about where you are, what you're finding difficult, and what you want to achieve. There's no pressure and no obligation. Aisha will give you her honest assessment of whether she thinks coaching could help — and if so, what that might look like.",
      },
    ],
  },
  {
    heading: "Practical questions",
    items: [
      {
        q: "How much does career coaching cost?",
        a: "Pricing is available on the 1-on-1 coaching page. Aisha offers single sessions and packages. The Career Alignment Club membership is available from £24/month for those who want ongoing support at a lower commitment level.",
      },
      {
        q: "Do you offer refunds?",
        a: "If you are not satisfied with your first session, please get in touch within 48 hours and we will discuss options. Full details are available on the terms and conditions page.",
      },
      {
        q: "How do I get started?",
        a: "Book a free discovery call using the booking link on the contact page. If you're not ready for a call, you can start with the free 5-day email course or join the weekly newsletter — both are available free of charge.",
      },
    ],
  },
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sections.flatMap((s) =>
      s.items.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      }))
    ),
  };

  return (
    <main className="min-h-screen bg-background text-on-surface">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative pt-32 pb-24 px-6 md:px-12 max-w-[1100px] mx-auto">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-32 -left-20 w-96 h-96 bg-secondary/12 rounded-full blur-[120px]" />
          <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/8 rounded-full blur-[100px]" />
        </div>

        {/* Hero */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary-container/60 px-4 py-2 rounded-full mb-8">
            <span className="material-symbols-outlined text-secondary text-base">help</span>
            <span className="text-primary font-bold text-xs tracking-widest uppercase">FAQ · Everything explained</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.02] tracking-tight mb-8">
            Frequently Asked{" "}
            <span className="relative inline-block">
              <span className="italic text-secondary">Questions.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 320 14" fill="none" preserveAspectRatio="none">
                <path d="M2 8 Q80 1 160 8 T318 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-secondary" />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about working with Aisha — a 1-on-1 career coach with an HR background.
          </p>

          {/* Quick jump pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {sections.map((s, i) => (
              <a
                key={i}
                href={`#section-${i}`}
                className="px-4 py-2 rounded-full text-xs font-bold tracking-wide bg-white border border-outline-variant/20 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                {s.heading}
              </a>
            ))}
          </div>
        </header>

        {/* FAQ sections */}
        {sections.map((section, sIdx) => (
          <section key={sIdx} id={`section-${sIdx}`} className="mb-16 scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 pb-4 border-b-2 border-secondary/30">
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.items.map((item, idx) => (
                <details
                  key={idx}
                  className="bg-surface-container-low rounded-lg p-6 group cursor-pointer border border-outline-variant/10"
                >
                  <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
                    <h3 className="text-lg font-bold text-primary">{item.q}</h3>
                    <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform shrink-0">
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-4 text-on-surface-variant leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="text-center bg-primary text-white p-12 md:p-16 rounded-2xl mt-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Still have questions?</h2>
          <p className="text-blue-100/90 text-lg mb-10 max-w-xl mx-auto">
            Book a free 20-minute discovery call — we'll talk through whatever's on your mind.
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
