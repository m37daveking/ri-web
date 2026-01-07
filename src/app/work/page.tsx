"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
    image: "/images/capability.jpg",
  },
  {
    slug: "the-squiz",
    client: "The Squiz",
    title: "AI Content Studio",
    description: "A comprehensive AI content studio for story ideation, co-authoring, and editorial evaluation.",
    year: "2024",
    category: "Capability",
    image: "/images/hero.jpg",
  },
  {
    slug: "reece-group",
    client: "Reece Group",
    title: "Customer Intelligence Platform",
    description: "LLM-powered platform aggregating customer data for personalised engagement and win-back campaigns.",
    year: "2025",
    category: "Capability",
    image: "/images/sight.jpg",
  },
  {
    slug: "myob",
    client: "MYOB",
    title: "AI Strategy & Roadmap",
    description: "Strategic masterclasses and workshops producing a prioritised backlog of AI-driven initiatives.",
    year: "2024",
    category: "Sight",
    image: "/images/framework visual.jpg",
  },
  {
    slug: "nt-government",
    client: "Northern Territory Government",
    title: "Government AI Strategy",
    description: "Executive workshops, AI workflow design, and working prototypes for government AI adoption.",
    year: "2023",
    category: "Sight",
    image: "/images/manifesto.jpg",
  },
  {
    slug: "dfe-south-australia",
    client: "Department for Education SA",
    title: "AI Research Engine",
    description: "Automated qualitative analysis of school review reports using the Archer AI research engine.",
    year: "2023",
    category: "Capability",
    image: "/images/sustenance.jpg",
  },
];

const filters = ["All", "Sight", "Capability", "Sustenance"];

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/work/${study.slug}`} className="group block">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-background-warm">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-white/90 backdrop-blur rounded-full text-label">
              {study.category}
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-label">{study.client}</p>
            <p className="text-label text-foreground-subtle">{study.year}</p>
          </div>
          <h3 className="text-heading-sm group-hover:text-[var(--accent)] transition-colors duration-200">
            {study.title}
          </h3>
          <p className="text-body">
            {study.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredStudies = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container">
            <motion.p
              className="text-label mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              OUR WORK
            </motion.p>
            <motion.h1
              className="text-heading-lg mb-6 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI transformation in practice.
            </motion.h1>
            <motion.p
              className="text-body-lg max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Real systems. Real capability transfer. Real results across industries and organisations.
            </motion.p>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="pb-12">
          <div className="container">
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 text-sm rounded-full border transition-all duration-200 ${
                    activeFilter === filter
                      ? "bg-foreground text-white border-foreground"
                      : "border-[var(--border-strong)] text-foreground-muted hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Case studies grid */}
        <section className="pb-24 md:pb-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              {filteredStudies.map((study, index) => (
                <CaseStudyCard key={study.slug} study={study} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-24 md:pb-32">
          <div className="container">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-12 md:p-16 bg-background-warm rounded-3xl">
                <h2 className="text-heading-md mb-4">
                  Ready to start your AI transformation?
                </h2>
                <p className="text-body-lg mb-10">
                  Let&apos;s talk about where AI can create real leverage in your organisation.
                </p>
                <a
                  href="mailto:hello@radicalintelligence.com"
                  className="btn-pill"
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
