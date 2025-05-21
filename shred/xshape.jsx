import React from 'react';

const Xshape = () => {
  return (
    <div className="relative w-96 h-96 bg-white overflow-hidden">
      <svg className="absolute w-full h-full" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#808080', stopOpacity: 1 }} /> {/* Gray */}
            <stop offset="40%" style={{ stopColor: '#ff7e5f', stopOpacity: 1 }} /> {/* Orange */}
            <stop offset="70%" style={{ stopColor: '#feb47b', stopOpacity: 1 }} /> {/* Light Orange */}
            <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 1 }} /> {/* Black */}
          </linearGradient>
        </defs>

        {/* Bold X-shape lines */}
        <path
          d="M 0 0 C 100 50, 150 150, 200 200 S 300 350, 400 400"
          stroke="url(#gradient1)"
          strokeWidth="4" // Bolder line
          fill="none"
        />
    
        <path
          d="M 400 0 C 300 50, 250 150, 200 200 S 100 350, 0 400"
          stroke="url(#gradient1)"
          strokeWidth="4" // Bolder line
          fill="none"
        />
      </svg>

      {/* Hoverable number labels */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xl font-bold text-gray-700 transform transition-all duration-300 ease-in-out hover:scale-110">
        1
      </div>
      <div className="absolute top-1/2 left-4 -translate-y-1/2 text-xl font-bold text-gray-700 transform transition-all duration-300 ease-in-out hover:scale-110">
        2
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xl font-bold text-gray-700 transform transition-all duration-300 ease-in-out hover:scale-110">
        3
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-xl font-bold text-gray-700 transform transition-all duration-300 ease-in-out hover:scale-110">
        4
      </div>
    </div>
  );
};

export default Xshape;
