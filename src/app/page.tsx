import { TopHeader } from "@/components/TopHeader";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TopIndustriesSection } from "@/components/TopIndustriesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CtaSection } from "@/components/CtaSection";
import { ContactSection } from "@/components/connect/ContactSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <TopIndustriesSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
