import { useTeam } from "@/hooks/useTeam";
import { TeamShowcase } from "@/components/ui/team-showcase";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorState } from "@/components/common/ErrorState";

// Mirrors the showcase layout (photo mosaic) so the page doesn't jump
// when the data arrives.
function TeamSkeleton() {
  return (
    <div aria-hidden="true">
      {/* Small screens: grid of cards */}
      <div className="mx-auto grid w-full max-w-[560px] grid-cols-2 gap-x-[16px] gap-y-[28px] sm:grid-cols-3 md:hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-12">
            <Skeleton className="aspect-[4/5] w-full" />
            <Skeleton className="mx-auto h-[16px] w-[70%]" />
          </div>
        ))}
      </div>
      {/* md and up: mosaic */}
      <Skeleton className="mx-auto hidden h-[420px] w-[560px] md:block" />
    </div>
  );
}

export function TeamSection() {
  const { data, isLoading, isError, refetch } = useTeam();

  return (
    <section className="section-spacing">
      <div className="container-page">
        {isLoading && <TeamSkeleton />}
        {isError && <ErrorState message="Couldn't load the team." onRetry={() => refetch()} />}
        {data && <TeamShowcase members={data} />}
      </div>
    </section>
  );
}