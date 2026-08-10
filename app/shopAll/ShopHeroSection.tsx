import Image from "next/image";
import Link from "next/link";

export default function ShopHeroSection() {
  return (
    <section className="w-full px-4 md:px-6 mt-4">
      
      {/* 3-Column Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        
        {/* LEFT SIDE: Cinematic Video Showcase (Takes up 2 columns) */}
        <div className="relative lg:col-span-2 w-full h-[70vh] md:h-[85vh] bg-[#f4f3ec] overflow-hidden">
          
          {/* Video Background */}
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="//kindredofireland.com/cdn/shop/videos/c/vp/c23d2e2074da4c74a4112a29b053d7ab/c23d2e2074da4c74a4112a29b053d7ab.HD-1080p-7.2Mbps-78050720.mp4?v=0" />
          </video>

          {/* Top Left Text */}
          <div className="absolute top-6 left-6 z-10 text-white font-serif text-[16px] md:text-[18px] antialiased drop-shadow-sm">
            Vivienne Blouse | Irish Crochet
          </div>

          {/* Bottom Left Text */}
          <div className="absolute bottom-6 left-6 z-10 text-white font-serif italic text-4xl md:text-5xl antialiased drop-shadow-md">
            Discover
          </div>

          {/* Bottom Right Floating Thumbnail */}
          <div className="absolute bottom-6 right-6 z-10 w-[50px] h-[75px] md:w-[60px] md:h-[90px] border-[1.5px] border-white/80 rounded-[2px] overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <Image 
              src="/shophero1.jpg" /* Replace with your actual thumbnail */
              alt="Vivienne Blouse Thumbnail" 
              fill 
              className="object-cover"
            />
          </div>

          {/* Floating Filter & Grid Bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-[#e8e7e1] px-6 py-3 flex items-center justify-between w-[90%] max-w-[380px] shadow-md text-[10px] tracking-[0.15em] uppercase font-semibold text-black">
            <button className="hover:text-gray-500 transition-colors">Filters</button>
            <button className="flex items-center gap-2 hover:text-gray-500 transition-colors">
              Grid View 
              {/* SVG Grid Icon */}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="3" height="3" />
                <rect x="4.5" y="0.5" width="3" height="3" />
                <rect x="8.5" y="0.5" width="3" height="3" />
                <rect x="0.5" y="4.5" width="3" height="3" />
                <rect x="4.5" y="4.5" width="3" height="3" />
                <rect x="8.5" y="4.5" width="3" height="3" />
                <rect x="0.5" y="8.5" width="3" height="3" />
                <rect x="4.5" y="8.5" width="3" height="3" />
                <rect x="8.5" y="8.5" width="3" height="3" />
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Product Card (Takes up 1 column) */}
        {/* We use flex-col and match the height of the video side */}
        <div className="lg:col-span-1 flex flex-col w-full h-[70vh] md:h-[85vh]">
          
          {/* Product Image Container (Flex-grow ensures it takes up all available space above the text) */}
          <Link href="/products/marshmallow-blouse" className="relative flex-grow w-full bg-[#f4f3ec] group cursor-pointer overflow-hidden">
            <Image
              src="/shophero2.jpg" /* Replace with your actual blouse image */
              alt="Marshmallow Blouse | Blue"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </Link>

          {/* Product Details (Locked beneath the image) */}
          <div className="flex justify-between items-start pt-3 px-1">
            <div className="flex flex-col gap-[2px]">
              <Link href="/products/marshmallow-blouse" className="font-serif text-[14px] md:text-[15px] text-black hover:opacity-70 transition-opacity">
                Marshmallow Blouse | Blue
              </Link>
              <span className="text-[11px] md:text-[12px] text-black/70 font-sans tracking-wide">
                Rs. 120,500.00
              </span>
            </div>
            
            {/* Small Shopping Bag Icon */}
            <button className="text-black hover:text-gray-500 transition-colors mt-1">
              <svg width="12" height="14" viewBox="0 0 14 16" fill="none" stroke="currentColor" strokeWidth="1.2" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5H13V15H1V5Z" />
                <path d="M4 5V3C4 1.89543 4.89543 1 6 1H8C9.10457 1 10 1.89543 10 3V5" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}