"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-[var(--foreground)] mb-4 tracking-wider">
              ABOUT US
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-[var(--foreground)]">
              We work at the intersection of engineering, operations and business impact.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-[var(--background-secondary)]" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-[var(--foreground-muted)] leading-relaxed"
            >
              <p>
                Radical Intelligence was founded on a simple observation: the AI capabilities most organisations need already exist. The gap isn't in the technology—it's in the practice.
              </p>
              <p>
                We're a team of engineers, strategists, and operators who've spent years building AI systems that actually work in the real world. Not proofs of concept. Not decks. Working systems that create measurable impact.
              </p>
              <p>
                Our approach is different because we don't just advise—we build alongside you. We transfer capability, not dependency. When we leave, your team is stronger, not reliant on us.
              </p>
            </motion.div>

            {/* Right column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden max-w-[280px] mx-auto lg:mx-0">
                <Image
                  src="/images/team.png"
                  alt="Radical Intelligence Team"
                  width={926}
                  height={836}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-light mb-10 text-[var(--foreground)]">
              What we believe
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <p className="font-mono text-xs text-[var(--foreground-subtle)] mb-3">01</p>
                <h3 className="text-lg font-medium mb-2 text-[var(--foreground)]">Capability over dependency</h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  We build your ability to build. Your team finishes stronger, not reliant on us.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <p className="font-mono text-xs text-[var(--foreground-subtle)] mb-3">02</p>
                <h3 className="text-lg font-medium mb-2 text-[var(--foreground)]">Impact over activity</h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  We measure success by business outcomes, not hours logged or slides delivered.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <p className="font-mono text-xs text-[var(--foreground-subtle)] mb-3">03</p>
                <h3 className="text-lg font-medium mb-2 text-[var(--foreground)]">Practice over theory</h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  We've built what we teach. Our frameworks come from real implementations, not research papers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-light mb-10 text-[var(--foreground)]">
              The team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dave King */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-medium mb-1 text-[var(--foreground)]">Dave King</h3>
                <p className="font-mono text-xs text-[var(--accent)] mb-3">CEO</p>
                <p className="text-sm text-[var(--foreground-muted)]">
                  An award-winning creator and inventor with 20 years of experience founding and growing technology companies. He believes augmented intelligence applications can help human and machine achieve much more than either could alone.
                </p>
              </div>

              {/* Pan Demosthenous */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-medium mb-1 text-[var(--foreground)]">Pan Demosthenous</h3>
                <p className="font-mono text-xs text-[var(--accent)] mb-3">CTO</p>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Experienced technology leader with decades of work ranging from leading mobile applications at Sky UK to building startups. Since 2016, he has focused on machine learning and language technology to solve real-world challenges.
                </p>
              </div>

              {/* Teresa Truda */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-medium mb-1 text-[var(--foreground)]">Teresa Truda</h3>
                <p className="font-mono text-xs text-[var(--accent)] mb-3">Principal</p>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Results-driven professional specialising in business growth through strategic innovation and digital transformation. Recognised as a keynote speaker and conducts educational workshops on AI adoption and emerging technologies.
                </p>
              </div>

              {/* Damith Senanayake */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-medium mb-1 text-[var(--foreground)]">Damith Senanayake</h3>
                <p className="font-mono text-xs text-[var(--accent)] mb-3">AI Engineer</p>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Software engineer with machine learning expertise spanning classical ML to large language models and multimodal data analysis. Capable of delivering end-to-end systems across forecasting, predictive analysis, and document processing domains.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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
