import Image from 'next/image'
import Link from 'next/link'
import FinalCTA from '@/components/FinalCTA'

const credentials = [
  { title: '7 years in HR', desc: 'Recruiting and talent across consumer, tech and financial services. Sat in on hundreds of hiring decisions.' },
  { title: 'Certified Coach (ICF)', desc: 'Trained in coaching methodology — not just life experience pretending to be a curriculum.' },
  { title: 'SHRM-SCP certified', desc: 'Senior Certified Professional from the Society for Human Resource Management — the gold standard for HR practitioners in the US.' },
  { title: '200+ clients coached', desc: 'Across 12 countries, from graduates to C-suite. Every industry you can think of.' },
]

const values = [
  { title: 'Honest, not nice', desc: 'I won\'t tell you what you want to hear. I\'ll tell you what you need to hear, kindly and clearly. That\'s the only way coaching actually works.' },
  { title: 'Practical, not preachy', desc: 'You leave every session with a clear next action. We don\'t talk about feelings in the abstract; we deal with the real world you\'re working in.' },
  { title: 'Strategic, not generic', desc: 'No templates dressed up as advice. Your career is specific. The plan we build is specific to you.' },
  { title: 'Long-term, not transactional', desc: 'I want to be the coach you come back to in five years for the next big move — not someone who sells you a session and moves on.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">About Aisha</p>
          <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">A career coach with an insider edge.</h1>
          <p className="text-lg text-muted leading-relaxed">
            Years in HR. Now helping professionals get the careers they deserve.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:ml-auto">
          <Image src="/aisha.jpg" alt="Aisha — career coach" fill className="object-cover" />
        </div>
      </section>

      {/* My story */}
      <section className="bg-white border-y border-border">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">My story</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-10 leading-tight">From the inside of HR to the side of the people who needed it most.</h2>
          <div className="space-y-6 text-muted leading-relaxed text-lg">
            <p>I spent seven years working in HR and talent acquisition across consumer, financial services and tech. I sat on hiring panels, read thousands of resumes, watched promotion decisions get made, and saw — over and over again — brilliant people get overlooked for entirely fixable reasons.</p>
            <p>The candidate who didn&apos;t know how to talk about their own work. The mid-level manager who&apos;d been doing senior work for two years but had never made the case. The senior leader who got made redundant and panicked into the wrong role because they didn&apos;t have anyone to think it through with.</p>
            <p>I kept thinking: someone needs to be on their side of the table. Not a recruiter (whose loyalty is to the hiring company), not a friend (who doesn&apos;t know the system), but someone who knows the rules and is paid to be in your corner.</p>
            <p>So I left HR and built that. My Career Therapist is what I wish my friends had had access to a decade ago — coaching that&apos;s honest, practical, strategic, and informed by what really happens behind the scenes.</p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Credentials</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Where the insider edge comes from.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map(c => (
            <div key={c.title} className="bg-white border border-border rounded-2xl p-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">{c.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">How I work</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Four things you can expect — and four things you won&apos;t get.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(v => (
              <div key={v.title} className="border border-border rounded-2xl p-6 bg-cream">
                <h3 className="font-serif text-xl text-charcoal mb-3">{v.title}</h3>
                <p className="text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal note */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Outside of all this</p>
        <h2 className="font-serif italic text-3xl lg:text-4xl text-charcoal mb-6 leading-snug">When I&apos;m not coaching, I&apos;m usually walking too far, reading three books at once, or rebuilding the same recipe for the fifth time.</h2>
        <p className="text-muted leading-relaxed">
          Based in New York. Coach worldwide. Sessions held online via Zoom or Google Meet.
        </p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors mt-8">
          Book a Free Discovery Call <span className="material-icons text-base">arrow_right_alt</span>
        </Link>
      </section>

      <FinalCTA />
    </>
  )
}
