"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  "AI Readiness Assessment",
  "Use Case Library",
  "Intelligent Recommendations",
  "Transformation Roadmap",
];

export default function FeaturesSection() {
  return (
    <section id="rios" className="section bg-background-warm">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-label mb-4">OUR PLATFORM</p>
            <h2 className="text-heading-lg mb-6">
              RIOS
            </h2>
            <p className="text-body-lg text-foreground-muted mb-8">
              The Radical Intelligence Operating System is a comprehensive platform that guides your AI transformation from
              initial assessment through to a prioritised roadmap tailored to
              your unique context.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2"
                  >
                    <path d="M9 11l3 3L22 4" />
                  </svg>
                  <span className="text-sm text-foreground-muted">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Link href="/rios" className="btn-pill">
                Explore RIOS
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Platform visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/rios" className="block group">
              <div className="relative">
                {/* Main platform image */}
                <div className="aspect-[1794/908] rounded-2xl overflow-hidden shadow-xl border border-[var(--border)] group-hover:shadow-2xl group-hover:border-[var(--accent)]/30 transition-all duration-300">
                  <Image
                    src="/images/rios-image.png"
                    alt="RIOS Dashboard"
                    width={1794}
                    height={908}
                    className="w-full h-full object-contain bg-white group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-[var(--border)]"
                >
                  <p className="text-sm font-medium text-foreground">
                    Assess. Discover. Plan.
                  </p>
                </motion.div>

                {/* Decorative blur */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[var(--accent)]/10 rounded-full blur-2xl -z-10" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
