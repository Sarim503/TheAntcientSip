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
    id: "FISH AND CHIPS",
    name: "FISH AND CHIPS",
    price: 949,
    image: "/images/burger.jpg",
  },
  {
    id: "FINGER FISH (6Pcs)",
    name: "FINGER FISH (6Pcs)",
    price: 849,
    image: "/images/burger.jpg",
  },
  {
    id: "PAN FRIED SNAPPER",
    name: "PAN FRIED SNAPPER",
    price: 999,
    image: "/images/burger.jpg",
  },
  {
    id: "GRILL FISH (1 KG)",
    name: "GRILL FISH (1 KG)",
    price: 1449,
    image: "/images/burger.jpg",
  },
  {
    id: "LAHORI FISH",
    name: "LAHORI FISH",
    price: 1599,
    image: "/images/burger.jpg",
  },
];



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
    <>
      <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-orange-700 mb-8 drop-shadow-md">
        🍔 Zalmi Starters
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100">
        {mealDeals.map((item) => {
          const quantity = quantities[item.id] || 0;

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
           

              <div className="flex items-center justify-between">
                <div className="text-red-600 text-xl font-bold">Rs. {item.price}</div>
                <div className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                  Starting Price
                </div>
              </div>

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
