import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Toast.css";

function Toast() {
  const { message } = useContext(CartContext);

  if (!message) return null;

  return (
    <div className="toast">
      ✅ {message}
    </div>
  );
}

export default Toast;