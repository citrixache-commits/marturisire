export function SkeletonLine({ width = "100%", height = 14 }: { width?: string; height?: number }) {
  return (
    <div
      className="rounded-md animate-pulse"
      style={{ width, height, background: "#C5A55A15" }}
    />
  );
}

export function SkeletonCard({ height = 120 }: { height?: number }) {
  return (
    <div
      className="rounded-2xl animate-pulse"
      style={{ height, background: "#C5A55A0a", border: "1px solid #C5A55A11" }}
    />
  );
}

export default function ScreenSkeleton() {
  return (
    <div className="px-4 py-5 space-y-4" role="status" aria-label="Se încarcă...">
      <SkeletonCard height={180} />
      <div className="space-y-2">
        <SkeletonLine width="60%" height={20} />
        <SkeletonLine width="90%" />
        <SkeletonLine width="75%" />
      </div>
      <SkeletonCard height={100} />
      <div className="grid grid-cols-2 gap-3">
        <SkeletonCard height={100} />
        <SkeletonCard height={100} />
      </div>
    </div>
  );
}
