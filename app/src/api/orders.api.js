import axios from "axios";

/**
 * CREATE ORDER
 * @param {Object} orderData
 */
export async function createOrder(orderData) {
  const { data } = await axios.post("/api/orders", orderData);
  return data;
}

/**
 * GET ALL ORDERS
 */
export async function getMyOrders() {
  const { data } = await axios.get("/api/orders");
  return data;
}

export async function getOrderById(id) {
  const { data } = await axios.get(`/api/orders/${id}`);
  return data;
}
