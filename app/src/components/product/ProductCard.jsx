import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Badge from "../common/Badge";
import Button from "../common/Button";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-2xl border border-border bg-surface shadow-soft overflow-hidden flex flex-col"
    >
      <Link to={`/products/${product._id}`} className="block">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-extrabold leading-tight">{product.name}</h3>
          <Badge variant="primary">{product.category}</Badge>
        </div>

        <p className="text-sm text-muted mt-1">{product.brand}</p>

        <div className="mt-auto">
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-black">${product.price}</span>
            <span className="text-sm text-muted">⭐ {product.rating}</span>
          </div>

          <Button size="sm" variant="secondary" className="mt-3 w-full">
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
