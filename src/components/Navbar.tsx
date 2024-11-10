import React from 'react';
import { Menu, Search, ShoppingCart, Laptop } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Laptop className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold">Galaxy Computers</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#products" className="hover:text-blue-400 transition-colors">Products</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 cursor-pointer hover:text-blue-400 transition-colors" />
            <ShoppingCart className="h-5 w-5 cursor-pointer hover:text-blue-400 transition-colors" />
            <Menu className="h-5 w-5 md:hidden cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}