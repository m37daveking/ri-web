import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Radical Intelligence : The AI Transformation Company",
  description: "We work at the intersection of engineering, operations and business impact.",
  openGraph: {
    title: "Radical Intelligence : The AI Transformation Company",
    description: "We work at the intersection of engineering, operations and business impact.",
    type: "website",
  },
  keywords: [
    "AI transformation Australia",
    "Enterprise AI consulting",
    "AI capability building",
    "Agentic AI implementation",
    "AI agent development",
    "Workforce AI transformation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
