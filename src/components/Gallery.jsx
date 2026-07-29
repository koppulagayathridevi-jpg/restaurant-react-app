import "./Gallery.css";

import mutton from "../assets/images/mutton.jpg";
import potbiryani from "../assets/images/pot-biryani.jpg";
import paneer from "../assets/images/paneer.jpg";
import chickenbiryani from "../assets/images/chicken-biryani.jpg";
import meals from "../assets/images/meals.jpg";
import fish from "../assets/images/fish-curry.jpg";
import prawns from "../assets/images/prawns.jpg";

function Gallery() {
  return (
    <section className="gallery">

      <h1>Our Food Gallery</h1>

      <p>Explore our delicious dishes and restaurant ambience.</p>

     <div className="gallery-container">

  <img src={mutton} alt="Mutton" />
  <img src={potbiryani} alt="Pot Biryani" />
  <img src={paneer} alt="Paneer" />
  <img src={chickenbiryani} alt="Chicken Biryani" />
  <img src={meals} alt="Meals" />
  <img src={fish} alt="Fish Curry" />
  <img src={prawns} alt="Prawns" />

</div>

    </section>
  );
}

export default Gallery;