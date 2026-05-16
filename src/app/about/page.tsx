import Image from 'next/image'
import Link from 'next/link'
import FinalCTA from '@/components/FinalCTA'

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

const credentials = [
  { title: '20+ years experience', desc: 'Strategic Human Capital leadership advising executives and shaping high-performing organizations.' },
  { title: 'Global track record', desc: 'Senior partnerships across the U.S., U.K., APAC, and MENA — employee relations, organizational design, and large-scale transformations.' },
  { title: 'Inside the decision room', desc: 'Direct experience of how talent is evaluated, how promotions are decided, and how workplace dynamics actually play out.' },
  { title: 'Workplace psychology lens', desc: 'My work sits at the intersection of strategy, communication, and human behavior — not generic motivational coaching.' },
]

const regions = ['U.S.', 'U.K.', 'APAC', 'MENA']

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">About the Founder</p>
          <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
            I&apos;m Aisha Naser.
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Founder of My Career Therapist and a strategic Human Capital leader with over 20 years of experience advising executives, navigating complex workplace dynamics, and building high-performing organizations.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {regions.map(r => (
              <span key={r} className="inline-block bg-sage-light text-sage text-xs font-semibold px-3 py-1.5 rounded-full">{r}</span>
            ))}
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:ml-auto">
          <Image src="/aisha.jpg" alt="Aisha Naser, Founder of My Career Therapist" fill className="object-cover" />
        </div>
      </section>

      {/* My story */}
      <section className="bg-white border-y border-border">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">My story</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-10 leading-tight">
            Inside the rooms where careers are decided.
          </h2>

          <div className="space-y-6 text-muted leading-relaxed text-lg">
            <p>
              Throughout my career, I&apos;ve worked as a trusted partner to senior leadership across global organizations — leading employee relations, organizational design, and large-scale transformations across the U.S., U.K., APAC, and MENA.
            </p>
          </div>

          {/* Pull quote */}
          <div className="border-l-2 border-sage pl-6 my-10">
            <p className="font-serif italic text-2xl lg:text-3xl text-charcoal leading-snug mb-3">
              I&apos;ve been in the rooms where decisions are made.
            </p>
            <p className="text-muted leading-relaxed text-lg">
              I&apos;ve seen how talent is evaluated, how promotions are decided, and how workplace dynamics actually play out behind the scenes.
            </p>
          </div>

          <div className="space-y-6 text-muted leading-relaxed text-lg">
            <p className="text-charcoal font-medium">And I noticed a pattern:</p>
            <p>
              The people who struggled the most weren&apos;t the least capable. They were the least equipped to navigate the unspoken rules of work.
            </p>
            <p className="text-charcoal font-medium">That&apos;s why I created My Career Therapist.</p>
            <p>
              My work sits at the intersection of workplace strategy, communication, and human behavior. I help professionals understand how they are perceived, strengthen how they show up, and navigate environments that are often political, complex, and emotionally demanding.
            </p>
          </div>
        </div>
      </section>

      {/* What it's rooted in + what I help clients do */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white border border-border rounded-2xl p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">My Approach</p>
            <h3 className="font-serif text-2xl lg:text-3xl text-charcoal mb-4 leading-snug">
              This isn&apos;t traditional career coaching.
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              This is strategic, real-world guidance rooted in:
            </p>
            <ul className="space-y-3">
              {rootedIn.map(item => (
                <li key={item} className="flex items-start gap-3 text-charcoal">
                  <span className="material-icons text-sage text-base mt-0.5">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">What I help my clients do</p>
            <h3 className="font-serif text-2xl lg:text-3xl text-charcoal mb-6 leading-snug">
              Move from reactive to strategic.
            </h3>
            <ul className="space-y-3">
              {iHelpClients.map(item => (
                <li key={item} className="flex items-start gap-3 text-charcoal">
                  <span className="material-icons text-sage text-base mt-0.5">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Credentials grid */}
      <section className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">The Insider Edge</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Where the perspective comes from.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map(c => (
              <div key={c.title} className="bg-cream border border-border rounded-2xl p-6">
                <h3 className="font-serif text-xl text-charcoal mb-3">{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing philosophy */}
      <section className="bg-sage">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-cream/70 leading-relaxed mb-4">Because in today&apos;s workplace, success isn&apos;t just about performance.</p>
          <p className="font-serif italic text-3xl lg:text-4xl text-cream leading-snug mb-8">
            It&apos;s about perception. It&apos;s about positioning. It&apos;s about knowing how to operate in rooms where not everything is said out loud.
          </p>
          <p className="text-cream/80 leading-relaxed mb-8">
            If you&apos;re ready to stop guessing and start moving strategically in your career — you&apos;re in the right place.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-cream text-charcoal px-7 py-3.5 rounded-full font-medium hover:bg-charcoal hover:text-cream transition-colors">
            Book a Discovery Call <span className="material-icons text-base">arrow_right_alt</span>
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
