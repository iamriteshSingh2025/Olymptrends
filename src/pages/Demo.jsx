import React from "react";
import demoImg from "../assets/try.png";

const Demo = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-6">
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#111] rounded-3xl p-10 w-full max-w-6xl">
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-white">Demo account</h2>
          <p className="text-2xl text-gray-400">designed for practice</p>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0 mt-6">
            <button className="bg-[#00FF66] hover:bg-[#00e65a] text-black font-bold px-14 py-3 rounded-xl text-lg transition">
              Try now
            </button>
            <button className="text-[#00FF66] font-bold hover:underline">
              Learn more →
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={demoImg}
            alt="Demo Person"
            className="max-h-[700px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;
