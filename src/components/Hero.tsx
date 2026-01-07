"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-24">
      {/* Main content */}
      <div className="relative z-10 container">
        <div className="flex flex-col items-center text-center">
          {/* Label */}
          <motion.p
            className="text-label mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            THE AI TRANSFORMATION COMPANY
          </motion.p>

          {/* Massive headline */}
          <motion.h1
            className="text-display mb-8 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Make AI actually work.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="text-body-lg mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Capability that compounds. Embedded across your people, processes and products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="#framework" className="btn-pill">
              See how we work
            </Link>
            <Link href="#offerings" className="btn-outline">
              Our services
            </Link>
          </motion.div>

          {/* Hero image placeholder */}
          <motion.div
            className="relative aspect-video w-full max-w-4xl rounded-lg overflow-hidden bg-neutral-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Floating card */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur rounded-lg px-6 py-4">
              <p className="text-label text-xs mb-1">AI TRANSFORMATION</p>
              <p className="text-body font-medium">Sight → Capability → Sustenance</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
