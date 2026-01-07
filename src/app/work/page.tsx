"use client";

import { useState } from "react";
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

function CaseStudyCard({ study }: { study: typeof caseStudies[0] }) {
  return (
    <Link href={`/work/${study.slug}`} className="group block">
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-background-warm">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-white/90 rounded text-xs font-mono text-foreground">
            {study.category}
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-mono-sm text-foreground-muted">{study.client}</p>
          <p className="text-sm text-foreground-subtle">{study.year}</p>
        </div>
        <h3 className="text-lg text-foreground group-hover:text-accent transition-colors duration-200">
          {study.title}
        </h3>
        <p className="text-foreground-muted text-sm leading-relaxed">
          {study.description}
        </p>
      </div>
    </Link>
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
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-mono text-accent mb-4">OUR WORK</p>
            <h1 className="text-display-sm text-foreground mb-6">
              AI transformation in practice.
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl">
              Real systems. Real capability transfer. Real results across industries and organisations.
            </p>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="px-4 md:px-8 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm rounded-full border transition-colors duration-200 ${
                    activeFilter === filter
                      ? "bg-foreground text-white border-foreground"
                      : "border-border text-foreground-muted hover:border-accent hover:text-accent"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies grid */}
        <section className="px-4 md:px-8 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredStudies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-8 pb-24 md:pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-12 bg-background-warm rounded-lg">
              <h2 className="text-headline-sm text-foreground mb-4">
                Ready to start your AI transformation?
              </h2>
              <p className="text-foreground-muted mb-8">
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
