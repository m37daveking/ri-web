"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LocalPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  content: string;
  image?: string;
}


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

  if (!localPost) {
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

  const post = localPost;

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

            <div className="flex items-center gap-4 text-sm text-[var(--foreground-subtle)] mb-8 pb-8 border-b border-[var(--border)]">
              <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            {post.image && (
              <div className="relative w-full h-64 md:h-96 mb-10 rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none text-[var(--foreground-muted)] [&_p]:mb-6 [&_p]:leading-relaxed [&_h2]:text-2xl [&_h2]:font-light [&_h2]:text-[var(--foreground)] [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-[var(--foreground)] [&_h3]:mt-8 [&_h3]:mb-3 [&_strong]:text-[var(--foreground)] [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--accent)] [&_blockquote]:pl-4 [&_blockquote]:italic [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_li]:mb-2 [&_a]:text-[var(--foreground)] [&_a]:underline [&_a:hover]:text-[#7CFC7C]">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
