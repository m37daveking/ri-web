"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const platformModules = [
  {
    number: "01",
    title: "AI Readiness Assessment",
    subtitle: "Understand where you stand",
    description:
      "A comprehensive multi-dimensional assessment that evaluates your organisation across six critical dimensions: Strategy, Data, Technology, Talent, Governance, and Culture. Get a clear picture of your current AI maturity and identify gaps that need addressing.",
    features: [
      "40+ diagnostic questions tailored to your industry",
      "Benchmarking against industry peers",
      "RIQ (Radical Intelligence Quotient) score",
      "Detailed dimension-by-dimension breakdown",
      "Executive summary with key findings",
    ],
  },
  {
    number: "02",
    title: "Use Case Library",
    subtitle: "Discover what's possible",
    description:
      "Access our comprehensive database of AI use cases, continuously updated with real-world examples from across industries. Each use case includes implementation complexity, expected impact, and technology requirements.",
    features: [
      "500+ curated AI use cases",
      "Filtered by industry, function, and technology",
      "Implementation complexity ratings",
      "ROI potential indicators",
      "Real-world case study references",
    ],
  },
  {
    number: "03",
    title: "Intelligent Recommendations",
    subtitle: "Know where to focus",
    description:
      "Our AI-powered recommendation engine matches use cases to your organisation's unique readiness profile, priorities, and constraints. Get personalised suggestions ranked by feasibility and impact.",
    features: [
      "Readiness-matched recommendations",
      "Impact vs effort prioritisation",
      "Dependency mapping",
      "Resource requirement estimates",
      "Quick wins identification",
    ],
  },
  {
    number: "04",
    title: "Transformation Roadmap",
    subtitle: "Plan your journey",
    description:
      "Visual portfolio management that helps you prioritise, sequence, and track your AI initiatives. Build a coherent transformation roadmap that balances quick wins with strategic investments.",
    features: [
      "Interactive roadmap builder",
      "Initiative sequencing tools",
      "Resource allocation planning",
      "Milestone tracking",
      "Progress reporting dashboards",
    ],
  },
];

