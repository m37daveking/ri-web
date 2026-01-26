"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Dark header styling for Operative page
const useDarkHeader = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      body {
        background: var(--foreground) !important;
      }
      header {
        background: #1a1a1a !important;
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
        border: none !important;
        border-bottom: none !important;
        border-color: #1a1a1a !important;
        box-shadow: none !important;
        outline: none !important;
      }
      header > div {
        border: none !important;
        border-bottom: none !important;
        box-shadow: none !important;
      }
      header::after {
        content: '' !important;
        display: block !important;
        position: absolute !important;
        bottom: -2px !important;
        left: 0 !important;
        right: 0 !important;
        height: 4px !important;
        background: #1a1a1a !important;
      }
      header::before {
        display: none !important;
      }
      header nav a {
        color: white !important;
      }
      header nav a:hover {
        color: var(--accent) !important;
      }
      header img[alt="Radical Intelligence"] {
        filter: invert(1) !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
};

const useCases = [
  {
    audience: "For investment teams",
    headline: "Your analyst never sleeps",
    description:
      "Research briefings, market monitoring, document synthesis. Wake up to insights, not inbox chaos.",
  },
  {
    audience: "For founders",
    headline: "Stop being your own EA",
    description:
      "Morning briefings, email triage, customer follow-ups. The ops work that isn't CEO work.",
  },
  {
    audience: "For professional services",
    headline: "Junior leverage without the overhead",
    description:
      "Client prep, document processing, scheduling coordination. Bill more hours, hire fewer grads.",
  },
  {
    audience: "For operations-heavy businesses",
    headline: "Your ops manager, fraction of the cost",
    description:
      "Shift scheduling, B2B follow-ups, routine admin. The work that keeps the wheels turning.",
  },
];

const whyHardware = [
  {
    title: "Security that IT will approve",
    description:
      "Runs on your network. Data stays on your premises. No cloud AI reading your client files. Audit logs you control.",
  },
  {
    title: "Always on, always yours",
    description:
      "Not subject to someone else's uptime. Not sharing capacity. Dedicated compute that belongs to your business.",
  },
  {
    title: "An employee needs a desk",
    description:
      "When your AI has a physical presence in your office, you treat it like a real team member. That changes how you use it.",
  },
];

