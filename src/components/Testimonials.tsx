const testimonials = [
  {
    tag: 'Job Search',
    quote: "I'd been applying for three months with nothing. In our first session, Aisha told me exactly what was wrong with my resume and my LinkedIn. Two weeks later I had three interviews. I got the job I actually wanted.",
    name: 'Marketing Manager, New York',
  },
  {
    tag: 'Promotion',
    quote: "I'd been in the same role for four years and couldn't figure out why I kept getting passed over. Aisha helped me see what I was missing — and within six months I'd been promoted to Head of Department.",
    name: 'Head of Operations, Financial Services',
  },
  {
    tag: 'Layoff Recovery',
    quote: "I was laid off after eight years and had no idea where to start. Aisha was calm, practical, and knew exactly what I needed to do. I had a new role within seven weeks.",
    name: 'Senior Project Manager',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">What clients say</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Real results from real people.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.name} className="flex flex-col gap-4">
              <span className="inline-block self-start bg-sage-light text-sage text-xs font-semibold px-3 py-1 rounded-full">{t.tag}</span>
              <p className="font-serif italic text-lg text-charcoal leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm text-muted">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
