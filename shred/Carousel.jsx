"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Carsel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const data = [
    { id: 1, img: "/images/sip1.png" },
    { id: 2, img: "/images/sip2.png" },
    { id: 3, img: "/images/sip3.png" },
  ];

  return (
    <div className=" overflow-hidden py-2 ">
      <Carousel className="w-full" plugins={[plugin.current]}>
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem
              key={item.id}
              className="flex justify-center items-center min-w-full"
            >
              <img
                src={item.img}
                alt={`slide-${item.id}`}
                className="w-full h-auto object-contain rounded-xl shadow-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Carsel;
