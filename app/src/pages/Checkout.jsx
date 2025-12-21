import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Page from "../components/common/Page";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import { Input, TextArea } from "../components/common/Input";
import Select from "../components/common/Select";

import useCartStore from "../store/useCartStore";
import { createOrder } from "../api/orders.api";

export default function Checkout() {
  const navigate = useNavigate();
  const cartItems = useCartStore((s) => s.cartItems);
  const clearCart = useCartStore((s) => s.clearCart);
  const subtotal = useCartStore((s) => s.getTotal());

  const shippingPrice = subtotal > 150 ? 0 : 9.99;
  const totalPrice = subtotal + shippingPrice;

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [loading, setLoading] = useState(false);

  const [shipping, setShipping] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    if (
      !shipping.fullName ||
      !shipping.phone ||
      !shipping.address ||
      !shipping.city
    ) {
      toast.error("Please fill all required shipping fields");
      return;
    }

    const orderPayload = {
      orderItems: cartItems,
      shippingAddress: shipping,
      paymentMethod,
      itemsPrice: subtotal,
      shippingPrice,
      totalPrice,
    };

    try {
      setLoading(true);
      await createOrder(orderPayload);
      clearCart();
      toast.success("Order placed successfully");
      navigate("/order/success");
    } catch {
      toast.error("Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page title="Checkout">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Shipping & Payment */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
            <SectionHeading title="Shipping Information" />
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                name="fullName"
                value={shipping.fullName}
                onChange={handleChange}
                required
              />
              <Input
                label="Phone"
                name="phone"
                value={shipping.phone}
                onChange={handleChange}
                required
              />
              <Input
                label="City"
                name="city"
                value={shipping.city}
                onChange={handleChange}
                required
              />
              <Input
                label="Postal Code"
                name="postalCode"
                value={shipping.postalCode}
                onChange={handleChange}
              />
              <TextArea
                label="Address"
                name="address"
                value={shipping.address}
                onChange={handleChange}
                className="sm:col-span-2"
                required
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
            <SectionHeading title="Payment Method" />
            <Select
              className="mt-3"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="cod">Cash on Delivery</option>
              <option value="card">Card (Stripe – coming soon)</option>
            </Select>

            {paymentMethod === "card" && (
              <p className="mt-3 text-sm text-muted">
                Card payments will be handled via Stripe in the backend phase.
              </p>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft h-fit">
          <SectionHeading title="Order Summary" />

          <div className="mt-4 space-y-2 text-sm">
            <Row label="Items" value={`$${subtotal.toFixed(2)}`} />
            <Row
              label="Shipping"
              value={
                shippingPrice === 0 ? "Free" : `$${shippingPrice.toFixed(2)}`
              }
            />
            <div className="border-t border-border pt-3 mt-3 flex justify-between">
              <span className="font-extrabold">Total</span>
              <span className="text-lg font-black">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <Button
            className="mt-5 w-full"
            size="lg"
            isLoading={loading}
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </div>
      </div>
    </Page>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}
