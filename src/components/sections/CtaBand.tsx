import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Calendar, CheckCircle2 } from "lucide-react";

interface CtaBandProps {
  title?: string;
  subhead?: string;
  buttonLabel?: string;
  to?: string;
  animateOnScroll?: boolean;
}

export function CtaBand({
  title = "Ready to build something extraordinary?",
  subhead = "Join 500+ students at Navrachana University collaborating on projects, learning modern tech, and shipping real software.",
  buttonLabel = "Join NeoFolks Today",
  to = "/contact",
}: CtaBandProps) {
  return (
    <section className="section-spacing relative pb-64">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-card border border-graphite/70 bg-carbon-card/90 px-24 py-48 text-center sm:px-48 sm:py-64 shadow-2xl backdrop-blur-xl">
          {/* Top highlight line */}
          <div
            className="pointer-events-none absolute -top-px left-1/2 h-[2px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-lavender-pulse to-transparent opacity-80"
            aria-hidden="true"
          />

          {/* Ambient Radial Aura Glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse at 50% -20%, rgba(153,132,216,0.3), rgba(63,203,127,0.1) 45%, transparent 75%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto flex max-w-[700px] flex-col items-center gap-20">
            <div className="inline-flex items-center gap-8 rounded-badge border border-graphite/80 bg-void-black/60 px-12 py-4 text-caption text-ash-gray">
              <Sparkles className="h-10 w-10 text-mint-signal" />
              <span>Free to Join · Open for 2026</span>
            </div>

            <h2 className="font-alpha-lyrae text-display-mobile font-normal text-ghost-white sm:text-display lg:text-[44px]">
              {title}
            </h2>

            <p className="max-w-[560px] text-body-lg text-ash-gray leading-relaxed">
              {subhead}
            </p>

            <div className="flex flex-col items-center gap-16 sm:flex-row">
              <Button
                asChild
                variant="filled"
                className="group px-28 py-14 shadow-[0_0_24px_rgba(255,255,255,0.15)] transition-all duration-300 hover:shadow-[0_0_32px_rgba(153,132,216,0.35)]"
              >
                <Link to={to} className="flex items-center gap-8 font-semibold">
                  <span>{buttonLabel}</span>
                  <ArrowRight className="h-14 w-14 transition-transform duration-200 group-hover:translate-x-3" />
                </Link>
              </Button>
              <Button asChild variant="outlined" className="bg-white/[0.03] backdrop-blur-sm border-graphite hover:border-ghost-white hover:bg-white/[0.08] px-24 py-14">
                <Link to="/events" className="flex items-center gap-8">
                  <Calendar className="h-14 w-14 text-ash-gray" />
                  <span>See Upcoming Events</span>
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-20 gap-y-8 text-caption text-steel-gray">
              <span className="flex items-center gap-6">
                <CheckCircle2 className="h-12 w-12 text-mint-signal" />
                Zero Membership Fees
              </span>
              <span className="flex items-center gap-6">
                <CheckCircle2 className="h-12 w-12 text-mint-signal" />
                Open to All Departments
              </span>
              <span className="flex items-center gap-6">
                <CheckCircle2 className="h-12 w-12 text-mint-signal" />
                Beginner to Advanced
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
