"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart, removeFromCart } from "../../store/cartSlice";

const ZalmiMealDealCard = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const mealDeals = [
    {
      id: "ANCIENT SIP SPECIAL",
      name: "ANCIENT SIP SPECIAL",
      image: "/images/burger.jpg",
      description: "6(Pcs)",
      prices: {
        chicken: 1499 ,
        beef: 1799 ,
      },
    },
    {
      id: " MEXICAN STEAK",
      name: " MEXICAN STEAK",
      image: "/images/burger.jpg",
      description: "6(Pcs)",
      prices: {
        chicken: 1389 ,
        beef: 1689 ,
      },
    },
    {
      id: " BLACK PEPPER STEAK",
      name: " BLACK PEPPER STEAK",
      image: "/images/burger.jpg",
      description: "6(Pcs)",
      prices: {
        chicken: 1389 ,
        beef: 1599 ,
      },
    },
    {
      id: " MUSHROOM STEAK",
      name: " MUSHROOM STEAK",
      image: "/images/burger.jpg",
      description: "12(Pcs)",
      prices: {
        chicken: 1389 ,
        beef: 1549 ,
      },
    },
    {
      id: " JALAPENO STEAK ",
      name: " JALAPENO STEAK ",
      image: "/images/burger.jpg",
      description: "6(Pcs)",
      prices: {
        chicken: 1389 ,
        beef: 1599 ,
      },
    },
    {
      id: "BBQ STEAK",
      name: "BBQ STEAK",
      image: "/images/burger.jpg",
      description: "6(Pcs)",
      prices: {
        chicken: 1349 ,
        beef: 1599 ,
      },
    },
    {
      id: " AMERICAN STEAK",
      name: " AMERICAN STEAK",
      image: "/images/burger.jpg",
      description: "6(Pcs)",
      prices: {
        chicken: 1349 ,
        beef: 1599 ,
      },
    },
    {
      id: "  HAWAIIAN STEAK",
      name: " HAWAIIAN STEAK",
      image: "/images/burger.jpg",
      description: "6(Pcs)",
      prices: {
        chicken: 1389 ,
        beef: 1599 ,
      },
    },
    {
      id: "  TARAGON STEAK ",
      name: " TARAGON STEAK ",
      image: "/images/burger.jpg",
      description: "6(Pcs)",
      prices: {
        chicken: 1389 ,
        beef: 1599 ,
      },
    },
  ];

  const [quantities, setQuantities] = useState({});
  const [selectedCategories, setSelectedCategories] = useState({});

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => {
      const newQuantity = (prev[id] || 0) + change;
      return {
        ...prev,
        [id]: newQuantity < 0 ? 0 : newQuantity,
      };
    });
  };

  const handleCategoryChange = (id, category) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [id]: category,
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 0;
    const category = selectedCategories[item.id] || "chicken";
    const price = item.prices[category];

    if (quantity === 0) {
      alert("Please select at least 1 item before adding to cart.");
      return;
    }

    dispatch(addToCart({ ...item, quantity, selectedCategory: category, price }));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  return (
    <>
      <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-orange-700 mb-8 drop-shadow-md">
        🥩 Steaks
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100">
        {mealDeals.map((item) => {
          const quantity = quantities[item.id] || 0;
          const category = selectedCategories[item.id] || "chicken";
          const price = item.prices[category];

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 p-4 space-y-4 border border-orange-200"
            >
              <div className="w-full relative rounded-xl overflow-hidden" style={{ height: "200px" }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
       

              {/* Category Selector */}
              <select
                value={category}
                onChange={(e) => handleCategoryChange(item.id, e.target.value)}
                className="w-full px-2 py-1 border rounded bg-white text-gray-700"
              >
                <option value="chicken">Chicken</option>
                <option value="beef">Beef</option>
              </select>

              {/* Price */}
              <div className="flex items-center justify-between mt-2">
                <div className="text-red-600 text-xl font-bold">Rs. {price}</div>
                <div className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                  Starting Price
                </div>
              </div>

              {/* Quantity Buttons */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="bg-orange-200 hover:bg-orange-300 text-orange-800 font-bold px-4 py-2 rounded-full transition"
                >
                  -
                </button>
                <span className="text-xl font-bold text-gray-800">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="bg-orange-200 hover:bg-orange-300 text-orange-800 font-bold px-4 py-2 rounded-full transition"
                >
                  +
                </button>
              </div>

              {/* Add/Remove Buttons */}
              <button
                onClick={() => handleAddToCart(item)}
                className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Add to Cart
              </button>

              {cartItems.find((cartItem) => cartItem.id === item.id) && (
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="w-full bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-lg mt-2 transition"
                >
                  Remove from Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ZalmiMealDealCard;
