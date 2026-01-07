"use client";

import FAQAccordion from "./FAQAccordion";
import PillButton from "./PillButton";

const faqItems = [
  {
    question: "What is a Sight engagement?",
    answer: "A Sight engagement is typically a 2-4 week workshop-led engagement where we help you see what AI opportunities exist across your organisation. We map AI opportunities across People, Process, and Product, create a prioritised transformation roadmap, conduct Build vs Buy analysis, and assess your risk and readiness. It's designed for executive and operational stakeholders who want clarity on where AI creates real leverage.",
  },
  {
    question: "How does Capability building work?",
    answer: "We don't build for you — we build with you. Our Friendgineers work alongside your team in embedded sprints, typically 6-16 weeks. You finish with working AI systems, trained internal teams, comprehensive documentation and playbooks, and clear handover protocols. The goal is capability transfer: when we leave, your team can run and evolve the systems independently.",
  },
  {
    question: "What is a Sustenance retainer?",
    answer: "AI systems need ongoing care. Sustenance is our story-points model where you draw down support as needed. We provide technical maintenance and iteration, process optimisation, capability refresh as AI advances, and quarterly reviews to surface new opportunities. Quarterly Sight sessions feed new opportunities back into the loop, creating a continuous improvement cycle.",
  },
  {
    question: "How do I know which engagement is right for us?",
    answer: "Most organisations start with Sight — even if you think you know what you need, the 2-4 week investment often reveals opportunities or risks you hadn't considered. From there, we can scope Capability work based on actual priorities. If you already have AI systems in place, you might start directly with Sustenance to keep them evolving.",
  },
  {
    question: "What industries do you work with?",
    answer: "We work across industries — from media and publishing to financial services, government, retail, and technology companies. AI transformation patterns are remarkably consistent across sectors. What matters more than industry is your organisation's readiness and appetite to build real capability, not just pilot projects.",
  },
  {
    question: "How is Radical Intelligence different from other AI consultancies?",
    answer: "We're builders, not strategists who hand over slide decks. We write code, transfer skills, and stay until systems work and your teams can run them. Our measure of success is the real difference we make together — capability that compounds, not dependency that grows. Every engagement should leave you more capable, not more reliant on us.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 px-4 md:px-8 bg-background-warm">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-mono text-accent mb-4">FAQ</p>
          <h2 className="text-headline text-foreground">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion */}
        <FAQAccordion items={faqItems} />

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground-muted mb-6">
            Still have questions? We&apos;d love to hear from you.
          </p>
          <PillButton
            href="mailto:hello@radicalintelligence.com"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            }
          >
            Get in touch
          </PillButton>
        </div>
      </div>
    </section>
  );
}
