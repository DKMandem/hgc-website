import { TopHeader } from "@/components/TopHeader";
import { HeroSection } from "@/components/HeroSection";
import { QuestionsSection } from "@/components/QuestionsSection";
import { HowWeHelpSection } from "@/components/HowWeHelpSection";
import { CtaSection } from "@/components/CtaSection";
import { BlogSection } from "@/components/BlogSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopHeader />
      <main className="flex-1">
        <HeroSection />
        <QuestionsSection />
        <HowWeHelpSection />
        <CtaSection />
        <BlogSection />
      </main>
      <FooterSection />
    </div>
  );
}
