import mockProducts from "./mockProducts";

/**
 * Simulate network delay
 */
function delay(ms = 500) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * GET /api/products
 * Filters are optional
 */
export async function getProducts(filters = {}) {
  await delay();

  let data = [...mockProducts];

  const { search, category, minPrice, maxPrice, size, rating } = filters;

  if (search) {
    const keyword = search.toLowerCase();
    data = data.filter(
      (p) =>
        p.name.toLowerCase().includes(keyword) ||
        p.brand.toLowerCase().includes(keyword)
    );
  }

  if (category) {
    data = data.filter((p) => p.category === category);
  }

  if (minPrice !== undefined) {
    data = data.filter((p) => p.price >= Number(minPrice));
  }

  if (maxPrice !== undefined) {
    data = data.filter((p) => p.price <= Number(maxPrice));
  }

  if (size) {
    data = data.filter((p) => p.sizes.includes(Number(size)));
  }

  if (rating) {
    data = data.filter((p) => p.rating >= Number(rating));
  }

  return {
    products: data,
    total: data.length,
  };
}

/**
 * GET /api/products/:id
 */
export async function getProductById(id) {
  await delay();

  const product = mockProducts.find((p) => p._id === id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
}
