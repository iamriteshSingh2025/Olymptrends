import React from "react";
import logos from "../assets/logo.png";

const BrokerSection = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen flex flex-col items-center justify-center px-4 ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center max-w-3xl">
        Olymptrade is a licensed and
        <br className="hidden sm:block" />
        regulated online broker
      </h2>

      <div className="mt-10 flex justify-center">
        <img
          src={logos}
          alt="Certifications and Logos"
          className="max-w-full h-12 sm:h-16 md:h-20 object-contain"
        />
      </div>

      <button
        className="mt-8 text-[#6AFF41] font-semibold flex items-center gap-2 hover:underline transition"
        aria-label="Learn more"
      >
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default BrokerSection;
