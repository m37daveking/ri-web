"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="py-20 md:py-24 px-6 md:px-12 relative overflow-hidden bg-[var(--background-secondary)]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/5 via-transparent to-[#334155]/5" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-sm text-[var(--foreground)] mb-4 tracking-wider">
                OUR PHILOSOPHY
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 text-[var(--foreground)]">
                The Future is Here,
                <br />
                Unevenly Practiced.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-[var(--foreground-muted)] leading-relaxed"
            >
              <p>
                The AI capabilities your organisation needs already exist. This is capability
                overhang—the gap between what's possible and what's actually being put to work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <Link
                href="/philosophy"
                className="inline-flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors group"
              >
                <span>Read More</span>
                <svg
                  width="16"
                  height="16"
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
          </div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-2xl overflow-hidden max-w-[280px] mx-auto lg:mx-0">
              <Image
                src="/images/path-02_01.png"
                alt="AI Transformation"
                width={280}
                height={350}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
