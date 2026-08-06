import Image from "next/image";
import Link from "next/link";

export default function SplitMediaSection() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      
      {/* Left Side: Image Container */}
      <Link 
        href="/collections/rainbow-restock" 
        // Changed h-[60vh] md:h-[80vh] to aspect-[4/5] to create a perfect tall portrait shape
        className="relative w-full md:w-1/2 aspect-square md:aspect-[4/5] block overflow-hidden group cursor-pointer"
      >
        <Image
          src="/splitimg.jpg" 
          alt="Rainbow Restock Collection"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </Link>

      {/* Right Side: Video Container */}
      {/* Matched the exact same aspect ratio here so both sides are perfectly even */}
      <div className="relative w-full md:w-1/2 aspect-square md:aspect-[4/5] bg-[#f4f3ec] overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://kindredofireland.com/cdn/shop/files/preview_images/d8bed751133c4e4ea88ba81394088560.thumbnail.0000000000_1200x.jpg?v=1776336518" 
          playsInline 
          muted 
          loop 
          autoPlay
        >
          {/* Apple/Safari HLS stream */}
          <source 
            type="application/x-mpegURL" 
            src="https://kindredofireland.com/cdn/shop/videos/c/vp/d8bed751133c4e4ea88ba81394088560/d8bed751133c4e4ea88ba81394088560.m3u8?v=0" 
          />
          {/* Standard MP4 fallback for Chrome/Edge/Firefox */}
          <source 
            type="video/mp4" 
            src="https://kindredofireland.com/cdn/shop/videos/c/vp/d8bed751133c4e4ea88ba81394088560/d8bed751133c4e4ea88ba81394088560.SD-480p-1.5Mbps-81773428.mp4?v=0" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

    </section>
  );
}