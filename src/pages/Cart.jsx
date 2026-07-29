import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-page">
      <h1 className="cart-title">🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2 className="empty-cart">Your cart is empty.</h2>
      ) : (
        <div className="cart-container">

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />

              <div className="item-details">

                <h3>{item.name}</h3>

                <p>₹ {item.price}</p>

                <div className="quantity">

                  <button onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>

                </div>

              </div>

              <div className="cart-right">

                <h2>₹ {item.price * item.quantity}</h2>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

          <div className="checkout">
            <h2>Total : ₹{total}</h2>
            <button>Proceed to Checkout</button>
          </div>

        </div>
      )}
    </section>
  );
}

export default Cart;