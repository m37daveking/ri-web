"use client";

import Image from "next/image";

const principles = [
  {
    title: "Practice Together",
    description: "We don't build for you. We build with you. Progressive handover from hands-on to hands-off.",
    bgColor: "bg-background-beige",
  },
  {
    title: "Capability Transfer",
    description: "When we leave, you're more capable, not more dependent. That's the measure of success.",
    bgColor: "bg-background-sage",
  },
  {
    title: "Compounding Returns",
    description: "Every engagement makes your organisation more intelligent. The flywheel spins faster over time.",
    bgColor: "bg-background-blue",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-24">
          <div>
            <p className="text-mono text-accent mb-4">OUR PHILOSOPHY</p>
            <h2 className="text-headline text-foreground">
              The antidote to transformation theatre.
            </h2>
          </div>
          <div className="space-y-6 text-foreground-muted leading-relaxed">
            <p>
              AI capability has outpaced our collective understanding of what&apos;s possible. Every
              organisation senses there&apos;s more they could be doing, but the gap between what AI
              can do and knowing where to apply it has never been wider.
            </p>
            <p>
              We&apos;re not strategists who hand over slide decks and walk away. We&apos;re builders who
              work alongside you — practical partners who write code, transfer skills, and stay
              until the systems are working and your teams can run them.
            </p>
          </div>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className={`${principle.bgColor} rounded-lg p-8 md:p-10`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-mono-sm text-foreground-muted">0{index + 1}</span>
              </div>
              <h3 className="text-xl text-foreground mb-3">{principle.title}</h3>
              <p className="text-foreground-muted leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team image */}
        <div className="mt-16 flex justify-center">
          <div className="max-w-sm rounded-lg overflow-hidden">
            <Image
              src="/images/team.png"
              alt="Our team"
              width={926}
              height={836}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
