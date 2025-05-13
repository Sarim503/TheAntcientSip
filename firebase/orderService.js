import { getAuth } from "firebase/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore"; // Correct Firestore imports
import { db } from "./config"; // Firebase db import

const auth = getAuth(); // Initialize auth

export const saveOrder = async (orderDetails) => {
  try {
    const user = auth.currentUser; // Get the current logged-in user
    if (user) {
      const docRef = await addDoc(collection(db, "orders"), {
        userId: user.uid,
        items: orderDetails.items,
        totalAmount: orderDetails.totalAmount,
        date: Timestamp.now(),
        status: "pending", // Or any other status you want
      });
      console.log("Order saved with ID:", docRef.id);
    } else {
      console.log("No user is logged in");
    }
  } catch (e) {
    console.error("Error adding order: ", e);
  }
};
