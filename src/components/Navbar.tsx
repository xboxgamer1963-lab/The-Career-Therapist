"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Expertise", href: "/expertise" },
  { name: "About Us", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/50 transition-all rounded-[2rem] w-full max-w-5xl">
        <div className="flex justify-between items-center px-6 py-3">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="The Career Therapist Logo" className="h-12 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-serif font-bold tracking-tight text-[15px] transition-colors relative",
                    isActive
                      ? "text-primary"
                      : "text-slate-500 hover:text-primary"
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

          <Link 
            href="/contact"
            className="bg-primary text-white px-6 py-2.5 rounded-full font-bold tracking-wide text-sm hover:scale-105 duration-300 ease-out shadow-md"
          >
            Partner With Us
          </Link>
        </div>
      </nav>
    </div>
  );
}
