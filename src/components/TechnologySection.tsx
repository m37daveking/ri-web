"use client";

import { motion } from "framer-motion";

const movements = [
  { name: "Sight", description: "See what should exist" },
  { name: "Capability", description: "Build your ability to build" },
  { name: "Sustenance", description: "Stay with you as it evolves" },
];

const domains = [
  { name: "People", description: "Your workforce, augmented" },
  { name: "Process", description: "Your operations, intelligent" },
  { name: "Product", description: "Your systems, agentic" },
];

const gridContent = [
  ["Role transformation mapping", "AI fluency programs", "Ongoing learning"],
  ["Workflow opportunity analysis", "Operating model redesign", "Continuous improvement"],
  ["Build vs buy decisions", "Embedded engineering", "Nurture retainers"],
];

export default function TechnologySection() {
  return (
    <section id="framework" className="section">
      <div className="container">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-start mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Heading */}
          <div>
            <p className="text-label mb-4">THE FRAMEWORK</p>
            <h2 className="text-heading-lg">
              Three movements.<br />
              Three domains.<br />
              One transformation.
            </h2>
          </div>

          {/* Right: Description */}
          <div className="md:pt-12">
            <p className="text-body-lg text-foreground-muted">
              AI transformation isn&apos;t a single project. It&apos;s a journey through three
              movements — and we guide you through each, across every dimension of your organisation.
            </p>
          </div>
        </motion.div>

        {/* Elegant Line Grid */}
        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="min-w-[800px] border-t border-neutral-200">
            {/* Header row - Movements */}
            <div className="grid grid-cols-4">
              <div className="border-b border-r border-neutral-200 p-6" /> {/* Empty corner */}
              {movements.map((m, i) => (
                <div
                  key={m.name}
                  className={`border-b border-neutral-200 p-6 ${i < movements.length - 1 ? 'border-r' : ''}`}
                >
                  <p className="text-heading-sm mb-2">{m.name}</p>
                  <p className="text-body text-foreground">{m.description}</p>
                </div>
              ))}
            </div>

            {/* Data rows */}
            {domains.map((domain, rowIndex) => (
              <div key={domain.name} className="grid grid-cols-4">
                {/* Domain label */}
                <div className={`border-r border-neutral-200 p-6 ${rowIndex < domains.length - 1 ? 'border-b' : ''}`}>
                  <p className="text-heading-sm mb-2">{domain.name}</p>
                  <p className="text-body text-foreground">{domain.description}</p>
                </div>
                {/* Grid cells */}
                {gridContent[rowIndex].map((cell, colIndex) => (
                  <div
                    key={colIndex}
                    className={`p-6 group hover:bg-gradient-to-br hover:from-amber-100 hover:via-orange-100 hover:to-rose-100 transition-colors ${
                      rowIndex < domains.length - 1 ? 'border-b border-neutral-200' : ''
                    } ${colIndex < gridContent[rowIndex].length - 1 ? 'border-r border-neutral-200' : ''}`}
                  >
                    <p className="text-body text-foreground-muted group-hover:text-foreground transition-colors">
                      {cell}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
