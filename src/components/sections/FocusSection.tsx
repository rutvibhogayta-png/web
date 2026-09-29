import { SectionHeader } from "@/components/common/SectionHeader";
import { ModernTechExplorer } from "@/components/sections/ModernTechExplorer";

export function FocusSection() {
  return (
    <section className="section-spacing relative">
      <div className="container-page flex flex-col gap-48">
        <SectionHeader
          eyebrow="Tech Stack & Domains"
          title="Technologies We Explore"
          subhead="From modern full-stack systems and machine learning to cloud DevOps and UI/UX design, here is the technology ecosystem we build with."
          animateOnScroll={false}
        />

        <ModernTechExplorer />
      </div>
    </section>
  );
}