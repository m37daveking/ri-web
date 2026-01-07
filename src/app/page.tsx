import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import SkillsSection from "@/components/SkillsSection";
import TechnologySection from "@/components/TechnologySection";
import FeaturesSection from "@/components/FeaturesSection";
import PollSection from "@/components/PollSection";
import CTASection from "@/components/CTASection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ScrollBackground from "@/components/ScrollBackground";

export default function Home() {
  return (
    <ScrollBackground>
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <TechnologySection />
        <SkillsSection />
        <FeaturesSection />
        <PollSection />
        <CTASection />
        <NewsletterSection />
      </main>
      <Footer />
    </ScrollBackground>
  );
}
