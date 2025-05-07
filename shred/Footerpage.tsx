import React from 'react'

const Footerpage = () => {
  return (
    <div>
      <footer className="bg-yellow-400 text-black px-6 md:px-20 py-10 mt-20">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
    
    {/* Logo / Title */}
    <div>
      <h2 className="text-2xl font-bold">CHEEZY</h2>
      <p className="mt-2 text-sm">Let’s talk cheesy! 🍕</p>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-col gap-2 text-sm">
      <a href="#" className="hover:underline">Home</a>
      <a href="#" className="hover:underline">About Us</a>
      <a href="#" className="hover:underline">Services</a>
      <a href="#" className="hover:underline">Contact</a>
    </div>

    {/* Newsletter or Socials */}
    <div className="w-full md:w-auto">
      <p className="font-semibold mb-2">Subscribe to our newsletter</p>
      <div className="flex">
        <input
          type="email"
          placeholder="Email address"
          className="px-3 py-2 rounded-l bg-white text-black outline-none"
        />
        <button className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800">
          Subscribe
        </button>
      </div>
    </div>
  </div>

  {/* Bottom Line */}
  <div className="text-center text-xs mt-10 border-t pt-4 border-black">
    © {new Date().getFullYear()} The Ancient Ship. All rights reserved.
  </div>
</footer>

    </div>
  )
}

export default Footerpage
