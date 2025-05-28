"use client"; 
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, resetCart } from "../../store/cartSlice"; 
import Link from "next/link";
import { useAuth } from "../../firebase/AuthContext";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import { saveOrder } from "../../firebase/orderService"; 

const Cart = () => {
  const router = useRouter();
  const { user } = useAuth();  
  const dispatch = useDispatch();  
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // ✅ spinner state

  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCheckout = async () => {
    if (!user) {
      router.push('/login');  
    } else {
      setIsLoading(true); // ✅ start loading
      const orderDetails = {
        items: cartItems,
        totalAmount: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
      };

      try {
        await saveOrder(orderDetails);  
        console.log("Order saved successfully");
        dispatch(resetCart()); 
        router.push('/thank-you');  
      } catch (error) {
        console.error("Error saving order: ", error);
      } finally {
        setIsLoading(false); // ✅ stop loading
      }
    }
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h1>

        {user && (
          <p className="text-lg font-medium text-gray-700 mb-4 text-center">
            Hello, <span className="font-semibold text-black">{user.display_name}</span>
          </p>
        )}

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">
            Your cart is empty.{" "}
            <Link href="/" className="text-blue-500 hover:underline">
              Go back to shopping
            </Link>
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 flex justify-between items-center bg-gray-100">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-sm text-gray-600">Price: ${item.price}</p>
                  </div>
                  <div className="text-right font-bold text-gray-800">
                    ${item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4 text-right text-xl font-bold text-gray-800">
              Total Amount: $
              {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </div>

            <div className="mt-6">
              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className={`w-full flex justify-center items-center gap-2 py-3 px-6 rounded-lg font-semibold transition duration-200 ${
                  isLoading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                } text-white`}
              >
                {isLoading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                )}
                {isLoading ? "Processing..." : "Proceed to Checkout"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
