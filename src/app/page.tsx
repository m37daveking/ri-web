import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutPromo from "@/components/AboutPromo";
import ServicesPromo from "@/components/ServicesPromo";
import PerspectivesPromo from "@/components/PerspectivesPromo";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutPromo />
      <ServicesPromo />
      <PerspectivesPromo />
      <Philosophy />
      <Footer />
    </main>
  );
}
