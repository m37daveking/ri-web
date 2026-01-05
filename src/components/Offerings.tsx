"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const offerings = [
  {
    id: "sight",
    title: "Sight",
    tagline: "See what should exist.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
      </svg>
    ),
    description:
      "In a world where everyone can build, clarity is the scarcest resource. We help you identify where AI creates real leverage — not everywhere, but in the right places.",
    deliverables: [
      "AI Opportunity Map across People, Process, Product",
      "Prioritised transformation roadmap",
      "Build vs Buy analysis",
      "Risk and readiness assessment",
    ],
    format: "2-4 week engagement. Workshop-led. Executive and operational stakeholders.",
    cta: "Start with Sight",
    gradient: "from-[#0f172a] to-[#334155]",
  },
  {
    id: "capability",
    title: "Capability",
    tagline: "Build your ability to build.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    description:
      "We don't build for you. We build with you — in a way that transfers the muscle. Your team finishes with working systems and the skills to evolve them.",
    deliverables: [
      "Working AI systems",
      "Trained internal teams",
      "Documentation and playbooks",
      "Handover protocols",
    ],
    format: "Embedded sprints. Our Friendgineers working alongside your people. 6-16 weeks typical.",
    cta: "Build capability",
    gradient: "from-[#1e293b] to-[#0f172a]",
  },
  {
    id: "sustenance",
    title: "Sustenance",
    tagline: "Stay with you as it evolves.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    description:
      "AI systems need tending. Models improve. Workflows shift. Your competitors adapt. Nurture keeps your AI capability alive and evolving.",
    deliverables: [
      "Technical maintenance and iteration",
      "Process optimisation",
      "Capability refresh as AI advances",
      "Quarterly reviews to surface new opportunities",
    ],
    format: "Story points model. Draw down as needed. Quarterly Sight sessions feed new opportunities back into the loop.",
    cta: "Stay sharp",
    gradient: "from-[#334155] to-[#1e293b]",
  },
];

function OfferingCard({ offering, index }: { offering: (typeof offerings)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div
        className={`
          relative p-8 md:p-10 bg-white border border-[var(--border)] rounded-2xl
          shadow-sm hover:shadow-xl
          transition-all duration-300 cursor-pointer overflow-hidden
        `}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Gradient accent line at top */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${offering.gradient}`} />

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${offering.gradient} text-white`}>
            {offering.icon}
          </div>
          <span className="font-mono text-xs text-[var(--foreground-subtle)] bg-[var(--background-secondary)] px-2 py-1 rounded">
            0{index + 1}
          </span>
        </div>

        {/* Title and tagline */}
        <h3 className="text-2xl md:text-3xl font-light mb-2 group-hover:text-[var(--accent)] transition-colors">
          {offering.title}
        </h3>
        <p className="font-mono text-sm text-[var(--accent)] mb-4">{offering.tagline}</p>

        {/* Description */}
        <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed">{offering.description}</p>

        {/* Image placeholder */}
        <div className="mb-6 aspect-[16/9] rounded-xl image-placeholder overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-sm text-[var(--foreground-subtle)]">{offering.title} visual</p>
          </div>
        </div>

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {/* Deliverables */}
          <div className="mb-6 pt-6 border-t border-[var(--border)]">
            <p className="font-mono text-xs text-[var(--foreground-subtle)] mb-3">WHAT YOU GET</p>
            <ul className="space-y-2">
              {offering.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--foreground-muted)]">
                  <span className="text-[var(--accent)] mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Format */}
          <div className="mb-6">
            <p className="font-mono text-xs text-[var(--foreground-subtle)] mb-2">FORMAT</p>
            <p className="text-sm text-[var(--foreground-muted)]">{offering.format}</p>
          </div>

        </motion.div>

        {/* CTA / Expand toggle */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-medium text-[var(--accent)]">
            {isExpanded ? "Show less" : "Learn more"}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-[var(--accent)]"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Offerings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="offerings" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-[var(--accent)] mb-4 tracking-wider">HOW WE WORK</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 text-[var(--foreground)]">
            Enter anywhere. We meet you where you are.
          </h2>
        </motion.div>

        {/* Offerings grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <OfferingCard key={offering.id} offering={offering} index={index} />
          ))}
        </div>

        {/* Flywheel visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white border border-[var(--border)] rounded-full shadow-sm">
            <span className="font-mono text-sm text-[var(--foreground-muted)]">SIGHT</span>
            <span className="text-[var(--accent)]">→</span>
            <span className="font-mono text-sm text-[var(--foreground-muted)]">CAPABILITY</span>
            <span className="text-[var(--accent)]">→</span>
            <span className="font-mono text-sm text-[var(--foreground-muted)]">SUSTENANCE</span>
            <span className="text-[var(--accent)]">↺</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
