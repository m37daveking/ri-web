"use client";

import FAQAccordion from "./FAQAccordion";
import Link from "next/link";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "What is a Sight engagement?",
    answer: (
      <>
        <p>
          Sight is our strategic discovery phase — typically 2-4 weeks of workshops
          and analysis with your executive and operational stakeholders.
        </p>
        <p>
          We help you see where AI creates real leverage across your people, processes,
          and products. You&apos;ll finish with an AI Opportunity Map, a prioritised
          transformation roadmap, build vs buy analysis, and a clear understanding of
          your readiness.
        </p>
        <p>
          Most organisations start here because clarity is the scarcest resource in
          a world where everyone can build.
        </p>
      </>
    ),
  },
  {
    question: "How is Capability different from traditional consulting?",
    answer: (
      <>
        <p>
          We don&apos;t build for you. We build <em>with</em> you — in a way that
          transfers the muscle.
        </p>
        <p>
          Our Friendgineers embed with your teams for 6-16 weeks. When we leave,
          you have working AI systems, trained internal teams, documentation, and
          the skills to evolve everything yourself.
        </p>
        <p>
          The measure of success isn&apos;t the deliverable — it&apos;s that you&apos;re
          more capable, not more dependent.
        </p>
      </>
    ),
  },
  {
    question: "What is a Sustenance retainer?",
    answer: (
      <>
        <p>
          AI systems need tending. Models improve. Workflows shift. Your competitors
          adapt.
        </p>
        <p>
          Sustenance is our ongoing partnership model. You draw down story points as
          needed for technical maintenance, iteration, and capability refresh as AI
          advances. Quarterly Sight sessions surface new opportunities and feed them
          back into the loop.
        </p>
        <p>
          It&apos;s how capability compounds over time.
        </p>
      </>
    ),
  },
  {
    question: "What is RIOS?",
    answer: (
      <>
        <p>
          RIOS — the Radical Intelligence Operating System — is our AI transformation
          platform that guides organisations from initial assessment through to working
          systems.
        </p>
        <p>
          It includes AI Readiness Assessment across Strategy, Data, Technology, Talent,
          Governance and Culture; a comprehensive Use Case Library; intelligent
          recommendations that match use cases to your priorities; and visual portfolio
          management to track your initiatives.
        </p>
        <p>
          <Link href="mailto:hello@radicalintelligence.com" className="text-highlight">
            Request a demo
          </Link>{" "}
          to see it in action.
        </p>
      </>
    ),
  },
  {
    question: "What industries do you work with?",
    answer: (
      <>
        <p>
          We&apos;ve delivered AI transformation across media, government, real estate,
          education, retail, and SaaS companies.
        </p>
        <p>
          The common thread isn&apos;t industry — it&apos;s organisations that sense
          there&apos;s more they could be doing with AI, but need strategic clarity
          and practical partners to make it real.
        </p>
        <p>
          Check out our{" "}
          <Link href="/work" className="text-highlight">
            case studies
          </Link>{" "}
          to see examples of our work.
        </p>
      </>
    ),
  },
  {
    question: "How do we get started?",
    answer: (
      <p>
        Most organisations begin with a Sight engagement — a few weeks to map the
        landscape and identify where AI creates real leverage for you. Reach out at{" "}
        <a href="mailto:hello@radicalintelligence.com" className="text-highlight">
          hello@radicalintelligence.com
        </a>{" "}
        to start the conversation.
      </p>
    ),
  },
];

export default function FAQSection() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-heading-md mb-12">
            Frequently asked questions
          </h3>

          <FAQAccordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  );
}
