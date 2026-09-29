import { EASE_OUT } from "@/lib/motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PillBadge } from "@/components/common/PillBadge";
import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { ArrowRight, Sparkles, Calendar, Users, Code } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[700px] pt-[140px] pb-56 md:min-h-[880px] md:pt-[170px]">
      <div className="container-page flex flex-col items-center text-center">
        {/* Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <div className="inline-flex items-center gap-8 rounded-badge border border-graphite/80 bg-carbon-card/80 px-14 py-6 text-caption text-ash-gray backdrop-blur-md transition-colors hover:border-steel-gray">
            <span className="relative flex h-8 w-8">
              <span className="absolute inline-flex h-full w-full animate-glow-pulse rounded-full bg-mint-signal opacity-75" />
              <span className="relative inline-flex h-8 w-8 rounded-full bg-mint-signal" />
            </span>
            <span className="font-medium text-ghost-white">Navrachana University Tech Club</span>
            <span className="text-steel-gray">·</span>
            <span className="text-mint-signal">Active 2026</span>
          </div>
        </motion.div>

        {/* Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: EASE_OUT }}
          className="font-alpha-lyrae mt-24 max-w-[840px] text-display-mobile font-normal tracking-tight text-ghost-white sm:text-display lg:text-[56px] lg:leading-[1.08]"
        >
          Learn in public.{" "}
          <span className="bg-gradient-to-r from-ghost-white via-bone-white to-lavender-pulse bg-clip-text text-transparent">
            Build together.
          </span>{" "}
          Ship fearlessly.
        </motion.h1>

        {/* Subhead Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: EASE_OUT }}
          className="mt-20 max-w-[640px] text-body-lg text-ash-gray leading-relaxed"
        >
          NeoFolks is the technology collective at Navrachana University, Vadodara. We empower
          students to code, design, and ship real-world projects through hands-on workshops,
          hackathons, and peer collaboration.
        </motion.p>

        {/* Primary and Secondary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24, ease: EASE_OUT }}
          className="mt-32 flex flex-col items-center gap-16 sm:flex-row"
        >
          <Button asChild variant="filled" className="group shadow-[0_0_24px_rgba(255,255,255,0.15)] transition-all duration-300 hover:shadow-[0_0_32px_rgba(153,132,216,0.35)]">
            <Link to="/contact" className="flex items-center gap-8">
              <span>Join NeoFolks</span>
              <ArrowRight className="h-14 w-14 transition-transform duration-200 group-hover:translate-x-3" />
            </Link>
          </Button>
          <Button asChild variant="outlined" className="bg-white/[0.03] backdrop-blur-sm border-graphite/80 hover:border-ghost-white hover:bg-white/[0.08]">
            <Link to="/events" className="flex items-center gap-8">
              <Calendar className="h-14 w-14 text-ash-gray" />
              <span>Explore Events</span>
            </Link>
          </Button>
        </motion.div>

        {/* Quick Micro-feature Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="mt-24 flex flex-wrap items-center justify-center gap-x-24 gap-y-12 text-caption text-steel-gray"
        >
          <span className="flex items-center gap-6">
            <Sparkles className="h-10 w-10 text-mint-signal" />
            100% Free & Student-Led
          </span>
          <span className="flex items-center gap-6">
            <Users className="h-10 w-10 text-lavender-pulse" />
            Open to All NUV Majors
          </span>
          <span className="flex items-center gap-6">
            <Code className="h-10 w-10 text-ghost-white" />
            No Prior Coding Required
          </span>
        </motion.div>

        {/* Interactive Feature & Code Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: EASE_OUT }}
          className="w-full"
        >
          <HeroShowcase />
        </motion.div>
      </div>
    </section>
  );
}