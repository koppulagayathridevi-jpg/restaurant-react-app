
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="navbar">
      <h2>Bala Gayathri Restaurant</h2>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="/cart" className="cart-link">
          🛒 Cart
          {totalItems > 0 && (
            <span className="cart-count">{totalItems}</span>
          )}
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;