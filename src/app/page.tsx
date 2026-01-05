import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Framework from "@/components/Framework";
import Offerings from "@/components/Offerings";
import RIOS from "@/components/RIOS";
import Philosophy from "@/components/Philosophy";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Framework />
      <Offerings />
      <RIOS />
      <Philosophy />
      <Manifesto />
      <Footer />
    </main>
  );
}
