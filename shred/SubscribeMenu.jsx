"use client";
import React from "react";

const SubscribeMenu = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row items-center md:items-start justify-between
      p-4 sm:p-6 md:p-12 lg:p-16 gap-6 md:gap-8 shadow-2xl relative overflow-hidden min-h-[300px] md:min-h-[400px]
      bg-[url('/images/bgsub.jpg')] bg-cover bg-center md:bg-top"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="w-full md:w-1/2 z-10 text-center md:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-950 mb-3 md:mb-4">
          Special Offers & <br className="hidden sm:block" /> News
        </h2>
        <p className="text-black font-semibold mb-4 md:mb-6 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
          Follow us on Facebook and Instagram for news, promotions and more!
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 md:gap-4 max-w-md mx-auto md:mx-0">
          <a
            href="https://facebook.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-2xl
                       hover:bg-yellow-600 transition text-sm sm:text-base text-center"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-2xl
                       hover:bg-yellow-600 transition text-sm sm:text-base text-center"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubscribeMenu;
