import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/AboutPage";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Toast from "./components/Toast";
import Checkout from "./pages/checkout";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Toast/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </>
  );
}

export default App;