import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const selectBase =
  "w-full rounded-xl border border-border bg-white px-3 py-2 text-sm text-text " +
  "shadow-sm transition focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40";

const Select = forwardRef(function Select(
  { label, hint, error, className, containerClassName, id, children, ...props },
  ref
) {
  const selectId = id || props.name;

  return (
    <div className={cn("w-full", containerClassName)}>
      {label ? (
        <label
          htmlFor={selectId}
          className="mb-1 block text-sm font-semibold text-text"
        >
          {label}
        </label>
      ) : null}

      <select
        ref={ref}
        id={selectId}
        className={cn(
          selectBase,
          error && "border-danger focus:ring-danger/20",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={hint || error ? `${selectId}-help` : undefined}
        {...props}
      >
        {children}
      </select>

      {hint || error ? (
        <p
          id={`${selectId}-help`}
          className={cn("mt-1 text-xs", error ? "text-danger" : "text-muted")}
        >
          {error || hint}
        </p>
      ) : null}
    </div>
  );
});

export default Select;
