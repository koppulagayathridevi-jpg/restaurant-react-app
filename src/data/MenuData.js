// src/data/MenuData.js

import biryani from "../assets/images/chicken-biryani.jpg";
import meals from "../assets/images/meals.jpg";
import fish from "../assets/images/fish-curry.jpg";
import naan from "../assets/images/butter-naan.png";
import paneer from "../assets/images/paneer.jpg";
import mutton from "../assets/images/mutton.jpg";
import prawns from "../assets/images/prawns.jpg";
import potBiryani from "../assets/images/pot-biryani.jpg";
import iceCream from "../assets/images/vanilla.jpg";
import chocolate from "../assets/images/chocolate.jpg";
const menuItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    category: "Non-Veg",
    description: "Traditional Andhra Dum Biryani",
    price: 250,
    rating: 4.8,
    image: biryani,
  },
  {
    id: 2,
    name: "South Indian Meals",
    category: "Veg",
    description: "Unlimited Veg Meals",
    price: 120,
    rating: 4.6,
    image: meals,
  },
  {
    id: 3,
    name: "Fish Curry",
    category: "Non-Veg",
    description: "Fresh Fish Curry",
    price: 320,
    rating: 4.7,
    image: fish,
  },
  {
    id: 4,
    name: "Butter Naan",
    category: "Bread",
    description: "Soft Butter Naan",
    price: 40,
    rating: 4.5,
    image: naan,
  },
  {
    id: 5,
    name: "Paneer Curry",
    category: "Veg",
    description: "Delicious Paneer Curry",
    price: 220,
    rating: 4.8,
    image: paneer,
  },
  {
    id: 6,
    name: "Mutton Curry",
    category: "Non-Veg",
    description: "Spicy Mutton Curry",
    price: 380,
    rating: 4.9,
    image: mutton,
  },
  {
    id: 7,
    name: "Prawns Fry",
    category: "Non-Veg",
    description: "Crispy Prawns Fry",
    price: 350,
    rating: 4.8,
    image: prawns,
  },
  {
    id: 8,
    name: "Pot Biryani",
    category: "Non-Veg",
    description: "Special Pot Biryani",
    price: 300,
    rating: 4.9,
    image: potBiryani,
  },
  {
    id: 9,
    name: "Vanilla Ice Cream",
    category: "Ice Cream",
    description: "Fresh Vanilla Ice Cream",
    price: 90,
    rating: 4.5,
    image: iceCream,
  },
  {
    id: 10,
    name: "Chocolate Ice Cream",
    category: "Ice Cream",
    description: "Rich Chocolate Ice Cream",
    price: 100,
    rating: 4.8,
    image: chocolate,
  },
];

export default menuItems;