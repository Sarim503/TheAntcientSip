"use client";
import React, { useState } from "react";

const SubscribeMenu = () => {




  return (
    <div className="w-full flex flex-col shadow-2xl md:flex-row items-center justify-start  p-5 md:p-20 relative overflow-hidden bg-[url('/images/bgsub.jpg')]  bg-cover bg-no-repeat bg-top
">
      {/* Left Side */}
      <div className="max-w-md z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-950 mb-2">
          Special Offers & <br /> News
        </h2>
      <p className="text-gray-200 font-semibold mb-6">
  Follow us on Facebook and Instagram for news, promotions and more!
</p>
<div className="flex gap-4">
  <a
    href="https://facebook.com/YourPage"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 "
  >
    Follow on Facebook
  </a>
  <a
    href="https://instagram.com/YourPage"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-pink-500 text-white px-4 py-2 rounded-2xl hover:bg-pink-600"
  >
    Follow on Instagram
  </a>
</div>

     
      
      </div>

    
    </div>
  );
};

export default SubscribeMenu;
