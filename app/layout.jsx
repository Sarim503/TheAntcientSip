"use client";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { Provider } from "react-redux";
import { store, persistor } from "../store/index";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "../firebase/AuthContext";
import Navbar from "@/shred/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // ✅ Fix: user state defined here
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in: ", user.uid);
        setUser(user);
      } else {
        console.log("No user is signed in.");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navbar user={user} />
            <AuthProvider value={{ user, setUser }}>
              {children}
            </AuthProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
