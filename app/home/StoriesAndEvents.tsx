import Image from "next/image";
import Link from "next/link";

// Data for the journal articles
const stories = [
  {
    id: 1,
    category: "Our World",
    date: "12 days ago",
    title: "An interview with Wilde Studio",
    description: "The floral duo behind our SS26 Pressed Flower linen.",
    image: "/stories1.jpg", 
    link: "/journal/wilde-studio",
  },
  {
    id: 2,
    category: "Our World",
    date: "02nd April 2026",
    title: "Threads of Ambition",
    description: "Press in The Guardian.",
    image: "/stories2.jpg",
    link: "/journal/threads-of-ambition",
  },
  {
    id: 3,
    category: "Craftsmanship",
    date: "16th March 2026",
    title: "The Art of Beetling",
    description: "An ancient linen craft, carried forward.",
    image: "/stories3.jpg",
    link: "/journal/art-of-beetling",
  },
  {
    id: 4,
    category: "Our World",
    date: "28th Feb 2026",
    title: "Walpole's Brands of Tomorrow",
    description: "A milestone moment.",
    image: "/stories4.png",
    link: "/journal/brands-of-tomorrow",
  },
];

export default function StoriesAndEvents() {
  return (
    <section className="w-full bg-[#fcfbfa] px-4 md:px-6 lg:px-12 py-16 lg:py-24">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-black antialiased tracking-wide">
          Stories & Events
        </h2>
        <p className="font-serif text-[13px] md:text-[14px] mt-3 text-black antialiased">
          Discover the Kindred Journal, an editorial space rooted in Irish craft, culture, and storytelling.
        </p>
      </div>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stories.map((story) => (
          <Link 
            key={story.id} 
            href={story.link}
            className="group flex flex-col cursor-pointer"
          >
            {/* Image Container with Zoom Hover Effect */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#e8e7df] mb-4">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Article Meta Data */}
            <div className="flex flex-col flex-grow">
              
              {/* Category and Date Row */}
              <div className="flex justify-between items-center text-[9px] md:text-[10px] uppercase tracking-widest font-semibold text-gray-500 mb-2">
                <span className="text-black">{story.category}</span>
                <span>{story.date}</span>
              </div>
              
              {/* Title & Description */}
              <h3 className="font-serif text-[17px] md:text-[19px] text-black leading-tight mb-1">
                {story.title}
              </h3>
              <p className="text-[11px] md:text-[12px] text-black">
                {story.description}
              </p>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}