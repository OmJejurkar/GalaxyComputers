import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5"
          alt="Gaming Setup"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Galaxy Computers
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your one-stop destination for premium computer hardware and electronics
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Shop Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}