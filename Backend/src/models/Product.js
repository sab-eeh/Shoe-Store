import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: true,
      lowercase: true,
    },
    description: {
      type: String,
    },
    images: [
      {
        type: String,
      },
    ],
    colors: [
      {
        type: String,
      },
    ],
    sizes: [
      {
        type: Number,
      },
    ],
    inStock: {
      type: Boolean,
      default: true,
    },
    stockCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
