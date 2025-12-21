import { create } from "zustand";
import { getProducts } from "../api/products.api";

const useProductsStore = create((set) => ({
  products: [],
  total: 0,
  loading: false,
  filters: {
    search: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    size: "",
    rating: "",
  },

  fetchProducts: async (filters = {}) => {
    set({ loading: true });
    try {
      const res = await getProducts(filters);
      set({
        products: res.products,
        total: res.total,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to fetch products", error);
      set({ loading: false });
    }
  },

  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
}));

export default useProductsStore;
