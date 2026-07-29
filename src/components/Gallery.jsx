import "./Gallery.css";

import mutton from "../assets/images/mutton.jpg";
import potbiriyani from "../assets/images/pot-biriyani.jpg";
import paneer from "../assets/images/paneer.jpg";
import biriyani from "../assets/images/biriyani.jpg";
import meals from "../assets/images/meals.jpg";
import fish from "../assets/images/fish-curry.jpg";
import prawns from "../assets/images/prawns.jpg";

function Gallery() {
  return (
    <section className="gallery">

      <h1>Our Food Gallery</h1>

      <p>Explore our delicious dishes and restaurant ambience.</p>

      <div className="gallery-container">

        <img src={mutton} alt="mutton" />
        <img src={potbiriyani} alt="Restaurant" />
        <img src={paneer} alt="Restaurant" />
        <img src={biriyani} alt="Biryani" />
        <img src={meals} alt="Meals" />
        <img src={fish} alt="Fish Curry" />
        <img src={prawns} alt="prawns" />

      </div>

    </section>
  );
}

export default Gallery;