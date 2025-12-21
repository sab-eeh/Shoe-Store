import Product from "../models/Product.js";

/**
 * GET /api/products
 * Query:
 *  - search
 *  - category
 *  - minPrice
 *  - maxPrice
 *  - rating
 */
export const getProducts = async (req, res) => {
  try {
    const { search, category, minPrice, maxPrice, rating } = req.query;

    const filter = {};

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { brand: { $regex: search, $options: "i" } },
      ];
    }

    if (category) {
      filter.category = category;
    }

    if (rating) {
      filter.rating = { $gte: Number(rating) };
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const products = await Product.find(filter).sort({
      createdAt: -1,
    });

    res.json({
      products,
      total: products.length,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
};

/**
 * GET /api/products/:id
 */
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: "Invalid product ID",
    });
  }
};
