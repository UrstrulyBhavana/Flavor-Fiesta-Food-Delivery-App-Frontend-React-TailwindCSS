export default function Shimmer() {
  return (
    <div className="p-4" role="status" aria-live="polite" aria-busy="true">
      <div className="max-w-7xl mx-auto grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="w-full h-[340px] md:h-[360px] rounded-lg bg-amber-50 border border-amber-100 shadow-sm overflow-hidden motion-safe:animate-pulse motion-reduce:animate-none"
          >
            <div className="h-40 bg-amber-300/70" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-amber-300/70 rounded w-3/4" />
              <div className="h-3 bg-amber-300/70 rounded w-5/6" />
              <div className="flex gap-2">
                <div className="h-5 bg-amber-300/70 rounded w-16" />
                <div className="h-5 bg-amber-300/70 rounded w-20" />
              </div>
              <div className="h-3 bg-amber-300/70 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
