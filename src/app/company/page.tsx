import { TopHeader } from "@/components/TopHeader";
import { FooterSection } from "@/components/FooterSection";
import { CompanyHero } from "@/components/company/CompanyHero";
import { SSCSection } from "@/components/company/SSCSection";
import { TeamSection } from "@/components/company/TeamSection";
import { ReadyToTalkSection } from "@/components/company/ReadyToTalkSection";
import { ContactSection } from "@/components/connect/ContactSection";

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
        <TeamSection />
        <ReadyToTalkSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
