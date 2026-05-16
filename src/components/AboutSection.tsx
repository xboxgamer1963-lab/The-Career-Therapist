import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md">
          <Image src="/aisha.jpg" alt="Aisha" fill className="object-cover object-top" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">What We Do</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
            Workplace strategy for professionals who are done being overlooked.
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>My Career Therapist is a workplace strategy and professional development practice designed for people who are done being overlooked, confused, or underestimated in their careers.</p>
            <p>Most professionals are not struggling because they lack capability. They are struggling because they were never taught how work actually functions — how decisions are made, how perception is shaped, and how influence is built inside organizations.</p>
            <p>I help individuals and organizations translate hidden workplace dynamics into clear, actionable strategy — so performance is no longer wasted, communication becomes precise, and career growth is no longer left to chance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
