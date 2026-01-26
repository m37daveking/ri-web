"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
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
    number: "02",
    title: "Execution",
    tagline: "Build your ability to build.",
    description:
      "We don't build for you. We build with you — in a way that transfers the muscle. Your team finishes with working systems and the skills to evolve them.",
    deliverables: [
      "Working AI systems",
      "Trained internal teams",
      "Documentation and playbooks",
      "Handover protocols",
    ],
    service: "AI Engineering Sprints",
  },
  {
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

const movements = [
  { id: "strategy", label: "STRATEGY", description: "We help you see what should exist." },
  { id: "execution", label: "EXECUTION", description: "We build your ability to build." },
  { id: "cultivation", label: "CULTIVATION", description: "We stay with you as it evolves." },
];

const domains = [
  { id: "people", label: "PEOPLE", description: "Your augmented workforce" },
  { id: "process", label: "PROCESS", description: "Your intelligent operations" },
  { id: "product", label: "PRODUCT", description: "Your agentic systems" },
];

const gridContent: Record<string, Record<string, string>> = {
  people: {
    strategy: "Everyone understands the evolution of their role",
    execution: "Teams that really leverage AI",
    cultivation: "Ongoing development of both human and agentic skills",
  },
  process: {
    strategy: "The right bets, not all the bets",
    execution: "Workflows that capture real value",
    cultivation: "Optimisation, iteration, improvement",
  },
  product: {
    strategy: "Build the right things",
    execution: "AI engineering that ships",
    cultivation: "Strategic capability evolution",
  },
};

export default function ServicesPage() {
  const servicesRef = useRef(null);
  const frameworkRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const frameworkInView = useInView(frameworkRef, { once: true, margin: "-100px" });
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const [hoveredMovement, setHoveredMovement] = useState<string | null>(null);

  const handleHover = (domain: string | null, movement: string | null) => {
    setHoveredDomain(domain);
    setHoveredMovement(movement);
  };

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />

      {/* Services Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 md:px-12 bg-[var(--background-secondary)]" ref={servicesRef}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="font-mono text-sm text-[var(--foreground)] mb-4 tracking-wider">
              OUR SERVICES
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[var(--foreground)] mb-4">
              We meet you where you are in your AI journey.
            </h1>
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Whether you're curious, cautious, or already in motion—we start from where you are, not where you think you should be.
            </p>
          </motion.div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="h-full"
              >
                <div className="h-full flex flex-col p-6 bg-white rounded-xl shadow-md border border-[var(--border)]">
                  <p className="font-mono text-xs text-[var(--foreground-subtle)] mb-3">{service.number}</p>
                  <h3 className="text-2xl md:text-3xl font-light mb-1 text-[var(--foreground)]">
                    {service.title}
                  </h3>
                  <p className="font-mono text-sm text-[var(--foreground-muted)] mb-4">{service.tagline}</p>
                  <p className="text-sm text-[var(--foreground-muted)] mb-5 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-5 flex-grow">
                    {service.deliverables.map((item, i) => (
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

                  <div className="pt-4 border-t border-[var(--border)] mt-auto">
                    <div className="flex items-center gap-2 text-sm text-[var(--foreground)]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span className="font-medium">{service.service}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-20 md:py-24 px-6 md:px-12 relative overflow-hidden" ref={frameworkRef}>
        <div className="absolute inset-0 bg-dots opacity-30" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-20 text-center"
          >
            <p className="font-mono text-sm text-[var(--foreground)] mb-4 tracking-wider">
              THE IMPACT
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 text-[var(--foreground)]">
              Three Acts. One transformation.
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              AI transformation isn't a single project. It's a journey through three movements — and we guide you through each, across every dimension of your organisation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Conductor Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={frameworkInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[200px] mx-auto lg:max-w-none"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/conductor.png"
                alt="Conductor orchestrating AI transformation"
                className="w-full h-auto"
              />
            </motion.div>

            {/* The Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-[var(--border)] overflow-hidden">
                {/* Movement headers */}
                <div className="grid grid-cols-[100px_1fr_1fr_1fr] md:grid-cols-[140px_1fr_1fr_1fr] gap-0 border-b border-[var(--border)]">
                  <div className="p-4 md:p-5 bg-[var(--background-secondary)]" />
                  {movements.map((movement) => (
                    <div
                      key={movement.id}
                      className={`p-4 md:p-5 text-center border-l border-[var(--border)] transition-colors duration-300 ${
                        hoveredMovement === movement.id ? "bg-[var(--accent-dim)]" : "bg-[var(--background-secondary)]"
                      }`}
                    >
                      <h3 className={`font-mono text-[10px] md:text-sm tracking-tight md:tracking-wider mb-1 transition-colors duration-300 ${
                        hoveredMovement === movement.id ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                      }`}>
                        {movement.label}
                      </h3>
                      <p className="text-xs text-[var(--foreground-subtle)] hidden md:block">
                        {movement.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Grid rows */}
                {domains.map((domain, rowIndex) => (
                  <div
                    key={domain.id}
                    className={`grid grid-cols-[100px_1fr_1fr_1fr] md:grid-cols-[140px_1fr_1fr_1fr] gap-0 ${
                      rowIndex < domains.length - 1 ? "border-b border-[var(--border)]" : ""
                    }`}
                  >
                    <div
                      className={`p-4 md:p-5 border-r border-[var(--border)] flex flex-col justify-center transition-colors duration-300 ${
                        hoveredDomain === domain.id ? "bg-[var(--accent-dim)]" : "bg-[var(--background-secondary)]"
                      }`}
                    >
                      <h4 className={`font-mono text-xs md:text-sm tracking-wider mb-1 transition-colors duration-300 ${
                        hoveredDomain === domain.id ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                      }`}>
                        {domain.label}
                      </h4>
                      <p className="text-xs text-[var(--foreground-subtle)] hidden md:block">
                        {domain.description}
                      </p>
                    </div>

                    {movements.map((movement) => (
                      <div
                        key={`${domain.id}-${movement.id}`}
                        className={`p-3 md:p-4 border-l border-[var(--border)] transition-all duration-300 cursor-pointer ${
                          hoveredDomain === domain.id || hoveredMovement === movement.id
                            ? "bg-[var(--accent-dim)]"
                            : "bg-white hover:bg-[var(--background-secondary)]"
                        }`}
                        onMouseEnter={() => handleHover(domain.id, movement.id)}
                        onMouseLeave={() => handleHover(null, null)}
                      >
                        <p className={`text-xs md:text-sm transition-colors duration-300 ${
                          hoveredDomain === domain.id || hoveredMovement === movement.id
                            ? "text-[var(--foreground)]"
                            : "text-[var(--foreground-muted)]"
                        }`}>
                          {gridContent[domain.id][movement.id]}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-[var(--foreground)]">
              Ready to close the AI gap?
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
              Let's talk about where AI can create real leverage for your organisation.
            </p>
            <a
              href="mailto:hello@radicalintelligence.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-black font-medium rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <span>Get in touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
