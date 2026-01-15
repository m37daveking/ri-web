"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "What We Do", href: "/#framework" },
  { label: "Services", href: "/#offerings" },
  { label: "RIOS", href: "/rios" },
  { label: "Manifesto", href: "/perspectives/manifesto" },
  { label: "Our Work", href: "/work" },
  { label: "Perspectives", href: "/perspectives" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Floating pill header - centered, always static */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-8 bg-white rounded-full pl-10 pr-6 py-3 shadow-sm border border-neutral-100">
          {/* Logo */}
          <Link href="/" className="block translate-x-5">
            <Image
              src="/RI-logo3.png"
              alt="Radical Intelligence"
              width={140}
              height={32}
              className="h-6 w-auto object-contain"
            />
          </Link>

          {/* Hamburger / Close menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 hover:opacity-60 transition-opacity translate-y-0.5"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#31fe6a"
              strokeWidth="2"
              className="transition-transform duration-300"
              style={{ transform: isMenuOpen ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Dropdown menu - animates below the pill */}
        <div
          className={`
            absolute top-full left-1/2 -translate-x-1/2 mt-4
            bg-white rounded-3xl shadow-lg border border-neutral-100
            overflow-hidden transition-all duration-300 ease-out
            ${isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
            }
          `}
          style={{ width: "min(90vw, 800px)" }}
        >
          <div className="p-8">
            {/* Nav links */}
            <nav className="flex flex-col gap-3 mb-8 pt-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-normal tracking-tight hover:opacity-60 transition-all duration-300"
                  style={{
                    fontFamily: 'var(--font-sans), system-ui, sans-serif',
                    color: '#004051',
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? "translateY(0)" : "translateY(10px)"
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Bottom row */}
            <div
              className="flex items-center justify-between pt-6 border-t border-neutral-100 transition-all duration-300"
              style={{
                transitionDelay: isMenuOpen ? "250ms" : "0ms",
                opacity: isMenuOpen ? 1 : 0
              }}
            >
              <p className="text-sm text-neutral-500">The AI transformation company</p>
              <p className="text-sm text-neutral-500">Disrupt yourself</p>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black/20 z-40 transition-opacity duration-300
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
}
