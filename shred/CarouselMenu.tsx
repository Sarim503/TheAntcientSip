"use client"
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"

const CarouselMenu = () => {
  const menuItems = [
    { name: "STARTERS", image: "/images/burger.jpg" },
    { name: "SOMEWHAT LOCAL", image: "/images/burger.jpg" },
    { name: "SOMEWHAT SOOPER", image: "/images/burger.jpg" },
    { name: "CHEEZY TREATS", image: "/images/burger.jpg" },
    { name: "PASTA", image: "/images/burger.jpg" },
    { name: "DRINKS", image: "/images/burger.jpg" },
    { name: "PASTA", image: "/images/burger.jpg" },
    { name: "DRINKS", image: "/images/burger.jpg" },
    { name: "PASTA", image: "/images/burger.jpg" },
    { name: "DRINKS", image: "/images/burger.jpg" },
  ];
  const menuItems2 = [
    {
      id: 1,
      title: "Delivering cheezy khushiyan",
      image: "/images/bike.png",
    },
    {
      id: 2,
      title: "Fastest Growing Brand of the Year",
      image: "/images/local2.png",
    },
    {
      id: 3,
      title: "Delivering cheezy khushiyan",
      image: "/images/bike.png",
    },
   
  ]


  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="text-red-500 w-6 h-6" />
          <h2 className="text-2xl font-bold text-gray-800">Explore Menu</h2>
        </div>
        <Button variant="outline" onClick={()=>(alert("bad ma add kra ga na"))}>VIEW ALL</Button>
      </div>

      {/* Carousel */}
      <Carousel className="w-full">
        <CarouselContent>
          {menuItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/4 xl:basis-1/5 px-2"
            >
              <div className="border border-yellow-400 rounded-xl p-4 hover:shadow-md transition-all h-full flex flex-col items-center justify-center text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover mb-4 rounded-full"
                />
                <h3 className="font-semibold text-sm">{item.name}</h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="left-[-18px] bg-white border shadow-md" />
        <CarouselNext className="right-[-20px] bg-white border shadow-md" />
      </Carousel>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 items-center px-6">
  {menuItems2.map((item) => (
    <Card key={item.id} className="border-none shadow-none bg-transparent text-start">
      <div className="overflow-hidden rounded-lg border shadow-md w-80 h-auto ">
        <img
          src={item.image}
          alt={item.title}
          className="w-full  object-contain"
        />
      </div>
      <CardContent className="  bg-transparent ">
        <h3 className="text-lg font-semibold text-black">{item.title}</h3>
      </CardContent>
    </Card>
  ))}
</div>


    </div>
  );
};

export default CarouselMenu;
