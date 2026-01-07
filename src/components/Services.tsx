"use client";

import Image from "next/image";
import VideoCard from "./VideoCard";
import PillButton from "./PillButton";

const services = [
  {
    id: "sight",
    label: "Sight",
    tagline: "See what should exist.",
    description: "In a world where everyone can build, clarity is the scarcest resource. We help you identify where AI creates real leverage — not everywhere, but in the right places.",
    deliverables: [
      "AI Opportunity Map across People, Process, Product",
      "Prioritised transformation roadmap",
      "Build vs Buy analysis",
      "Risk and readiness assessment",
    ],
    format: "2-4 week engagement. Workshop-led. Executive and operational stakeholders.",
    image: "/images/sight.jpg",
  },
  {
    id: "capability",
    label: "Capability",
    tagline: "Build your ability to build.",
    description: "We don't build for you. We build with you — in a way that transfers the muscle. Your team finishes with working systems and the skills to evolve them.",
    deliverables: [
      "Working AI systems",
      "Trained internal teams",
      "Documentation and playbooks",
      "Handover protocols",
    ],
    format: "Embedded sprints. Our Friendgineers working alongside your people. 6-16 weeks typical.",
    image: "/images/capability.jpg",
  },
  {
    id: "sustenance",
    label: "Sustenance",
    tagline: "Stay with you as it evolves.",
    description: "AI systems need tending. Models improve. Workflows shift. Your competitors adapt. We stay close to keep your AI capability evolving and compounding over time.",
    deliverables: [
      "Technical maintenance and iteration",
      "Process optimisation",
      "Capability refresh as AI advances",
      "Quarterly reviews to surface new opportunities",
    ],
    format: "Story points model. Draw down as needed. Quarterly Sight sessions feed new opportunities back into the loop.",
    image: "/images/sustenance.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <p className="text-mono text-accent mb-4">HOW WE WORK</p>
          <h2 className="text-headline text-foreground mb-6">
            Enter anywhere. We meet you where you are.
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl">
            AI transformation isn&apos;t a single project. It&apos;s a journey through three movements —
            and we guide you through each.
          </p>
        </div>

        {/* Services grid */}
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Video card */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <VideoCard
                  imageSrc={service.image}
                  title={service.label}
                  badge={service.label}
                  aspectRatio="video"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-mono-sm text-accent mb-2">{service.label}</p>
                <h3 className="text-headline-sm text-foreground mb-4">
                  {service.tagline}
                </h3>
                <p className="text-foreground-muted mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="mb-8">
                  <p className="text-mono-sm text-foreground-subtle mb-4">Deliverables</p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-accent flex-shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-foreground-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Format */}
                <div className="p-4 bg-background-warm rounded-lg mb-8">
                  <p className="text-mono-sm text-foreground-subtle mb-1">Format</p>
                  <p className="text-sm text-foreground">{service.format}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="text-xl text-foreground-muted mb-6">
            Not sure which engagement is right for you?
          </p>
          <PillButton
            href="#faq"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            }
          >
            Learn more in our FAQ
          </PillButton>
        </div>
      </div>
    </section>
  );
}
