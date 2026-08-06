export default function Manifesto() {
  return (
    <section className="w-full bg-[#f4f3ec] px-2 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-start justify-start">
      
      {/* Left Column: Label */}
      <div className="w-full md:w-32 lg:w-40 pt-[10px] flex-shrink-0 mb-6 md:mb-0">
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-black antialiased">
          MANIFESTO
        </span>
      </div>

      {/* Right Column: Main Text */}
      {/* max-w-[1108.8px] ensures the text block never exceeds the exact width from your CSS */}
      <div className="flex-1 w-full max-w-[1108.8px]">
       <h2 className="font-serif text-[44px] leading-[44px] font-light text-black antialiased m-0 p-0">
      Kindred of Ireland is a <span className="italic">modern heritage house</span> rooted in linen, place and people. We honour Ireland’s textile traditions by <span className="italic">carrying them forward</span> through contemporary design, local craft, and clothing made to <span className="italic">hold story</span>.
    </h2>
      </div>

    </section>
  );
}