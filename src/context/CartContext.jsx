import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (food) => {

    const existing = cart.find(
      item => item._id === food._id
    );

    if (existing) {

      setCart(
        cart.map(item =>
          item._id === food._id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...food,
          quantity: 1,
        },
      ]);

    }

    setMessage(`${food.name} added to cart`);

    setTimeout(() => {
      setMessage("");
    }, 2000);

  };

  const increaseQuantity = (_id) => {

    setCart(
      cart.map(item =>
        item._id === _id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };

  const decreaseQuantity = (_id) => {

    setCart(

      cart
        .map(item =>
          item._id === _id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )

        .filter(item => item.quantity > 0)

    );

  };

  const removeItem = (_id) => {

    setCart(
      cart.filter(item => item._id !== _id)
    );

  };

  const clearCart = () => {
    setCart([]);
  };

  return (

    <CartContext.Provider

      value={{

        cart,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        removeItem,

        clearCart,

        message,

      }}

    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;