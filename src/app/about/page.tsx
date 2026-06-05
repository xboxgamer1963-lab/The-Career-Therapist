import Image from 'next/image'
import Link from 'next/link'

const credentials = [
  { value: '21', label: 'Years', desc: 'of strategic Human Capital leadership' },
  { value: '100+', label: 'Professionals coached', desc: '1-on-1, across all stages' },
  { value: 'USA', label: 'Coast to coast', desc: '— clients across the United States' },
  { value: 'All', label: 'Industries', desc: 'served — tech, finance, healthcare & more' },
]

const outcomes = [
  {
    title: 'Communicate with clarity and authority',
    desc: 'Know exactly what to say, how to say it, and when — in meetings, with leadership, and under pressure.',
  },
  {
    title: 'Navigate difficult workplace dynamics with confidence',
    desc: 'Toxic environments, difficult managers, office politics — you\'ll have the language and strategy to handle them.',
  },
  {
    title: 'Position yourself for visibility, growth, and leadership',
    desc: 'Stop being the best-kept secret in the room. Learn how to be seen, valued, and promoted.',
  },
  {
    title: 'Recover and rebuild after destabilising experiences',
    desc: 'Whether you\'ve been laid off, managed out, or worn down — we rebuild from the inside out.',
  },
]

const testimonials = [
  {
    tag: 'The Overlooked High Performer',
    body: 'I was delivering results, staying late, being reliable — and still being passed over. Aisha helped me see it wasn\'t my performance that was the problem.',
    highlight: 'It was how I was communicating and positioning my work.',
    rest: ' Within weeks I was speaking more clearly in meetings, advocating for myself without over-explaining, and being seen differently by leadership. For the first time, my visibility and my output actually match.',
    result: 'Recognised by leadership within weeks',
  },
  {
    tag: 'Toxic Workplace Recovery',
    body: 'A toxic work environment was starting to affect my confidence and how I saw myself professionally. I felt stuck, reactive, exhausted. Aisha helped me separate what was actually happening from how I was internalising it.',
    highlight: 'She gave me the language, strategy, and boundaries I didn\'t even know I needed.',
    rest: ' I didn\'t just survive that situation — I navigated it with clarity and left on my own terms with a plan.',
    result: 'Left on her own terms — with a plan',
  },
  {
    tag: 'Promotion & Leadership Positioning',
    body: 'I knew I was ready for the next level but wasn\'t being seen that way. I kept hearing "be more visible" — with no one able to tell me what that actually meant.',
    highlight: 'Aisha broke it down in a way that finally clicked.',
    rest: ' Within a few months I was leading more discussions, being looped into higher-level decisions, and ultimately positioned for promotion. The difference was night and day.',
    result: 'Promoted within months',
  },
]

