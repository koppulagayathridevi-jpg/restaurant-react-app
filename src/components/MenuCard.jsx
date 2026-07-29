import { useContext } from "react";
import "./MenuCard.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function MenuCard({ item }) {
  const { addToCart } = useContext(CartContext);
  const navigate=useNavigate();
   const handleAddToCart = () => {
    addToCart(item);
    navigate("/cart");
  };

  return (
    <div className="menu-card">

      <img src={item.image} alt={item.name} />

      <div className="card-body">

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <div className="card-info">
          <span>⭐ {item.rating}</span>
          <span className="price">₹{item.price}</span>
        </div>

        <button onClick={() => addToCart(item)}>
          🛒 Add to Cart
        </button>

      </div>

    </div>
  );
}

export default MenuCard;