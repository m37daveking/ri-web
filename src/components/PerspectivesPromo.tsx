"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
}

// Fallback posts if API is empty
const defaultPosts: Post[] = [
  {
    slug: "ai-capability-gap",
    title: "The AI Capability Gap",
    excerpt: "Why most organisations struggle to capture value from AI — and what to do about it.",
    date: "2025-01-23",
    readTime: "5 min read",
  },
  {
    slug: "building-vs-buying",
    title: "Building vs Buying AI",
    excerpt: "A framework for deciding when to build custom AI solutions and when to leverage existing tools.",
    date: "2025-01-15",
    readTime: "7 min read",
  },
];

export default function PerspectivesPromo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [posts, setPosts] = useState<Post[]>(defaultPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const apiPosts = await response.json() as Post[];

        if (apiPosts.length > 0) {
          const apiSlugs = new Set(apiPosts.map(p => p.slug));
          const mergedPosts = [
            ...apiPosts,
            ...defaultPosts.filter(p => !apiSlugs.has(p.slug))
          ];
          mergedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          setPosts(mergedPosts.slice(0, 3));
        } else {
          setPosts(defaultPosts.slice(0, 3));
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[var(--background)]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <p className="font-mono text-sm text-[var(--foreground)] mb-3 tracking-wider">
              PERSPECTIVES
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[var(--foreground)]">
              Latest thinking.
            </h2>
          </div>
          <Link
            href="/perspectives"
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:gap-3 transition-all font-medium"
          >
            <span>See all</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Link href={`/perspectives/${post.slug}`}>
                <div className="bg-white rounded-xl shadow-sm border border-[var(--border)] hover:shadow-md hover:border-[var(--accent)] transition-all group h-full flex flex-col overflow-hidden">
                  {post.image && (
                    <div className="relative h-40 flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)] mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-[var(--foreground-subtle)]">
                      <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
