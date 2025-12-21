import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Page from "../components/common/Page";
import SectionHeading from "../components/common/SectionHeading";
import ProductsGrid from "../components/product/ProductsGrid";
import useProductsStore from "../store/useProductsStore";

export default function Products() {
  const { products, loading, fetchProducts } = useProductsStore();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const filters = {
      search: searchParams.get("search") || "",
      category: searchParams.get("category") || "",
    };

    fetchProducts(filters);
  }, [fetchProducts, searchParams]);

  return (
    <Page title="Products">
      <SectionHeading
        title="All Shoes"
        subtitle="Browse our latest collection"
      />

      <div className="mt-6">
        <ProductsGrid products={products} loading={loading} />
      </div>
    </Page>
  );
}
