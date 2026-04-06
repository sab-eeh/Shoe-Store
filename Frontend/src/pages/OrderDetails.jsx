import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Page from "../components/common/Page";
import SectionHeading from "../components/common/SectionHeading";
import Badge from "../components/common/Badge";
import { getOrderById } from "../api/orders.api";

export default function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getOrderById(id).then(setOrder);
  }, [id]);

  if (!order) {
    return (
      <Page title="Order Details">
        <p className="text-muted">Loading order...</p>
      </Page>
    );
  }
  const IMAGE_BASE_URL = "http://localhost:5000";

  return (
    <Page title="Order Details">
      <SectionHeading
        title={`Order #${order._id}`}
        subtitle={new Date(order.createdAt).toLocaleString()}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          {order.orderItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-xl border border-border bg-surface p-4"
            >
              {/* IMAGE */}
              <img
                src={`${IMAGE_BASE_URL}${item.image}`}
                alt={item.name}
                className="h-16 w-16 rounded-lg object-cover border"
              />

              <div className="flex-1">
                <div className="font-extrabold">{item.name}</div>
                <div className="text-sm text-muted">
                  Size {item.size} · {item.color}
                </div>
              </div>

              <div className="font-bold whitespace-nowrap">
                ${item.price} × {item.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="rounded-xl border border-border bg-surface p-5 h-fit">
          <h3 className="font-extrabold mb-3">Summary</h3>

          <Row label="Items" value={`$${order.itemsPrice}`} />
          <Row label="Shipping" value={`$${order.shippingPrice}`} />
          <Row label="Total" value={`$${order.totalPrice}`} />

          <div className="mt-4">
            <Badge variant={order.isPaid ? "success" : "warning"}>
              {order.isPaid ? "Paid" : "Cash on Delivery"}
            </Badge>
          </div>

          <div className="mt-4 text-sm text-muted">
            <div>{order.shippingAddress.fullName}</div>
            <div>{order.shippingAddress.phone}</div>
            <div>{order.shippingAddress.address}</div>
            <div>{order.shippingAddress.city}</div>
          </div>
        </div>
      </div>
    </Page>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between text-sm mb-2">
      <span className="text-muted">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
