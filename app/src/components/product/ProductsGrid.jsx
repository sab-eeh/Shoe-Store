import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import EmptyState from "../common/EmptyState";

export default function ProductsGrid({ products, loading }) {
  if (!loading && products.length === 0) {
    return (
      <EmptyState
        title="No products found"
        description="Try adjusting your filters or search keyword."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {loading
        ? Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        : products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
    </div>
  );
}
