const mockOrders = [
  {
    _id: "ORD-1001",
    createdAt: "2025-01-10T10:22:00Z",
    totalPrice: 239.48,
    paymentMethod: "cod",
    isPaid: false,
    orderItems: [
      {
        name: "Air Flex Runner",
        price: 129.99,
        quantity: 1,
        size: 9,
        color: "black",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      },
      {
        name: "Urban Street Classic",
        price: 109.49,
        quantity: 1,
        size: 8,
        color: "white",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      },
    ],
  },
];

export default mockOrders;
