"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  status?: 'draft' | 'published';
}

// Posts are fetched from the API (managed via admin panel)
const defaultPosts: Post[] = [];

export default function PerspectivesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [posts, setPosts] = useState<Post[]>(defaultPosts);

  useEffect(() => {
    // Fetch posts from API
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const apiPosts = await response.json() as Post[];

        if (apiPosts.length > 0) {
          // Filter to only published posts (treat undefined status as published for backwards compatibility)
          const publishedApiPosts = apiPosts.filter(p => p.status !== 'draft');
          // Merge: API posts first, then defaults that aren't already in API
          const apiSlugs = new Set(publishedApiPosts.map(p => p.slug));
          const mergedPosts = [
            ...publishedApiPosts,
            ...defaultPosts.filter(p => !apiSlugs.has(p.slug))
          ];
          // Sort by date descending
          mergedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          setPosts(mergedPosts);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm text-[var(--foreground)] mb-4 tracking-wider">
              PERSPECTIVES
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-[var(--foreground)]">
              Thinking out loud.
            </h1>
            <p className="text-xl text-[var(--foreground-muted)] max-w-2xl">
              Insights, frameworks, and practical guidance for organisations navigating the AI landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts List */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-[var(--background-secondary)]" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/perspectives/${post.slug}`}>
                  <div className="bg-white rounded-xl shadow-sm border border-[var(--border)] hover:shadow-md hover:border-[var(--accent)] transition-all group overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      {post.image && (
                        <div className="md:w-48 lg:w-56 flex-shrink-0">
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      )}
                      <div className="flex-1 p-6 md:p-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <h2 className="text-xl md:text-2xl font-light text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-2">
                            {post.title}
                          </h2>
                          <p className="text-[var(--foreground-muted)] mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-[var(--foreground-subtle)]">
                            <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="text-[var(--foreground-subtle)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--foreground-muted)]">No posts yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
