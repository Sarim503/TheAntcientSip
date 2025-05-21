import { getAuth } from "firebase/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./config";

export const saveOrder = async (orderDetails) => {
  try {
    const auth = getAuth(); 
    const user = auth.currentUser;
    if (!user) return console.log("No user is logged in");

    const docRef = await addDoc(collection(db, "orders"), {
      userId: user.uid,
      items: orderDetails.items,
      userName: user.displayName,
      totalAmount: orderDetails.totalAmount,
      date: Timestamp.now(),
      status: "pending",
    });

    console.log("Order saved with ID:", docRef.id);

    // ✅ Google Sheet me bhejna
    await fetch("/api/save-to-sheet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId: docRef.id,
       userName: user.displayName,
        total: orderDetails.totalAmount,
        timestamp: new Date().toISOString(),
        items: JSON.stringify(orderDetails.items),
      }),
    });

  } catch (e) {
    console.error("Error adding order or posting to sheet:", e);
  }
};
