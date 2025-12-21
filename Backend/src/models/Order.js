import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    size: { type: Number },
    color: { type: String },
  },
  { _id: false }
);

const shippingSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    orderItems: [orderItemSchema],
    shippingAddress: shippingSchema,

    paymentMethod: {
      type: String,
      enum: ["cod", "card"],
      required: true,
    },

    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },

    isPaid: { type: Boolean, default: false },
    paidAt: Date,
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
