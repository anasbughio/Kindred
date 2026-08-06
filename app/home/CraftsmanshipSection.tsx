"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Data array containing all the media states based on your instructions
const slides = [
  {
    id: 1,
    thumb: "/craft1.jpg", 
    leftMedia: { type: "image", src: "/craft1.jpg" },
    rightMedia: {
      type: "video",
      poster: "https://kindredofireland.com/cdn/shop/files/preview_images/a9b32f38fd5541a18b03e591d558cce3.thumbnail.0000000000_1200x.jpg?v=1768644244",
      hls: "https://kindredofireland.com/cdn/shop/videos/c/vp/a9b32f38fd5541a18b03e591d558cce3/a9b32f38fd5541a18b03e591d558cce3.m3u8?v=0",
      mp4: "https://kindredofireland.com/cdn/shop/videos/c/vp/a9b32f38fd5541a18b03e591d558cce3/a9b32f38fd5541a18b03e591d558cce3.SD-480p-1.0Mbps-67167332.mp4?v=0",
    },
  },
  {
    id: 2,
    thumb: "/craft2.png", 
    leftMedia: { type: "image", src: "/craft2.png" },
    rightMedia: { type: "image", src: "/craft3.png" },
  },
  {
    id: 3,
    thumb: "/craft4.jpg", 
    leftMedia: {
      type: "video",
      poster: "https://kindredofireland.com/cdn/shop/files/preview_images/96afdafca25b412eba6a621c3667b68f.thumbnail.0000000000_1200x.jpg?v=1740411440",
      hls: "https://kindredofireland.com/cdn/shop/videos/c/vp/96afdafca25b412eba6a621c3667b68f/96afdafca25b412eba6a621c3667b68f.m3u8?v=0",
      mp4: "https://kindredofireland.com/cdn/shop/videos/c/vp/96afdafca25b412eba6a621c3667b68f/96afdafca25b412eba6a621c3667b68f.HD-1080p-7.2Mbps-43139715.mp4?v=0",
    },
    rightMedia: { type: "image", src: "/craft4.jpg" },
  },
];

// Reusable helper component to render either an Image or Video based on the data
const MediaRenderer = ({ media, className }: { media: any; className: string }) => {
  if (media.type === "video") {
    return (
      <video
        className={className}
        poster={media.poster}
        playsInline
        muted
        loop
        autoPlay
      >
        <source type="application/x-mpegURL" src={media.hls} />
        <source type="video/mp4" src={media.mp4} />
      </video>
    );
  }
  return (
    <Image
      src={media.src}
      alt="Craftsmanship"
      fill
      className={className}
    />
  );
};

export default function CraftsmanshipSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  return (
    <section className="w-full flex flex-col md:flex-row bg-[#fcfbfa]">
      
      {/* Left Side: Large Interactive Media */}
      <div className="relative w-full md:w-1/2 aspect-square md:aspect-[4/5] overflow-hidden">
        
        {/* Render Main Left Media */}
        <MediaRenderer 
          media={activeSlide.leftMedia} 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" 
        />

        {/* UPDATED: Vertically stacked at the bottom-right corner */}
        <div className="absolute bottom-6 md:bottom-8 right-4 md:right-6 bg-white/90 p-2 shadow-lg flex flex-col items-center gap-2 z-10 rounded-sm backdrop-blur-sm">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveIndex(idx)}
              className={`relative w-12 h-16 md:w-14 md:h-20 overflow-hidden transition-all duration-300 ${
                activeIndex === idx ? "border-[1.5px] border-black p-0.5" : "border border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={slide.thumb} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
          {/* Counter stays underneath the stack */}
          <div className="text-center text-[10px] tracking-widest font-semibold mt-2">
            {activeIndex + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Right Side: Editorial Content */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-16 px-6 md:px-12 text-center h-full my-auto">
        
        <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] text-black mb-8 md:mb-12">
          Handmade <span className="italic">in</span> Ireland
        </h2>

        {/* Small Dynamic Portrait Media */}
        <div className="relative w-48 md:w-56 aspect-[3/4] overflow-hidden mb-8 shadow-sm">
          <MediaRenderer 
            media={activeSlide.rightMedia} 
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" 
          />
        </div>

        <p className="font-serif text-sm md:text-[15px] leading-[1.6] text-black max-w-md mx-auto mb-10">
          Rooted in the landscape of this island, craftsmanship here is a story of <span className="italic">patience, skill</span> and <span className="italic">enduring tradition</span>. We are proud to work with and champion local makers and endangered Irish crafts to help keep this heritage alive.
        </p>

        <Link
          href="/pages/our-craft"
          className="text-[10px] uppercase tracking-[0.2em] font-semibold text-black border-b border-black pb-[2px] hover:text-gray-500 hover:border-gray-500 transition-colors"
        >
          Discover Our Craft
        </Link>
        
      </div>
      
    </section>
  );
}