import "./MenuCard.css";

function MenuCard({ image, title, description, price }) {

  return (
    <div className="menu-card">

      <img src={image} alt={title} />

      <div className="menu-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <h4>{price}</h4>

        <button className='order-btn'>Order Now</button>
      </div>

    </div>
    

  );
}

export default MenuCard;