import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Framework from "@/components/Framework";
import ServicesPromo from "@/components/ServicesPromo";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServicesPromo />
      <Framework />
      <Philosophy />
      <Footer />
    </main>
  );
}
