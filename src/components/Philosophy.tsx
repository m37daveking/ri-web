"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    title: "Practice Together",
    description: "We don't build for you. We build with you. Progressive handover from hands-on to hands-off.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Capability Transfer",
    description: "When we leave, you're more capable, not more dependent. That's the measure of success.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Compounding Returns",
    description: "Every engagement makes your organisation more intelligent. The flywheel spins faster over time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </svg>
    ),
  },
  {
    title: "Technical Honesty",
    description: "We tell you what AI can actually do today — not what the hype suggests. Grounded, real, practical.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden bg-[var(--background-secondary)]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/5 via-transparent to-[#334155]/5" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left column - Main content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-sm text-[var(--accent)] mb-4 tracking-wider">
                OUR PHILOSOPHY
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 text-[var(--foreground)]">
                The antidote to
                <br />
                transformation theatre.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-[var(--foreground-muted)] leading-relaxed"
            >
              <p>
                AI isn't just another technological cycle — it is The Moment. A rare inflection
                where capability is outpacing comprehension, enterprises are overwhelmed, and the
                old consulting model is breaking under its own theatre.
              </p>
              <p>
                Our enemy is slide decks, PoCs that go nowhere, "innovation" teams that block
                innovation, and consultancies selling armies of juniors. We build real systems.
                We transfer real capability. We stay for what comes next.
              </p>
            </motion.div>

            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <div className="aspect-video rounded-2xl image-placeholder overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-sm text-[var(--foreground-subtle)]">Team / process image</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Principles */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-mono text-xs text-[var(--foreground-subtle)] mb-8 tracking-wider"
            >
              OUR PRINCIPLES
            </motion.p>

            <div className="space-y-4">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group p-6 bg-white border border-[var(--border)] rounded-xl shadow-sm hover:shadow-lg hover:border-[var(--accent)] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#0f172a] to-[#334155] text-white flex-shrink-0">
                      {principle.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-medium group-hover:text-[var(--accent)] transition-colors">
                          {principle.title}
                        </h3>
                        <span className="font-mono text-xs text-[var(--foreground-subtle)]">0{index + 1}</span>
                      </div>
                      <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
