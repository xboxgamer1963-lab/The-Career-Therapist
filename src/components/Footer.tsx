import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full py-16 border-t border-slate-200 transition-all">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="inline-block mb-6">
            <img src="/logo.png" alt="The Career Therapist Logo" className="h-16 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
          </Link>
          <p className="text-slate-700 font-sans text-sm tracking-wide leading-relaxed">
            A partner-focused HR consultancy dedicated to aligning talent with performance through human-centric, data-driven strategies.
          </p>
        </div>

        <div className="col-span-1">
          <h4 className="font-serif font-bold text-slate-900 mb-6">Services</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/expertise" className="text-slate-700 font-sans text-sm tracking-wide hover:underline decoration-secondary-container underline-offset-4 transition-opacity opacity-80 hover:opacity-100">
                Talent Strategy
              </Link>
            </li>
            <li>
              <Link href="/expertise" className="text-slate-700 font-sans text-sm tracking-wide hover:underline decoration-secondary-container underline-offset-4 transition-opacity opacity-80 hover:opacity-100">
                Culture Design
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-serif font-bold text-slate-900 mb-6">Company</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="text-slate-700 font-sans text-sm tracking-wide hover:underline decoration-secondary-container underline-offset-4 transition-opacity opacity-80 hover:opacity-100">
                Our Mission
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-700 font-sans text-sm tracking-wide hover:underline decoration-secondary-container underline-offset-4 transition-opacity opacity-80 hover:opacity-100">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="font-serif font-bold text-slate-900 mb-6">Contact</h4>
          <p className="text-slate-700 font-sans text-sm tracking-wide mb-4">
            hello@thecareertherapist.com
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-700">handshake</span>
            <span className="material-symbols-outlined text-slate-700">forum</span>
            <span className="material-symbols-outlined text-slate-700">verified</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-outline-variant/10">
        <p className="text-slate-700 font-sans text-sm tracking-wide text-center md:text-left">
          © {new Date().getFullYear()} The Career Therapist Consulting. Partnering for Human Excellence.
        </p>
      </div>
    </footer>
  );
}
