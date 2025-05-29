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

const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Full Menu</h1>

      {/* Category Filter - Scrollable on small screens */}
      <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide py-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
              activeCategory === category
                ? "bg-yellow-400 text-black font-semibold"
                : "bg-gray-200 text-gray-700 hover:bg-yellow-300"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid for Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
