"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const capabilities = [
  {
    number: "01",
    title: "Always On",
    description:
      "Persistent presence. Operative doesn't sleep, doesn't forget, doesn't miss. It watches, learns, and acts — continuously refining its understanding of your environment.",
  },
  {
    number: "02",
    title: "Locally Intelligent",
    description:
      "Your data never leaves the building. Operative runs entirely on-device, processing everything locally with edge AI that rivals cloud compute — without the latency or the liability.",
  },
  {
    number: "03",
    title: "Deeply Integrated",
    description:
      "Not another dashboard to check. Operative weaves into your existing systems, surfaces insights where you already work, and acts on your behalf when you authorise it.",
  },
  {
    number: "04",
    title: "Radically Aware",
    description:
      "Multi-modal sensing that captures what software alone cannot. Audio, visual, spatial — Operative perceives the physical world and translates it into actionable intelligence.",
  },
];

const specs = [
  { label: "Processing", value: "Neural Engine" },
  { label: "Memory", value: "128GB Unified" },
  { label: "Connectivity", value: "Wi-Fi 7 / Ethernet" },
  { label: "Power", value: "45W TDP" },
];

export default function OperativePage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const capabilitiesRef = useRef(null);
  const capabilitiesInView = useInView(capabilitiesRef, { once: true, margin: "-100px" });
  const detailRef = useRef(null);
  const detailInView = useInView(detailRef, { once: true, margin: "-100px" });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--foreground)]">
        {/* Hero - Dark Section */}
        <section ref={heroRef} className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto w-full">
            <motion.p
              className="font-mono text-xs text-[var(--foreground-subtle)] tracking-[0.3em] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              INTRODUCING
            </motion.p>
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 text-[var(--background)] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Operative
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl font-light text-[var(--foreground-subtle)] max-w-2xl mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Intelligence that lives where you work.
              <br />
              <span className="text-[var(--background)]">Physical. Persistent. Present.</span>
            </motion.p>

            {/* Hero Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative mt-16"
            >
              <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-[#2a2a2a] border border-[#333] flex items-center justify-center">
                {/* Replace with actual hero image */}
                <div className="text-center text-[var(--foreground-subtle)]">
                  <p className="font-mono text-xs tracking-wider mb-2">HERO IMAGE</p>
                  <p className="text-sm">operative-hero.png</p>
                </div>
                {/* Uncomment when image is ready:
                <Image
                  src="/images/operative-hero.png"
                  alt="Operative Hardware"
                  fill
                  className="object-cover"
                  priority
                />
                */}
              </div>
              {/* Subtle glow effect */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-[var(--accent)]/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </section>

        {/* Statement Section */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-[var(--foreground)]">
                Software sees screens.
                <br />
                <span className="text-[var(--foreground-muted)]">Operative sees <em>everything</em>.</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Capabilities */}
        <section ref={capabilitiesRef} className="py-20 md:py-28 px-6 md:px-12 bg-[var(--background-secondary)]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <p className="font-mono text-xs text-[var(--foreground)] tracking-wider mb-4">CAPABILITIES</p>
              <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">
                Built for the physical world
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-4xl text-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity">
                      {capability.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium mb-3 text-[var(--foreground)]">{capability.title}</h3>
                      <p className="text-[var(--foreground-muted)] leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detail Image Section */}
        <section ref={detailRef} className="py-20 md:py-28 px-6 md:px-12 bg-[var(--background)]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Placeholder 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={detailInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--background-secondary)] border border-[var(--border)] flex items-center justify-center">
                  {/* Replace with actual image */}
                  <div className="text-center text-[var(--foreground-muted)]">
                    <p className="font-mono text-xs tracking-wider mb-2">DETAIL IMAGE 1</p>
                    <p className="text-sm">operative-detail-1.png</p>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/operative-detail-1.png"
                    alt="Operative Detail"
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={detailInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="font-mono text-xs text-[var(--foreground)] tracking-wider mb-4">THE HARDWARE</p>
                <h2 className="text-3xl md:text-4xl font-light mb-6 text-[var(--foreground)]">
                  Engineered for presence
                </h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed mb-8">
                  Operative is purpose-built hardware designed to disappear into your environment while
                  maintaining constant awareness. Whisper-quiet operation. Minimal footprint.
                  Maximum intelligence.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {specs.map((spec, index) => (
                    <div key={index} className="p-4 bg-[var(--background-secondary)] rounded-xl">
                      <p className="font-mono text-xs text-[var(--foreground-subtle)] mb-1">{spec.label}</p>
                      <p className="text-[var(--foreground)] font-medium">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Second Image + Text Section */}
        <section className="py-20 md:py-28 px-6 md:px-12 bg-[var(--background-secondary)]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <p className="font-mono text-xs text-[var(--foreground)] tracking-wider mb-4">THE INTELLIGENCE</p>
                <h2 className="text-3xl md:text-4xl font-light mb-6 text-[var(--foreground)]">
                  Your context, your control
                </h2>
                <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">
                  Operative learns your rhythms, your preferences, your patterns. It builds a living model
                  of your operational reality — then uses that understanding to surface what matters,
                  when it matters.
                </p>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  No cloud dependency. No data leaving your premises. Every insight generated on-device,
                  every action taken with your explicit authorisation.
                </p>
              </motion.div>

              {/* Image Placeholder 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--background)] border border-[var(--border)] flex items-center justify-center">
                  {/* Replace with actual image */}
                  <div className="text-center text-[var(--foreground-muted)]">
                    <p className="font-mono text-xs tracking-wider mb-2">DETAIL IMAGE 2</p>
                    <p className="text-sm">operative-detail-2.png</p>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/operative-detail-2.png"
                    alt="Operative Intelligence"
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote/Statement Section */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--foreground)]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-[var(--background)]">
                &ldquo;The most powerful AI isn&rsquo;t the one with the most parameters.
                <br />
                <span className="text-[var(--foreground-subtle)]">It&rsquo;s the one that&rsquo;s actually there.&rdquo;</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 px-6 md:px-12 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-12 md:p-16 bg-[var(--background-secondary)] rounded-2xl border border-[var(--border)]">
                <p className="font-mono text-xs text-[var(--foreground)] tracking-wider mb-6">EARLY ACCESS</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-[var(--foreground)]">
                  Be among the first
                </h2>
                <p className="text-[var(--foreground-muted)] mb-10 max-w-xl mx-auto text-lg">
                  Operative is currently in limited deployment with select partners.
                  Join the waitlist to be notified when we expand availability.
                </p>
                <a
                  href="mailto:hello@radicalintelligence.com?subject=Operative%20Early%20Access"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#7CFC7C] text-[var(--foreground)] rounded-lg hover:bg-[#6CE86C] transition-colors font-medium"
                >
                  Request early access
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
