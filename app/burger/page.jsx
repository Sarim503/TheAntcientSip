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
      id: " BOOM BOOM BURGER",
      name: "BOOM BOOM BURGER",
      price: 499,
      image: "/images/burgers/boom-boom-burger.svg",
    },
    {
      id: "CHICKEN PATTY BURGER",
      name: "CHICKEN PATTY BURGER",
      price: 349,
      image: "/images/burgers/chicken-patty-burger.svg",
      description: "6(Pcs)",
    },
    {
      id: "DOUBLE DECKER BURGER",
      name: "DOUBLE DECKER BURGER ",
      price: 649,
      image: "/images/burgers/double-decker-burger.svg",
    },
    {
      id: "MIGHTY ZINGER BURGER",
      name: "MIGHTY ZINGER BURGER",
      price: 399,
      image: "/images/burgers/mighty-zinger-burger.svg",
    },
    {
      id: " IALAPE NO BURGER ",
      name: "IALAPE NO BURGER",
      price: 589,
      image: "/images/burgers/jalapeno-burger.svg",
    },
    {
      id: "MUSHROOM BURGER ",
      name: "MUSHROOM BURGER",
      price: 499,
      image: "/images/burgers/mushroom-burger.svg",
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
        🍔 Burgers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 min-h-screen">
        {mealDeals.map((item) => {
          const quantity = quantities[item.id] || 0;

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-3 md:p-4 space-y-3 md:space-y-4 border border-orange-200"
            >
              <div
                className="w-full relative rounded-lg md:rounded-xl overflow-hidden bg-gray-50"
                style={{ height: "160px", minHeight: "160px" }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-105 p-2"
                />
              </div>

              <h2 className="text-base md:text-lg font-bold text-gray-800 text-center leading-tight">{item.name}</h2>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                <div className="text-red-600 text-lg md:text-xl font-bold text-center sm:text-left">
                  Rs. {item.price}
                </div>
                <div className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full text-center">
                  Starting Price
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3 md:space-x-4">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="bg-orange-200 hover:bg-orange-300 text-orange-800 font-bold w-10 h-10 md:w-12 md:h-12 rounded-full transition flex items-center justify-center text-lg"
                >
                  -
                </button>
                <span className="text-lg md:text-xl font-bold text-gray-800 min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="bg-orange-200 hover:bg-orange-300 text-orange-800 font-bold w-10 h-10 md:w-12 md:h-12 rounded-full transition flex items-center justify-center text-lg"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleAddToCart(item)}
                className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-2 md:py-3 px-4 rounded-lg transition text-sm md:text-base"
              >
                Add to Cart
              </button>

              {cartItems.find((cartItem) => cartItem.id === item.id) && (
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="w-full bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-lg mt-2 transition text-sm md:text-base"
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
