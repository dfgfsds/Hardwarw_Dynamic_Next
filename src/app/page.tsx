"use client";

import AboutHeroSection from "@/components/aboutHeroSection";
import CategoryCarousel from "@/components/CategoryCarousel";
import LatestProducts from "@/components/LatestProducts";
import ProductGrid from "@/components/ProductGrid";
import StandupPouchSection from "@/components/StandupPouchSection";
import { useProducts } from "@/context/ProductsContext";
import { useState, useEffect } from "react";
import image1 from "../../public/images/banner1.jpg";
import image2 from "../../public/images/banner2.jpg";
import image3 from "../../public/images/banner3.jpg";

const images = [
  image1, image2, image3
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div>
      <div className="relative w-full">
        {/* Carousel */}
        <div className="relative h-56 overflow-hidden  md:h-96">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={img.src}
                className="w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
                }`}
            ></button>
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        >
          <span className="inline-flex items-center justify-center w-6 md:w-10 h-6 md:h-10 rounded-full bg-white/30 hover:bg-white/50">
            <svg
              className=" w-3 md:w-4  h-3 md:h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 6 10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        >
          <span className="inline-flex items-center justify-center w-6 md:w-10 h-6 md:h-10 rounded-full bg-white/30 hover:bg-white/50">
            <svg
              className="w-3 md:w-4  h-3 md:h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 6 10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 9l4-4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>
      {/* <CategoryCarousel /> */}
      <ProductGrid />
      <LatestProducts />
      <StandupPouchSection />
      <AboutHeroSection />

    </div>
  );
}
