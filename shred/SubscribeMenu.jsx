"use client";
import React from "react";

const SubscribeMenu = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row items-center md:items-start justify-between 
      p-6 md:p-16 gap-6 shadow-2xl relative overflow-hidden 
      bg-[url('/images/bgsub.jpg')] bg-cover bg-no-repeat bg-top"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 z-10 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-950 mb-3">
          Special Offers & <br /> News
        </h2>
        <p className="text-black font-semibold mb-6 text-sm md:text-base ">
          Follow us on Facebook and Instagram for news, promotions and more!
        </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
  <a
    href="https://facebook.com/YourPage"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-2xl 
               hover:bg-yellow-600 transition"
  >
    Follow on Facebook
  </a>
  <a
    href="https://instagram.com/YourPage"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-2xl 
               hover:bg-yellow-600 transition"
  >
    Follow on Instagram
  </a>
</div>

      </div>
    </div>
  );
};

export default SubscribeMenu;
