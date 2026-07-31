import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="brand">
        <span className="brand-icon">🍽️</span>
        <h1>Bala Gayathri</h1>
      </div>

      {/* Navigation */}
      <nav>

        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/menu">
          Menu
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

        {/* Cart */}
        <NavLink
          to="/cart"
          className="cart-link"
          aria-label="Shopping Cart"
        >
          <div className="cart-box">
            <FaShoppingCart />

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </div>
        </NavLink>

      </nav>

    </header>
  );
}

export default Navbar;