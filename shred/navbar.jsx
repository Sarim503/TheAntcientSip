"use client"

import { UtensilsCrossed } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Menu,
  ShoppingCart,
  LogIn,
  LayoutDashboard,
} from "lucide-react"

import Link from "next/link"

export default function Navbar() {
  return (
    <div className="w-full border-b shadow-sm bg-white px-6 py-4 flex items-center justify-between">
      
      {/* Left: Hamburger on Mobile */}
      <div className="flex flex-row space-x-3">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <div className="mt-4 flex flex-col gap-4">
              <Link href="/" className="text-lg font-semibold">Home</Link>
              <Link href="/services" className="text-lg font-semibold">Services</Link>
              <Link href="/blogs" className="text-lg font-semibold">Blogs</Link>
              <Link href="/cart" className="text-lg font-semibold">Cart</Link>
              <Link href="/login" className="text-lg font-semibold">Login</Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-black">
        <UtensilsCrossed className="w-6 h-6 text-primary" />
        <span>The Ancient Ship</span>
      </Link>
      </div>
    

      

      

      {/* Right: Cart + Login */}
      <div className="flex items-center gap-4">
        <Link href="/cart" className="hover:text-blue-600 transition">
          <ShoppingCart className="w-5 h-5" />
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
  )
}
