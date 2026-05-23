import { TopHeader } from "@/components/TopHeader";
import { FooterSection } from "@/components/FooterSection";
import { CompanyHero } from "@/components/company/CompanyHero";
import { SSCSection } from "@/components/company/SSCSection";
import { MissionStrip } from "@/components/company/MissionStrip";
import { CompanyBand } from "@/components/company/CompanyBand";
import { TeamSection } from "@/components/company/TeamSection";
import { EPICCCSection } from "@/components/company/EPICCCSection";

export const metadata = {
  title: "Company - Hansen Global Consult",
  description:
    "We connect European companies with highly qualified and culturally compatible candidates.",
};

export default function CompanyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopHeader />
      <main className="flex-1">
        <CompanyHero />
        <SSCSection />
        <MissionStrip />
        <CompanyBand />
        <TeamSection />
        <EPICCCSection />
      </main>
      <FooterSection />
    </div>
  );
}
