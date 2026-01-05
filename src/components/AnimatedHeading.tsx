"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
}

export default function AnimatedHeading({
  text,
  className = "",
  as: Component = "h2",
  delay = 0
}: AnimatedHeadingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const words = text.split(" ");

  return (
    <Component ref={ref as any} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden"
          style={{ marginRight: '0.3em' }}
        >
          <span
            className={`inline-block transition-all duration-500 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
