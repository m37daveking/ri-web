"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Strategy",
    tagline: "See what should exist.",
    description: "In a world where everyone can build, clarity is the scarcest resource. We help you identify where AI creates real leverage — not everywhere, but in the right places.",
  },
  {
    number: "02",
    title: "Execution",
    tagline: "Build your ability to build.",
    description: "We don't build for you. We build with you — in a way that transfers the muscle. Your team finishes with working systems and the skills to evolve them.",
  },
  {
    number: "03",
    title: "Cultivation",
    tagline: "Stay with you as it evolves.",
    description: "AI systems need tending. Models improve. Workflows shift. Your competitors adapt. We stay close to keep your AI capability evolving and compounding over time.",
  },
];

export default function ServicesPromo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services-promo" className="py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
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

        {/* Conductor + Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end mb-6">
          {/* Conductor Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[400px] mx-auto lg:mx-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/conductor.png"
              alt="Conductor orchestrating AI transformation"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Stacked Services */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-4 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm p-5 border border-[var(--border)]"
                >
                  <div className="flex items-start gap-4">
                    <p className="font-mono text-xs text-[var(--foreground-subtle)] mt-1">{service.number}</p>
                    <div>
                      <h3 className="text-xl font-light mb-1 text-[var(--foreground)]">{service.title}</h3>
                      <p className="font-mono text-sm text-[var(--foreground-muted)] mb-3">{service.tagline}</p>
                      <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA - aligned with bottom of conductor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors group"
              >
                <span>Explore our services</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
