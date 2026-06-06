import Link from 'next/link'
import Image from 'next/image'
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
        <p className="text-lg text-muted leading-relaxed mb-6">
          Honest, experience-led articles on jobs, promotions, salary, layoffs and career change.
        </p>
        <p className="text-sm text-muted">
          Long-form essays here. Shorter weekly playbooks go out by email —{' '}
          <Link href="/subscribe" className="text-sage font-medium hover:underline">join the newsletter</Link>.
        </p>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <Link href={`/blog/${featured.slug}`} className="block group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border border-border rounded-2xl p-8 bg-white hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10] bg-sage-light rounded-xl overflow-hidden">
                <Image
                  src={featured.coverImage}
                  alt={featured.coverImageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
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
                className="block group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[16/10] bg-sage-light">
                  <Image
                    src={p.coverImage}
                    alt={p.coverImageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
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
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* When there's only the featured post, funnel readers to the newsletter
          — fresher cadence than the blog. */}
      {rest.length === 0 && (
        <section className="max-w-3xl mx-auto px-6 pb-20">
          <div className="bg-cream border border-border rounded-2xl p-8 md:p-10 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sage mb-3">More coming</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3 leading-tight">
              The weekly playbook lands in your inbox.
            </h2>
            <p className="text-muted leading-relaxed max-w-xl mx-auto mb-6">
              New essays land here every few weeks. The shorter, sharper stuff — frameworks, scripts, and the
              one move I&apos;d make this week — goes out by email. Free, no fluff.
            </p>
            <Link
              href="/subscribe"
              className="inline-flex items-center gap-2 bg-charcoal text-cream px-7 py-3.5 rounded-full font-medium hover:bg-sage transition-colors"
            >
              Join the Newsletter <span className="material-icons text-base">arrow_right_alt</span>
            </Link>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  )
}
