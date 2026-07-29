import "./Hero.css";
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function Hero() {
  const images = [hero1, hero2, hero3];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {

  const interval = setInterval(() => {

    setCurrentImage((prev) => (prev + 1) % images.length);

  }, 1000);

  return () => clearInterval(interval);

}, [images.length]);
  return (
    <section className="hero"   style={{
        backgroundImage: `url(${images[0]})`
      }}>

      <div className="hero-overlay">

        <div className="hero-content">

          <h1>Experience Authentic Andhra Cuisine</h1>

          <p>
            Enjoy delicious biryani, traditional meals, fresh seafood,
            and warm hospitality at Bala Gayathri Restaurant.
          </p>

           
           <Link to="/menu" className="hero-btn">
              Explore Menu
            </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;