export default function About() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-5">About Aisha</p>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-charcoal leading-tight mb-8">
              If you&apos;ve ever felt <em className="italic text-sage">invisible at work</em> despite being good at your job — you&apos;re exactly who I built this for.
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Most career struggles aren&apos;t about capability. They&apos;re about{' '}
              <span className="text-charcoal font-semibold">communication, positioning, and knowing how to navigate the unspoken rules of the workplace.</span>{' '}
              That&apos;s the gap I&apos;ve spent 20 years learning to close — and what I now help my clients master.
            </p>
          </div>
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:ml-auto">
              <Image src="/aisha.jpg" alt="Aisha Naser, Founder of My Career Therapist" fill className="object-cover object-top" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — My Story + Pull quote */}
      <section className="bg-white border-y border-border">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-5">My Story</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal leading-tight mb-10">
            I&apos;ve been inside the rooms<br />where careers are decided.
          </h2>

          <div className="space-y-5 text-muted leading-relaxed text-lg">
            <p>
              I&apos;m <span className="text-charcoal font-semibold">Aisha Naser</span> — founder of My Career Therapist and a strategic Human Capital leader with 21 years advising executives, leading employee relations, and shaping high-performing organizations.
            </p>
            <p>
              I&apos;ve sat at the tables where promotions are given and withheld. Where talented people are overlooked not because of their work — but because of how they&apos;re perceived. Where the rules that matter most are never written down.
            </p>
          </div>

          {/* Pull quote — the emotional anchor */}
          <blockquote className="border-l-4 border-sage pl-6 lg:pl-8 my-12">
            <p className="font-serif italic text-2xl lg:text-3xl text-charcoal leading-snug">
              &ldquo;The people who struggled most weren&apos;t the least capable. They were the least equipped to navigate the unspoken rules of work. That realization changed everything for me.&rdquo;
            </p>
          </blockquote>

          <div className="space-y-5 text-muted leading-relaxed text-lg">
            <p>
              That&apos;s why I created My Career Therapist. Not to offer motivation or generic advice — but to give you the{' '}
              <span className="text-charcoal font-semibold">strategic, insider perspective</span>{' '}
              that most professionals never get access to.
            </p>
            <p>
              The word <span className="text-charcoal font-semibold italic font-serif">&ldquo;Therapist&rdquo;</span> isn&apos;t clinical — it&apos;s intentional. The work goes deeper than career coaching: how you&apos;re perceived, how you communicate under pressure, and how you navigate the unspoken rules of work. We&apos;re not a substitute for mental health therapy — and we don&apos;t pretend to be — but we go further than &ldquo;polish your resume.&rdquo;
            </p>
            <p>
              My work sits at the intersection of workplace strategy, communication, and human behavior. I help you understand how you&apos;re being perceived, strengthen how you show up, and navigate environments that are often political, complex, and emotionally demanding.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — The Insider Edge */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-8">The Insider Edge</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {credentials.map(c => (
            <div key={c.label} className="bg-white border border-border rounded-2xl p-8">
              <p className="font-serif text-5xl lg:text-6xl text-sage mb-4 leading-none">{c.value}</p>
              <p className="text-charcoal font-semibold mb-1">
                {c.label} <span className="text-muted font-normal">{c.desc}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — My Approach + Outcomes */}
      <section className="bg-white border-y border-border">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-5">My Approach</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
            This isn&apos;t traditional career coaching.
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-12">
            This is strategic, real-world guidance built on what actually happens inside organizations — not what the textbooks say. I help you move from reactive to strategic, so you stop guessing and start operating with clarity and confidence.
          </p>
          <div className="space-y-4">
            {outcomes.map(o => (
              <div key={o.title} className="bg-cream border border-border rounded-2xl p-6">
                <h3 className="text-charcoal font-semibold mb-2">{o.title}</h3>
                <p className="text-muted leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Client Results */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Client Results</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12 leading-tight">
          Real outcomes from real clients.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.tag} className="bg-white border border-border rounded-2xl p-8 flex flex-col">
              <span className="material-icons text-sage/40 text-4xl mb-5">format_quote</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-4">{t.tag}</p>
              <p className="text-charcoal leading-relaxed flex-1">
                {t.body} <span className="font-semibold">{t.highlight}</span>{t.rest}
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <span className="inline-block bg-sage-light text-sage text-sm font-semibold px-4 py-2 rounded-full">
                  {t.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 — CTA */}
      <section className="bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-6 leading-tight">
            Ready to stop guessing<br />and start moving strategically?
          </h2>
          <p className="text-cream/80 leading-relaxed text-lg mb-10">
            Book a free discovery call. We&apos;ll decode exactly what&apos;s holding you back and map out your next move — together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-cream text-charcoal px-8 py-4 rounded-full font-medium hover:bg-sage hover:text-cream transition-colors"
          >
            Book Your Free Discovery Call <span className="material-icons text-base">arrow_forward</span>
          </Link>
          <p className="text-cream/60 text-sm mt-6 italic">No pressure. No pitch. Just clarity.</p>
        </div>
      </section>
    </>
  )
}
