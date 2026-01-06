"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative pt-32 md:pt-40 px-6 md:px-12 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute top-20 right-[20%] w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] animate-float"
        style={{ background: "linear-gradient(135deg, #94a3b8 0%, #475569 100%)" }}
      />
      <div
        className="absolute bottom-20 left-[10%] w-[300px] h-[300px] rounded-full opacity-10 blur-[80px]"
        style={{ background: "linear-gradient(135deg, #64748b 0%, #94a3b8 100%)", animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Pre-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-sm text-[var(--accent)] mb-6 tracking-wider"
            >
              THE AI TRANSFORMATION COMPANY
            </motion.p>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-tight mb-8 text-[var(--foreground)]"
            >
              Closing the gap between what AI can do and what you're doing with it.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-[var(--foreground-muted)] max-w-xl mb-10 leading-relaxed"
            >
              Capability that compounds. Embedded across your people, processes and products.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#framework"
                className="inline-flex items-center gap-3 px-6 py-3 gradient-bg text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all group"
              >
                <span>See how we work</span>
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
              <a
                href="#offerings"
                className="inline-flex items-center gap-3 px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                Our services
              </a>
            </motion.div>

          </div>

          {/* Right side - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/3] max-w-md ml-auto rounded-2xl overflow-hidden">
              <Image
                src="/images/1.jpg"
                alt="AI Transformation"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-[var(--border)]"
            >
              <p className="font-mono text-[10px] text-[var(--foreground-subtle)] mb-0.5">AI TRANSFORMATION</p>
              <p className="text-base font-light">Sight → Capability → Sustenance</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator text-[var(--foreground-subtle)]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
