

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");


 const addToCart = (item) => {
  const existingItem = cart.find((food) => food.id === item.id);

  if (existingItem) {
    setCart(
      cart.map((food) =>
        food.id === item.id
          ? { ...food, quantity: food.quantity + 1 }
          : food
      )
    );
  } else {
    setCart([...cart, { ...item, quantity: 1 }]);
  }

  setMessage(`${item.name} added to cart!`);

  setTimeout(() => {
    setMessage("");
  }, 2000);
};


  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        message,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;