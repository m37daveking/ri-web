"use client";

import Image from "next/image";
import PillButton from "./PillButton";

const features = [
  {
    title: "AI Readiness Assessment",
    description: "Multi-dimensional assessment across Strategy, Data, Technology, Talent, Governance, and Culture.",
  },
  {
    title: "Use Case Library",
    description: "Comprehensive database of AI use cases categorized by industry, function, and technology type.",
  },
  {
    title: "Intelligent Recommendations",
    description: "AI-powered engine that matches use cases to your organisation's readiness and priorities.",
  },
  {
    title: "Transformation Roadmap",
    description: "Visual portfolio management to prioritize, sequence, and track your AI initiatives.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 md:py-32 px-4 md:px-8 bg-background-warm">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-mono text-accent mb-4">OUR PLATFORM</p>
          <h2 className="text-display-sm text-foreground mb-6">
            RIOS
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            The Radical Intelligence Operating System — a comprehensive AI transformation platform
            that guides organisations from assessment to working systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Platform image */}
          <div className="relative">
            <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/rios-image.png"
                alt="RIOS Dashboard"
                width={1794}
                height={908}
                className="w-full h-full object-contain bg-white"
              />
            </div>

            {/* Floating insight card */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-border max-w-[200px]">
              <p className="text-mono-sm text-accent mb-1">Platform</p>
              <p className="text-sm text-foreground">In-depth reporting and actionable insights</p>
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 bg-white rounded-lg border border-border hover:border-accent transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-mono">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg text-foreground mb-2">{feature.title}</h3>
                    <p className="text-foreground-muted text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <PillButton
            href="mailto:hello@radicalintelligence.com"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            }
          >
            Request a demo
          </PillButton>
        </div>
      </div>
    </section>
  );
}
