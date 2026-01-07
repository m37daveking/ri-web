"use client";

import { motion } from "framer-motion";

const offerings = [
  {
    id: "sight",
    title: "Sight",
    tagline: "See what should exist.",
    description:
      "In a world where everyone can build, clarity is the scarcest resource. We help you identify where AI creates real leverage — not everywhere, but in the right places.",
    deliverables: [
      "AI Audit and readiness assessment",
      "AI Opportunity Map across People, Process, Product",
      "Prioritised transformation roadmap",
    ],
    format: "AI Strategy Engagement",
    gradient: "from-amber-100 via-orange-100 to-rose-100",
  },
  {
    id: "capability",
    title: "Capability",
    tagline: "Build your ability to build.",
    description:
      "We don't build for you. We build with you — in a way that transfers the muscle. Your team finishes with working systems and the skills to evolve them.",
    deliverables: [
      "Working AI systems",
      "Trained internal teams",
      "Documentation and playbooks",
      "Handover protocols",
    ],
    format: "AI Engineering Sprints",
    gradient: "from-amber-100 via-orange-100 to-rose-100",
  },
  {
    id: "sustenance",
    title: "Sustenance",
    tagline: "Stay with you as it evolves.",
    description:
      "AI systems need tending. Models improve. Workflows shift. Your competitors adapt. We stay close to keep your AI capability evolving and compounding over time.",
    deliverables: [
      "Technical maintenance and iteration",
      "Process optimisation",
      "Capability refresh as AI advances",
      "Quarterly reviews to surface new opportunities",
    ],
    format: "Ongoing Partnership",
    gradient: "from-amber-100 via-orange-100 to-rose-100",
  },
];

export default function SkillsSection() {
  return (
    <section id="offerings" className="section">
      <div className="container">
        {/* Section header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-label mb-4">HOW WE WORK</p>
          <h2 className="text-heading-lg mb-6">
            Enter anywhere. We meet you where you are.
          </h2>
          <p className="text-body-lg text-foreground-muted">
            Three movements that guide organisations from clarity to capability to continuous evolution.
          </p>
        </motion.div>

        {/* Offerings cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.id}
              className={`group relative rounded-3xl bg-gradient-to-br ${offering.gradient} p-8 flex flex-col h-full overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="mb-4">
                <span className="text-label text-xs mb-2 block text-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-heading-md mb-1">{offering.title}</h3>
                <p className="text-body font-medium text-foreground">{offering.tagline}</p>
              </div>

              {/* Description */}
              <p className="text-body text-foreground-muted mb-6 flex-grow">
                {offering.description}
              </p>

              {/* Deliverables */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {offering.deliverables.map((item, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <svg className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Format badge */}
              <div className="pt-4 border-t border-black/5">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {offering.format}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
