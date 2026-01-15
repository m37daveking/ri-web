"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="pt-12 pb-18">
      <div className="container">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Main intro text */}
          <p className="text-body-lg mb-12">
            AI capability has outpaced our collective understanding of what&apos;s possible.
            Every organisation senses there&apos;s more they could be doing, but the gap between
            what AI can do and knowing where to apply it has never been wider. We exist to close that gap with you.
          </p>

          {/* Our story video button */}
          <button className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-[#004051] flex items-center justify-center group-hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <span className="text-nav">Our story</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
