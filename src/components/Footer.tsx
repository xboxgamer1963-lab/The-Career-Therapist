import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full py-16 border-t border-slate-200 transition-all">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="inline-block mb-6">
            <img
              src="/logo.png"
              alt="The Career Therapist — Career Coach Aisha"
              className="h-16 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </Link>
          <p className="text-slate-700 font-sans text-sm tracking-wide leading-relaxed">
            1-on-1 career coaching with Aisha — a coach with an HR background, helping professionals find jobs, earn promotions, and change careers with real insider knowledge.
          </p>
        </div>

        <div className="col-span-1">
          <h4 className="font-serif font-bold text-slate-900 mb-6">Coaching</h4>
          <ul className="space-y-3">
            <li><Link href="/coaching" className="text-slate-700 text-sm hover:underline decoration-secondary-container underline-offset-4 opacity-80 hover:opacity-100">1-on-1 Coaching</Link></li>
            <li><Link href="/job-search-coaching" className="text-slate-700 text-sm hover:underline decoration-secondary-container underline-offset-4 opacity-80 hover:opacity-100">Job Search</Link></li>
            <li><Link href="/get-promoted" className="text-slate-700 text-sm hover:underline decoration-secondary-container underline-offset-4 opacity-80 hover:opacity-100">Get Promoted</Link></li>
            <li><Link href="/laid-off" className="text-slate-700 text-sm hover:underline decoration-secondary-container underline-offset-4 opacity-80 hover:opacity-100">Laid Off?</Link></li>
            <li><Link href="/career-change" className="text-slate-700 text-sm hover:underline decoration-secondary-container underline-offset-4 opacity-80 hover:opacity-100">Career Change</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-serif font-bold text-slate-900 mb-6">Resources</h4>
          <ul className="space-y-3">
            <li><Link href="/club" className="text-slate-700 text-sm hover:underline decoration-secondary-container underline-offset-4 opacity-80 hover:opacity-100">The Career Alignment Club</Link></li>
            <li><Link href="/free-course" className="text-slate-700 text-sm hover:underline decoration-secondary-container underline-offset-4 opacity-80 hover:opacity-100">Free 5-Day Course</Link></li>
            <li><Link href="/subscribe" className="text-slate-700 text-sm hover:underline decoration-secondary-container underline-offset-4 opacity-80 hover:opacity-100">Weekly Newsletter</Link></li>
            <li><Link href="/blog" className="text-slate-700 text-sm hover:underline decoration-secondary-container underline-offset-4 opacity-80 hover:opacity-100">Career Blog</Link></li>
            <li><Link href="/faq" className="text-slate-700 text-sm hover:underline decoration-secondary-container underline-offset-4 opacity-80 hover:opacity-100">FAQ</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-serif font-bold text-slate-900 mb-6">Get in Touch</h4>
          <ul className="space-y-3 mb-4">
            <li><Link href="/about" className="text-slate-700 text-sm hover:underline decoration-secondary-container underline-offset-4 opacity-80 hover:opacity-100">About Aisha</Link></li>
            <li><Link href="/contact" className="text-slate-700 text-sm hover:underline decoration-secondary-container underline-offset-4 opacity-80 hover:opacity-100">Book a Free Call</Link></li>
          </ul>
          <p className="text-slate-700 font-sans text-sm tracking-wide">
            hello@thecareertherapist.com
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-outline-variant/10">
        <p className="text-slate-700 font-sans text-sm tracking-wide text-center md:text-left">
          © {new Date().getFullYear()} The Career Therapist · Career coaching with Aisha. Sessions held online, worldwide.
        </p>
      </div>
    </footer>
  );
}
