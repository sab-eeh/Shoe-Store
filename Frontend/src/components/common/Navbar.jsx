import { NavLink, Link } from "react-router-dom";
import Button from "./Button";

/* ================= STYLES ================= */

const linkBase =
  "relative px-3 py-2 text-sm font-semibold transition-all rounded-lg " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

const linkInactive = "text-muted hover:text-text hover:bg-slate-100";

const linkActive = "text-text bg-slate-100";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
      <div className="container-app h-16 flex items-center justify-between">
        {/* ================= BRAND ================= */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary text-white grid place-items-center font-black text-lg shadow-softSm">
            S
          </div>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight text-base">
              ShoeStore
            </div>
            <div className="text-[11px] text-muted -mt-0.5 tracking-wide uppercase">
              Premium Footwear
            </div>
          </div>
        </Link>

        {/* ================= NAV ================= */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Orders
          </NavLink>
        </nav>

        {/* ================= ACTIONS ================= */}
        <div className="flex items-center gap-3">
          <Link to="/cart">
            <Button
              variant="primary"
              size="md"
              className="rounded-xl px-5"
              aria-label="Go to cart"
            >
              Cart
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
