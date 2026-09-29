import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { pageMeta } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { FocusSection } from "@/components/sections/FocusSection";
import { LogoGrid } from "@/components/sections/LogoGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { ModernHeroBackground } from "@/components/effects/ModernHeroBackground";

export default function Home() {
  useDocumentMeta(pageMeta.home);

  return (
    <>
      <div className="relative isolate overflow-hidden">
        <ModernHeroBackground />
        <Hero />
      </div>
      <ActivitiesSection />
      <FocusSection />
      <LogoGrid />
      <Testimonials />
      <CtaBand animateOnScroll={false} />
    </>
  );
}