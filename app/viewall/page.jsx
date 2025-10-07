"use client";
import React, { useState } from "react";
import Link from "next/link";

const menuItems = [
  { name: "STARTERS", image: "/images/menu/starters.svg", link: "/staters", category: "Starters" },
  { name: "PREMIUM PIZZAS", image: "/images/menu/pizza.svg", link: "/premiumpizzas", category: "Premium Pizzas" },
  { name: "BURGERS", image: "/images/menu/burger.svg", link: "/burger", category: "Burgers" },
  { name: "BBQ", image: "/images/menu/bbq.svg", link: "/bbq", category: "BBQ" },
  { name: "STEAKS", image: "/images/menu/steak.svg", link: "/steaks", category: "Steaks" },
  { name: "CHICKEN HANDI", image: "/images/menu/chicken.svg", link: "/chicken-handi", category: "Chicken" },
  { name: "CHICKEN KARAHI", image: "/images/menu/chicken.svg", link: "/chicken-karahi", category: "Chicken" },
  { name: "SHAWARMA", image: "/images/menu/shawarma.svg", link: "/shawarma", category: "Shawarma" },
  { name: "ROCK & ROLL", image: "/images/menu/world.svg", link: "/roch&roll", category: "Rock & Roll" },
  { name: "FLAVOUR OF THE WORLD", image: "/images/menu/world.svg", link: "/flavouroftheworld", category: "World Cuisine" },
  { name: "SURF & TURF", image: "/images/menu/surf-turf.svg", link: "/surf&turf", category: "Surf & Turf" },
  { name: "DESSERTS", image: "/images/menu/dessert.svg", link: "/desserts", category: "Desserts" },
  { name: "CHOICE OF RICE", image: "/images/menu/rice.svg", link: "/ChoiceofRice", category: "Rice" },
  { name: "SHAKE", image: "/images/menu/shakes.svg", link: "/shake", category: "Drinks" },
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
            <div className="w-full h-48 flex items-center justify-center bg-gray-50">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-contain"
              />
            </div>
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
