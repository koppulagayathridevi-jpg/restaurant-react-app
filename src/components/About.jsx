import "./About.css";
import restaurantImg from "../assets/images/restaurant.jpg";

function About() {
  return (
    <section className="about">
      <div className="about-image">
        <img src={restaurantImg} alt="Restaurant" />
      </div>

      <div className="about-content">
        <h2>About Bala Gayathri Restaurant</h2>

        <p>
          Bala Gayathri Restaurant serves authentic Andhra cuisine prepared
          with fresh ingredients and traditional recipes.
        </p>

        <p>
          We are committed to providing delicious food, excellent service,
          and a memorable dining experience.
        </p>

        <button className="about-btn">
          Read More
        </button>
      </div>
    </section>
  );
}

export default About;