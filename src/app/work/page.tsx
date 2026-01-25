"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    slug: "rea-group",
    client: "REA Group",
    title: "AI Agents for Sales Operations",
    description: "AI agents that deliver real-time customer insights and automate administrative tasks for sales teams.",
    year: "2025",
    category: "Capability",
    image: "/images/rea-group.jpg",
  },
  {
    slug: "the-squiz",
    client: "The Squiz",
    title: "AI Content Studio",
    description: "A comprehensive AI content studio for story ideation, co-authoring, and editorial evaluation.",
    year: "2024",
    category: "Capability",
    image: "/images/the-squiz.jpg",
  },
  {
    slug: "reece-group",
    client: "Reece Group",
    title: "Customer Intelligence Platform",
    description: "LLM-powered platform aggregating customer data for personalised engagement and win-back campaigns.",
    year: "2025",
    category: "Capability",
    image: "/images/reece-group.jpg",
  },
  {
    slug: "myob",
    client: "MYOB",
    title: "AI Strategy & Roadmap",
    description: "Strategic masterclasses and workshops producing a prioritised backlog of AI-driven initiatives.",
    year: "2024",
    category: "Sight",
    image: "/images/myob.webp",
  },
  {
    slug: "nt-government",
    client: "Northern Territory Government",
    title: "Government AI Strategy",
    description: "Executive workshops, AI workflow design, and working prototypes for government AI adoption.",
    year: "2023",
    category: "Sight",
    image: "/images/nt-government.webp",
  },
  {
    slug: "dfe-south-australia",
    client: "Department for Education SA",
    title: "AI Research Engine",
    description: "Automated qualitative analysis of school review reports using the Archer AI research engine.",
    year: "2023",
    category: "Capability",
    image: "/images/dfe-sa.jpg",
  },
];

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/work/${study.slug}`} className="group block">
        <div className="relative aspect-[1072/992] rounded-2xl overflow-hidden mb-4">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="space-y-2">
          <p className="text-sm text-[var(--foreground-subtle)] font-mono">{study.client}</p>
          <h3 className="text-xl font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
            {study.title}
          </h3>
          <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
            {study.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function WorkPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--background)]">
        {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12" ref={heroRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-[var(--foreground)] mb-4 tracking-wider">
              OUR WORK
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-[var(--foreground)]">
              AI transformation in practice.
            </h1>
            <p className="text-lg md:text-xl text-[var(--foreground-muted)] max-w-2xl">
              Real systems. Real capability transfer. Real results across industries and organisations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case studies grid */}
      <section className="px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 bg-[var(--background-secondary)] rounded-2xl border border-[var(--border)]"
          >
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-[var(--foreground)]">
              Ready to start your AI transformation?
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8 max-w-lg mx-auto">
              Let's talk about where AI can create real leverage in your organisation.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--accent)] text-black font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              Get in touch
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
