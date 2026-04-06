import Badge from "../common/Badge";

export default function OrderCard({ order }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-extrabold">Order #{order._id}</div>
          <div className="text-sm text-muted">
            {new Date(order.createdAt).toLocaleDateString()}
          </div>
        </div>

        <Badge variant={order.isPaid ? "success" : "warning"}>
          {order.isPaid ? "Paid" : "Pending"}
        </Badge>
      </div>

      <div className="mt-4 space-y-3">
        {order.orderItems.map((item, idx) => (
          <div key={idx} className="flex gap-3 items-center">
            <img
              src={item.image}
              alt={item.name}
              className="h-14 w-14 rounded-xl object-cover border"
            />
            <div className="flex-1">
              <div className="font-bold">{item.name}</div>
              <div className="text-xs text-muted">
                Size {item.size} · {item.color} · Qty {item.quantity}
              </div>
            </div>
            <div className="font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-border pt-3 flex justify-between font-extrabold">
        <span>Total</span>
        <span>${order.totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}
