import { useEffect, useState } from "react";
import Page from "../components/common/Page";
import SectionHeading from "../components/common/SectionHeading";
import EmptyState from "../components/common/EmptyState";
import OrderCard from "../components/orders/OrderCard";
import { getMyOrders } from "../api/orders.api";
import { Link } from "react-router-dom";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyOrders()
      .then(setOrders)
      .finally(() => setLoading(false));
  }, []);

  if (!loading && orders.length === 0) {
    return (
      <Page title="My Orders">
        <EmptyState
          title="No orders yet"
          description="Once you place an order, it will appear here."
        />
      </Page>
    );
  }

  return (
    <Page title="My Orders">
      <SectionHeading
        title="Order History"
        subtitle={`${orders.length} order(s)`}
      />

      <div className="mt-6 space-y-6">
        {orders.map((order) => (
          <Link key={order._id} to={`/orders/${order._id}`} className="block">
            <OrderCard order={order} />
          </Link>
        ))}
      </div>
    </Page>
  );
}
