import React from "react";
import ten from "../assets/ten.jpg";

const ReviewsAndExcellence = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        <div className="bg-[#111] rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-lg">
          <div className="w-14 h-14 rounded-xl bg-purple-700 flex items-center justify-center text-xl font-bold">
            D
          </div>
          <p className="mt-2 text-gray-300">Dian Permadi</p>

          <h2 className="mt-6 text-xl font-bold">
            Good trading platform and experience
          </h2>
          <p className="mt-2 text-gray-400 text-sm max-w-md">
            Olymptrade offers a really good trading platform. There could be
            more asset choices than there are now, but OT is still not a bad
            choice for daily trading.
          </p>

          <div className="mt-4 flex items-center space-x-1 text-green-400">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="mt-2 text-green-400 text-sm cursor-pointer">
            More reviews on Trustpilot →
          </p>
        </div>

        <div className="bg-[#111] rounded-2xl p-6 flex flex-col justify-center items-center relative shadow-lg">
          <h2 className="text-xl font-bold mb-4">10 years of excellence</h2>
          <img
            src={ten}
            alt="10 Years"
            className="w-full h-72 object-contain rounded-xl"
          />

          <div className="flex justify-center space-x-4 mt-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-[#222]">
              2019 <br /> Best Mobile Trading Experience
            </span>
            <span className="px-3 py-1 rounded-full bg-[#00FF66] text-black font-bold">
              2019 <br /> Best Customer Support Broker
            </span>
            <span className="px-3 py-1 rounded-full bg-[#222]">
              2019 <br /> Best Mobile Trading Platform
            </span>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button className="px-20 py-5 rounded-4xl bg-gradient-to-r from-[#00FF66] to-[#00FF66] text-black font-bold text-lg shadow-lg hover:scale-105 transition-transform">
          Start trading confidently
        </button>
      </div>
    </div>
  );
};

export default ReviewsAndExcellence;
