import Link from 'next/link'
import HeroLottie from './HeroLottie'

const stats = [
  { value: '100+', label: 'Professionals coached' },
  { value: '21', label: 'Years inside HR' },
  { value: 'USA', label: 'Coast to coast' },
  { value: 'All', label: 'Industries served' },
]

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left */}
      <div>
        <span className="inline-flex items-center gap-2 bg-sage-light text-sage text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="material-icons text-sm">verified</span>
          1-on-1 Career Coaching · 21 years inside HR
        </span>

        <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl leading-tight text-charcoal mb-6">
          Passed over. Pushed out.
          <span className="block italic text-sage">Singled out.</span>
        </h1>

        <p className="text-lg text-muted leading-relaxed mb-10 max-w-xl">
          Career coaching for U.S. professionals in the moments that hit hardest — a stalled promotion, a sudden layoff, discrimination at work. Because no one taught you how to navigate power.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors">
            Book a Free Discovery Call
            <span className="material-icons text-base">arrow_right_alt</span>
          </Link>
          <Link href="/free-course" className="inline-flex items-center px-7 py-3.5 rounded-full border border-border font-medium text-charcoal hover:bg-border transition-colors">
            Start the free 5-day course
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
          {stats.map(s => (
            <div key={s.label} className="border border-border rounded-xl bg-white px-4 py-3">
              <div className="font-serif text-2xl text-charcoal leading-none mb-1">{s.value}</div>
              <div className="text-xs text-muted leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div>
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
      </div>
    </section>
  )
}
