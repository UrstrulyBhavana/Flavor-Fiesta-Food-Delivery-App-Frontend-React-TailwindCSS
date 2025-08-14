import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [open, setOpen] = useState(false);
  const online = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const cartCount = cartItems.length;

  const linkBase = "text-slate-900 hover:text-purple-900 underline-offset-4";
  const linkActive = "text-purple-900 underline";

  return (
    <header className="sticky top-0 z-50 bg-yellow-300/95 shadow-md backdrop-blur w-full overflow-x-clip">
      <div className="max-w-7xl w-full mx-auto px-3 sm:px-4 overflow-x-clip">
        <div className="h-16 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="shrink-0 flex items-center"
            onClick={() => setOpen(false)}
          >
            <img src={LOGO_URL} alt="Flavour Fiesta" className="h-12 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-6 font-semibold">
            <span className="text-sm text-slate-800">
              Online Status: {online ? "✅" : "🔴"}
            </span>

            <NavLink
              to="/"
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
            >
              FAQ
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex items-center gap-2 ${linkBase} ${
                  isActive ? linkActive : ""
                }`
              }
            >
              <span className="relative inline-flex items-center">
                <FontAwesomeIcon icon={faCartShopping} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] text-[11px] leading-[18px] text-white bg-rose-600 rounded-full text-center px-[5px]">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </span>
              <span>({cartCount} items)</span>
            </NavLink>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Cart (mobile) */}
            <Link
              to="/cart"
              className="md:hidden inline-flex items-center gap-2 text-slate-900 font-semibold"
              aria-label="Cart"
              onClick={() => setOpen(false)}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <span>({cartCount})</span>
            </Link>

            <button
              type="button"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                         px-5 py-2 text-sm font-bold text-white shadow-lg hover:scale-105 hover:shadow-xl
                         transition-transform duration-300 ease-in-out focus:outline-none focus-visible:ring-2
                         focus-visible:ring-pink-300"
              onClick={() => setBtnName((v) => (v === "Login" ? "Logout" : "Login"))}
            >
              {btnName}
            </button>

            {/* Hamburger (mobile) */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-900
                         hover:bg-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav (collapsible) */}
        <div
          id="mobile-nav"
          className={`md:hidden w-full overflow-hidden transition-all duration-200 ${
            open ? "max-h-96 pb-3" : "max-h-0"
          }`}
        >
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-semibold w-full">
            <span className="text-sm text-slate-800 w-full">
              Online Status: {online ? "✅" : "🔴"}
            </span>
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/faq"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
            >
              FAQ
            </NavLink>
            <NavLink
              to="/cart"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
            >
              Cart ({cartCount})
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
