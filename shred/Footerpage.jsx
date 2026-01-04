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
