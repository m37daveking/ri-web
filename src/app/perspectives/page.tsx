"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AsciiArt from "@/components/AsciiArt";

export default function PerspectivesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--foreground)]/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <span className="text-xl font-semibold tracking-tight">Radical Intelligence</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-mono text-[var(--accent)] mb-4 tracking-wider uppercase">
              Perspectives
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              The Transformation Flow
            </h1>
            <p className="text-prose mb-16 max-w-2xl">
              Our framework visualized. From Sight through People, Process, and Product
              to Capability and ongoing Sustenance.
            </p>
          </motion.div>

          {/* ASCII Art Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-[var(--secondary-background)] rounded-2xl p-8 md:p-12 border border-[var(--foreground)]/5">
              <div className="flex items-center justify-center">
                <AsciiArt />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--accent)]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--accent)]/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                <span className="text-[var(--accent)] font-mono text-sm">01</span>
              </div>
              <h3 className="font-semibold">Sight</h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                See what should exist. Deep analysis identifying where AI creates real value across your organisation.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                <span className="text-[var(--accent)] font-mono text-sm">02</span>
              </div>
              <h3 className="font-semibold">Capability</h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Build your ability to build. Hands-on implementation that transfers skills as we deliver working solutions.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                <span className="text-[var(--accent)] font-mono text-sm">03</span>
              </div>
              <h3 className="font-semibold">Sustenance</h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                Stay with you as it evolves. Ongoing partnership ensuring your AI capabilities continue to compound.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--foreground)]/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-[var(--muted-foreground)]">
          <p>&copy; {new Date().getFullYear()} Radical Intelligence</p>
          <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
            Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
