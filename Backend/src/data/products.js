const products = [
  /* ========================= NIKE ========================= */

  {
    name: "Air Force 1 '07",
    brand: "Nike",
    price: 119.99,
    rating: 4.7,
    reviewCount: 512,
    category: "men-casual",
    description:
      "The Nike Air Force 1 '07 delivers classic court style with durable leather, responsive cushioning, and timeless everyday comfort.",
    images: [
      "/uploads/AIRFORCE.jpg",
      "/uploads/AIRFORCE-2.jpg",
      "/uploads/AIRFORCE-3.jpg",
      "/uploads/AIRFORCE-4-WB.jpg",
    ],
    colors: ["white", "black", "brown"],
    sizes: [7, 8, 9, 10, 11],
    inStock: true,
    stockCount: 40,
  },
  {
    name: "Air Force 1 '30",
    brand: "Nike",
    price: 300,
    rating: 5,
    reviewCount: 600,
    category: "men-casual",
    description:
      "The Nike Air Force 1 '20 delivers classic court style with durable leather, responsive cushioning, and timeless everyday comfort.",
    images: ["/uploads/AIRFORCE-20.jpg"],
    colors: ["white", "black", "brown"],
    sizes: [10, 11],
    inStock: true,
    stockCount: 20,
  },

  {
    name: "Air Max 270",
    brand: "Nike",
    price: 200,
    rating: 4.6,
    reviewCount: 378,
    category: "men-sports",
    description:
      "Nike Air Max 270 features a large Max Air unit for all-day comfort combined with a breathable upper.",
    images: ["/uploads/AIRMAX-270-1.jpg", "/uploads/AIRMAX-270-2.jpg"],
    colors: ["black", "green"],
    sizes: [8, 9, 10, 11],
    inStock: true,
    stockCount: 28,
  },

  {
    name: "Air Jordan 4 RM",
    brand: "Nike",
    price: 189.99,
    rating: 4.8,
    reviewCount: 290,
    category: "men-lifestyle",
    description:
      "Inspired by basketball heritage, the Air Jordan 4 RM blends premium materials with iconic lifestyle design.",
    images: [
      "/uploads/AIRJORDAN-1-RM.jpg",
      "/uploads/AIRJORDAN-2-RM.jpg",
      "/uploads/AIRJORDAN-3-RM.jpg",
    ],
    colors: ["red", "black", "grey"],
    sizes: [8, 9, 10, 11],
    inStock: true,
    stockCount: 18,
  },

  /* ========================= PUMA ========================= */

  {
    name: "Speedcat OG",
    brand: "Puma",
    price: 99.99,
    rating: 4.4,
    reviewCount: 210,
    category: "men-casual",
    description:
      "Motorsport-inspired low-profile sneaker featuring a suede upper and everyday comfort.",
    images: [
      "/uploads/Speedcat.jpg",
      "/uploads/Speedcat-OG-Sneakers.jpg",
      "/uploads/Speedcat-OG-Sneakers-1.jpg",
      "/uploads/Speedcat-OG-Sneakers-2.jpg",
    ],
    colors: ["yellow", "black", "blue", "red"],
    sizes: [7, 8, 9, 10],
    inStock: true,
    stockCount: 35,
  },

  {
    name: "Velocity Nitro 4",
    brand: "Puma",
    price: 139.99,
    rating: 4.5,
    reviewCount: 165,
    category: "men-sports",
    description:
      "Road-running performance shoe with responsive cushioning, breathable mesh, and reliable traction.",
    images: [
      "/uploads/Velocity-NITRO-4.jpg",
      "/uploads/Velocity-NITRO-4-1.jpg",
      "/uploads/Velocity-NITRO-4-2.jpg",
    ],
    colors: ["blue", "black", "white"],
    sizes: [8, 9, 10, 11],
    inStock: true,
    stockCount: 22,
  },

  {
    name: "LaFrance RNR Big Kids",
    brand: "Puma",
    price: 79.99,
    rating: 4.3,
    reviewCount: 98,
    category: "kids-sports",
    description:
      "Lightweight and durable kids shoe designed for active play and sports performance.",
    images: ["/uploads/LaFrance.jpg"],
    colors: ["pink"],
    sizes: [1, 2, 3, 4, 5],
    inStock: true,
    stockCount: 45,
  },

  /* ========================= REEBOK ========================= */

  {
    name: "Nano X5 Training",
    brand: "Reebok",
    price: 129.99,
    rating: 4.6,
    reviewCount: 201,
    category: "men-sports",
    description:
      "Versatile training shoe built for strength workouts, HIIT, and functional fitness.",
    images: ["/uploads/NanoX5-Training.jpg"],
    colors: ["black"],
    sizes: [7, 8, 9, 10, 11],
    inStock: true,
    stockCount: 24,
  },

  {
    name: "Nano X5 Training Pro",
    brand: "Reebok",
    price: 134.99,
    rating: 4.7,
    reviewCount: 167,
    category: "men-sports",
    description:
      "Enhanced Nano X5 with reinforced stability and premium materials for intense training.",
    images: ["/uploads/NanoX5-Training-1.jpg"],
    colors: ["black", "white"],
    sizes: [7, 8, 9, 10, 11],
    inStock: true,
    stockCount: 20,
  },

  {
    name: "Nano Play Kids",
    brand: "Reebok",
    price: 69.99,
    rating: 4.3,
    reviewCount: 88,
    category: "kids-sports",
    description:
      "Stable and breathable training shoe designed for active kids.",
    images: ["/uploads/Nano-Play-kids.jpg"],
    colors: ["green", "pink"],
    sizes: [1, 2, 3, 4, 5],
    inStock: true,
    stockCount: 28,
  },

  /* ========================= NEW BALANCE ========================= */

  {
    name: "New Balance 204L Women",
    brand: "New Balance",
    price: 119.99,
    rating: 4.5,
    reviewCount: 142,
    category: "women-casual",
    description:
      "Modern women's sneaker with soft cushioning and breathable construction for daily wear.",
    images: ["/uploads/NewBalance-204L-1-Women.jpg"],
    colors: ["pink"],
    sizes: [6, 7, 8, 9],
    inStock: true,
    stockCount: 22,
  },

  {
    name: "New Balance 204L Classic Women",
    brand: "New Balance",
    price: 124.99,
    rating: 4.6,
    reviewCount: 156,
    category: "women-casual",
    description:
      "Classic-inspired women’s sneaker offering comfort, versatility, and refined style.",
    images: ["/uploads/NewBalance-204L-2-Women.jpg"],
    colors: ["beige"],
    sizes: [6, 7, 8, 9],
    inStock: true,
    stockCount: 18,
  },

  {
    name: "New Balance 9060",
    brand: "New Balance",
    price: 159.99,
    rating: 4.8,
    reviewCount: 210,
    category: "men-lifestyle",
    description:
      "Bold lifestyle sneaker featuring plush cushioning and a futuristic silhouette.",
    images: ["/uploads/NewBalance-9060.jpg"],
    colors: ["grey"],
    sizes: [7, 8, 9, 10, 11],
    inStock: true,
    stockCount: 26,
  },

  {
    name: "New Balance 9060 Classic",
    brand: "New Balance",
    price: 164.99,
    rating: 4.9,
    reviewCount: 198,
    category: "men-lifestyle",
    description:
      "Enhanced 9060 edition with premium materials and superior comfort for lifestyle wear.",
    images: ["/uploads/NewBalance-9060-1.jpg"],
    colors: ["grey", "black"],
    sizes: [7, 8, 9, 10, 11],
    inStock: true,
    stockCount: 20,
  },
];

export default products;
