import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import Dashboard from "@/components/sections/Dashboard";
import DataFlow from "@/components/sections/DataFlow";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import Newsletter from "@/components/sections/Newsletter";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Aurora from "@/components/ui/Aurora";
import Background from "@/components/ui/Background";
import BackToTop from "@/components/ui/BackToTop";
import LoadingScreen from "@/components/ui/LoadingScreen";
import MouseGlow from "@/components/ui/MouseGlow";
import Particles from "@/components/ui/Particles";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816]">
      <LoadingScreen />
      <ScrollProgress />
      <Background/>
      <Aurora />
      <Particles />
      <MouseGlow/>
      <Navbar />
      <Hero />
      <DataFlow />
      <Dashboard />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Newsletter />
      <LogoCloud />
      <Contact />
      <CTA />
      <Footer />
      <BackToTop />
    </main>
  );
}