"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const principles = [
  {
    title: "Compounding Collaboration",
    description: "We believe the most valuable outcomes come from collaborative, real-world problem solving and building. We work alongside clients on AI initiatives, bringing momentum, clarity, and deep technical experience. Our aim is to build both solutions and capability.",
  },
  {
    title: "The Transformation Triangle",
    description: "People, process, and product must move together for AI to really land in enterprise—invest in only one and the others pull you back. We work across all three because AI that changes only one thing changes nothing for long.",
  },
  {
    title: "Impact, Not Eventually",
    description: "AI isn't a research project anymore. It's ready for the work your business does today. We're not here to run pilots that never graduate. Real workflows, real outcomes, real value—now.",
  },
];

export default function PhilosophyPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 relative overflow-hidden bg-[var(--background-secondary)]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/5 via-transparent to-[#334155]/5" />

        <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left column - Main content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <p className="font-mono text-sm text-[var(--foreground)] mb-4 tracking-wider">
                  OUR PHILOSOPHY
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 text-[var(--foreground)]">
                  The Future is Here,
                  <br />
                  Unevenly Practiced.
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 text-[var(--foreground-muted)] leading-relaxed"
              >
                <p>
                  The AI capabilities your organisation needs already exist. This is capability
                  overhang—the gap between what's possible and what's actually being put to work.
                  We've worked across a wide range of AI projects and products since 2017 and we
                  recognise now vs soon and help you realise the extraordinary potential that's
                  available today.
                </p>
                <p>
                  So what do <strong><em>Radically Intelligent Organisations</em></strong> look like? Knowledge flows freely.
                  Decisions are faster, richer, and made at every level. Humans and machines amplify
                  each other and the organisation learns, adapts and improves with fluency. Getting
                  there is the work we do together.
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10"
              >
                <div className="aspect-[926/836] rounded-2xl overflow-hidden max-w-sm">
                  <Image
                    src="/images/team.png"
                    alt="Team"
                    width={926}
                    height={836}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right column - Principles */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-mono text-xs text-[var(--foreground-subtle)] mb-8 tracking-wider"
              >
                OUR PRINCIPLES
              </motion.p>

              <div className="space-y-4">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group p-6 bg-white rounded-xl shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-2xl text-[var(--foreground-subtle)] flex-shrink-0">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-medium mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">{principle.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--background-secondary)] rounded-2xl border border-[var(--border)] p-12 md:p-16 text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 text-[var(--foreground)]">
              Ready to start your AI transformation?
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8 max-w-lg mx-auto">
              Let&apos;s talk about where AI can create real leverage in your organisation.
            </p>
            <a
              href="mailto:hello@radicalintelligence.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7CFC7C] text-[var(--foreground)] rounded-lg hover:bg-[#6CE86C] transition-colors font-medium"
            >
              <span>Get in touch</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
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
