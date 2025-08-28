import React from "react";

function Text() {
  return (
    <section className="relative w-full min-h-[90vh] bg-black flex flex-col items-center justify-center text-center px-6 -pt-40">
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 -pt-40"></div>

      
      <div className="relative z-10 text-white max-w-4xl -pt-40 pb-40">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          10 years of empowering traders, <br /> and it's just a beginning.
        </h1>
        <p className="text-2xl md:text-5xl font-semibold mb-8 bg[#3F4140]">
          Discover Olymptrade's transformed and enhanced trading experience.{" "}
          <br /> Feel care that counts.
        </p>

        
        <div className="flex gap-6 justify-center">
          <a
            href="#"
            className="text-[#6AFF41] font-bold hover:underline flex items-center gap-1"
          >
            Learn more <span>›</span>
          </a>
          <a
            href="#"
            className="text-[#6AFF41] font-bold hover:underline flex items-center gap-1"
          >
            Read news <span>›</span>
          </a>
        </div>
      </div>

     
     
      <div className="relative z-10 mt-20">
        <h2 className="text-white text-4xl md:text-6xl font-bold -pt-5">
          Modern trading platform
        </h2>
      </div>

      
      <div className="fixed bottom-6 right-6">
        <button className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
          <span className="text-black text-2xl">💬</span>
        </button>
      </div>
    </section>
  );
}

export default Text;
