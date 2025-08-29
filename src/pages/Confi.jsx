import React, { useState } from "react";

import confident2 from "../assets/confident2.png";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const Confi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [slider1, slider2, slider3];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        <div className="bg-[#111] rounded-2xl p-6 relative flex justify-center items-center h-[400px] md:h-[450px]">
          <div className="absolute top-6 left-6">
            <p className="text-xl font-bold">
              Ready-to-use <br /> trading strategies
            </p>
            <p className="text-green-400 text-sm cursor-pointer">
              Try for free →
            </p>
          </div>

          <img
            src={confident2}
            alt="Trading strategies"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>

        <div className="bg-[#111] rounded-2xl p-6 relative flex flex-col items-center h-[400px] md:h-[450px]">
          <div className="absolute top-6 left-6">
            <p className="text-xl font-bold">
              In-app learning materials <br /> and
              <span className="text-red-500"> Youtube</span> tutorials
            </p>
            <p className="text-green-400 text-sm cursor-pointer">
              Start learning →
            </p>
          </div>

          <div className="w-full h-72 flex items-center justify-center relative overflow-hidden mt-12">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="w-full h-full object-cover rounded-xl transition-all duration-500"
            />

            <button
              onClick={prevSlide}
              className="absolute left-2 bg-black/60 p-2 rounded-full"
            >
              ◀
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 bg-black/60 p-2 rounded-full"
            >
              ▶
            </button>
          </div>

          <div className="flex mt-4 space-x-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confi;
