"use client";

import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="py-12">
      <div className="container">
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="mailto:hello@radicalintelligence.com?subject=Newsletter%20Subscription"
            className="text-body text-foreground-muted hover:text-foreground transition-colors"
          >
            Get the latest in your inbox →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
