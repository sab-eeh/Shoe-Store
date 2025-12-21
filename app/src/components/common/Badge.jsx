import { cn } from "../../utils/cn";

const styles = {
  default: "bg-slate-100 text-slate-700 border-slate-200",
  primary: "bg-blue-50 text-blue-700 border-blue-200",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  danger: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function Badge({ children, variant = "default", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
