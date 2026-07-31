import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuCard from "../components/MenuCard";
import "./Menu.css";

function Menu() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    { name: "All", icon: "🍽️" },
    { name: "Veg", icon: "🥗" },
    { name: "Non-Veg", icon: "🍗" },
    { name: "Drinks", icon: "🥤" },
    { name: "Ice Cream", icon: "🍨" },
  ];

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/foods");

      if (Array.isArray(res.data)) {
        setFoods(res.data);
      } else if (Array.isArray(res.data.data)) {
        setFoods(res.data.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredFoods = foods.filter((food) => {
    const categoryMatch =
      category === "All" || food.category === category;

    const searchMatch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading Menu...</h1>
      </div>
    );
  }

  return (
    <div className="menu-page">

      <div className="menu-banner">

        <h1>🍽 Bala Gayathri Restaurant</h1>

        <p>
          Fresh • Delicious • Affordable
        </p>

      </div>

  

      <div className="category-container">

        {categories.map((cat) => (

          <div
            key={cat.name}
            className={
              category === cat.name
                ? "category-card active"
                : "category-card"
            }
            onClick={() => setCategory(cat.name)}
          >

            <h2>{cat.icon}</h2>

            <p>{cat.name}</p>

          </div>

        ))}

      </div>

      <div className="menu-grid">

        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <MenuCard
              key={food._id}
              food={food}
            />
          ))
        ) : (
          <h2>No Food Available</h2>
        )}

      </div>

    </div>
  );
}

export default Menu;