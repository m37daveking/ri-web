"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI Readiness Assessment",
    description:
      "Multi-dimensional assessment across Strategy, Data, Technology, Talent, Governance, and Culture.",
  },
  {
    title: "Use Case Library",
    description:
      "Comprehensive database of AI use cases categorized by industry, function, and technology type.",
  },
  {
    title: "Transformation Roadmap",
    description:
      "Visual portfolio management to prioritize, sequence, and track your AI initiatives.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="rios" className="section bg-background-warm">
      <div className="container">
        {/* Section heading */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-label mb-4">OUR PLATFORM</p>
          <h2 className="text-heading-lg mb-8">
            RIOS: The Radical Intelligence Operating System.
          </h2>
          <p className="text-body-lg text-foreground-muted">
            A comprehensive AI transformation platform that guides organisations from initial assessment of their RIQ through to an AI roadmap.
          </p>
        </motion.div>

        {/* Features - clean line-based layout */}
        <div className="border-t border-neutral-300">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-[120px_1fr_2fr] gap-8 py-10 border-b border-neutral-300 items-baseline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-label text-foreground-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-heading-sm">{feature.title}</h3>
              <p className="text-body text-foreground-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
