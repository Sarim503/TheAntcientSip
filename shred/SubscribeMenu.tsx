"use client";
import React, { useState } from "react";

const SubscribeMenu = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      alert(`Subscribed with ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="w-full flex flex-col shadow-2xl md:flex-row items-center justify-start  p-5 md:p-20 relative overflow-hidden bg-[url('/images/bgsub.jpg')]  bg-cover bg-no-repeat bg-top
">
      {/* Left Side */}
      <div className="max-w-md z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-950 mb-2">
          Special Offers & <br /> News
        </h2>
        <p className="text-gray-200 font-semibold mb-6">
          Subscribe now for news, promotions and more delivered right to your
          inbox
        </p>
        <input
          type="email"
          placeholder="Enter Email Address"
          className="w-full border border-gray-300 px-4 py-3 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubscribe}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded"
        >
          SUBSCRIBE
        </button>
      </div>

    
    </div>
  );
};

export default SubscribeMenu;
