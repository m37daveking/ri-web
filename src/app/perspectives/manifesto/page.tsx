"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ManifestoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-40 pb-20 md:pt-48 md:pb-28">
          <div className="max-w-[720px] mx-auto px-6">
            <motion.p
              className="text-label text-[var(--accent)] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              MANIFESTO
            </motion.p>
            <motion.h1
              className="text-display mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI capability has arrived.
              <br />
              <span className="text-foreground-muted">Clarity is the new bottleneck.</span>
            </motion.h1>
          </div>
        </section>

        {/* Opening - Lead paragraph */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-[720px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lead mb-8">
                Every organisation understands there&apos;s a stack of possibility in AI. The question is no longer &quot;can we?&quot; but &quot;where should we?&quot;
              </p>
              <p className="text-prose">
                The companies that are pulling ahead aren&apos;t the ones with the biggest AI budgets. They&apos;re the ones who&apos;ve figured out which workflows actually matter, which roles should transform first, and which use cases compound into real advantage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-[720px] mx-auto px-6">
          <div className="border-t border-[var(--border)]" />
        </div>

        {/* The Shift */}
        <section className="py-24 md:py-32">
          <div className="max-w-[720px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-foreground-subtle mb-6">THE SHIFT</p>
              <h2 className="text-heading-lg mb-10">
                Engineering capacity is no longer the constraint.
              </h2>
              <div className="space-y-6">
                <p className="text-prose">
                  The constraint is strategic clarity — understanding your business deeply enough to know where AI creates leverage versus theatre.
                </p>
                <p className="text-prose">
                  In a world where everyone can build, the scarcest resource is knowing what to build. The gap between what AI can do and knowing where to apply it has never been wider. Every organisation senses there&apos;s more they could be doing, but few have the clarity to act decisively.
                </p>
                <p className="text-prose text-foreground font-medium">
                  That&apos;s the work we help you do.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Three Truths */}
        <section className="py-24 md:py-32 bg-background-warm">
          <div className="max-w-[960px] mx-auto px-6">
            <motion.div
              className="max-w-[720px] mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-foreground-subtle mb-6">THREE TRUTHS</p>
              <h2 className="text-heading-lg">
                What we believe about AI transformation.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  number: "01",
                  title: "Capability compounds",
                  description: "Every engagement should leave your organisation more capable, not more dependent. The measure of our success is what you can do after we leave.",
                },
                {
                  number: "02",
                  title: "Practice beats theory",
                  description: "We don't build for you. We build with you. Progressive handover from hands-on to hands-off ensures the muscle transfers to your team.",
                },
                {
                  number: "03",
                  title: "AI is a journey",
                  description: "Models improve. Workflows shift. Competitors adapt. The organisations that win are the ones who build the capacity to continuously evolve.",
                },
              ].map((truth, index) => (
                <motion.div
                  key={truth.number}
                  className="p-8 bg-white rounded-2xl border border-[var(--border)]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <span className="text-[11px] font-mono tracking-wider text-foreground-subtle mb-5 block">{truth.number}</span>
                  <h3 className="text-heading-sm mb-6">{truth.title}</h3>
                  <p className="text-prose-sm">{truth.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Question - Pull quote style */}
        <section className="py-32 md:py-40">
          <div className="max-w-[880px] mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-foreground-subtle mb-10">THE QUESTION</p>
              <h2 className="text-heading-lg mb-10 max-w-[720px] mx-auto">
                What do you know so well that software has been waiting for you to encode it?
              </h2>
              <p className="text-prose max-w-[600px] mx-auto">
                Every organisation has decades of accumulated insight locked in the heads of its people. AI is the tool that finally lets you operationalise that knowledge — to make it work at scale, around the clock, without the bottleneck of human bandwidth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-[720px] mx-auto px-6">
          <div className="border-t border-[var(--border)]" />
        </div>

        {/* Our Approach */}
        <section className="py-24 md:py-32">
          <div className="max-w-[720px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-label text-foreground-subtle mb-6">OUR APPROACH</p>
              <h2 className="text-heading-lg mb-12">
                Three movements. Three domains. One transformation.
              </h2>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  name: "Sight",
                  description: "See what should exist. We help you identify where AI creates real leverage across your People, Process, and Product.",
                },
                {
                  name: "Capability",
                  description: "Build your ability to build. We don't just deliver solutions; we transfer the skills so you can evolve them.",
                },
                {
                  name: "Sustenance",
                  description: "Stay with you as it evolves. AI systems need tending. We stay close to keep your capability compounding over time.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-prose font-medium text-foreground w-28 flex-shrink-0">{item.name}</span>
                  <p className="text-prose">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Antidote - Dark section */}
        <section className="py-24 md:py-32 bg-foreground">
          <div className="max-w-[720px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[11px] font-mono tracking-wider text-white/50 mb-6">THE ANTIDOTE</p>
              <h2 className="text-heading-lg text-white mb-10">
                We are the antidote to transformation theatre.
              </h2>
              <div className="space-y-6">
                <p className="text-prose text-white/70">
                  No innovation labs that never ship. No proof of concepts that gather dust. No consultants who leave behind slide decks instead of working systems.
                </p>
                <p className="text-prose text-white/90 font-medium">
                  The measure of our success is the real difference we make together. Working AI. Transferred capability. Compounding returns.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 md:py-40">
          <div className="max-w-[720px] mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-heading-lg mb-6">
                Ready to move from possibility to practice?
              </h2>
              <p className="text-prose mb-12 max-w-[540px] mx-auto">
                Most organisations begin with a Sight engagement — a few weeks to map the landscape and identify where AI creates real leverage for you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:hello@radicalintelligence.com"
                  className="btn-pill"
                >
                  Start the conversation
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <Link href="/work" className="btn-outline">
                  See our work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
