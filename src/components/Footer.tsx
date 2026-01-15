"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container pb-24" style={{ paddingTop: '80px' }}>
        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Logo - vertically centered */}
          <div className="flex items-center">
            <Link href="/" className="block">
              <Image
                src="/RI-logo3.png"
                alt="Radical Intelligence"
                width={200}
                height={50}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-16">
            {/* Explore */}
            <div>
              <p className="text-label text-xs mb-4">EXPLORE</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/#framework" className="text-body hover:text-foreground transition-colors">
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link href="/#offerings" className="text-body hover:text-foreground transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/perspectives/manifesto" className="text-body hover:text-foreground transition-colors">
                    Manifesto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-label text-xs mb-4">COMPANY</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/work" className="text-body hover:text-foreground transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/perspectives" className="text-body hover:text-foreground transition-colors">
                    Perspectives
                  </Link>
                </li>
                <li>
                  <a href="mailto:hello@radicalintelligence.com" className="text-body hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="text-label text-xs mb-4">CONNECT</p>
              <ul className="space-y-2">
                <li>
                  <a href="https://linkedin.com/company/radical-intelligence" target="_blank" rel="noopener noreferrer" className="text-body hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/radical-intelligence" target="_blank" rel="noopener noreferrer" className="text-body hover:text-foreground transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8">
          <p className="text-label text-xs text-foreground-muted">
            © {new Date().getFullYear()} Radical Intelligence. All rights reserved.
          </p>
          <a
            href="mailto:hello@radicalintelligence.com"
            className="text-label text-xs hover:text-foreground transition-colors"
          >
            hello@radicalintelligence.com
          </a>
        </div>
      </div>
    </footer>
  );
}