export default function OperativePage() {
  useDarkHeader();

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const whatArrivesRef = useRef(null);
  const whatArrivesInView = useInView(whatArrivesRef, { once: true, margin: "-100px" });
  const howTalkRef = useRef(null);
  const howTalkInView = useInView(howTalkRef, { once: true, margin: "-100px" });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--foreground)]">
        {/* Hero - Dark Section */}
        <section ref={heroRef} className="min-h-screen flex flex-col justify-center pt-40 md:pt-48 pb-16 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-6xl mx-auto w-full relative z-10">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 text-[var(--background)] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Operative
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--background)] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Intelligence on-prem
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-[var(--foreground-subtle)] max-w-2xl mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              A dedicated machine running your AI employee. Configured for your business.
              Installed on your network. Shows up in a box.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#7CFC7C] text-[var(--foreground)] rounded-lg hover:bg-[#6CE86C] transition-colors font-medium"
              >
                See how it works
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Hero Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative mt-20"
            >
              <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-[#2a2a2a] border border-[#333] relative">
                <Image
                  src="/images/operative_hero3.jpg"
                  alt="Operative Hardware"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Subtle glow effect */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-[#7CFC7C]/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </section>

        {/* Section 1: What arrives */}
        <section id="how-it-works" ref={whatArrivesRef} className="py-24 md:py-32 px-6 md:px-12 bg-[var(--background)]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={whatArrivesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <p className="font-mono text-xs text-[var(--foreground)] tracking-wider mb-4">WHAT ARRIVES</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-[var(--foreground)]">
                  It comes in a box
                </h2>
                <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-10">
                  Custom-built hardware running Operative — our secured, enterprise-hardened AI assistant.
                  It sits on your desk, connects to your network, and starts working.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#7CFC7C] mt-2.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[var(--foreground)] mb-1">Purpose-built hardware</p>
                      <p className="text-[var(--foreground-muted)] text-sm">Compact, quiet, designed for always-on operation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#7CFC7C] mt-2.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[var(--foreground)] mb-1">Your network</p>
                      <p className="text-[var(--foreground-muted)] text-sm">Data never leaves your premises</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#7CFC7C] mt-2.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[var(--foreground)] mb-1">Ready to work</p>
                      <p className="text-[var(--foreground-muted)] text-sm">Skills built for your workflows, integrations configured, trained on your context</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={whatArrivesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="aspect-square relative">
                  <Image
                    src="/images/operative_1.jpg"
                    alt="Operative in box"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: How you talk to it */}
        <section ref={howTalkRef} className="py-24 md:py-32 px-6 md:px-12 bg-[var(--background-secondary)]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={howTalkInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--background)] border border-[var(--border)] flex items-center justify-center">
                  <div className="text-center text-[var(--foreground-muted)]">
                    <p className="font-mono text-xs tracking-wider mb-2">IMAGE</p>
                    <p className="text-sm">operative-chat.png</p>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/operative-chat.png"
                    alt="Operative chat interface"
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={howTalkInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <p className="font-mono text-xs text-[var(--foreground)] tracking-wider mb-4">HOW YOU TALK TO IT</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-[var(--foreground)]">
                  Text it like a colleague
                </h2>
                <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-10">
                  No new app. No dashboard to learn. Your Operative lives in the tools you already use —
                  Slack, WhatsApp, Telegram, Teams. Send a message, get work done.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#7CFC7C] mt-2.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[var(--foreground)] mb-1">Messages you first</p>
                      <p className="text-[var(--foreground-muted)] text-sm">Morning briefings, alerts, follow-ups</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#7CFC7C] mt-2.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[var(--foreground)] mb-1">Remembers everything</p>
                      <p className="text-[var(--foreground-muted)] text-sm">Persistent memory across conversations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#7CFC7C] mt-2.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[var(--foreground)] mb-1">Improves through conversation</p>
                      <p className="text-[var(--foreground-muted)] text-sm">&ldquo;Can you also start tracking X?&rdquo; → done</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: What it does */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--background)]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="font-mono text-xs text-[var(--foreground)] tracking-wider mb-4">WHAT IT DOES</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[var(--foreground)]">
                An employee that fits your work
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.audience}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-[var(--background-secondary)] rounded-2xl border border-[var(--border)] hover:border-[#7CFC7C] transition-colors"
                >
                  <p className="font-mono text-xs text-[var(--foreground-subtle)] tracking-wider mb-3">
                    {useCase.audience.toUpperCase()}
                  </p>
                  <h3 className="text-xl md:text-2xl font-light mb-3 text-[var(--foreground)]">
                    {useCase.headline}
                  </h3>
                  <p className="text-[var(--foreground-muted)] leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Why hardware */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--foreground)]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <p className="font-mono text-xs text-[var(--foreground-subtle)] tracking-wider mb-4">THE DIFFERENCE</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[var(--background)]">
                Why a physical machine
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyHardware.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-medium mb-4 text-[var(--background)]">
                    {item.title}
                  </h3>
                  <p className="text-[var(--foreground-subtle)] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Built on open source */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="font-mono text-xs text-[var(--foreground)] tracking-wider mb-4">THE FOUNDATION</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-[var(--foreground)]">
                Open foundations. Enterprise hardened.
              </h2>
              <p className="text-lg text-[var(--foreground-muted)] leading-relaxed mb-8 max-w-3xl mx-auto">
                Operative is built on Clawdbot, the open-source AI assistant with 18,000+ GitHub stars
                and an active community. We&apos;ve added enterprise security, audit logging, network isolation,
                and custom skills for business use. Cutting-edge capabilities without vendor lock-in.
              </p>
              <a
                href="https://github.com/clawdbot/clawdbot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--foreground)] hover:text-[#7CFC7C] transition-colors font-medium"
              >
                Learn more about Clawdbot
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Section 6: What you get */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--background-secondary)]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="font-mono text-xs text-[var(--foreground)] tracking-wider mb-4">WHAT YOU GET</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[var(--foreground)]">
                The package
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Upfront */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-[var(--background)] rounded-2xl border border-[var(--border)]"
              >
                <p className="font-mono text-xs text-[#7CFC7C] tracking-wider mb-6">UPFRONT</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7CFC7C" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                      <path d="M9 11l3 3L22 4" />
                    </svg>
                    <span className="text-[var(--foreground)]">Custom-built Operative hardware</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7CFC7C" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                      <path d="M9 11l3 3L22 4" />
                    </svg>
                    <span className="text-[var(--foreground)]">3-5 skills configured for your specific workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7CFC7C" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                      <path d="M9 11l3 3L22 4" />
                    </svg>
                    <span className="text-[var(--foreground)]">Integration with your existing systems (Slack, email, CRM, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7CFC7C" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                      <path d="M9 11l3 3L22 4" />
                    </svg>
                    <span className="text-[var(--foreground)]">Security hardening (allowlists, audit logging, sandboxing)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7CFC7C" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                      <path d="M9 11l3 3L22 4" />
                    </svg>
                    <span className="text-[var(--foreground)]">Training session: how to work with your Operative</span>
                  </li>
                </ul>
              </motion.div>

              {/* Monthly */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 bg-[var(--background)] rounded-2xl border border-[var(--border)]"
              >
                <p className="font-mono text-xs text-[#7CFC7C] tracking-wider mb-6">MONTHLY</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7CFC7C" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                      <path d="M9 11l3 3L22 4" />
                    </svg>
                    <span className="text-[var(--foreground)]">Ongoing skill development and modifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7CFC7C" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                      <path d="M9 11l3 3L22 4" />
                    </svg>
                    <span className="text-[var(--foreground)]">Security updates and monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7CFC7C" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                      <path d="M9 11l3 3L22 4" />
                    </svg>
                    <span className="text-[var(--foreground)]">Support when something breaks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7CFC7C" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                      <path d="M9 11l3 3L22 4" />
                    </svg>
                    <span className="text-[var(--foreground)]">Quarterly review — what else should it be doing?</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--background)]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-12 md:p-16 bg-[var(--foreground)] rounded-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-[var(--background)]">
                  Ready to meet your Operative?
                </h2>
                <p className="text-[var(--foreground-subtle)] mb-10 max-w-xl mx-auto text-lg">
                  We&apos;re deploying Operatives with a small number of businesses.
                  Get in touch to see if it&apos;s right for you.
                </p>
                <a
                  href="mailto:hello@radicalintelligence.com?subject=Operative%20Inquiry"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#7CFC7C] text-[var(--foreground)] rounded-lg hover:bg-[#6CE86C] transition-colors font-medium"
                >
                  Get in touch
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
