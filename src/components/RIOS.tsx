"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  "AI Readiness Assessment",
  "Use Case Library",
  "Intelligent Recommendations",
  "Transformation Roadmap",
];

export default function RIOS() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rios" className="py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[var(--background-secondary)] to-white" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-[var(--accent)] mb-4 tracking-wider">
              OUR PLATFORM
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
              RIOS
              <br />
              <span className="text-xl md:text-2xl lg:text-3xl text-[var(--foreground-muted)]">
                The Radical Intelligence Operating System
              </span>
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8">
              A comprehensive platform that guides your AI transformation from initial assessment
              through to a prioritised roadmap tailored to your unique context.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
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
                  <span className="text-sm text-[var(--foreground-muted)]">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Link
                href="/rios"
                className="inline-flex items-center gap-3 px-6 py-3 gradient-bg text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all group"
              >
                <span>Explore RIOS</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Platform visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
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
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-[var(--border)]"
                >
                  <p className="text-sm font-medium text-[var(--foreground)]">
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
