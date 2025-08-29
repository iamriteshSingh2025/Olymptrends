import React from "react";
import profit from "../assets/profit.png";
import video from "../assets/video.mp4";

const Profitability = () => {
  return (
    <div className="bg-black py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-neutral-900 rounded-2xl p-6 flex flex-col items-center text-center">
          <h3 className="text-white  2xl font-bold text-lg">
            Increased profitability
          </h3>
          <p className="text-gray-400">of up to 93%</p>
          <img
            src={profit}
            alt="93%"
            className="mt-6 max-h-80 object-contain"
          />
        </div>

        <div className="bg-neutral-900 rounded-2xl p-6 flex flex-col items-center text-center">
          <h3 className="text-white font-bold text-lg">
            Personal trading advice
          </h3>
          <p className="text-gray-400 ">from experts</p>
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="mt-6 rounded-xl max-h-90 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Profitability;
