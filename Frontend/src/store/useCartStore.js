import { create } from "zustand";

const STORAGE_KEY = "shoe-store-cart";

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

const useCartStore = create((set, get) => ({
  cartItems: loadCart(),

  persist: (items) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  },

  addToCart: (product, { size, color }) => {
    const items = [...get().cartItems];
    const existing = items.find(
      (i) => i.productId === product._id && i.size === size && i.color === color
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size,
        color,
        quantity: 1,
      });
    }

    get().persist(items);
    set({ cartItems: items });
  },

  removeFromCart: (index) => {
    const items = [...get().cartItems];
    items.splice(index, 1);
    get().persist(items);
    set({ cartItems: items });
  },

  updateQuantity: (index, quantity) => {
    const items = [...get().cartItems];
    items[index].quantity = quantity;
    get().persist(items);
    set({ cartItems: items });
  },

  clearCart: () => {
    localStorage.removeItem(STORAGE_KEY);
    set({ cartItems: [] });
  },

  getTotal: () =>
    get().cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
}));

export default useCartStore;
