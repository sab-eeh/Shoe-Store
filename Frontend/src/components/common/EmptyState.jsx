import { cn } from "../../utils/cn";
import Button from "./Button";

export default function EmptyState({
  title = "Nothing here yet",
  description = "Try adjusting your filters or come back later.",
  actionLabel,
  onAction,
  className,
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-8 text-center shadow-soft",
        className
      )}
    >
      <div className="mx-auto h-12 w-12 rounded-2xl bg-slate-100 grid place-items-center text-slate-700 font-black">
        !
      </div>
      <h3 className="mt-4 text-lg font-extrabold">{title}</h3>
      <p className="mt-2 text-sm text-muted max-w-md mx-auto">{description}</p>

      {actionLabel ? (
        <div className="mt-5 flex justify-center">
          <Button variant="primary" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