const dimensions = [
  {
    name: "Strategy",
    description: "Vision, leadership commitment, and strategic alignment",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    name: "Data",
    description: "Quality, accessibility, and governance of your data assets",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    name: "Technology",
    description: "Infrastructure, tools, and technical capabilities",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    name: "Talent",
    description: "Skills, training, and workforce readiness",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    name: "Governance",
    description: "Policies, ethics, and risk management frameworks",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: "Culture",
    description: "Innovation mindset and change readiness",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
];

function ModuleCard({ module, index }: { module: typeof platformModules[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start py-12 border-b border-[var(--border)]"
    >
      <div>
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-sm text-[var(--accent)]">{module.number}</span>
          <span className="font-mono text-sm text-[var(--foreground-subtle)]">{module.subtitle}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-light mb-4 text-[var(--foreground)]">{module.title}</h3>
        <p className="text-[var(--foreground-muted)] leading-relaxed">{module.description}</p>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-md border border-[var(--border)]">
        <p className="font-mono text-xs tracking-wider font-medium mb-4 text-[var(--foreground)]">KEY FEATURES</p>
        <ul className="space-y-3">
          {module.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-[var(--foreground-muted)]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                className="flex-shrink-0 mt-0.5"
              >
                <path d="M9 11l3 3L22 4" />
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function RIOSPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const dimensionsRef = useRef(null);
  const dimensionsInView = useInView(dimensionsRef, { once: true, margin: "-100px" });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--background)]">
        {/* Hero */}
        <section ref={heroRef} className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.p
              className="font-mono text-xs text-[var(--foreground)] tracking-wider mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              PLATFORM
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl text-[var(--foreground)]"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              RIOS
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl font-light text-[var(--foreground-muted)] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Radical Intelligence Operating System
            </motion.p>
            <motion.p
              className="text-lg text-[var(--foreground-muted)] max-w-2xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A comprehensive AI transformation platform that guides organisations from initial
              assessment through to a prioritised roadmap of AI initiatives tailored to your unique
              context.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="mailto:hello@radicalintelligence.com?subject=RIOS%20Demo%20Request"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-black rounded-full hover:bg-[var(--accent-light)] transition-colors font-medium"
              >
                Request a demo
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Platform Screenshot */}
        <section className="pb-12 md:pb-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="aspect-[1794/908] rounded-2xl overflow-hidden shadow-2xl border border-[var(--border)]">
                <Image
                  src="/images/rios-image.png"
                  alt="RIOS Dashboard"
                  width={1794}
                  height={908}
                  className="w-full h-full object-contain bg-white"
                  priority
                />
              </div>
              {/* Decorative blur */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-[var(--accent)]/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Assessment Dimensions */}
        <section ref={dimensionsRef} className="py-16 md:py-24 bg-[var(--background-secondary)] px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={dimensionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="font-mono text-xs text-[var(--foreground)] tracking-wider mb-4">ASSESSMENT FRAMEWORK</p>
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-[var(--foreground)]">
                Six dimensions of AI readiness
              </h2>
              <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
                Our assessment evaluates your organisation across six critical dimensions, providing
                a comprehensive view of your AI readiness and clear pathways to improvement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {dimensions.map((dimension, index) => (
                <motion.div
                  key={dimension.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={dimensionsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="bg-white rounded-xl p-5 border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-4">
                    {dimension.icon}
                  </div>
                  <h3 className="font-medium mb-2 text-[var(--foreground)]">{dimension.name}</h3>
                  <p className="text-sm text-[var(--foreground-muted)]">{dimension.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Modules */}
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <p className="font-mono text-xs text-[var(--foreground)] tracking-wider mb-4">PLATFORM MODULES</p>
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-[var(--foreground)]">
                From assessment to action
              </h2>
              <p className="text-[var(--foreground-muted)] max-w-2xl">
                RIOS guides you through a structured journey from understanding your current state
                to building a prioritised transformation roadmap.
              </p>
            </motion.div>

            <div>
              {platformModules.map((module, index) => (
                <ModuleCard key={module.number} module={module} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-[var(--background-secondary)] px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="font-mono text-xs text-[var(--foreground)] tracking-wider mb-4">HOW IT WORKS</p>
              <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">
                Your path through RIOS
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--accent)] text-black flex items-center justify-center mx-auto mb-5 text-xl font-light">
                  1
                </div>
                <h3 className="font-medium mb-3 text-[var(--foreground)]">Complete the Assessment</h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Answer diagnostic questions across all six dimensions. Takes about 30 minutes and
                  can be completed by multiple stakeholders for a fuller picture.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--accent)] text-black flex items-center justify-center mx-auto mb-5 text-xl font-light">
                  2
                </div>
                <h3 className="font-medium mb-3 text-[var(--foreground)]">Explore Opportunities</h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Browse AI use cases matched to your readiness profile. Filter by function,
                  technology, and impact to find the right opportunities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--accent)] text-black flex items-center justify-center mx-auto mb-5 text-xl font-light">
                  3
                </div>
                <h3 className="font-medium mb-3 text-[var(--foreground)]">Build Your Roadmap</h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Prioritise and sequence initiatives into a coherent transformation roadmap that
                  balances quick wins with strategic investments.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-10 md:p-14 bg-white rounded-2xl shadow-lg border border-[var(--border)]">
                <h2 className="text-3xl md:text-4xl font-light mb-4 text-[var(--foreground)]">
                  Ready to assess your AI readiness?
                </h2>
                <p className="text-[var(--foreground-muted)] mb-8 max-w-xl mx-auto">
                  Request a demo of RIOS and see how it can accelerate your AI transformation
                  journey with clarity and confidence.
                </p>
                <a
                  href="mailto:hello@radicalintelligence.com?subject=RIOS%20Demo%20Request"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-black rounded-full hover:bg-[var(--accent-light)] transition-colors font-medium"
                >
                  Request a demo
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
