"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
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
          Close the AI gap
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
              Possibility has outpaced adoption. As your AI transformation partner, we help you see where AI creates real leverage, build the capability to act on it, and stay with you as it evolves.
            </p>

            <a
              href="#framework"
              className="inline-flex items-center gap-3 text-[var(--foreground)] font-medium text-lg group"
            >
              <span>See how we work</span>
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
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
