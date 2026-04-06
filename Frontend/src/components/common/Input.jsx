import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const inputBase =
  "w-full rounded-xl border border-border bg-white px-3 py-2 text-sm text-text " +
  "placeholder:text-slate-400 shadow-sm transition " +
  "focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40";

export const Input = forwardRef(function Input(
  { label, hint, error, className, containerClassName, id, ...props },
  ref
) {
  const inputId = id || props.name;

  return (
    <div className={cn("w-full", containerClassName)}>
      {label ? (
        <label
          htmlFor={inputId}
          className="mb-1 block text-sm font-semibold text-text"
        >
          {label}
        </label>
      ) : null}

      <input
        ref={ref}
        id={inputId}
        className={cn(
          inputBase,
          error && "border-danger focus:ring-danger/20",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={hint || error ? `${inputId}-help` : undefined}
        {...props}
      />

      {hint || error ? (
        <p
          id={`${inputId}-help`}
          className={cn("mt-1 text-xs", error ? "text-danger" : "text-muted")}
        >
          {error || hint}
        </p>
      ) : null}
    </div>
  );
});

export const TextArea = forwardRef(function TextArea(
  { label, hint, error, className, containerClassName, id, rows = 4, ...props },
  ref
) {
  const inputId = id || props.name;

  return (
    <div className={cn("w-full", containerClassName)}>
      {label ? (
        <label
          htmlFor={inputId}
          className="mb-1 block text-sm font-semibold text-text"
        >
          {label}
        </label>
      ) : null}

      <textarea
        ref={ref}
        id={inputId}
        rows={rows}
        className={cn(
          inputBase,
          "resize-y",
          error && "border-danger focus:ring-danger/20",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={hint || error ? `${inputId}-help` : undefined}
        {...props}
      />

      {hint || error ? (
        <p
          id={`${inputId}-help`}
          className={cn("mt-1 text-xs", error ? "text-danger" : "text-muted")}
        >
          {error || hint}
        </p>
      ) : null}
    </div>
  );
});
