import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md">
          <Image src="/aisha.jpg" alt="Aisha" fill className="object-cover object-top" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sage mb-3">Hi, I&apos;m Aisha</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
            Your career coach with an insider edge.
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>I spent years working in HR and recruiting, reading thousands of resumes, sitting in on hiring decisions, and watching brilliant professionals get overlooked for jobs and promotions they absolutely deserved — often for reasons that were entirely fixable.</p>
            <p>Now I work 1-on-1 with professionals at every stage of their career: people who want to land a better job, finally get the promotion they&apos;ve earned, survive a layoff and come out stronger, or make a career change without starting from zero.</p>
            <p>I know what employers are actually looking for. And I know how to help you give it to them — on your terms.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
