import { Skeleton } from "../common/Skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-soft">
      <Skeleton className="h-40 w-full mb-4" />
      <Skeleton className="h-4 w-3/4 mb-2" />
      <Skeleton className="h-3 w-1/2 mb-4" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
}
