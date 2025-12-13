"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { title: "Hospital Files", image: "https://d3pyarv4eotqu4.cloudfront.net/printongo/images/opt/product/resize_POG_01_1744092948652.jpg.webp?v=7439" },
  { title: "Standee", image: "https://d3pyarv4eotqu4.cloudfront.net/printongo/images/opt/product/resize_POG_01_1744092948652.jpg.webp?v=7439" },
  { title: "Ghibli Art Studio", image: "https://d3pyarv4eotqu4.cloudfront.net/printongo/images/opt/product/resize_POG_01_1744092948652.jpg.webp?v=7439" },
  { title: "Stickers by Shape", image: "https://d3pyarv4eotqu4.cloudfront.net/printongo/images/opt/product/001_1735049634691.jpg.webp?v=7439" },
  { title: "Stickers by Material", image: "https://d3pyarv4eotqu4.cloudfront.net/printongo/images/opt/product/resize_POG_01_1744092948652.jpg.webp?v=7439" },
  { title: "Stickers by Use", image: "https://d3pyarv4eotqu4.cloudfront.net/printongo/images/opt/product/resize_POG_01_1744092948652.jpg.webp?v=7439" },
{ title: "Stickers by Shape", image: "https://d3pyarv4eotqu4.cloudfront.net/printongo/images/opt/product/001_1735049634691.jpg.webp?v=7439" },
  { title: "Stickers by Material", image: "https://d3pyarv4eotqu4.cloudfront.net/printongo/images/opt/product/resize_POG_01_1744092948652.jpg.webp?v=7439" },
  { title: "Stickers by Use", image: "https://d3pyarv4eotqu4.cloudfront.net/printongo/images/opt/product/resize_POG_01_1744092948652.jpg.webp?v=7439" },
];

export default function CategoryCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      const itemWidth = containerRef.current.querySelector<HTMLDivElement>('div:first-child')?.offsetWidth || 0;
      containerRef.current.scrollBy({ left: -itemWidth - 16, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const itemWidth = containerRef.current.querySelector<HTMLDivElement>('div:first-child')?.offsetWidth || 0;
      containerRef.current.scrollBy({ left: itemWidth + 16, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white py-10 relative">
      <div className="mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-8">
          Browse by Category
        </h2>

        <div className="relative w-full">
          {/* Scrollable Container */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth space-x-4 md:space-x-6 px-2 md:px-6 hide-scrollbar 
                       snap-x snap-mandatory"
          >
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[80%] sm:w-48 snap-center 
                           flex flex-col items-center bg-gray-50 rounded-lg p-4 mx-auto"
              >
                <a href="#" className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mb-2">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {cat.title}
                  </span>
                </a>
              </div>
            ))}
          </div>

          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-0 -translate-y-1/2 
                       flex items-center justify-center rounded-full 
                       bg-white shadow-md p-3 hover:bg-gray-100 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-0 -translate-y-1/2 
                       flex items-center justify-center rounded-full 
                       bg-white shadow-md p-3 hover:bg-gray-100 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
