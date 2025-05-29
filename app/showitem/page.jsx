"use client"
import { useEffect, useState } from "react";
import { saveOrder, fetchUserOrders } from "../../firebase/orderService"; // Adjust path accordingly

const Cart = () => {
  const [userOrders, setUserOrders] = useState([]);
  
  // Fetch user's orders on component mount
  useEffect(() => {
    const getOrders = async () => {
      const orders = await fetchUserOrders();
      setUserOrders(orders);
    };
    
    getOrders();
  }, []);
  
  const handleOrderSubmit = (orderDetails) => {
    saveOrder(orderDetails);
  };

  return (
    <div>
      {/* Cart UI and logic */}
      <button onClick={() => handleOrderSubmit({ items: [], totalAmount: 0 })}>
        Place Order
      </button>

      <div>
        <h2>Your Orders</h2>
        {userOrders.map((order) => (
          <div key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Total Amount: ${order.totalAmount}</p>
            {/* Other order details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
