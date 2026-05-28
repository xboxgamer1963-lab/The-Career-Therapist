export type BlogPost = {
  slug: string
  title: string
  seoTitle: string
  excerpt: string
  metaDescription: string
  category: string
  date: string
  readTime: string
}

export const posts: BlogPost[] = [
  {
    slug: 'how-to-land-your-dream-job',
    title: 'How to Land Your Dream Job in 2026: The Complete Step-by-Step Guide',
    seoTitle: 'How to Land Your Dream Job in 2026 | Complete Career Guide',
    excerpt:
      'Proven strategies for resumes, interviews, networking, LinkedIn optimization, salary negotiation, and long-term career growth — written for the way hiring actually works in 2026.',
    metaDescription:
      'Learn how to land your dream job with proven strategies for resumes, interviews, networking, LinkedIn optimization, salary negotiation, and career growth in 2026.',
    category: 'Job Search',
    date: '2026-05-28',
    readTime: '18 min read',
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
