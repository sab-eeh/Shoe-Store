import { cn } from "../../utils/cn";

export function SizeSelector({ sizes, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onChange(size)}
          className={cn(
            "h-10 w-10 rounded-xl border font-bold",
            value === size
              ? "border-primary bg-primary text-white"
              : "border-border bg-white hover:bg-slate-50"
          )}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export function ColorSelector({ colors, value, onChange }) {
  return (
    <div className="flex gap-3">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onChange(color)}
          className={cn(
            "h-8 w-8 rounded-full border-2",
            value === color ? "border-primary" : "border-border"
          )}
          style={{ backgroundColor: color }}
          aria-label={color}
        />
      ))}
    </div>
  );
}
