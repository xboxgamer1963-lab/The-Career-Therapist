import Image from 'next/image'
import Link from 'next/link'

const rootedIn = [
  'Executive-level insight',
  'Employee relations expertise',
  'Deep understanding of workplace psychology and power dynamics',
]

const iHelpClients = [
  'Communicate with clarity and authority',
  'Navigate difficult workplace situations with confidence',
  'Position themselves for visibility, growth, and leadership',
  'Recover from toxic or destabilizing work environments',
]

const regions = ['U.S.', 'U.K.', 'APAC', 'MENA']

export default function AboutSection() {
  return (
    <section className="bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* 1. Header — portrait + headline / intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <Image src="/aisha.jpg" alt="Aisha Naser, Founder of My Career Therapist" fill className="object-cover object-top" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">About the Founder</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-3 leading-tight">
              I&apos;m Aisha Naser.
            </h2>
            <p className="text-lg text-charcoal mb-6">Founder of My Career Therapist.</p>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                A strategic Human Capital leader with over 20 years of experience advising executives, navigating complex workplace dynamics, and building high-performing organizations.
              </p>
              <p>
                Throughout my career, I&apos;ve worked as a trusted partner to senior leadership across global organizations — leading employee relations, organizational design, and large-scale transformations across:
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {regions.map(r => (
                <span key={r} className="inline-block bg-sage-light text-sage text-xs font-semibold px-3 py-1.5 rounded-full">{r}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Pull quote — sage-light callout */}
        <div className="max-w-4xl mx-auto bg-sage-light border-l-4 border-sage rounded-r-2xl px-8 py-10 mb-20">
          <span className="material-icons text-sage text-3xl mb-3 block">format_quote</span>
          <p className="font-serif italic text-2xl lg:text-3xl text-charcoal leading-snug mb-4">
            I&apos;ve been in the rooms where decisions are made.
          </p>
          <p className="text-muted leading-relaxed">
            I&apos;ve seen how talent is evaluated, how promotions are decided, and how workplace dynamics actually play out behind the scenes.
          </p>
        </div>

        {/* 3. Pattern + Why this exists — centered narrative */}
        <div className="max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage mb-4">And I noticed a pattern</p>
          <p className="font-serif text-2xl lg:text-3xl text-charcoal leading-snug mb-10">
            The people who struggled the most weren&apos;t the least capable. They were the least equipped to navigate the unspoken rules of work.
          </p>
          <div className="border-t border-border pt-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-sage mb-4">That&apos;s why I created My Career Therapist</p>
            <p className="text-muted leading-relaxed text-lg">
              My work sits at the intersection of workplace strategy, communication, and human behavior. I help professionals understand how they are perceived, strengthen how they show up, and navigate environments that are often political, complex, and emotionally demanding.
            </p>
          </div>
        </div>

        {/* 4. Two-column cards — Rooted in / I help my clients */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-serif text-3xl lg:text-4xl text-charcoal leading-snug mb-3">
              This isn&apos;t traditional career coaching.
            </p>
            <p className="text-muted">This is strategic, real-world guidance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-cream border border-border rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-5">Rooted in</p>
              <ul className="space-y-3">
                {rootedIn.map(item => (
                  <li key={item} className="flex items-start gap-3 text-charcoal">
                    <span className="material-icons text-sage text-base mt-0.5">check_circle</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream border border-border rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-5">I help my clients</p>
              <ul className="space-y-3">
                {iHelpClients.map(item => (
                  <li key={item} className="flex items-start gap-3 text-charcoal">
                    <span className="material-icons text-sage text-base mt-0.5">check_circle</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 5. Closing — sage card with CTA */}
        <div className="max-w-3xl mx-auto bg-sage rounded-2xl p-10 lg:p-12 text-center">
          <p className="text-cream/80 leading-relaxed mb-4">
            Because in today&apos;s workplace, success isn&apos;t just about performance.
          </p>
          <p className="font-serif italic text-2xl lg:text-3xl text-cream leading-snug mb-6">
            It&apos;s about perception.<br />
            It&apos;s about positioning.<br />
            It&apos;s about knowing how to operate in rooms where not everything is said out loud.
          </p>
          <p className="text-cream/80 leading-relaxed mb-8">
            If you&apos;re ready to stop guessing and start moving strategically in your career — you&apos;re in the right place.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-cream text-charcoal px-7 py-3.5 rounded-full font-medium hover:bg-white transition-colors"
          >
            Book a Discovery Call <span className="material-icons text-base">arrow_right_alt</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
