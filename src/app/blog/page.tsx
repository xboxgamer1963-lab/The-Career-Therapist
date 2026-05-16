import Link from 'next/link'
import FinalCTA from '@/components/FinalCTA'

const posts = [
  {
    category: 'Job Search',
    title: 'The first six seconds: what hiring managers actually see on your resume',
    excerpt: 'I\'ve sat on hiring panels where 60 resumes got reduced to 8 in under an hour. Here\'s the unwritten checklist that decides who makes the cut.',
    date: 'May 12, 2026',
    read: '7 min read',
  },
  {
    category: 'Promotion',
    title: 'Why working harder won\'t get you promoted (and what does)',
    excerpt: 'The brutal truth about promotion decisions — and the four things that actually move the needle, written from years of seeing it happen.',
    date: 'May 5, 2026',
    read: '9 min read',
  },
  {
    category: 'Salary',
    title: 'How to negotiate a salary increase — without burning the bridge',
    excerpt: 'A calm, professional script that\'s landed my clients an average 14% uplift. No corporate theatre, no bluffing, no awkwardness.',
    date: 'April 28, 2026',
    read: '8 min read',
  },
  {
    category: 'Career Change',
    title: '"Am I too old to change careers?" — the honest answer at 35, 45 and 55',
    excerpt: 'Spoiler: no. But the strategy is different at each stage. Here\'s what I tell clients in each decade — and the mistakes to skip.',
    date: 'April 21, 2026',
    read: '10 min read',
  },
  {
    category: 'Interviews',
    title: 'The interview question almost everyone gets wrong',
    excerpt: '"Tell me about yourself" sounds simple. It\'s the single most-fumbled question in any interview. Here\'s how to answer it in 90 seconds flat.',
    date: 'April 14, 2026',
    read: '6 min read',
  },
  {
    category: 'Layoff Recovery',
    title: 'What to do in the first 72 hours after being laid off',
    excerpt: 'Practical, calm steps to take in the first three days — covering the financial, legal, emotional and search-strategy basics. Save this somewhere.',
    date: 'April 7, 2026',
    read: '11 min read',
  },
]

const categories = ['All', 'Job Search', 'Promotion', 'Salary', 'Career Change', 'Interviews', 'Layoff Recovery']

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Career Blog</p>
        <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">Practical career advice — from someone who&apos;s been on both sides of the table.</h1>
        <p className="text-lg text-muted leading-relaxed">Honest, experience-led articles on jobs, promotions, salary, layoffs and career change. New posts every Wednesday.</p>
      </section>

      {/* Categories */}
      <section className="max-w-4xl mx-auto px-6 mb-12 flex flex-wrap gap-2 justify-center">
        {categories.map((c, i) => (
          <button key={c} className={`text-sm px-4 py-2 rounded-full border transition-colors ${i === 0 ? 'bg-charcoal text-cream border-charcoal' : 'bg-cream text-charcoal border-border hover:border-sage hover:text-sage'}`}>
            {c}
          </button>
        ))}
      </section>

      {/* Featured post */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <Link href="/blog" className="block group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-border rounded-2xl p-8 bg-white hover:shadow-md transition-shadow">
            <div className="aspect-[16/10] bg-sage-light rounded-xl flex items-center justify-center">
              <span className="material-icons text-sage text-7xl">article</span>
            </div>
            <div>
              <span className="inline-block bg-sage-light text-sage text-xs font-semibold px-3 py-1 rounded-full mb-4">Featured · {posts[0].category}</span>
              <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-4 leading-tight group-hover:text-sage transition-colors">{posts[0].title}</h2>
              <p className="text-muted leading-relaxed mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center gap-3 text-sm text-muted">
                <span>{posts[0].date}</span>
                <span>·</span>
                <span>{posts[0].read}</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Post grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map(p => (
            <Link key={p.title} href="/blog" className="block group bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
              <span className="inline-block bg-sage-light text-sage text-xs font-semibold px-3 py-1 rounded-full mb-4">{p.category}</span>
              <h3 className="font-serif text-xl text-charcoal mb-3 leading-snug group-hover:text-sage transition-colors">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{p.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-muted">
                <span>{p.date}</span>
                <span>·</span>
                <span>{p.read}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
