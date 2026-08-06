import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg" 
          alt="Kindred of Ireland Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 z-10 text-white max-w-xl">
        <h2 className="font-serif text-5xl md:text-6xl mb-4">
          Irish linen, <span className="italic">reimagined</span>
        </h2>
        <p className="text-base md:text-lg mb-10 font-light tracking-wide">
          Timeless womenswear, handmade to order in Ireland.
        </p>
        
        <div className="flex gap-8 text-xs uppercase tracking-[0.2em] font-semibold">
          <Link href="/discover" className="border-b border-white pb-1 hover:text-white/70 hover:border-white/70 transition">
            Discover SS26
          </Link>
          <Link href="/our-world" className="border-b border-white pb-1 hover:text-white/70 hover:border-white/70 transition">
            Our World
          </Link>
        </div>
      </div>
    </>
  );
}