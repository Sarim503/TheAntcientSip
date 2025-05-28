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
      name: "Ancient Sip Special",
      image: "/images/pizza.jpg",
      prices: {
        small: 999,
        medium: 1299,
        large: 1799,
      },
    },
    {
      id: "CHICKEN TIKKA PIZZA",
      name: "Chicken Tikka Pizza",
      image: "/images/pizza.jpg",
      prices: {
        small: 899,
        medium: 1199,
        large: 1799,
      },
    },
    {
      id: "CHICKEN FAJITA PIZZA",
      name: "Chicken Fajita Pizza",
      image: "/images/pizza.jpg",
      prices: {
        small: 999,
        medium: 1299,
        large: 1799,
      },
    },
    {
      id: "CHEESE LOVER",
      name: "Cheese Lover",
      image: "/images/pizza.jpg",
      prices: {
        small: 999,
        medium: 1199,
        large: 1599,
      },
    },
    {
      id: "BBQ PIZZA",
      name: "BBQ Pizza",
      image: "/images/pizza.jpg",
      prices: {
        small: 899,
        medium: 1199,
        large: 1799,
      },
    },
    {
      id: "SUPER SUPREEM PIZZA",
      name: "Super Supreem Pizza",
      image: "/images/pizza.jpg",
      prices: {
        small: 949,
        medium: 1399,
        large: 1699,
      },
    },
    {
      id: "CHICKEN ACHARI PIZZA",
      name: "Chicken Achari Pizza",
      image: "/images/pizza.jpg",
      prices: {
        small: 899,
        medium: 1199,
        large: 1599,
      },
    },
    {
      id: "THE CROWN CRUST",
      name: "The Crown Crust",
      image: "/images/pizza.jpg",
      prices: {
        small: 1049,
        medium: 1399,
        large: 1899,
      },
    },
  ];

  const [quantities, setQuantities] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => {
      const newQuantity = (prev[id] || 0) + change;
      return {
        ...prev,
        [id]: newQuantity < 0 ? 0 : newQuantity,
      };
    });
  };

  const handleSizeChange = (id, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [id]: size,
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 0;
    const size = selectedSizes[item.id] || "small";
    const price = item.prices[size];

    if (quantity === 0) {
      alert("Please select at least 1 item before adding to cart.");
      return;
    }

    dispatch(
      addToCart({ ...item, quantity, selectedSize: size, price })
    );
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  return (
    <>
      <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-orange-700 mb-8 drop-shadow-md">
        🍕 PIZZA MENU
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100">
        {mealDeals.map((item) => {
          const quantity = quantities[item.id] || 0;
          const size = selectedSizes[item.id] || "small";
          const price = item.prices[size];

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

              <select
                value={size}
                onChange={(e) => handleSizeChange(item.id, e.target.value)}
                className="w-full px-2 py-1 border rounded bg-white text-gray-700"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>

              <div className="flex items-center justify-between mt-2">
                <div className="text-red-600 text-xl font-bold">Rs. {price}</div>
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
