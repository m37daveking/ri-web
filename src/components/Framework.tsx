"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const movements = [
  { id: "sight", label: "STRATEGY", description: "We help you see what should exist." },
  { id: "capability", label: "EXECUTION", description: "We build your ability to build." },
  { id: "sustenance", label: "CULTIVATION", description: "We stay with you as it evolves." },
];

const domains = [
  { id: "people", label: "PEOPLE", description: "Your workforce, augmented." },
  { id: "process", label: "PROCESS", description: "Your operations, intelligent." },
  { id: "product", label: "PRODUCT", description: "Your systems, agentic." },
];

const gridContent: Record<string, Record<string, string>> = {
  people: {
    sight: "Role transformation mapping",
    capability: "AI fluency programs",
    sustenance: "Ongoing learning",
  },
  process: {
    sight: "Workflow opportunity analysis",
    capability: "Operating model redesign",
    sustenance: "Continuous improvement",
  },
  product: {
    sight: "Build vs buy decisions",
    capability: "Embedded engineering",
    sustenance: "Nurture retainers",
  },
};

function GridCell({
  domain,
  movement,
  content,
  isHighlighted,
  onHover,
}: {
  domain: string;
  movement: string;
  content: string;
  isHighlighted: boolean;
  onHover: (domain: string | null, movement: string | null) => void;
}) {
  return (
    <motion.div
      className={`
        relative p-4 md:p-6 border border-[var(--border)] rounded-lg
        transition-all duration-300 cursor-pointer
        ${isHighlighted
          ? "bg-[var(--accent-dim)] border-[var(--accent)] shadow-md"
          : "bg-white hover:bg-[var(--background-secondary)] hover:shadow-sm"
        }
      `}
      onMouseEnter={() => onHover(domain, movement)}
      onMouseLeave={() => onHover(null, null)}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <p className={`text-sm md:text-base transition-colors duration-300 ${
        isHighlighted ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"
      }`}>
        {content}
      </p>
    </motion.div>
  );
}

export default function Framework() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const [hoveredMovement, setHoveredMovement] = useState<string | null>(null);

  const handleHover = (domain: string | null, movement: string | null) => {
    setHoveredDomain(domain);
    setHoveredMovement(movement);
  };

  return (
    <section id="framework" className="py-20 md:py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
            AI transformation isn't a single project. It's a journey through three movements —
            and we guide you through each, across every dimension of your organisation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left side - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/conductor.png"
              alt="Conductor orchestrating AI transformation"
              className="w-full h-auto"
            />
          </motion.div>

          {/* The Grid - spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-[var(--border)] overflow-hidden">
              {/* Movement headers (top row) */}
              <div className="grid grid-cols-[100px_1fr_1fr_1fr] md:grid-cols-[140px_1fr_1fr_1fr] gap-0 border-b border-[var(--border)]">
                {/* Empty corner cell */}
                <div className="p-4 md:p-5 bg-[var(--background-secondary)]" />

                {/* Movement headers */}
                {movements.map((movement, i) => (
                  <motion.div
                    key={movement.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className={`p-4 md:p-5 text-center border-l border-[var(--border)] transition-colors duration-300 ${
                      hoveredMovement === movement.id ? "bg-[var(--accent-dim)]" : "bg-[var(--background-secondary)]"
                    }`}
                  >
                    <h3 className={`font-mono text-xs md:text-sm tracking-wider mb-1 transition-colors duration-300 ${
                      hoveredMovement === movement.id ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                    }`}>
                      {movement.label}
                    </h3>
                    <p className="text-xs text-[var(--foreground-subtle)] hidden md:block">
                      {movement.description}
                    </p>
                  </motion.div>
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
                  {/* Domain label (row header) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + rowIndex * 0.1 }}
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
                  </motion.div>

                  {/* Grid cells */}
                  {movements.map((movement, colIndex) => (
                    <motion.div
                      key={`${domain.id}-${movement.id}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + rowIndex * 0.1 + colIndex * 0.1 }}
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
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
