import Link from 'next/link'
import FinalCTA from '@/components/FinalCTA'
import { posts, formatDate } from './posts'

export default function Blog() {
  const [featured, ...rest] = posts

  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Career Blog</p>
        <h1 className="font-serif italic text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
          Practical career advice — from someone who&apos;s been on both sides of the table.
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          Honest, experience-led articles on jobs, promotions, salary, layoffs and career change.
        </p>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <Link href={`/blog/${featured.slug}`} className="block group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-border rounded-2xl p-8 bg-white hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] bg-sage-light rounded-xl flex items-center justify-center">
                <span className="material-icons text-sage text-7xl">article</span>
              </div>
              <div>
                <span className="inline-block bg-sage-light text-sage text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Featured · {featured.category}
                </span>
                <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-4 leading-tight group-hover:text-sage transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <span>{formatDate(featured.date)}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sage group-hover:underline">
                  Read article <span className="material-icons text-sm">arrow_forward</span>
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Post grid (shows once there's more than one post) */}
      {rest.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(p => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="block group bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <span className="inline-block bg-sage-light text-sage text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {p.category}
                </span>
                <h3 className="font-serif text-xl text-charcoal mb-3 leading-snug group-hover:text-sage transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{p.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span>{formatDate(p.date)}</span>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Spacer when there's only a featured post */}
      {rest.length === 0 && <div className="pb-16" />}

      <FinalCTA />
    </>
  )
}
