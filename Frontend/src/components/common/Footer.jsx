import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="container-app py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-primary text-white grid place-items-center font-black">
              S
            </div>
            <div className="font-extrabold text-lg">ShoeStore</div>
          </div>
          <p className="mt-3 text-sm text-muted max-w-xs">
            Premium footwear e-commerce experience built with modern frontend
            architecture.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-extrabold mb-3">Shop</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link to="/products" className="hover:text-text transition">
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=men"
                className="hover:text-text transition"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=women"
                className="hover:text-text transition"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/products?category=kids"
                className="hover:text-text transition"
              >
                Kids
              </Link>
            </li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="font-extrabold mb-3">Account</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link to="/orders" className="hover:text-text transition">
                My Orders
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-text transition">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:text-text transition">
                Checkout
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-extrabold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href="#" className="hover:text-text transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-text transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-text transition">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-app py-4 flex flex-col sm:flex-row gap-2 text-sm text-muted">
          <p>© {new Date().getFullYear()} ShoeStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
