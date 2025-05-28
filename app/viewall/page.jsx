"use client";
import React, { useState } from "react";
import Link from "next/link";

const menuItems = [
  { name: "STARTERS", image: "/images/burger.jpg", link: "/starters", category: "Starters" },
  { name: "PREMIUM PIZZAS", image: "/images/burger.jpg", link: "/premiumpizzas", category: "Premium Pizzas" },
  { name: "BURGERS", image: "/images/burger.jpg", link: "/burger", category: "Burgers" },
  { name: "BBQ", image: "/images/burger.jpg", link: "/bbq", category: "BBQ" },
  { name: "STEAKS", image: "/images/burger.jpg", link: "/steaks", category: "Steaks" },
  { name: "CHICKEN HANDI", image: "/images/burger.jpg", link: "/chicken-handi", category: "Chicken" },
  { name: "CHICKEN KARAHI", image: "/images/burger.jpg", link: "/chicken-karahi", category: "Chicken" },
  { name: "SHAWARMA", image: "/images/burger.jpg", link: "/shawarma", category: "Shawarma" },
  { name: "ROCK & ROLL", image: "/images/burger.jpg", link: "/rock-and-roll", category: "Rock & Roll" },
  { name: "FLAVOUR OF THE WORLD", image: "/images/burger.jpg", link: "/flavouroftheworld", category: "World Cuisine" },
  { name: "SURF & TURF", image: "/images/burger.jpg", link: "/surf-and-turf", category: "Surf & Turf" },
  { name: "DESSERTS", image: "/images/burger.jpg", link: "/desserts", category: "Desserts" },
  { name: "CHOICE OF RICE", image: "/images/burger.jpg", link: "/choice-of-rice", category: "Rice" },
  { name: "SHAKE", image: "/images/burger.jpg", link: "/shake", category: "Drinks" },
];

// Unique categories
const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter menu items by category
  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Full Menu</h1>

   
      <div className="flex gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`p-1 rounded-xl font-semibold ${
              activeCategory === category
                ? "bg-yellow-400 text-black"
                : "bg-gray-200 text-gray-700 hover:bg-yellow-300"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="border p-4 rounded shadow hover:shadow-lg cursor-pointer block"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
