"use client";

import { UtensilsCrossed } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "../store/cartSlice";
import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger ,SheetTitle,} from "@/components/ui/sheet";

import { Menu, ShoppingCart, LogIn } from "lucide-react";

import Link from "next/link";

export default function Navbar({ user }) {
  const itemCount = useSelector(selectCartItemCount);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log("Total count in cart:", itemCount);
  console.log("Navbar user from context:", user);

  const closeSidebar = () => setSidebarOpen(false);
  return (
    <div className="w-full border-b shadow-sm bg-white px-4 sm:px-6 py-3 sm:py-4">
      {/* Mobile Layout */}
      <div className="flex items-center justify-between md:hidden">
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <button className="p-2">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-4">
             <SheetTitle className="font-semibold text-yellow-700 text-xl mb-4">
    The Ancient Ship
  </SheetTitle>
            {user?.displayName ? (
              <p className="text-base text-gray-600 mb-4">
                Hi{" "}
                <span className="font-semibold text-black">
                  {user.displayName}
                </span>{" "}
                👋
              </p>
            ) : null}

            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={closeSidebar}
                className="text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors py-2"
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
                onClick={closeSidebar}
                className="text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors py-2 flex items-center justify-between"
              >
                <span>Cart</span>
                {itemCount > 0 && (
                  <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                    {itemCount}
                  </span>
                )}
              </Link>

              <Link
                href="/login"
                onClick={closeSidebar}
                className="text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors py-2"
              >
                Login
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-black"
        >
          <UtensilsCrossed className="w-5 h-5 text-primary" />
          <span className="truncate">The Ancient Ship</span>
        </Link>

        <Link href="/cart" className="hover:text-blue-600 transition relative p-2">
          <ShoppingCart className="w-6 h-6" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs min-w-[18px] h-[18px] flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Link>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-black hover:text-blue-600 transition-colors"
          >
            <UtensilsCrossed className="w-6 h-6 text-primary" />
            <span>The Ancient Ship</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="hover:text-blue-600 transition relative p-2">
            <ShoppingCart className="w-8 h-8" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs min-w-[18px] h-[18px] flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition flex items-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
