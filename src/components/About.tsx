"use client";

import AnimatedHeading from "./AnimatedHeading";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div>
            <AnimatedHeading
              as="p"
              text="A core team of engineers, strategists, and designers who've been building agentic systems since before it was cool."
              className="text-xl md:text-2xl font-light leading-relaxed mb-8"
            />

            <div className="space-y-4 mb-8">
              <a
                href="mailto:hello@radicalintelligence.com"
                className="block text-lg hover:text-[var(--accent)] transition-colors"
              >
                <span className="text-[var(--accent)]">hello@</span>radicalintelligence.com
              </a>
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)] transition-colors"
            >
              <span>About</span>
              <span className="text-[var(--accent)]">→</span>
            </a>
          </div>

          {/* Right column - Origin story */}
          <div className="space-y-6 text-gray-600">
            <p>
              We weren't early. We were <em>forged</em> in the obscurity phase of AI.
              Now the world has caught up.
            </p>
            <p>
              From Move 37 to Radical Intelligence—real products in the wild: NewsAgent, Hivebot,
              voice assistants, multi-agent orchestration patterns. We've done the obscure, unsexy R&D.
              Not just decks.
            </p>
            <p>
              The metamorphosis into Radical Intelligence isn't a rebrand. It's a shot at becoming
              the gravitational centre of AI transformation—the one that gets name-checked when
              others ship things.
            </p>

            {/* The Moment callout */}
            <div className="mt-8 p-6 border-l-4 border-[var(--accent)] bg-[var(--sand)]">
              <p className="text-[var(--foreground)] font-medium text-lg">
                "AI is The Moment.<br />
                Radical Intelligence is the company built for it."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
