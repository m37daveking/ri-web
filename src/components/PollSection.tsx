"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PollSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Blockquote */}
          <motion.blockquote
            className="text-heading-lg mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">Clarity is the new bottleneck.</span>
            <span className="block text-foreground-muted">AI capability is everywhere.</span>
            <span className="block text-foreground-muted">Knowing where to apply it is rare.</span>
          </motion.blockquote>

          {/* Content */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-body">
              Every organisation understands there&apos;s a stack of possibility in AI.
              The companies that are pulling ahead aren&apos;t the ones with the biggest AI budgets.
              They&apos;re the ones who&apos;ve figured out which workflows actually matter, which roles
              should transform first, and which use cases compound into real advantage.
            </p>
            <p className="text-body">
              Engineering capacity is no longer the constraint. The constraint is strategic
              clarity — understanding your business deeply enough to know where AI creates
              leverage versus theatre. That&apos;s the work we help you do.
            </p>
          </motion.div>

          {/* Question box */}
          <motion.div
            className="bg-white rounded-2xl p-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-heading-sm text-center">
              What do you know so well that software has been waiting for you to encode it?
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/perspectives/manifesto" className="link-arrow text-nav">
              Read the full manifesto
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
