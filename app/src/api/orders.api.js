import mockOrders from "./mockOrders";

/**
 * CREATE ORDER (already done)
 */
export async function createOrder(orderData) {
  console.log("ORDER PAYLOAD (mock):", orderData);

  return {
    _id: `ORD-${Math.floor(Math.random() * 10000)}`,
    ...orderData,
    isPaid: orderData.paymentMethod === "card",
    createdAt: new Date().toISOString(),
  };
}

/**
 * GET MY ORDERS
 */
export async function getMyOrders() {
  return mockOrders;
}
