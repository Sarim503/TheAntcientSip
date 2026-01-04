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
    <div className="w-full overflow-hidden py-2 md:py-4 px-2 md:px-4">
      <Carousel className="w-full max-w-6xl mx-auto" plugins={[plugin.current]}>
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem
              key={item.id}
              className="flex justify-center items-center min-w-full px-1"
            >
              <div className="w-full max-w-4xl mx-auto">
                <img
                  src={item.img}
                  alt={`slide-${item.id}`}
                  className="w-full h-auto max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-contain rounded-lg md:rounded-xl shadow-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Carsel;
