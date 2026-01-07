"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Practice Together",
    description:
      "We don't build for you. We build with you. Progressive handover from hands-on to hands-off.",
  },
  {
    title: "Capability Transfer",
    description:
      "When we leave, you're more capable, not more dependent. That's the measure of success.",
  },
  {
    title: "Compounding Returns",
    description:
      "Every engagement makes your organisation more intelligent. The flywheel spins faster over time.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="philosophy" className="section">
      <div className="container">
        {/* Section heading */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-label mb-4">OUR PHILOSOPHY</p>
          <h2 className="text-heading-lg mb-8">
            The antidote to transformation theatre.
          </h2>
          <p className="text-body-lg text-foreground-muted">
            The measure of our success is the real difference we make together.
          </p>
        </motion.div>

        {/* Principles - clean line-based layout */}
        <div className="border-t border-neutral-200">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-[120px_1fr_2fr] gap-8 py-10 border-b border-neutral-200 items-baseline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-label text-foreground-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-heading-sm">{principle.title}</h3>
              <p className="text-body text-foreground-muted">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
