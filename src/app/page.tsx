"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContentImageSection from "@/components/ContentImageSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-navy-950">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContentImageSection />
      <ProcessSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
