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

export default function AboutSection() {
  return (
    <section className="bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Image column — sticky on desktop so it stays visible while reading */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:sticky lg:top-28">
              <Image src="/aisha.jpg" alt="Aisha Naser, Founder of My Career Therapist" fill className="object-cover object-top" />
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">About the Founder</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              I&apos;m Aisha Naser — Founder of My Career Therapist.
            </h2>

            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                A strategic Human Capital leader with over 20 years of experience advising executives, navigating complex workplace dynamics, and building high-performing organizations.
              </p>
              <p>
                Throughout my career, I&apos;ve worked as a trusted partner to senior leadership across global organizations — leading employee relations, organizational design, and large-scale transformations across the U.S., U.K., APAC, and MENA.
              </p>
            </div>

            {/* Pull quote — "I've been in the rooms…" */}
            <div className="border-l-2 border-sage pl-6 my-10">
              <p className="font-serif italic text-2xl text-charcoal leading-snug mb-3">I&apos;ve been in the rooms where decisions are made.</p>
              <p className="text-muted leading-relaxed">
                I&apos;ve seen how talent is evaluated, how promotions are decided, and how workplace dynamics actually play out behind the scenes.
              </p>
            </div>

            <div className="space-y-5 text-muted leading-relaxed">
              <p className="text-charcoal font-medium">And I noticed a pattern:</p>
              <p>
                The people who struggled the most weren&apos;t the least capable. They were the least equipped to navigate the unspoken rules of work.
              </p>
              <p className="text-charcoal font-medium">That&apos;s why I created My Career Therapist.</p>
              <p>
                My work sits at the intersection of workplace strategy, communication, and human behavior. I help professionals understand how they are perceived, strengthen how they show up, and navigate environments that are often political, complex, and emotionally demanding.
              </p>
              <p className="text-charcoal font-medium">This isn&apos;t traditional career coaching.</p>
              <p>This is strategic, real-world guidance rooted in:</p>
            </div>

            <ul className="space-y-2 my-6">
              {rootedIn.map(item => (
                <li key={item} className="flex items-start gap-3 text-charcoal">
                  <span className="material-icons text-sage text-base mt-0.5">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted leading-relaxed mb-4">I help my clients:</p>

            <ul className="space-y-2 mb-10">
              {iHelpClients.map(item => (
                <li key={item} className="flex items-start gap-3 text-charcoal">
                  <span className="material-icons text-sage text-base mt-0.5">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Closing — sage-light callout */}
            <div className="bg-sage-light border border-sage/20 rounded-2xl p-6 lg:p-8">
              <p className="text-muted leading-relaxed mb-3">Because in today&apos;s workplace, success isn&apos;t just about performance.</p>
              <p className="font-serif italic text-xl lg:text-2xl text-charcoal leading-snug mb-5">
                It&apos;s about perception. It&apos;s about positioning. It&apos;s about knowing how to operate in rooms where not everything is said out loud.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                If you&apos;re ready to stop guessing and start moving strategically in your career — you&apos;re in the right place.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-sage transition-colors">
                Book a Discovery Call <span className="material-icons text-base">arrow_right_alt</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
