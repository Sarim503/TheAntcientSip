"use client"; 
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, resetCart } from "../../store/cartSlice";  // Import resetCart action
import Link from "next/link";
import { useAuth } from "../../firebase/AuthContext";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import { saveOrder } from "../../firebase/orderService"; 

const Cart = () => {
  const router = useRouter();
  const { user } = useAuth();  // User info
  const dispatch = useDispatch();  // Initialize dispatch
  const [isMounted, setIsMounted] = useState(false);

  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCheckout = async () => {
    if (!user) {
      router.push('/login');  // Redirect to login if not logged in
    } else {
      const orderDetails = {
        items: cartItems,
        totalAmount: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
      };

      try {
        await saveOrder(orderDetails);  // Save order to Firebase
        console.log("Order saved successfully");

        dispatch(resetCart());  // Reset the cart after successful order

        router.push('/thank-you');  // Redirect to Thank You page
      } catch (error) {
        console.error("Error saving order: ", error);
      }
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {user && <p className="text-xl">Hello, {user.displayName}</p>} {/* Show user name if logged in */}
      
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
<div className="mt-4 text-right text-xl font-semibold">
  Total Amount: $
  {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
</div>

          <div className="mt-4">
            <button
              onClick={handleCheckout}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
