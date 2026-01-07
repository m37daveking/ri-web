"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-heading-md mb-4">
            Let&apos;s talk about what&apos;s possible.
          </h3>
          <p className="text-body-lg text-foreground-muted mb-12">
            Not sure where to start? Most organisations begin with a Sight engagement —
            a few weeks to map the landscape and identify where AI creates real leverage for you.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:hello@radicalintelligence.com" className="btn-pill">
              Start the conversation
            </a>
            <Link href="/work" className="btn-outline">
              See our work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
