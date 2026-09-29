import { useTestimonials } from "@/hooks/useTestimonials";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorState } from "@/components/common/ErrorState";
import type { Testimonial } from "@/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

interface TestimonialColumnProps {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
  reverse?: boolean;
}

function TestimonialColumn({
  testimonials,
  className = "",
  duration = 24,
  reverse = false,
}: TestimonialColumnProps) {
  const reducedMotion = useReducedMotion();
  const items = reducedMotion ? testimonials : [...testimonials, ...testimonials];

  if (!items.length) return null;

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={
          reducedMotion
            ? "flex flex-col gap-16 pb-16"
            : `flex flex-col gap-16 pb-16 will-change-transform group-hover:[animation-play-state:paused] hover:[animation-play-state:paused] ${
                reverse ? "animate-marquee-vertical-reverse" : "animate-marquee-vertical"
              }`
        }
        style={reducedMotion ? undefined : { animationDuration: `${duration}s` }}
      >
        {items.map(({ id, name, role, quote }, idx) => (
          <div
            key={`${id}-${idx}`}
            className="w-full rounded-card border border-graphite/60 bg-carbon-card/90 p-24 backdrop-blur-sm transition-all duration-300 hover:border-lavender-pulse/50 hover:bg-carbon-card hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
          >
            <p className="text-body-sm font-light text-ash-gray leading-relaxed">
              "{quote}"
            </p>

            <div className="mt-20 flex items-center gap-12">
              <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full border border-graphite/80 bg-void-black text-[13px] font-semibold text-ghost-white shadow-inner">
                {initials(name)}
              </div>
              <div className="flex flex-col">
                <span className="text-body-sm font-semibold text-ghost-white leading-tight">
                  {name}
                </span>
                <span className="text-[12px] text-ash-gray leading-tight mt-1">
                  {role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const { data, isLoading, isError, refetch } = useTestimonials();

  // Distribute testimonials into 3 columns matching the visual layout
  const col1Ids = ["q1", "q2", "q3"];
  const col2Ids = ["q5", "q6", "q4"];
  const col3Ids = ["q9", "q7", "q8"];

  const col1 = data ? col1Ids.map((id) => data.find((t) => t.id === id)).filter((t): t is Testimonial => Boolean(t)) : [];
  const col2 = data ? col2Ids.map((id) => data.find((t) => t.id === id)).filter((t): t is Testimonial => Boolean(t)) : [];
  const col3 = data ? col3Ids.map((id) => data.find((t) => t.id === id)).filter((t): t is Testimonial => Boolean(t)) : [];

  const firstColumn = col1.length ? col1 : (data?.slice(0, 3) ?? []);
  const secondColumn = col2.length ? col2 : (data?.slice(3, 6) ?? []);
  const thirdColumn = col3.length ? col3 : (data?.slice(6, 9) ?? []);

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="container-page flex flex-col gap-48">
        <SectionHeader
          eyebrow="Community Stories"
          title="What Our Members Say"
          subhead="From writing their first line of code to landing top internships, hear how students experience NeoFolks."
          animateOnScroll={false}
        />

        {isLoading && (
          <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-[220px] w-full rounded-card" />
            ))}
          </div>
        )}

        {isError && (
          <ErrorState message="Couldn't load testimonials." onRetry={() => refetch()} />
        )}

        {data && data.length > 0 && (
          <div className="group relative flex max-h-[600px] justify-center gap-16 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]">
            <TestimonialColumn
              testimonials={firstColumn}
              duration={24}
              className="w-full max-w-[360px]"
            />
            <TestimonialColumn
              testimonials={secondColumn}
              duration={20}
              reverse={true}
              className="hidden w-full max-w-[360px] md:block"
            />
            <TestimonialColumn
              testimonials={thirdColumn}
              duration={26}
              className="hidden w-full max-w-[360px] lg:block"
            />
          </div>
        )}
      </div>
    </section>
  );
}