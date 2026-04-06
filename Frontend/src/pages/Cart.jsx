import { Link, useNavigate } from "react-router-dom";
import Page from "../components/common/Page";
import SectionHeading from "../components/common/SectionHeading";
import EmptyState from "../components/common/EmptyState";
import Button from "../components/common/Button";
import CartItem from "../components/cart/CartItem";
import useCartStore from "../store/useCartStore";

export default function Cart() {
  const navigate = useNavigate();
  const cartItems = useCartStore((s) => s.cartItems);
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const subtotal = useCartStore((s) => s.getTotal());

  // simple placeholder shipping calc (later can come from backend)
  const shipping = subtotal > 150 ? 0 : cartItems.length ? 9.99 : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <Page title="Cart">
        <EmptyState
          title="Your cart is empty"
          description="Browse products and add your favorite shoes."
          actionLabel="Browse Products"
          onAction={() => navigate("/products")}
        />
      </Page>
    );
  }

  return (
    <Page title="Cart">
      <SectionHeading
        title="Your Cart"
        subtitle={`${cartItems.length} item(s) in your cart`}
      />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item, index) => (
            <CartItem
              key={`${item.productId}-${item.size}-${item.color}-${index}`}
              item={item}
              index={index}
              onRemove={removeFromCart}
              onQtyChange={updateQuantity}
            />
          ))}
        </div>

        {/* Summary */}
        <div className="rounded-2xl border border-border bg-surface p-5 shadow-soft h-fit">
          <h3 className="text-lg font-extrabold">Order Summary</h3>

          <div className="mt-4 space-y-2 text-sm">
            <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
            <Row
              label="Shipping"
              value={shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
            />
            <div className="border-t border-border pt-3 mt-3 flex items-center justify-between">
              <span className="font-extrabold">Total</span>
              <span className="text-lg font-black">${total.toFixed(2)}</span>
            </div>
          </div>

          <Button
            className="mt-5 w-full"
            size="lg"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </Button>

          <Link
            to="/products"
            className="mt-3 inline-flex w-full justify-center rounded-xl border border-border bg-white px-4 py-2 text-sm font-bold text-text hover:bg-slate-50 transition"
          >
            Continue Shopping
          </Link>

          <p className="mt-3 text-xs text-muted">
            Shipping is a placeholder estimate. Final shipping will be
            calculated during checkout.
          </p>
        </div>
      </div>
    </Page>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted">{label}</span>
      <span className="font-bold text-text">{value}</span>
    </div>
  );
}
