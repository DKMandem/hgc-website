import { TopHeader } from "@/components/TopHeader";
import { FooterSection } from "@/components/FooterSection";
import { ExpertiseHero } from "@/components/expertise/ExpertiseHero";
import { ExpertiseYSSH } from "@/components/expertise/ExpertiseYSSH";
import { IndustriesSection } from "@/components/expertise/IndustriesSection";
import { WhoDoWePlaceSection } from "@/components/expertise/WhoDoWePlaceSection";
import { ExpertiseMission } from "@/components/expertise/ExpertiseMission";
import { ExpertiseBand } from "@/components/expertise/ExpertiseBand";

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
        <ExpertiseYSSH />
        <IndustriesSection />
        <WhoDoWePlaceSection />
        <ExpertiseMission />
        <ExpertiseBand />
      </main>
      <FooterSection />
    </div>
  );
}
