"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Work With Me", href: "/coaching" },
  { name: "Job Search", href: "/job-search-coaching" },
  { name: "Get Promoted", href: "/get-promoted" },
  { name: "Laid Off?", href: "/laid-off" },
  { name: "Career Change", href: "/career-change" },
  { name: "The Club", href: "/club" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/50 transition-all rounded-[2rem] w-full max-w-7xl">
        <div className="flex justify-between items-center px-5 py-3">
          <Link href="/" className="flex items-center shrink-0">
            <img src="/logo.png" alt="The Career Therapist — Career Coach Aisha" className="h-11 w-auto object-contain" />
          </Link>

          <div className="hidden xl:flex gap-6 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-serif font-bold tracking-tight text-[14px] transition-colors relative whitespace-nowrap",
                    isActive ? "text-primary" : "text-slate-500 hover:text-primary"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-secondary-container rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-block bg-primary text-white px-5 py-2.5 rounded-full font-bold tracking-wide text-sm hover:scale-105 duration-300 ease-out shadow-md whitespace-nowrap"
            >
              Book a Free Call
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="xl:hidden p-2 text-primary"
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="xl:hidden border-t border-slate-200/50 px-5 py-4 flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "font-serif font-bold text-[15px] py-1",
                    isActive ? "text-primary" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-primary text-white px-5 py-3 rounded-full font-bold text-sm text-center"
            >
              Book a Free Call
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
