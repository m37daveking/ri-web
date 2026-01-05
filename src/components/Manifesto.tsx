"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] via-white to-white" />

      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="aspect-[3/4] rounded-2xl image-placeholder overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-[var(--foreground-subtle)]">Manifesto visual</p>
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/10 to-transparent" />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <div className="lg:col-span-3">
            {/* Pull quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="inline-block mb-6">
                <span className="text-6xl md:text-7xl gradient-text font-serif leading-none">"</span>
              </div>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-[var(--foreground)]">
                The bottleneck has moved upstream.
                <br />
                <span className="text-[var(--foreground-muted)]">
                  Most people can now build.
                  <br />
                  Very few can decide what should exist.
                </span>
              </blockquote>
            </motion.div>

            {/* Manifesto text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5 text-[var(--foreground-muted)] leading-relaxed"
            >
              <p>
                For twenty years, advantage came from owning capital, hiring engineers, and scaling infrastructure.
              </p>
              <p>
                In 2026, advantage comes from understanding a workflow better than anyone, encoding taste
                and judgment, and earning trust before code exists.
              </p>
              <p>
                Coding agents have moved the bottleneck upstream — into clarity. The winners won't be the
                ones who ship fastest. They'll be the ones who pick the right constraint, obsess over one
                problem, and turn tribal knowledge into leverage.
              </p>
            </motion.div>

            {/* Closing question */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 p-6 bg-gradient-to-r from-[#0f172a]/5 to-[#334155]/5 rounded-xl border border-[#0f172a]/10"
            >
              <p className="text-lg md:text-xl text-[var(--foreground)] font-light italic">
                What do you know so well that software has been waiting for you to encode it?
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8"
            >
              <a
                href="/perspectives/manifesto"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-[var(--border)] rounded-lg shadow-sm hover:shadow-md hover:border-[var(--accent)] transition-all group"
              >
                <span className="font-medium text-[var(--foreground)]">Read the full manifesto</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-[var(--accent)] group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
