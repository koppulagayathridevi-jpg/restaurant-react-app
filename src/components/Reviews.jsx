import "./Reviews.css";
import ReviewCard from "./ReviewCard";

function Reviews() {
  return (
    <section className="reviews">

      <h1>What Our Customers Say</h1>

      <div className="review-container">

        <ReviewCard
          name="Rahul"
          review="The best Andhra biryani I have ever tasted."
        />

        <ReviewCard
          name="Priya"
          review="Excellent food, quick service and friendly staff."
        />

        <ReviewCard
          name="Suresh"
          review="Authentic South Indian meals at affordable prices."
        />

      </div>

    </section>
  );
}

export default Reviews;