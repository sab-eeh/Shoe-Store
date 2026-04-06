import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Page from "../components/common/Page";
import SectionHeading from "../components/common/SectionHeading";
import ProductsGrid from "../components/product/ProductsGrid";
import useProductsStore from "../store/useProductsStore";

export default function Products() {
  const { products, loading, fetchProducts } = useProductsStore();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const gender = searchParams.get("gender") || "";
  const type = searchParams.get("type") || "";

  useEffect(() => {
    // We fetch all products once (backend stays simple)
    fetchProducts({ search });
  }, [fetchProducts, search]);

  // 🔥 FRONTEND FILTERING (CORRECT WAY)
  const filteredProducts = products.filter((product) => {
    if (category && product.category !== category) return false;
    if (gender && !product.category.startsWith(gender)) return false;
    if (type && !product.category.includes(type)) return false;
    return true;
  });

  return (
    <Page title="Products">
      <SectionHeading
        title="Our Collection"
        subtitle="Explore all available products"
        right={
          <span className="text-sm text-muted">
            {filteredProducts.length} product(s)
          </span>
        }
      />

      <div className="mt-6">
        <ProductsGrid products={filteredProducts} loading={loading} />
      </div>
    </Page>
  );
}
