import "./ReviewCard.css";

function ReviewCard({ name, review }) {
  return (
    <div className="review-card">

      <h2>⭐⭐⭐⭐⭐</h2>

      <p>"{review}"</p>

      <h4>- {name}</h4>

    </div>
  );
}

export default ReviewCard;