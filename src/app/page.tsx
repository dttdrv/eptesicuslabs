import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CurrentWork from "@/components/sections/CurrentWork";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-[#2D6CDF] selection:text-white">
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <CurrentWork />
        <Footer />
      </div>
    </main>
  );
}
