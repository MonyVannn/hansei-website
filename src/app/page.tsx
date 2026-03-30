import { Hero } from "@/components/homepage/Hero";
import { AboutSection } from "@/components/homepage/AboutSection";
import { WorkShowcaseSection } from "@/components/homepage/WorkShowcaseSection";
import { ServicesSection } from "@/components/homepage/ServicesSection";
import { CountUpStats } from "@/components/homepage/CountUpStats";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkShowcaseSection />
      <ServicesSection />
      <CountUpStats />
    </>
  );
}
