import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import FinalCTA from '@/components/FinalCTA'
import { posts, getPost, formatDate } from '../posts'
import HowToLandYourDreamJob, { faqs as howToLandFaqs } from '../_posts/HowToLandYourDreamJob'

const SITE_URL = 'https://mycareertherapist.com'

const contentMap: Record<
  string,
  { Component: React.ComponentType; faqs: { q: string; a: string }[] }
> = {
  'how-to-land-your-dream-job': {
    Component: HowToLandYourDreamJob,
    faqs: howToLandFaqs,
  },
}

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  const url = `${SITE_URL}/blog/${post.slug}`
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.metaDescription,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  const entry = contentMap[slug]
  if (!post || !entry) notFound()

  const { Component, faqs } = entry
  const url = `${SITE_URL}/blog/${post.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: 'Aisha — My Career Therapist' },
    publisher: {
      '@type': 'Organization',
      name: 'My Career Therapist',
      url: SITE_URL,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="max-w-3xl mx-auto px-6 pt-16 pb-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-sage hover:underline mb-8"
        >
          <span className="material-icons text-base">arrow_back</span>
          Back to all articles
        </Link>

        <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-4">
          {post.category}
        </p>
        <h1 className="font-serif italic text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-muted border-b border-border pb-8 mb-12">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <Component />
      </article>

      <FinalCTA />
    </>
  )
}
