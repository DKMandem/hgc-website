import { TopHeader } from "@/components/TopHeader";
import { FooterSection } from "@/components/FooterSection";
import { ExpertiseHero } from "@/components/expertise/ExpertiseHero";
import { ExpertiseServices } from "@/components/expertise/ExpertiseServices";
import { CtaSection } from "@/components/CtaSection";
import { ContactSection } from "@/components/connect/ContactSection";

export const metadata = {
  title: "Expertise - Hansen Global Consult",
  description:
    "Multicultural executive search firm finding high-quality candidates for mid- to senior-level management positions.",
};

export default function ExpertisePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopHeader />
      <main className="flex-1">
        <ExpertiseHero />
        <ExpertiseServices />
        <CtaSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
