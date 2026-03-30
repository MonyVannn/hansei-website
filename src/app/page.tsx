import { Hero } from "@/components/homepage/Hero";
import { AboutSection } from "@/components/homepage/AboutSection";
import { WorkShowcaseSection } from "@/components/homepage/WorkShowcaseSection";
import { ServicesSection } from "@/components/homepage/ServicesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkShowcaseSection />
      <ServicesSection />
    </>
  );
}
