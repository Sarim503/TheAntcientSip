"use client";

import { UtensilsCrossed } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "../store/cartSlice";

import { Sheet, SheetContent, SheetTrigger ,SheetTitle,} from "@/components/ui/sheet";

import { Menu, ShoppingCart, LogIn } from "lucide-react";

import Link from "next/link";

export default function Navbar({ user }) {
  const itemCount = useSelector(selectCartItemCount);
  console.log("Total count in cart:", itemCount);
  console.log("Navbar user from context:", user);
  return (
    <div className="w-full border-b shadow-sm bg-white px-6 py-4 flex items-center justify-between">
      <div className="flex flex-row space-x-3">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-2">
             <SheetTitle className="font-semibold text-yellow-700 text-2xl">
    The Ancient Ship
  </SheetTitle>
            {user?.displayName ? (
              <p className="text-lg text-gray-600 mb-4">
                Hi{" "}
                <span className="font-semibold text-black">
                  {user.displayName}
                </span>{" "}
                👋
              </p>
            ) : null}

            <div className="mt-4 flex flex-col gap-4">
              <Link
                href="/"
                className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>

            <Link
              href="/viewall"
              className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            >
              Menu
            </Link>

              <Link
                href="/cart"
                className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
              >
                Cart
              </Link>

              <Link
                href="/login"
                className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
              >
                Login
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-black"
        >
          <UtensilsCrossed className="w-6 h-6 text-primary" />
          <span>The Ancient Ship</span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/cart" className="hover:text-blue-600 transition relative">
          <ShoppingCart className="w-10 h-10" />

          {itemCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1  text-xs">
              {itemCount}
            </span>
          )}
        </Link>
        <Link
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition"
        >
          <LogIn className="inline-block mr-2 w-4 h-4" />
          Login
        </Link>
    
      </div>
    </div>
  );
}
