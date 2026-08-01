
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
// import "./Cart.css";

// function Cart() {

//   const navigate = useNavigate();

//   const {
//     cart,
//     increaseQuantity,
//     decreaseQuantity,
//     removeItem,
//     clearCart,
//   } = useContext(CartContext);


//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );


//   // Checkout Function
//   const handleCheckout = () => {

//     alert(
//       "🎉 Your order is placed successfully!\n\nThank you for ordering with us."
//     );

//     clearCart();

//     navigate("/");

//   };


//   // Empty Cart
//   if (cart.length === 0) {

//     return (

//       <div className="empty-cart">

//         <h1>🛒 Your Cart is Empty</h1>

//         <p>Add delicious food from our menu.</p>

//         <button onClick={() => navigate("/menu")}>

//           Browse Menu

//         </button>

//       </div>

//     );

//   }


//   return (

//     <div className="cart-page">


//       <h1 className="cart-title">
//         🛒 Shopping Cart
//       </h1>



//       <div className="cart-container">


//         {/* Cart Items */}

//         <div className="cart-items">


//           {
//             cart.map((item) => (

//               <div
//                 className="cart-card"
//                 key={item._id}
//               >


//                 <img
//                   src={`http://localhost:5000/${item.image}`}
//                   alt={item.name}
//                 />



//                 <div className="cart-info">


//                   <h2>
//                     {item.name}
//                   </h2>


//                   <p>
//                     {item.description}
//                   </p>


//                   <h3>
//                     ₹{item.price}
//                   </h3>


//                 </div>




//                 <div className="quantity-box">


//                   <button
//                     onClick={() =>
//                       decreaseQuantity(item._id)
//                     }
//                   >
//                     -
//                   </button>


//                   <span>
//                     {item.quantity}
//                   </span>



//                   <button
//                     onClick={() =>
//                       increaseQuantity(item._id)
//                     }
//                   >
//                     +
//                   </button>


//                 </div>





//                 <div className="item-total">

//                   ₹{item.price * item.quantity}

//                 </div>





//                 <button
//                   className="remove-btn"
//                   onClick={() =>
//                     removeItem(item._id)
//                   }
//                 >

//                   ✖

//                 </button>



//               </div>


//             ))
//           }



//         </div>





//         {/* Order Summary */}


//         <div className="summary">


//           <h2>
//             Order Summary
//           </h2>




//           <div className="summary-row">

//             <span>
//               Items
//             </span>

//             <span>
//               {cart.length}
//             </span>

//           </div>





//           <div className="summary-row">

//             <span>
//               Delivery
//             </span>

//             <span>
//               ₹40
//             </span>

//           </div>






//           <div className="summary-row total">


//             <span>
//               Total
//             </span>


//             <span>
//               ₹{total + 40}
//             </span>


//           </div>







//           <button
//             className="checkout-btn"
//             onClick={handleCheckout}
//           >

//             Proceed to Checkout

//           </button>






//           <button
//             className="clear-btn"
//             onClick={clearCart}
//           >

//             Clear Cart

//           </button>




//         </div>



//       </div>



//     </div>

//   );

// }


// export default Cart;

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {

  const navigate = useNavigate();

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
  } = useContext(CartContext);

  // Calculate Total Price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Navigate to Checkout Page
  const handleCheckout = () => {
    navigate("/checkout");
  };

  // Empty Cart
  if (cart.length === 0) {
    return (
      <div className="empty-cart">

        <h1>🛒 Your Cart is Empty</h1>

        <p>Add delicious food from our menu.</p>

        <button onClick={() => navigate("/menu")}>
          Browse Menu
        </button>

      </div>
    );
  }

  return (
    <div className="cart-page">

      <h1 className="cart-title">
        🛒 Shopping Cart
      </h1>

      <div className="cart-container">

        {/* Cart Items */}
        <div className="cart-items">

          {cart.map((item) => (

            <div
              className="cart-card"
              key={item._id}
            >

              <img
                src={`http://localhost:5000/${item.image}`}
                alt={item.name}
              />

              <div className="cart-info">

                <h2>{item.name}</h2>

                <p>{item.description}</p>

                <h3>₹{item.price}</h3>

              </div>

              {/* Quantity */}
              <div className="quantity-box">

                <button
                  onClick={() => decreaseQuantity(item._id)}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item._id)}
                >
                  +
                </button>

              </div>

              {/* Item Total */}
              <div className="item-total">
                ₹{item.price * item.quantity}
              </div>

              {/* Remove Button */}
              <button
                className="remove-btn"
                onClick={() => removeItem(item._id)}
              >
                ✖
              </button>

            </div>

          ))}

        </div>

        {/* Order Summary */}
        <div className="summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="summary-row">
            <span>Delivery Charge</span>
            <span>₹40</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{total + 40}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>

          <button
            className="clear-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default Cart;