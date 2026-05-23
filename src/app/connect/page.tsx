import { TopHeader } from "@/components/TopHeader";
import { FooterSection } from "@/components/FooterSection";
import { ConnectHero } from "@/components/connect/ConnectHero";
import { ContactSection } from "@/components/connect/ContactSection";
import { ConnectBand } from "@/components/connect/ConnectBand";

export const metadata = {
  title: "Connect - Hansen Global Consult",
  description:
    "Get in touch for executive recruitment questions, comments, or appointment requests.",
};

export default function ConnectPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopHeader />
      <main className="flex-1">
        <ConnectHero />
        <ContactSection />
        <ConnectBand />
      </main>
      <FooterSection />
    </div>
  );
}
