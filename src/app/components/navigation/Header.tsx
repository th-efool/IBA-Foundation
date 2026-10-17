"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { CommonGroundLogo } from "@/src/app/components/brand/CommonGroundLogo";

interface HeaderProps {
  activePage?: "challenges" | "programs" | "fellowship" | "values";
}

const navLinks = [
  { href: "/programs", label: "Programs", id: "programs" },
  { href: "/challenges", label: "Challenges", id: "challenges" },
  { href: "/fellowship", label: "Fellowship", id: "fellowship" },
  { href: "/values", label: "Values", id: "values" },
];

export function Header({ activePage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0D0C0A]/90 backdrop-blur-md transition-all">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 rounded-lg bg-[#DFB17B] px-4 py-2 text-sm font-semibold text-black shadow-2xl transition-all"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Official IBA Foundation Brand Mark (03 / COMMON GROUND) */}
        <CommonGroundLogo
          href="/"
          size="md"
          theme="dark"
          className="transition-transform duration-200 hover:scale-[1.02]"
        />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
          <ul className="flex items-center gap-7 lg:gap-9">
            {navLinks.map((item) => {
              const isActive = activePage === item.id;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative text-sm font-sans tracking-wide transition-colors duration-200 py-1 ${
                      isActive
                        ? "text-[#DFB17B] font-medium"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#DFB17B] rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/challenges#submit"
            className="text-xs font-mono tracking-wider uppercase text-white/70 hover:text-white transition-colors"
          >
            Submit Solution
          </Link>
          <Link
            href="/challenges#register"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#DFB17B] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition-all duration-200 hover:bg-[#CFA066] hover:shadow-[0_0_20px_rgba(223,177,123,0.3)] active:scale-95"
          >
            <span>Register Now</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#DFB17B]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#161512] px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((item) => {
              const isActive = activePage === item.id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-1 transition-colors ${
                    isActive ? "text-[#DFB17B]" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/challenges#submit"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-wider uppercase text-white/70 hover:text-white py-1"
              >
                Submit Solution
              </Link>
              <Link
                href="/challenges#register"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#DFB17B] px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-[#CFA066]"
              >
                <span>Register for Challenge</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
