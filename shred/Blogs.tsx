import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";

const Blogs = () => {
  const menuItems2 = [
    {
      id: 1,
      title: "Delivering cheezy khushiyan",
      image: "/images/burger.jpg",
    },
    {
      id: 2,
      title: "Delivering cheezy khushiyan",
      image: "/images/burger.jpg",
    },
    {
      id: 3,
      title: "Delivering cheezy khushiyan",
      image: "/images/burger.jpg",
    },
  ];

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
 
            <h2 className="text-2xl font-bold text-gray-800">Blogs</h2>
          </div>
          <Button variant="outline">VIEW ALL</Button>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 justify-between">
  {menuItems2.map((item) => (
    <Card key={item.id} className="border-none shadow-none bg-transparent w-80">
      <div className="relative overflow-hidden rounded-lg border shadow-md group">
        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-72 object-cover"
        />

        {/* Overlay at bottom */}
        <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 transition-opacity duration-300">
          <h3 className="text-sm font-semibold text-left">{item.title}</h3>
          <div className="flex justify-between items-center mt-2 text-sm">
            <span className="font-medium"><button className='cursor-pointer'>Learn more</button></span>
            <span className="text-lg">
                <button className='cursor-pointer'>&rarr;</button></span>
          </div>
        </div>
      </div>
    </Card>
  ))}
</div>


      </div>
    </div>
  );
};

export default Blogs;
