import Image from "next/image";
import Link from "next/link";

// Array of images with custom sizes and vertical offsets to create the "scattered" collage look
const instagramPosts = [
  { id: 1, src: "/marquee1.jpg", wrapperClass: "w-64 h-[400px] md:w-80 md:h-[500px] -mt-20" },
  { id: 7, src: "/marquee7.jpg", wrapperClass: "w-40 h-56 md:w-48 md:h-64 mb-32" },
  { id: 2, src: "/marquee2.jpg", wrapperClass: "w-48 h-64 md:w-56 md:h-80 mt-32 md:mt-48" },
  { id: 3, src: "/marquee3.jpg", wrapperClass: "w-56 h-72 md:w-72 md:h-[450px] -mt-10" },
  { id: 5, src: "/marquee5.jpg", wrapperClass: "w-40 h-56 md:w-48 md:h-64 mb-32" },
  { id: 4, src: "/marquee4.jpg", wrapperClass: "w-72 h-[450px] md:w-96 md:h-[600px] mt-16" },
  { id: 6, src: "/marquee6.jpg", wrapperClass: "w-40 h-56 md:w-48 md:h-64 mb-32" },
];

export default function InstagramMarquee() {
  // We duplicate the array so the marquee loops seamlessly without white space at the end
  const loopedPosts = [...instagramPosts, ...instagramPosts];

  return (
    <section className="relative w-full h-[600px] md:h-[800px] bg-[#fcfbfa] overflow-hidden flex items-center">
      
      {/* Center Static Text */}
      {/* Added a slight background blur so the text remains readable when images scroll directly behind it */}
      <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-[#fcfbfa]/80 backdrop-blur-md py-6 px-10 rounded-sm">
        <h2 className="font-serif text-3xl md:text-4xl text-black antialiased mb-2">
          Follow us on Instagram
        </h2>
        <Link 
          href="https://www.instagram.com/kindredofireland/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-black hover:text-gray-500 transition-colors"
        >
          @KINDREDOFIRELAND
        </Link>
      </div>

      {/* Scrolling Marquee Track */}
      {/* hover:pause (if you add a plugin for it) or just let it infinitely scroll */}
      <div className="flex w-max animate-marquee items-center gap-6 md:gap-12 pl-6 md:pl-12">
        {loopedPosts.map((post, idx) => (
          <Link 
            key={`${post.id}-${idx}`}
            href="https://www.instagram.com/kindredofireland/"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative flex-shrink-0 group overflow-hidden ${post.wrapperClass}`}
          >
            <Image
              src={post.src}
              alt="Instagram Post"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </Link>
        ))}
      </div>

    </section>
  );
}