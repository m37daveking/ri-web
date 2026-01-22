"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section
      id="hero"
      className="flex flex-col justify-center relative pt-24 md:pt-28 pb-20 md:pb-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Main headline - very large */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.95] tracking-tight mb-8 md:mb-12 text-[var(--foreground)]"
        >
          We Build<br />AI Capability.
        </motion.h1>

        {/* Subhead with image */}
        <div className="flex flex-col lg:flex-row justify-end items-start lg:items-end gap-6 lg:gap-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full lg:w-56 xl:w-64 flex-shrink-0 order-2 lg:order-1"
          >
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/images/womangreen.jpg"
                alt="AI Transformation"
                width={280}
                height={350}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-xl order-1 lg:order-2"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-[var(--foreground-muted)] leading-relaxed mb-8">
              Possibility has outpaced adoption. We help you close the AI gap across people, process and product.
            </p>

            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-3 text-[var(--foreground)] font-medium text-lg group"
            >
              <span>Get in touch</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="group-hover:translate-x-2 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Contact Panel - slides in from right */}
      <AnimatePresence>
        {isContactOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
              onClick={() => setIsContactOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-lg bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-8 md:p-10">
                {/* Close button */}
                <button
                  onClick={() => setIsContactOpen(false)}
                  className="absolute top-4 right-4 p-2 text-[var(--foreground-subtle)] hover:text-[var(--foreground)] transition-colors rounded-full hover:bg-[var(--background-secondary)]"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>

                <h3 className="text-2xl font-light mb-2 mt-8">Let's talk about what's possible.</h3>
                <p className="text-sm text-[var(--foreground-muted)] mb-8">
                  Not sure where to start? Most organisations begin with a Strategy engagement — a few
                  weeks to map the landscape and identify where AI creates real leverage for you.
                </p>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                  />
                  <select className="w-full px-4 py-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all">
                    <option value="">What brings you here?</option>
                    <option value="strategy">Strategy engagement</option>
                    <option value="execution">Execution sprint</option>
                    <option value="cultivation">Cultivation retainer</option>
                    <option value="exploring">Just exploring</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    placeholder="Message (optional)"
                    rows={4}
                    className="w-full px-4 py-3 bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[var(--accent)] text-black font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all"
                  >
                    Start the conversation
                  </button>
                </form>

                <p className="mt-8 text-center text-sm text-[var(--foreground-subtle)]">
                  Or email us directly at{" "}
                  <a href="mailto:hello@radicalintelligence.com" className="text-[var(--foreground)] hover:underline">
                    hello@radicalintelligence.com
                  </a>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
