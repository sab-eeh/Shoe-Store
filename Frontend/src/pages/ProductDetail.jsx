import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import Page from "../components/common/Page";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import ProductGallery from "../components/product/ProductGallery";
import {
  SizeSelector,
  ColorSelector,
} from "../components/product/ProductOptions";

import { getProductById } from "../api/products.api";
import useCartStore from "../store/useCartStore";

export default function ProductDetail() {
  const { id } = useParams();
  const addToCart = useCartStore((s) => s.addToCart);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then(setProduct)
      .catch(() => toast.error("Product not found"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <Page>
        <p className="text-muted">Loading product...</p>
      </Page>
    );
  }

  if (!product) return null;

  const handleAdd = () => {
    if (!size || !color) {
      toast.error("Please select size & color");
      return;
    }

    addToCart(product, { size, color });
    toast.success("Added to cart");
  };

  return (
    <Page title={product.name}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductGallery images={product.images} />

        <div>
          <Badge variant="primary">{product.category}</Badge>

          <h1 className="mt-3 text-3xl font-extrabold">{product.name}</h1>
          <p className="text-muted">{product.brand}</p>

          <div className="mt-4 text-2xl font-black">${product.price}</div>

          <p className="mt-4 text-muted leading-relaxed">
            {product.description}
          </p>

          <div className="mt-6">
            <h4 className="font-bold mb-2">Select Size</h4>
            <SizeSelector
              sizes={product.sizes}
              value={size}
              onChange={setSize}
            />
          </div>

          <div className="mt-6">
            <h4 className="font-bold mb-2">Select Color</h4>
            <ColorSelector
              colors={product.colors}
              value={color}
              onChange={setColor}
            />
          </div>

          <div className="mt-8">
            <Button
              size="lg"
              className="w-full"
              onClick={handleAdd}
              disabled={!product.inStock}
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
}
