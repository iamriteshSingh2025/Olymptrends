import React from "react";
import th from "../assets/th.png";

function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white pt-10">
      {/* Background image with object-cover */}
      <img
        src={th}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build confidence <br /> with every single trade
        </h1>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-green-500 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
            Start now for $0
          </button> 
          <button className="px-6 py-3 border border-gray-400 rounded-lg text-lg hover:bg-gray-800 transition">
            Learn more →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
