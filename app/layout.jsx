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
import Footerpage from "@/shred/Footerpage";

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navbar user={user} />
            <AuthProvider value={{ user, setUser }}>
              {children}
            </AuthProvider>
            <Footerpage />
            <a
              href="https://wa.me/923355080503"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-7 md:w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.04 2.002a10 10 0 0 0-8.38 15.505L2 22l4.636-1.622A10 10 0 1 0 12.04 2.002zm.116 17.935a8.007 8.007 0 0 1-4.095-1.125l-.293-.174-2.735.956.938-2.665-.185-.275a7.997 7.997 0 1 1 6.37 3.283zm4.356-5.842c-.239-.12-1.413-.697-1.633-.777-.219-.08-.379-.12-.539.12s-.619.777-.759.936c-.139.16-.279.179-.519.06-.239-.12-1.009-.371-1.92-1.183-.71-.631-1.188-1.41-1.329-1.649-.139-.24-.014-.37.105-.49.108-.107.24-.279.36-.418.119-.14.158-.24.239-.399.08-.159.04-.299-.02-.418-.06-.12-.539-1.3-.739-1.78-.2-.48-.4-.419-.539-.428-.139-.01-.299-.01-.459-.01-.159 0-.42.06-.64.28-.219.22-.839.82-.839 2 .001 1.179.859 2.319.979 2.479.119.16 1.679 2.56 4.079 3.6.57.246 1.014.393 1.36.502.571.182 1.09.156 1.5.095.46-.07 1.413-.577 1.613-1.135.199-.557.199-1.034.14-1.135-.06-.1-.219-.16-.459-.28z" />
              </svg>
            </a>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
