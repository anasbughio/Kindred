import Image from "next/image";
import Link from "next/link";

export default function HouseSignatures() {
  return (
    <section className="w-full bg-[#f4f3ec] py-24 md:py-32 flex flex-col items-center justify-center">
      
      {/* Image Container */}
      {/* Width is restricted to create that narrow, editorial portrait look */}
      <Link 
        href="/collections/house-signatures" 
        className="group relative w-11/12 sm:w-[400px] md:w-[450px] lg:w-[480px] aspect-[4/5] overflow-hidden"
      >
        <Image
          src="/housesignature.jpg" /* Replace with your actual red dress image */
          alt="House Signatures"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </Link>

      {/* Text Content */}
      <div className="flex flex-col items-center mt-10 gap-4">
        
        {/* Italicized Serif Heading */}
        <h2 className="font-serif italic text-3xl md:text-[32px] text-black antialiased">
          House Signatures
        </h2>
        
        {/* View Collection Link */}
        <Link 
          href="/collections/house-signatures"
          className="text-[10px] uppercase tracking-[0.2em] font-semibold text-black border-b border-black pb-[2px] hover:text-gray-500 hover:border-gray-500 transition-colors"
        >
          View Collection
        </Link>
        
      </div>
      
    </section>
  );
}