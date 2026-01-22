"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "Perspectives", href: "/perspectives" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "RIOS", href: "/rios" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-2 md:pt-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <Image
                src="/RI-logo3.png"
                alt="Radical Intelligence"
                width={160}
                height={40}
                className="opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-5 py-2.5 bg-[var(--accent)] text-black text-sm font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Contact
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[var(--foreground)]"
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-b border-[var(--border)] shadow-lg"
            >
              <nav className="px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactOpen(true);
                  }}
                  className="w-full mt-4 px-4 py-3 bg-[var(--accent)] text-black font-medium rounded-lg shadow-md"
                >
                  Contact
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setIsContactOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white border border-[var(--border)] rounded-2xl shadow-2xl p-8 md:p-10 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-4 right-4 p-2 text-[var(--foreground-subtle)] hover:text-[var(--foreground)] transition-colors rounded-full hover:bg-[var(--background-secondary)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-2xl font-light mb-2">Let's talk about what's possible.</h3>
              <p className="text-sm text-[var(--foreground-muted)] mb-8">
                Not sure where to start? Most organisations begin with a Sight engagement — a few
                weeks to map the landscape and identify where AI creates real leverage for you.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                />
                <select className="w-full px-4 py-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all">
                  <option value="">What brings you here?</option>
                  <option value="sight">Sight engagement</option>
                  <option value="capability">Capability building</option>
                  <option value="nurture">Nurture retainer</option>
                  <option value="exploring">Just exploring</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Message (optional)"
                  rows={3}
                  className="w-full px-4 py-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[var(--accent)] text-black font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all"
                >
                  Start the conversation
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-[var(--foreground-subtle)]">
                Or email us directly at{" "}
                <a href="mailto:hello@radicalintelligence.com" className="text-[var(--accent)] hover:underline">
                  hello@radicalintelligence.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
