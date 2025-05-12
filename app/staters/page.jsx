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
      id: "zalmi-meal",
      name: "Zalmi Meal Deal",
      price: 2500,
      image: "/images/burger.jpg",
      description:
        "1 Regular Crown Crust Pizza, 1 Fettuccine Alfredo Pasta, 1 Liter Cold Drink",
    },
    {
      id: "deluxe-meal",
      name: "Deluxe Meal Deal",
      price: 3000,
      image: "/images/burger.jpg",
      description: "1 Large Pizza, 1 Pasta, 1 Cold Drink",
    },
    {
      id: "family-meal",
      name: "Family Meal Deal",
      price: 5000,
      image: "/images/burger.jpg",
      description: "2 Regular Pizzas, 2 Pasta, 2 Cold Drinks",
    },
  ];

  // Local quantity state for all items
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => {
      const newQuantity = (prev[id] || 0) + change;
      return {
        ...prev,
        [id]: newQuantity < 0 ? 0 : newQuantity,
      };
    });
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 0;

    if (quantity === 0) {
      alert("Please select at least 1 item before adding to cart.");
      return;
    }

    dispatch(addToCart({ ...item, quantity }));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {mealDeals.map((item) => {
        const quantity = quantities[item.id] || 0;

        return (
          <div
            key={item.id}
            className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden p-4 space-y-4"
          >
            <div className="w-full relative" style={{ height: "250px" }}>
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="contain"
              />
            </div>

            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-sm text-gray-700">{item.description}</p>

            <div className="flex items-center justify-between">
              <div className="text-red-600 text-xl font-bold">Rs. {item.price}</div>
              <div className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                Starting Price
              </div>
            </div>

            {/* Quantity Control - Local State */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              >
                -
              </button>
              <span className="text-lg font-bold">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(item)}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
            >
              Add to Cart
            </button>

            {/* Remove from Cart Button (only if item is in cart) */}
            {cartItems.find((cartItem) => cartItem.id === item.id) && (
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mt-2"
              >
                Remove from Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ZalmiMealDealCard;
