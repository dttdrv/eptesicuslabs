import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProductsSection from "@/components/sections/ProductsSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import TeamSection from "@/components/sections/TeamSection";
import Footer from "@/components/layout/Footer";
import GradientBackground from "@/components/ui/GradientBackground";
import { getAllPublications } from "@/lib/publications";

export default function Home() {
  const publications = getAllPublications('en', { limit: 3 });

  return (
    <main id="main-content" className="min-h-screen relative">
      {/* Gradient Background */}
      <GradientBackground />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <ProductsSection />
        <TeamSection />
        <PublicationsSection publications={publications} />
        <div className="flex-grow" />
        <Footer />
      </div>
    </main>
  );
}
