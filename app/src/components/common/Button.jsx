import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-60 disabled:cursor-not-allowed " +
  "select-none";

const variants = {
  primary: "bg-primary text-white shadow-softSm hover:bg-primaryDark",
  secondary: "bg-slate-100 text-text hover:bg-slate-200",
  outline: "border border-border bg-white text-text hover:bg-slate-50",
  ghost: "bg-transparent text-text hover:bg-slate-100",
  danger: "bg-danger text-white hover:opacity-95 shadow-softSm",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

function Spinner({ className }) {
  return (
    <span
      className={cn(
        "h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin",
        className
      )}
      aria-hidden="true"
    />
  );
}

const Button = forwardRef(function Button(
  {
    className,
    variant = "primary",
    size = "md",
    isLoading = false,
    children,
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={props.disabled || isLoading}
      {...props}
    >
      {isLoading ? <Spinner /> : null}
      <span className={cn(isLoading && "opacity-90")}>{children}</span>
    </button>
  );
});

export default Button;
