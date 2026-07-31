import "./MenuCard.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function MenuCard({ food }) {
  const { addToCart } = useContext(CartContext);

  const imageUrl = `http://localhost:5000/${food.image}`;

  const handleAddToCart = () => {
    addToCart(food);
  };

  return (
    <div className="menu-card">

      <div className="image-container">

        <img
          src={imageUrl}
          alt={food.name}
          className="food-image"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/400x300?text=No+Image";
          }}
        />

        <span className="category-badge">
          {food.category}
        </span>

      </div>

      <div className="food-details">

        <div className="title-row">

          <h2>{food.name}</h2>

          <span className="rating">
            ⭐ 4.5
          </span>

        </div>

        <p className="description">
          {food.description}
        </p>

        <div className="bottom-row">

          <h3>₹{food.price}</h3>

          <button
            className="cart-btn"
            onClick={handleAddToCart}
          >
            🛒 Add
          </button>

        </div>

      </div>

    </div>
  );
}

export default MenuCard;