"use client";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cartSlice";
import Link from "next/link";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. <Link href="/">Go back to shopping</Link>
        </p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">Price: ${item.price}</p>
                </div>
                <div className="text-right font-bold">
                  ${item.price * item.quantity}
                </div>
              </div>
            </div>
          ))}

          {/* Display total price */}
          <div className="mt-6 text-xl font-bold border-t pt-4">
            Total: $
            {cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </div>

          {/* Checkout button */}
          <div className="mt-4">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
