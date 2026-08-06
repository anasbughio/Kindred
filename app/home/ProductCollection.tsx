"use client"; // Required for React state (interactivity)

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Expanded mock data with categories and hover images
const allProducts = [
  // --- SHIRTS ---
  {
    id: 1,
    category: "Shirts",
    title: "Marshmallow Blouse | Blue",
    price: "Rs. 120,100.00",
    image: "/img2.jpg", 
    hoverImage: "/img1.jpg", // Add a secondary image for the hover effect
  },
  {
    id: 2,
    category: "Shirts",
    title: "Cadhla Shirt | Dove",
    price: "Rs. 108,700.00",
    image: "/img3.jpg",
    hoverImage: "/hoverimg3.jpg",
  },
  {
    id: 3,
    category: "Shirts",
    title: "Bluebell Blouse",
    price: "Rs. 103,000.00",
    image: "/img4.jpg",
    hoverImage: "/hoverimg4.jpg",
  },
  {
    id: 4,
    category: "Shirts",
    title: "Marshmallow Blouse | White",
    price: "Rs. 120,100.00",
    image: "/img5.jpg",
    hoverImage: "/hoverimg5.jpg",
  },
  // --- DRESSES (Example Data) ---
  {
    id: 5,
    category: "Dresses",
    title: "Linen Midi Dress | Cream",
    price: "Rs. 145,000.00",
    image: "/dressimg1.jpg", // Using placeholder, swap for real dress images
    hoverImage: "/hoverdressimg1.jpg",
  },
  
  {
    id: 6,
    category: "Dresses",
    title: "The Lemon Sherbet Dress",
    price: "Rs. 145,800.00",
    image: "/dressimg2.jpg", // Using placeholder, swap for real dress images
    hoverImage: "/hoverdressimg2.jpg",
  },
  {
    id: 7,
    category: "Dresses",
    title: "The Lemon Sherbet Dress",
    price: "Rs. 145,800.00",
    image: "/dressimg3.jpg", // Using placeholder, swap for real dress images
    hoverImage: "/hoverdressimg3.jpg",
  },
  {
    id: 8,
    category: "Dresses",
    title: "Linen Midi Dress | Cream",
    price: "Rs. 145,000.00",
    image: "/dressimg4.jpg", // Using placeholder, swap for real dress images
    hoverImage: "/hoverdressimg4.jpg",
  },
  // --- JACKETS (Example Data) ---
  {
    id: 9,
    category: "Jackets",
    title: "Heritage Linen Jacket",
    price: "Rs. 185,000.00",
    image: "/jacket1.jpg", 
    hoverImage: "/hoverjacket1.jpg",
  },
  {
    id: 10,
    category: "Jackets",
    title: "Heritage Linen Jacket",
    price: "Rs. 185,000.00",
    image: "/jacket2.jpg", 
    hoverImage: "/hoverjacket2.jpg",
  },
  {
    id: 11,
    category: "Jackets",
    title: "Heritage Linen Jacket",
    price: "Rs. 185,000.00",
    image: "/jacket3.jpg", 
    hoverImage: "/hoverjacket3.jpg",
  },
  {
    id: 12,
    category: "Jackets",
    title: "Heritage Linen Jacket",
    price: "Rs. 185,000.00",
    image: "/jacket4.jpg", 
    hoverImage: "/hoverjacket4.jpg",
  }
];

const categories = ["Shirts", "Dresses", "Jackets", "Ready to Ship"];

export default function ProductCollection() {
  // State to track which category tab is currently selected
  const [activeCategory, setActiveCategory] = useState("Shirts");

  // Filter the products based on the active tab
  const filteredProducts = allProducts.filter(
    (product) => product.category === activeCategory
  );

  return (
    <section className="w-full bg-[#f4f3ec] px-4 md:px-6 lg:px-12 py-16">
      
      {/* Top Navigation Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        
        {/* Left: Interactive Category Filters */}
        <div className="flex gap-6 text-[10px] uppercase tracking-widest font-semibold text-gray-400">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`transition-colors pb-1 ${
                activeCategory === category
                  ? "text-black" // Active state color
                  : "hover:text-black" // Inactive state hover
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Right: View All Link */}
        <Link 
          href="/shop" 
          className="text-[10px] uppercase tracking-widest font-semibold text-black border-b border-black pb-[2px] hover:text-gray-600 hover:border-gray-600 transition-colors"
        >
          View All
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {/* If a category has no products, show a message */}
        {filteredProducts.length === 0 && (
          <div className="col-span-full py-12 text-sm text-gray-500 font-serif">
            No products available in this category yet.
          </div>
        )}

        {filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col group cursor-pointer">
            
            {/* Image Container with Hover States */}
            <div className="relative w-full aspect-[3/4] bg-[#e8e7df] mb-4 overflow-hidden">
              
              {/* Primary Image (Fades out on hover) */}
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
              />
              
              {/* Secondary Hover Image (Fades in on hover) */}
              <Image
                src={product.hoverImage}
                alt={`${product.title} alternate view`}
                fill
                className="object-cover object-center absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Hover UI Overlay (Arrows & Add to Bag) */}
              <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                
                {/* Center Arrows */}
                <div className="flex justify-between items-center h-full px-3">
                  <button className="text-black text-xl hover:scale-110 transition-transform">&lsaquo;</button>
                  <button className="text-black text-xl hover:scale-110 transition-transform">&rsaquo;</button>
                </div>

                {/* Add to Bag Button overlay */}
                {/* Uses a white semi-transparent background with a subtle blur like the original */}
                <button className="w-full bg-white/70 backdrop-blur-sm py-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-black hover:bg-white transition-colors">
                  Add to Bag +
                </button>
              </div>

            </div>

            {/* Product Info */}
            <div className="flex justify-between items-start px-1">
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-sm lg:text-[15px] text-black antialiased leading-tight">
                  {product.title}
                </h3>
                <p className="text-[10px] md:text-[11px] font-medium tracking-wider text-black">
                  {product.price}
                </p>
              </div>

              {/* Swatch Icon */}
              <button 
                className="w-2.5 h-3.5 border border-black bg-transparent mt-0.5 hover:bg-black/10 transition-colors"
                aria-label="View product color options"
              />
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}