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
import { useRouter } from "next/navigation";

const CarouselMenu = () => {
    const router = useRouter();
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
    <div className="w-full max-w-7xl mx-auto py-6 md:py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 md:mb-6">
        <div className="flex items-center gap-2 md:gap-3">
          <UtensilsCrossed className="text-red-500 w-5 h-5 md:w-6 md:h-6" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center sm:text-left">Explore Menu</h2>
        </div>
        <Button
          variant="outline"
          onClick={() => router.push("/viewall")}
          className="w-full sm:w-auto px-4 py-2 text-sm md:text-base"
        >
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
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 px-1 md:px-2"
              >
                <Link href={item.link}>
                  <div className="border border-yellow-400 rounded-lg md:rounded-xl p-3 md:p-4 hover:shadow-md transition-all h-full flex flex-col items-center justify-center text-center cursor-pointer min-h-[120px] md:min-h-[140px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover mb-2 md:mb-4 rounded-full"
                    />
                    <h3 className="font-semibold text-xs md:text-sm leading-tight px-1">{item.name}</h3>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="left-0 md:left-[-10px] bg-white border shadow-md w-8 h-8 md:w-10 md:h-10" />
        <CarouselNext className="right-0 md:right-[-10px] bg-white border shadow-md w-8 h-8 md:w-10 md:h-10" />
      </Carousel>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8 items-center px-0 sm:px-4">
        {menuItems2.map((item) => (
          <Card
            key={item.id}
            className="border-none shadow-none bg-transparent text-start"
          >
            <div className="overflow-hidden rounded-lg border shadow-md w-full max-w-xs mx-auto">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 md:h-40 object-contain"
              />
            </div>
            <CardContent className="bg-transparent px-0 pt-3">
              <h3 className="text-base md:text-lg font-semibold text-black text-center">{item.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CarouselMenu;
