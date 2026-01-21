"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const footerLinks = [
  { label: "What We Do", href: "/#framework" },
  { label: "How We Work", href: "/#philosophy" },
  { label: "Work", href: "/work" },
  { label: "Perspectives", href: "/perspectives" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/radical-intelligence" },
  { label: "GitHub", href: "https://github.com/radical-intelligence" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="py-16 md:py-24 px-6 md:px-12 bg-[var(--background-secondary)] border-t border-[var(--border)]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <a href="/" className="inline-block mb-4">
              <Image
                src="/RI-logo3.png"
                alt="Radical Intelligence"
                width={200}
                height={50}
              />
            </a>
            <p className="text-[var(--foreground-muted)] text-sm mb-6 max-w-xs">
              Capability that compounds. AI transformation across People, Process & Product.
            </p>
            <a
              href="mailto:hello@radicalintelligence.com"
              className="inline-flex items-center gap-2 text-sm text-[var(--foreground)] hover:underline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hello@radicalintelligence.com
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-mono text-xs text-[var(--foreground-subtle)] mb-4 tracking-wider">
              NAVIGATE
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-mono text-xs text-[var(--foreground-subtle)] mb-4 tracking-wider">
              CONNECT
            </p>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-[var(--foreground-subtle)]">
            © {new Date().getFullYear()} Radical Intelligence. All rights reserved.
          </p>

          {/* Back to top */}
          <a
            href="/#hero"
            className="flex items-center gap-2 px-4 py-2 text-xs text-[var(--foreground-subtle)] hover:text-[var(--accent)] bg-white border border-[var(--border)] rounded-full hover:shadow-sm transition-all group"
          >
            <span>Back to top</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:-translate-y-0.5 transition-transform"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
