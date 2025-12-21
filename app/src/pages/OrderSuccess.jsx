import { Link } from "react-router-dom";
import Page from "../components/common/Page";
import Button from "../components/common/Button";

export default function OrderSuccess() {
  return (
    <Page>
      <div className="mx-auto max-w-xl rounded-2xl border border-border bg-surface p-8 text-center shadow-soft">
        <div className="mx-auto h-14 w-14 rounded-full bg-emerald-100 grid place-items-center text-emerald-700 text-2xl font-black">
          ✓
        </div>

        <h1 className="mt-4 text-2xl font-extrabold">Order Confirmed</h1>
        <p className="mt-2 text-sm text-muted">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/products">
            <Button>Continue Shopping</Button>
          </Link>
          <Link to="/orders">
            <Button variant="outline">View My Orders</Button>
          </Link>
        </div>
      </div>
    </Page>
  );
}
