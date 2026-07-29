
import React, { useState } from "react";
import "./Menu.css";

import menuItems from "../data/MenuData";
import MenuCard from "../components/MenuCard";

function Menu() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
 
  const filteredItems = menuItems.filter((item) => {
  const categoryMatch =
    category === "All" || item.category === category;

  const searchMatch = item.name
    .toLowerCase()
    .includes(search.toLowerCase());

  return categoryMatch && searchMatch;
});
  return (
    <section className="menu-section">
      

      <h1>Our Special Menu</h1>

    

      <div className="categories">
  {[
    "All",
    "Veg",
    "Non-Veg",
    "Bread",
    "Ice Cream",
    "Dessert",
    "Drinks",
  ].map((cat) => (
    <button
      key={cat}
      className={category === cat ? "active" : ""}
      onClick={() => setCategory(cat)}
    >
      {cat}
    </button>
  ))}
</div>
      {/* Menu Cards */}

      <div className="menu-container">

        {filteredItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}

      </div>

    </section>
  );
}

export default Menu;