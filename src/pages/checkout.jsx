// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import "./Checkout.css";

// function Checkout() {
//   const { cart } = useContext(CartContext);

//   const subtotal = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const delivery = 40;
//   const gst = Math.round(subtotal * 0.05);
//   const total = subtotal + delivery + gst;

//   return (
//     <div className="checkout-page">

//       <h1 className="checkout-title">Checkout</h1>

//       <div className="checkout-container">

//         {/* Billing Details */}

//         <div className="billing-card">

//           <h2>Billing Details</h2>

//           <input type="text" placeholder="First Name" />

//           <input type="text" placeholder="Last Name" />

//           <input type="text" placeholder="Phone Number" />

//           <input type="email" placeholder="Email Address" />

//           <textarea
//             rows="4"
//             placeholder="Street Address"
//           ></textarea>

//           <input type="text" placeholder="City" />

//           <input type="text" placeholder="State" />

//           <input type="text" placeholder="PIN Code" />

//         </div>

//         {/* Order Summary */}

//         <div className="order-card">

//           <h2>Your Order</h2>

//           {cart.map((item) => (
//             <div className="order-item" key={item._id}>
//               <span>
//                 {item.name} × {item.quantity}
//               </span>

//               <span>
//                 ₹{item.price * item.quantity}
//               </span>
//             </div>
//           ))}

//           <hr />

//           <div className="price-row">
//             <span>Subtotal</span>
//             <span>₹{subtotal}</span>
//           </div>

//           <div className="price-row">
//             <span>Delivery</span>
//             <span>₹{delivery}</span>
//           </div>

//           <div className="price-row">
//             <span>GST (5%)</span>
//             <span>₹{gst}</span>
//           </div>

//           <div className="total-row">
//             <span>Total</span>
//             <span>₹{total}</span>
//           </div>

//           <h3>Payment Method</h3>

//           <div className="payment">

//             <label>
//               <input
//                 type="radio"
//                 name="payment"
//                 defaultChecked
//               />
//               Cash on Delivery
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 name="payment"
//               />
//               UPI
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 name="payment"
//               />
//               Credit Card
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 name="payment"
//               />
//               Google Pay
//             </label>

//           </div>

//           <button className="order-btn">
//             Place Order
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Checkout;

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const { cart, clearCart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const delivery = 40;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + gst;

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("🛒 Your cart is empty!");
      return;
    }

    alert("🎉 Order placed successfully!");

    clearCart(); // Empty the cart
    navigate("/"); // Redirect to Home page
  };

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-container">
        {/* Billing Details */}
        <div className="billing-card">
          <h2>Billing Details</h2>

          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Phone Number" />
          <input type="email" placeholder="Email Address" />

          <textarea
            rows="4"
            placeholder="Street Address"
          ></textarea>

          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="PIN Code" />
        </div>

        {/* Order Summary */}
        <div className="order-card">
          <h2>Your Order</h2>

          {cart.map((item) => (
            <div className="order-item" key={item._id || item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

          <hr />

          <div className="price-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="price-row">
            <span>Delivery</span>
            <span>₹{delivery}</span>
          </div>

          <div className="price-row">
            <span>GST (5%)</span>
            <span>₹{gst}</span>
          </div>

          <div className="total-row">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <h3>Payment Method</h3>

          <div className="payment">
            <label>
              <input
                type="radio"
                name="payment"
                defaultChecked
              />
              Cash on Delivery
            </label>

            <label>
              <input
                type="radio"
                name="payment"
              />
              UPI
            </label>

            <label>
              <input
                type="radio"
                name="payment"
              />
              Credit Card
            </label>

            <label>
              <input
                type="radio"
                name="payment"
              />
              Google Pay
            </label>
          </div>

          <button
            className="order-btn"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;