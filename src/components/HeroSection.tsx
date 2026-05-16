import Link from 'next/link'
import HeroLottie from './HeroLottie'

const avatars = ['MR', 'JL', 'SK', 'DT']
const colors = ['bg-amber-200', 'bg-rose-200', 'bg-sky-200', 'bg-emerald-200']

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left */}
      <div>
        {/* Avatars row */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex -space-x-2">
            {avatars.map((a, i) => (
              <div key={a} className={`w-8 h-8 rounded-full ${colors[i]} flex items-center justify-center text-xs font-semibold border-2 border-cream text-charcoal`}>
                {a}
              </div>
            ))}
          </div>
          <span className="text-sm text-muted font-medium">Trusted by professionals navigating real workplace complexity.</span>
        </div>

        <h1 className="font-serif italic text-3xl lg:text-4xl xl:text-5xl leading-snug text-charcoal mb-5">
          Your career isn&apos;t failing because you lack talent.
          <span className="block text-sage mt-1">
            It&apos;s stalling because no one taught you how to navigate power.
          </span>
        </h1>

        <p className="text-base text-muted leading-relaxed mb-8 max-w-xl">
          At My Career Therapist, we don&apos;t focus on resumes and interview tips. We focus on what actually determines your success: how you&apos;re perceived, how you communicate under pressure, and how you navigate politics, influence, and unspoken rules.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors">
            Book a Free Discovery Call
            <span className="material-icons text-base">arrow_right_alt</span>
          </Link>
          <Link href="/coaching" className="inline-flex items-center px-7 py-3.5 rounded-full border border-border font-medium text-charcoal hover:bg-border transition-colors">
            See How We Work
          </Link>
        </div>
      </div>

      {/* Right */}
      <div>
        {/* Illustration + floating cards wrapper — keeps overlap contained */}
        <div className="relative max-w-sm mx-auto lg:mx-0 lg:ml-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-cream border border-border">
            <HeroLottie />
          </div>

          {/* Floating card — top right */}
          <div className="absolute top-6 -right-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2 border border-border">
            <span className="material-icons text-sage text-xl">trending_up</span>
            <div>
              <div className="text-sm font-semibold text-charcoal">Clarity</div>
              <div className="text-xs text-muted">Confidence & Control</div>
            </div>
          </div>

          {/* Floating card — bottom left */}
          <div className="absolute -bottom-6 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 max-w-[200px] border border-border">
            <div className="flex text-amber-400 text-xs mb-1">{'★'.repeat(5)}</div>
            <p className="text-xs text-charcoal font-medium italic font-serif leading-snug">&ldquo;I stopped being overlooked the moment I understood the real game.&rdquo;</p>
          </div>
        </div>

        {/* Stats row — sits cleanly below the photo + cards */}
        {/* <div className="flex justify-center lg:justify-start gap-8 flex-wrap">
          {[['High-Touch', 'Advisory'], ['3', 'Service Tracks'], ['Real-World', 'Strategy'], ['Outcomes', 'Not Theory']].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl font-serif font-semibold text-charcoal">{n}</div>
              <div className="text-xs text-muted mt-0.5">{l}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
