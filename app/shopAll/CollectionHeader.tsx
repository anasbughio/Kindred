import Image from "next/image";
import Link from "next/link";

export default function CollectionHeader() {
  return (
    <section className="w-full bg-[#fcfbfa] px-6 md:px-12 lg:px-16 py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column: Heading & Categories */}
        {/* Using 'flex-col justify-between' pushes the list to the bottom, aligning it with the image */}
        <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-between">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] text-black">
            All Clothing
          </h1>
          
          <ul className="flex flex-col gap-3 text-[14px] md:text-[15px] text-black/50 mt-16 md:mt-0 font-serif">
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Irish Linen & Tweed Coats & Jackets <sup className="text-[10px]">23</sup>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Irish Linen Dresses <sup className="text-[10px]">53</sup>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Irish Linen Blouses <sup className="text-[10px]">58</sup>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Linen Skirts <sup className="text-[10px]">38</sup>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Linen Loungewear <sup className="text-[10px]">14</sup>
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black transition-colors">
                Linen Accessories <sup className="text-[10px]">22</sup>
              </Link>
            </li>
          </ul>
        </div>

        {/* Middle Column: Description Text */}
        <div className="md:col-span-4 lg:col-span-4 flex flex-col gap-6 font-serif text-[14px] lg:text-[15px] leading-[1.7] text-black pt-2 md:pt-4 pr-0 lg:pr-8">
          <p>
            Explore the full Kindred world of linen clothing and accessories.{" "}
            <Link href="#" className="border-b border-black pb-[1px] hover:text-gray-500 transition-colors">Linen dresses</Link>,{" "}
            <Link href="#" className="border-b border-black pb-[1px] hover:text-gray-500 transition-colors">shirts</Link>,{" "}
            <Link href="#" className="border-b border-black pb-[1px] hover:text-gray-500 transition-colors">tailoring</Link>,{" "}
            <Link href="#" className="border-b border-black pb-[1px] hover:text-gray-500 transition-colors">outerwear</Link> and{" "}
            <Link href="#" className="border-b border-black pb-[1px] hover:text-gray-500 transition-colors">loungewear</Link>{" "}
            — crafted in heritage fabrics, with soft structure and a lived in ease. Designed and made in Ireland for comfort, longevity, and everyday refinement.
          </p>
          <p>
            Many of our linen clothes are made to order with tracked international delivery and free initial alterations included.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="md:col-span-4 lg:col-span-4 flex justify-start md:justify-end">
          <div className="relative w-full sm:w-2/3 md:w-full lg:w-[85%] aspect-[3/4] overflow-hidden">
            <Image
              src="/all-cloth.webp" /* Replace with your tennis net image */
              alt="All Clothing Collection"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}