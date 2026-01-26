"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const offerings = [
  {
    id: "sight",
    number: "01",
    title: "Strategy",
    tagline: "See what should exist.",
    description:
      "In a world where everyone can build, clarity is the scarcest resource. We help you identify where AI creates real leverage — not everywhere, but in the right places.",
    deliverables: [
      "AI Audit and readiness assessment",
      "AI Opportunity Map across People, Process, Product",
      "Prioritised transformation roadmap",
    ],
    service: "AI Strategy Engagement",
  },
  {
    id: "capability",
    number: "02",
    title: "Execution",
    tagline: "AI architecture and engineering.",
    description:
      "Expert AI engineers working alongside your team in compound collaboration. We ship production-grade AI systems and workflow automation that create real leverage.",
    deliverables: [
      "Production-grade AI systems",
      "Workflow automation",
      "Iterative roadmap development",
      "Capability transfer protocols",
    ],
    service: "AI Engineering Sprints",
  },
  {
    id: "sustenance",
    number: "03",
    title: "Cultivation",
    tagline: "Stay with you as it evolves.",
    description:
      "AI systems need tending. Models improve. Workflows shift. Your competitors adapt. We stay close to keep your AI capability evolving and compounding over time.",
    deliverables: [
      "Technical maintenance and iteration",
      "Process optimisation",
      "Capability refresh as AI advances",
      "Quarterly reviews to surface new opportunities",
    ],
    service: "Ongoing Partnership",
  },
];

function OfferingCard({ offering, index }: { offering: (typeof offerings)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="h-full"
    >
      <div className="h-full flex flex-col p-5 md:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-[var(--border)]">
        {/* Number */}
        <p className="font-mono text-xs text-[var(--foreground-subtle)] mb-2">{offering.number}</p>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-light mb-1 text-[var(--foreground)]">
          {offering.title}
        </h3>

        {/* Tagline */}
        <p className="font-mono text-sm text-[var(--foreground-muted)] mb-4">{offering.tagline}</p>

        {/* Description */}
        <p className="text-sm text-[var(--foreground-muted)] mb-5 leading-relaxed">{offering.description}</p>

        {/* Deliverables */}
        <ul className="space-y-2 mb-5 flex-grow">
          {offering.deliverables.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[var(--foreground-muted)]">
              <span className="text-[var(--foreground-muted)] mt-0.5 flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Service name with clock icon */}
        <div className="pt-4 border-t border-[var(--border)] mt-auto">
          <div className="flex items-center gap-2 text-sm text-[var(--foreground)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="font-medium">{offering.service}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Offerings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="offerings" className="py-20 md:py-24 px-6 md:px-12 bg-[var(--background-secondary)]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="font-mono text-sm text-[var(--foreground)] mb-4 tracking-wider">
            OUR SERVICES
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-[var(--foreground)] mb-4">
            We meet you where you are in your AI journey.
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
            Whether you're curious, cautious, or already in motion—we start from where you are, not where you think you should be.
          </p>
        </motion.div>

        {/* Offerings grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <OfferingCard key={offering.id} offering={offering} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
