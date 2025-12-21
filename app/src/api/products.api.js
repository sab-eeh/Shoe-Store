import axios from "axios";

/**
 * GET PRODUCTS
 * @param {Object} filters
 */
export async function getProducts(filters = {}) {
  const { data } = await axios.get("/api/products", {
    params: filters,
  });

  return data;
}

/**
 * GET PRODUCT BY ID
 */
export async function getProductById(id) {
  const { data } = await axios.get(`/api/products/${id}`);
  return data;
}
