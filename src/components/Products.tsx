import React from 'react';
import { Monitor, Cpu, Laptop, HardDrive } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Gaming Laptops",
    price: "From 50000",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
    icon: Laptop
  },
  {
    id: 2,
    name: "Desktop PCs",
    price: "From 20000",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b",
    icon: Cpu
  },
  {
    id: 3,
    name: "Monitors",
    price: "From 5000",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    icon: Monitor
  },
  {
    id: 4,
    name: "Components",
    price: "From 500",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704",
    icon: HardDrive
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600">Discover our wide range of premium computer hardware</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <product.icon className="absolute bottom-4 left-4 h-6 w-6 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.price}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}