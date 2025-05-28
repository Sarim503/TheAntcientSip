"use client";
import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CarouselMenu = () => {
  const menuItems = [
    { name: "STARTERS", image: "/images/burger.jpg", link: "/staters" },
    {
      name: "PREMIUM PIZZAS",
      image: "/images/burger.jpg",
      link: "/premiumpizzas",
    },
    { name: "BURGERS", image: "/images/burger.jpg", link: "/burger" },
    { name: "BBQ", image: "/images/burger.jpg", link: "/bbq" },
    { name: "STEAKS", image: "/images/burger.jpg", link: "/steaks" },
    {
      name: "CHICKEN HANDI",
      image: "/images/burger.jpg",
      link: "/chicken-handi",
    },
    {
      name: "CHICKEN KARAHI",
      image: "/images/burger.jpg",
      link: "/chicken-karahi",
    },
    { name: "SHAWARMA", image: "/images/burger.jpg", link: "/shawarma" },
    { name: "ROCK & ROLL", image: "/images/burger.jpg", link: "/roch&roll" },
    {
      name: "FLAVOUR OF THE WORLD",
      image: "/images/burger.jpg",
      link: "/flavouroftheworld",
    },
    { name: "SURF & TURF", image: "/images/burger.jpg", link: "/surf&turf" },
    { name: "DESSERTS", image: "/images/burger.jpg", link: "/desserts" },

    {
      name: "CHOICE OF RICE",
      image: "/images/burger.jpg",
      link: "/ChoiceofRice",
    },
    { name: "SHAKE", image: "/images/burger.jpg", link: "/shake" },
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
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="text-red-500 w-6 h-6" />
          <h2 className="text-2xl font-bold text-gray-800">Explore Menu</h2>
        </div>
        <Button variant="outline" onClick={() => alert("bad ma add kra ga na")}>
          VIEW ALL
        </Button>
      </div>

      {/* Carousel */}
      <Carousel className="w-full overflow-hidden">
        <CarouselContent className="sm:flex-nowrap">
          {menuItems.map((item, index) => {
            if (!item.link) return null; // skip items without link

            return (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/3 md:basis-1/3 lg:basis-1/3 xl:basis-1/5 px-2"
              >
                <Link href={item.link}>
                  <div className="border border-yellow-400 rounded-xl p-4 hover:shadow-md transition-all h-full flex flex-col items-center justify-center text-center cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover mb-4 rounded-full"
                    />
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="left-[-10px] bg-white border shadow-md" />
        <CarouselNext className="right-[-10px] bg-white border shadow-md " />
      </Carousel>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 mt-6 items-center px-2 sm:px-4">
        {menuItems2.map((item) => (
          <Card
            key={item.id}
            className="border-none shadow-none bg-transparent text-start"
          >
            <div className="overflow-hidden rounded-lg border shadow-md w-full sm:w-72 md:w-80 h-auto mx-auto">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-contain"
              />
            </div>
            <CardContent className="bg-transparent px-0 pt-3">
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CarouselMenu;
