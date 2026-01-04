import React from "react";

const Footerpage = () => {
  return (
    <div>
      <footer className="bg-yellow-400 text-black px-4 sm:px-6 md:px-20 py-8 md:py-10 mt-16 md:mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
            {/* Logo / Title */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold">CHEEZY</h2>
              <p className="mt-2 text-sm md:text-base">Let’s talk cheesy! 🍕</p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-3 text-sm md:text-base text-center md:text-left">
              <a href="/" className="hover:underline transition-colors py-1">
                Home
              </a>
              <a href="#" className="hover:underline transition-colors py-1">
                About Us
              </a>
              <a href="/contact-us" className="hover:underline transition-colors py-1">
                Contact Us
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
              <a
                href="https://facebook.com/YourPage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-900 text-white px-4 py-2 rounded-2xl hover:bg-yellow-700 transition-colors text-center text-sm font-medium"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/YourPage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-900 text-white px-4 py-2 rounded-2xl hover:bg-yellow-700 transition-colors text-center text-sm font-medium"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="text-center text-xs md:text-sm mt-8 md:mt-10 border-t border-black pt-4">
            © {new Date().getFullYear()} The Ancient Ship. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footerpage;
