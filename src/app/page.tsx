import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Framework from "@/components/Framework";
import Offerings from "@/components/Offerings";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Offerings />
      <Framework />
      <Philosophy />
      <Footer />
    </main>
  );
}
