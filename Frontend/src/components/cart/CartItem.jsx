import Button from "../common/Button";

export default function CartItem({ item, index, onRemove, onQtyChange }) {
  const dec = () => onQtyChange(index, Math.max(1, item.quantity - 1));
  const inc = () => onQtyChange(index, item.quantity + 1);

  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-surface p-4 shadow-softSm">
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 rounded-xl object-cover border border-border"
        loading="lazy"
      />

      <div className="flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-extrabold leading-tight">{item.name}</div>
            <div className="mt-1 text-sm text-muted">
              Size: <span className="font-semibold text-text">{item.size}</span>{" "}
              · Color:{" "}
              <span className="font-semibold text-text">{item.color}</span>
            </div>
          </div>

          <div className="text-right">
            <div className="font-black">${item.price}</div>
            <div className="text-xs text-muted mt-1">
              Line: ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="inline-flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={dec}
              aria-label="Decrease quantity"
            >
              -
            </Button>
            <div className="min-w-10 text-center font-extrabold">
              {item.quantity}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={inc}
              aria-label="Increase quantity"
            >
              +
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(index)}
            className="text-danger hover:bg-rose-50"
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}
