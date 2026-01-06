"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const caseStudies: Record<string, {
  client: string;
  title: string;
  description: string;
  year: string;
  category: string;
  image: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
}> = {
  "rea-group": {
    client: "REA Group",
    title: "AI Agents for Sales Operations",
    description: "AI agents that deliver real-time customer insights and automate administrative tasks for sales teams.",
    year: "2025",
    category: "Capability",
    image: "/images/capability.jpg",
    challenge: "Knowledge workers at REA Group spent excessive time navigating multiple dashboards and gathering customer insights. The organisation needed a streamlined, real-time solution to surface critical customer information and automate administrative tasks.",
    approach: [
      "Designed AI agents to integrate seamlessly with REA's internal systems",
      "Built assistants that deliver real-time information and status updates",
      "Developed capability to execute actions and simplify multi-step workflows",
      "Created instant data retrieval for essential customer context",
      "Implemented agents that enhance meeting readiness with rich customer insights",
    ],
    outcomes: [
      "Reduced time spent on administrative tasks",
      "Improved self-service resolution rates",
      "Enhanced meeting preparedness with rich customer context",
      "Increased productivity for sales teams",
      "Sales professionals now concentrate on high-value activities rather than data gathering",
    ],
  },
  "the-squiz": {
    client: "The Squiz",
    title: "AI Content Studio",
    description: "A comprehensive AI content studio for story ideation, co-authoring, and editorial evaluation.",
    year: "2024",
    category: "Capability",
    image: "/images/hero.jpg",
    challenge: "The Squiz needed to scale their content planning with greater efficiency while maintaining the sharp editorial judgment that sets them apart. As an independent news outlet serving time-poor, information-hungry women underserved by traditional media, they couldn't compromise on their distinctive voice.",
    approach: [
      "Built a comprehensive AI content studio with robust pipeline across ingestion, research, and data",
      "Developed AI-assisted tools for story ideation and headline generation",
      "Created talking points generation to support editorial workflows",
      "Built custom models to evaluate tone, consistency, and accuracy against editorial standards",
      "Integrated co-authoring capabilities while preserving editorial control",
    ],
    outcomes: [
      "Enhanced editorial workflow efficiency and scalability",
      "Journalists freed to focus on higher-value editorial tasks",
      "Maintained editorial integrity throughout content operations",
      "Discovered new revenue and IP opportunities through system scalability",
      "Successfully harnessed AI to amplify editorial strengths and deliver impactful news coverage more efficiently",
    ],
  },
  "reece-group": {
    client: "Reece Group",
    title: "Customer Intelligence Platform",
    description: "LLM-powered platform aggregating customer data for personalised engagement and win-back campaigns.",
    year: "2025",
    category: "Capability",
    image: "/images/sight.jpg",
    challenge: "Today's omnichannel marketing environment requires more than generic outreach — it needs deep understanding of customers' past behaviours, preferences, and interactions to personalise engagement. Reece's customer data was scattered across multiple platforms, making it challenging to develop actionable insights about disengaged customers.",
    approach: [
      "Developed an LLM-powered platform that aggregates data from multiple sources",
      "Built capability to synthesise behavioral, transactional, and CRM insights",
      "Created comprehensive customer profiles from disparate data",
      "Enabled identification of disengagement patterns across customer base",
      "Supported data-driven strategy development for marketing teams",
    ],
    outcomes: [
      "Empowered marketing teams to engage lapsed customers with enhanced relevance",
      "Enabled more effective win-back campaigns with personalised messaging",
      "Improved conversion rates through targeted engagement",
      "Strengthened customer retention across channels",
      "Positioned for long-term business growth through better customer intelligence",
    ],
  },
  "myob": {
    client: "MYOB",
    title: "AI Strategy & Roadmap",
    description: "Strategic masterclasses and workshops producing a prioritised backlog of AI-driven initiatives.",
    year: "2024",
    category: "Sight",
    image: "/images/framework visual.jpg",
    challenge: "MYOB, as a leading Australian small business software company, understood AI's potential impact but needed external perspective and expertise to advance their AI initiatives. They required support to explore AI's current state and industry-specific implications, moving from exploration to execution.",
    approach: [
      "Designed strategic masterclasses and workshops for key stakeholders",
      "Explored AI's current state and industry-specific implications for small business software",
      "Facilitated hands-on experimentation and ideation sessions",
      "Generated AI-driven concepts through collaborative workshops",
      "Refined and prioritised ideas into a strategic backlog",
    ],
    outcomes: [
      "Cross-functional alignment achieved across teams",
      "Well-defined backlog of AI-driven initiatives created",
      "Enabled transition from exploration to execution",
      "Enhanced organisational confidence in testing and integrating AI solutions",
      "Positioned MYOB to leverage generative AI for innovation, efficiency, and competitive advantage",
    ],
  },
  "nt-government": {
    client: "Northern Territory Government",
    title: "Government AI Strategy",
    description: "Executive workshops, AI workflow design, and working prototypes for government AI adoption.",
    year: "2023",
    category: "Sight",
    image: "/images/manifesto.jpg",
    challenge: "The NT Chief Minister's Office and Tourism NT needed to explore generative AI's potential and develop a strategic approach to AI adoption. Leadership teams required education on implementation opportunities while understanding the risks and practical applications specific to government contexts.",
    approach: [
      "Facilitated high-impact executive workshops to educate leadership on AI opportunities, risks, and practical applications",
      "Mapped AI-powered processes to improve internal operations",
      "Designed workflows to enhance service delivery",
      "Developed working prototypes demonstrating AI potential in content generation",
      "Created prototypes for personalised recommendations and automated decision support",
    ],
    outcomes: [
      "Positioned NT agencies as leaders in government AI adoption",
      "Transitioned from theoretical discussions to tangible innovation",
      "Established foundation for AI-driven operational efficiencies",
      "Created new capabilities in content generation and recommendations",
      "Built internal confidence and capability for ongoing AI initiatives",
    ],
  },
  "dfe-south-australia": {
    client: "Department for Education SA",
    title: "AI Research Engine",
    description: "Automated qualitative analysis of school review reports using the Archer AI research engine.",
    year: "2023",
    category: "Capability",
    image: "/images/sustenance.jpg",
    challenge: "The South Australian Department of Education faced inefficiencies in processing hundreds of external school review reports. Manual analysis of these documents was time-consuming and resource-intensive, limiting their ability to extract actionable insights and track patterns systematically across the education system.",
    approach: [
      "Implemented Archer, our AI enterprise research engine, to automate qualitative analysis",
      "Scaled analysis across the entire report dataset",
      "Identified thematic patterns across hundreds of documents",
      "Extracted recurring insights for strategic planning",
      "Enabled comparative analysis over time to track systemic changes",
    ],
    outcomes: [
      "Significantly reduced time required for report analysis",
      "Decreased manual effort and resource allocation",
      "Processed large volumes of qualitative data without proportional cost increases",
      "Enabled more informed decision-making and clearer strategic focus",
      "Enhanced ability to identify and respond to systemic patterns across the education system",
    ],
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudies[slug];

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  if (!study) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--background)]">
        {/* Back link */}
      <div className="fixed top-24 left-6 md:left-12 z-30">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-[var(--border)] rounded-full text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All work
        </Link>
      </div>

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-6 md:px-12" ref={heroRef}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 text-xs font-mono bg-[var(--accent-dim)] text-[var(--accent)] rounded-full">
                {study.category}
              </span>
              <span className="text-sm text-[var(--foreground-subtle)]">{study.year}</span>
            </div>
            <p className="font-mono text-sm text-[var(--foreground-muted)] mb-2">
              {study.client}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 text-[var(--foreground)]">
              {study.title}
            </h1>
            <p className="text-lg md:text-xl text-[var(--foreground-muted)]">
              {study.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 md:px-12 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src={study.image}
              alt={study.title}
              width={1600}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Challenge */}
      <section className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-[var(--accent)] mb-4 tracking-wider">
              THE CHALLENGE
            </p>
            <p className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed">
              {study.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 md:px-12 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-[var(--accent)] mb-8 tracking-wider">
              OUR APPROACH
            </p>
            <ul className="space-y-4">
              {study.approach.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm font-mono">
                    {index + 1}
                  </span>
                  <p className="text-[var(--foreground-muted)] leading-relaxed pt-1">
                    {step}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-[var(--accent)] mb-8 tracking-wider">
              THE OUTCOMES
            </p>
            <ul className="space-y-4">
              {study.outcomes.map((outcome, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-[var(--accent)] flex-shrink-0 mt-1"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-[var(--foreground-muted)] leading-relaxed">
                    {outcome}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-[var(--foreground)]">
              Want similar results?
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8">
              Let's talk about how we can help transform your organisation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 px-6 py-3 gradient-bg text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Get in touch
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-lg text-[var(--foreground-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                View more work
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
