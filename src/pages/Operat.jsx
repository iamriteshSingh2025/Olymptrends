import React from "react";
import operats from "../assets/operats.png";
import pp from "../assets/pp.png";

const Community = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center">
      <img
        src={operats}
        alt="Earth"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Olymptrade operates <br /> in 130+ countries
        </h2>

        <div className="mt-6">
          <img src={pp} alt="avatars" className="h-24 object-contain" />
        </div>

        <a
          href="#"
          className="mt-4 text-green-500 font-semibold text-lg hover:underline"
        >
          Join our communities &gt;
        </a>
      </div>
    </div>
  );
};

export default Community;
