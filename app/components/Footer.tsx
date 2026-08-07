import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    /* INCREASED MOBILE HEIGHT: Changed h-[850px] to h-[1100px] */
    <footer 
      className="relative w-full h-[1100px] md:h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* INCREASED MOBILE HEIGHT: Must match the parent container */}
      <div className="fixed bottom-0 left-0 w-full h-[1100px] md:h-[600px] -z-10 flex flex-col justify-end items-center pb-6 md:pb-10">
        
        {/* Fixed Background Landscape Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/footer.png" 
            alt="Kindred of Ireland Landscape"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* FLOATING CONTENT BOX */}
        {/* TIGHTENED MOBILE PADDING: Changed py-10 to py-8 and px-8 to px-6 */}
        <div className="relative z-10 w-[92%] md:w-[95%] max-w-[1500px] bg-[#f0efea]/90 backdrop-blur-md px-6 py-8 md:px-12 md:py-16 shadow-xl">
          
          {/* TIGHTENED MOBILE GAPS: Changed gap-10 to gap-6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 w-full">
            
            {/* Column 1: Company */}
            <div className="flex flex-col gap-3 lg:col-span-1">
              <h3 className="font-serif text-[22px] md:text-2xl text-black">Company</h3>
              <ul className="flex flex-col gap-2 text-[12px] md:text-[13px] text-black/90">
                <li><Link href="#" className="hover:text-black transition-colors">Story</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Sustainability</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Craftsmanship</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Gift Cards</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Customer Reviews</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Linen Wedding Dress Collection</Link></li>
              </ul>
            </div>

            {/* Column 2: Help */}
            <div className="flex flex-col gap-3 lg:col-span-1">
              <h3 className="font-serif text-[22px] md:text-2xl text-black">Help</h3>
              <ul className="flex flex-col gap-2 text-[12px] md:text-[13px] text-black/90">
                <li><Link href="#" className="hover:text-black transition-colors">Shipping</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Returns & Refunds</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Privacy Policies</Link></li>
              </ul>
            </div>

            {/* Column 3: Social */}
            <div className="flex flex-col gap-3 lg:col-span-1">
              <h3 className="font-serif text-[22px] md:text-2xl text-black">Social</h3>
              <ul className="flex flex-col gap-2 text-[12px] md:text-[13px] text-black/90">
                <li><Link href="#" className="hover:text-black transition-colors">Facebook</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Instagram</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">YouTube</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Pinterest</Link></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="flex flex-col gap-3 lg:col-span-3 lg:pl-16">
              <h3 className="font-serif text-[22px] md:text-2xl text-black">Kindred of Ireland Post</h3>
              <p className="text-[12px] md:text-[13px] text-black/90 mb-2">
                Sign up to our newsletter to receive updates and offers exclusive to our subscribers
              </p>
              
              <div className="mt-2">
                <p className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] uppercase mb-4 text-black">
                  Sign up to our newsletter
                </p>
                <form className="relative flex items-center border-b border-black pb-2">
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="w-full bg-transparent text-[10px] md:text-[11px] tracking-widest uppercase outline-none placeholder:text-black/60 text-black"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-0 text-[10px] md:text-[11px] tracking-widest uppercase font-semibold text-black hover:text-gray-600 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Legal Row */}
          <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 md:gap-8 text-[10px] md:text-[11px] font-semibold tracking-wider text-black/90 text-center md:text-left">
            <p>© 2026, Kindred of Ireland</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link href="#" className="hover:text-black transition-colors">Terms of Use</Link>
              <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-black transition-colors">Shipping Policy</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}