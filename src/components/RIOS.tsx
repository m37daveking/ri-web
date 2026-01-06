"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "AI Readiness Assessment",
    description: "Multi-dimensional assessment across Strategy, Data, Technology, Talent, Governance, and Culture.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Use Case Library",
    description: "Comprehensive database of AI use cases categorized by industry, function, and technology type.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8M8 11h6" />
      </svg>
    ),
  },
  {
    title: "Intelligent Recommendations",
    description: "AI-powered engine that matches use cases to your organisation's readiness and priorities.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Transformation Roadmap",
    description: "Visual portfolio management to prioritize, sequence, and track your AI initiatives.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" />
        <path d="M18 17V9M13 17V5M8 17v-3" />
      </svg>
    ),
  },
];

export default function RIOS() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rios" className="pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#0f172a]/3 to-white" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
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
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            A comprehensive AI transformation platform that guides organisations from initial
            assessment through to working systems that transform how you operate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Platform visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main platform image */}
              <div className="aspect-[1794/908] rounded-2xl overflow-hidden shadow-xl border border-[var(--border)]">
                <Image
                  src="/images/rios-image.png"
                  alt="RIOS Dashboard"
                  width={1794}
                  height={908}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Floating card - Readiness score */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-[var(--border)]"
              >
                <p className="font-mono text-xs text-[var(--foreground-subtle)] mb-1">READINESS SCORE</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-light text-[var(--accent)]">44</span>
                  <span className="text-sm text-[var(--foreground-muted)] mb-1">/ 100</span>
                </div>
                <p className="text-xs text-[var(--foreground-subtle)]">Developing</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group flex items-start gap-4 p-5 bg-white border border-[var(--border)] rounded-xl shadow-sm hover:shadow-md hover:border-[var(--accent)] transition-all"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#0f172a] to-[#334155] text-white flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-medium mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 gradient-bg text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all group"
            >
              <span>Request a demo</span>
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
            </a>
            <p className="text-sm text-[var(--foreground-subtle)]">
              or email us at{" "}
              <a href="mailto:hello@radicalintelligence.com" className="text-[var(--accent)] hover:underline">
                hello@radicalintelligence.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
