"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LocalPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  content: string;
}

// Post content - add full posts here
const postsContent: Record<string, {
  title: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}> = {
  "ai-capability-gap": {
    title: "The AI Capability Gap",
    date: "2025-01-23",
    readTime: "5 min read",
    content: (
      <>
        <p>
          The gap between AI&apos;s potential and most organisations&apos; ability to capture it has never been wider.
          Every week brings announcements of new models, new capabilities, new possibilities. Yet most enterprises
          remain stuck in pilot purgatory — running experiments that never scale, building proofs of concept that
          never become products.
        </p>
        <p>
          This isn&apos;t a technology problem. The technology works. It&apos;s a capability problem — a gap between
          what&apos;s possible and what organisations can actually execute.
        </p>
        <h2>The Three Gaps</h2>
        <p>
          We see three distinct capability gaps holding organisations back:
        </p>
        <p>
          <strong>The People Gap:</strong> Teams that understand the business don&apos;t understand AI. Teams that
          understand AI don&apos;t understand the business. The translation layer is missing.
        </p>
        <p>
          <strong>The Process Gap:</strong> Existing workflows were designed for a world where humans did everything.
          Retrofitting AI into these processes captures a fraction of the potential value.
        </p>
        <p>
          <strong>The Product Gap:</strong> Most organisations are consumers of AI, not builders. They lack the
          engineering capability to create differentiated AI-powered products and services.
        </p>
        <h2>Closing the Gap</h2>
        <p>
          Closing these gaps requires more than buying tools or hiring consultants. It requires building lasting
          capability — the skills, processes, and systems that allow an organisation to continuously adapt as
          AI evolves.
        </p>
        <p>
          This is the work we do at Radical Intelligence. Not building for you, but building with you — in a
          way that transfers the muscle.
        </p>
      </>
    ),
  },
  "building-vs-buying": {
    title: "Building vs Buying AI",
    date: "2025-01-15",
    readTime: "7 min read",
    content: (
      <>
        <p>
          &quot;Should we build or buy?&quot; It&apos;s the question we hear most often from organisations starting
          their AI journey. And like most important questions, the answer is: it depends.
        </p>
        <p>
          But it depends on things most organisations aren&apos;t considering. The build vs buy decision isn&apos;t
          primarily about cost or time-to-market. It&apos;s about where you want to create competitive advantage.
        </p>
        <h2>The Decision Framework</h2>
        <p>
          We use a simple framework to guide this decision:
        </p>
        <p>
          <strong>Buy</strong> when AI is a commodity input — when the capability is table stakes and
          differentiation comes from elsewhere. Customer service chatbots, document processing, basic
          analytics — these are increasingly commoditised. Buy the best available and move on.
        </p>
        <p>
          <strong>Build</strong> when AI is a source of differentiation — when proprietary data, unique
          workflows, or deep domain expertise can create capabilities your competitors can&apos;t easily
          replicate.
        </p>
        <h2>The Hidden Third Option</h2>
        <p>
          But there&apos;s a third option most organisations miss: build the capability to build. Rather than
          outsourcing AI development entirely, invest in the internal skills and systems that allow you to
          rapidly build and iterate on AI solutions.
        </p>
        <p>
          This is where the real leverage lies. Not in any single AI application, but in the organisational
          capability to continuously identify opportunities, experiment quickly, and scale what works.
        </p>
      </>
    ),
  },
};

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [localPost, setLocalPost] = useState<LocalPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch posts from API
    const fetchPost = async () => {
      try {
        const response = await fetch('/api/posts');
        const posts = await response.json() as LocalPost[];
        const found = posts.find(p => p.slug === slug);
        if (found) {
          setLocalPost(found);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
      setIsLoading(false);
    };

    fetchPost();
  }, [slug]);

  const hardcodedPost = postsContent[slug];

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[var(--background)]">
        <Header />
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[var(--foreground-muted)]">Loading...</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (!hardcodedPost && !localPost) {
    return (
      <main className="min-h-screen bg-[var(--background)]">
        <Header />
        <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-light mb-4">Post not found</h1>
            <Link href="/perspectives" className="text-[var(--accent)] hover:underline">
              Back to Perspectives
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  // Use local post if available, otherwise hardcoded
  const post = localPost || hardcodedPost;

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />

      {/* Article */}
      <article className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/perspectives"
              className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors mb-8"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Perspectives
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 text-[var(--foreground)]">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-[var(--foreground-subtle)] mb-12 pb-8 border-b border-[var(--border)]">
              <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <div className="prose prose-lg max-w-none text-[var(--foreground-muted)] [&>p]:mb-6 [&>p]:leading-relaxed [&>h2]:text-2xl [&>h2]:font-light [&>h2]:text-[var(--foreground)] [&>h2]:mt-10 [&>h2]:mb-4 [&>strong]:text-[var(--foreground)] [&>p>strong]:text-[var(--foreground)]">
              {localPost ? (
                <div dangerouslySetInnerHTML={{ __html: localPost.content }} />
              ) : (
                hardcodedPost?.content
              )}
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
