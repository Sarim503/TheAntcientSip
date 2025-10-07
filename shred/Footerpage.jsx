import React from "react";

const Footerpage = () => {
  return (
    <div>
      <footer className="bg-yellow-400 text-black px-6 md:px-20 py-10 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Logo / Title */}
          <div>
            <h2 className="text-2xl font-bold">The Ancient Ship</h2>
            <p className="mt-2 text-sm">Let’s talk tasty! 🍽️</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>

            <a href="/contact-us" className="hover:underline">
              Contact Us
            </a>
          </div>

          {/* Newsletter or Socials */}
        <div className="flex gap-4">
  <a
    href="https://facebook.com/YourPage"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-yellow-900 text-white px-4 py-2 rounded-2xl hover:bg-yellow-700"
  >
    Follow on Facebook
  </a>
  <a
    href="https://instagram.com/YourPage"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-yellow-900 text-white px-4 py-2 rounded-2xl hover:bg-yellow-700"
  >
    Follow on Instagram
  </a>
</div>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-xs mt-10 border-t pt-4 border-black">
          © {new Date().getFullYear()} The Ancient Ship. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footerpage;
