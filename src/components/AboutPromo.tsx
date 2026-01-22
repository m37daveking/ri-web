"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function AboutPromo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about-promo" className="py-20 md:py-24 px-6 md:px-12 bg-[var(--background-secondary)]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-[var(--foreground)] mb-4 tracking-wider">
              ABOUT RADICAL INTELLIGENCE
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-[var(--foreground)] mb-6">
              Strategy that ships. Engineering that scales.
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              Radical Intelligence is an AI transformation company. We help organisations build lasting AI capability — not just tools, but the skills, processes, and systems to keep evolving.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors group"
            >
              <span>Learn more about us</span>
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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[450px] mx-auto lg:mx-0 lg:ml-auto"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/transpman.png"
              alt="AI Transformation"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
