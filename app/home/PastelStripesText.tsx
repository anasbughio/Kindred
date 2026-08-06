import Link from "next/link";

export default function PastelStripesText() {
  return (
    <section className="w-full bg-[#f4f3ec] px-4 md:px-6 lg:px-8 py-12 lg:py-12">
      
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        
        {/* Left Side: Heading */}
        <div>
          <h2 className="font-serif italic text-4xl md:text-5xl lg:text-[44px] text-black antialiased">
            Pastel Stripes
          </h2>
        </div>

        {/* Right Side: Paragraph and Link */}
        <div className="flex flex-col items-start gap-6 lg:pr-12">
          
          <p className="font-serif text-[15px] lg:text-[16px] leading-[1.6] text-black antialiased">
            A feel-good edit made in our signature rainbow linen with a relaxed, wearable shape. These pieces have been created to celebrate colour, lightness and expression, to bring a little bit of fun and happiness into your everyday
          </p>
          
          <Link 
            href="/collections/rainbow-restock"
            className="text-[10px] uppercase tracking-[0.2em] font-semibold text-black border-b border-black pb-[2px] mt-2 hover:text-gray-500 hover:border-gray-500 transition-colors"
          >
            Discover Edit
          </Link>
          
        </div>

      </div>
      
    </section>
  );
}