
import Navbar from "../components/Navbar";
import MenuCard from "../components/MenuCard";
import Footer from "../components/Footer";

import biriyani from "../assets/images/biriyani.jpg";
import meals from "../assets/images/meals.jpg";
import fish from "../assets/images/fish-curry.jpg";
import naan from "../assets/images/butter-nons.png";

import paneer from "../assets/images/paneer.jpg";
import prawns from "../assets/images/prawns.jpg";


function Menu() {
   
  return (
    <>
      <Navbar />

      <section className="menu-section">

        <h1>Our Special Menu</h1>
  

        <div className="menu-grid">

          <MenuCard
            image={biriyani}
            title="Chicken Biryani"
            description="Traditional Andhra Biryani"
            price="₹250"
          />

          <MenuCard
            image={meals}
            title="South Indian Meals"
            description="Unlimited Veg Meals"
            price="₹120"
          />

          <MenuCard
            image={fish}
            title="Fish Curry"
            description="Authentic Andhra Fish Curry"
            price="₹350"
          />
             <MenuCard
            image={naan}
            title="Butter Naan"
            description="Soft Butter Naan"
            price="₹40"
          />
          <MenuCard
            image={paneer}
            title="paneer biriyani"
            description="Soft Butter Naan"
            price="₹40"
          />
          <MenuCard
            image={prawns}
            title="prawns-biriyani"
            description="Soft Butter Naan"
            price="₹40"
          />
       

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Menu;