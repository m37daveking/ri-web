"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ScrollBackgroundProps {
  children: ReactNode;
}

export default function ScrollBackground({ children }: ScrollBackgroundProps) {
  const { scrollY } = useScroll();

  // Transition starts after hero (around 600px) and completes by 900px
  const backgroundColor = useTransform(
    scrollY,
    [0, 600, 900],
    ["#ffffff", "#ffffff", "#fdf8f3"]
  );

  return (
    <motion.div
      style={{ backgroundColor }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
