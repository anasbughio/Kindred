import Image from "next/image";

export default function CollectionShowcase() {
  return (
    <section className="relative w-full h-[1600px] aspect-video overflow-hidden bg-[#2a2a2a]">
      
      {/* Background Image with Slow Zoom Motion */}
      <div className="absolute inset-0 w-full h-full">
       <Image
  src="/showcase.jpg" 
  alt="Within the Garden Collection"
  fill
  priority
  /* Change object-top to a custom percentage */
  className="object-cover object-[center_30%] animate-slow-zoom"
/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </div>

      {/* Top Left Text */}
      <div className="absolute top-32 md:top-40 left-6 md:left-12 lg:left-16 z-10 text-white">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] tracking-wide drop-shadow-md">
          Discover our <span className="italic">Within the Garden</span> Collection
        </h2>
      </div>

      {/* Bottom Left Massive Text */}
      <div className="absolute -bottom-6 md:-bottom-12 lg:-bottom-16 left-4 md:left-10 lg:left-12 z-10 text-white">
        <h1 className="font-serif text-[8rem] md:text-[14rem] lg:text-[20rem] italic leading-none tracking-tighter drop-shadow-lg">
          SS26
        </h1>
      </div>

    </section>
  );
}