"use client";

import Link from "next/link";
import Image from "next/image";

const exploreLinks = [
  { label: "What We Do", href: "/#framework" },
  { label: "How We Work", href: "/#offerings" },
  { label: "Philosophy", href: "/#philosophy" },
];

const aboutLinks = [
  { label: "Work", href: "/work" },
  { label: "Perspectives", href: "/perspectives" },
  { label: "Contact", href: "mailto:hello@radicalintelligence.com" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/radical-intelligence" },
  { label: "GitHub", href: "https://github.com/radical-intelligence" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container py-16">
        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Logo and tagline */}
          <div className="max-w-sm">
            <Link href="/" className="block mb-4">
              <Image
                src="/RI-logo3.png"
                alt="Radical Intelligence"
                width={200}
                height={50}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-body text-foreground-muted">
              Capability that compounds. AI transformation across People, Process & Product.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-16">
            {/* Explore */}
            <div>
              <p className="text-label text-xs mb-4">EXPLORE</p>
              <ul className="space-y-2">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <p className="text-label text-xs mb-4">COMPANY</p>
              <ul className="space-y-2">
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("mailto:") ? (
                      <a
                        href={link.href}
                        className="text-body hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-body hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="text-label text-xs mb-4">CONNECT</p>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-label text-xs text-foreground-muted">
            © {new Date().getFullYear()} Radical Intelligence. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@radicalintelligence.com"
              className="text-label text-xs hover:text-foreground transition-colors"
            >
              hello@radicalintelligence.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
