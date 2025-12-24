import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProductsSection from "@/components/sections/ProductsSection";
import TeamSection from "@/components/sections/TeamSection";
import Footer from "@/components/layout/Footer";
import GradientBackground from "@/components/ui/GradientBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-blue-500 selection:text-white">
      {/* Gradient Background */}
      <GradientBackground />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <ProductsSection />
        <TeamSection />
        <div className="flex-grow" />
        <Footer />
      </div>
    </main>
  );
}
