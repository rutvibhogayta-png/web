import { Link, useLocation } from "react-router-dom";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { pageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  useDocumentMeta(pageMeta.notFound);
  const { pathname } = useLocation();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-24 overflow-hidden px-24 text-center">
      <div className="grid-overlay pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative w-full max-w-[520px] rounded-card border border-graphite bg-carbon-card p-24 text-left font-mono-tech text-body-sm">
        <p className="text-steel-gray">
          <span className="text-mint-signal">neofolks</span>@navrachana:~$ cd {pathname}
        </p>
        <p className="mt-8 text-error-red">
          bash: cd: {pathname}: No such file or directory
        </p>
        <p className="mt-16 text-ash-gray">
          <span className="text-mint-signal">neofolks</span>@navrachana:~$
          <span className="caret-blink ml-8 text-ghost-white">▍</span>
        </p>
      </div>

      <p className="relative text-caption uppercase tracking-wider text-steel-gray">Error 404</p>
      <h1 className="relative text-display-heading">This page wandered off</h1>
      <p className="relative max-w-[480px] text-body-lg text-ash-gray">
        Whatever you were looking for isn't here — it may have moved, or never existed.
      </p>
      <Button asChild variant="filled" className="relative">
        <Link to="/">cd ~ (back to home)</Link>
      </Button>
    </section>
  );
}