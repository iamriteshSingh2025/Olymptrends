import React from "react";
import phone from "../assets/phone.png"; // Phone frame
import mob from "../assets/mob.png"; // Screen image
import qr from "../assets/qr.png"; // QR code

const Mobile = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side Content */}
        <div className="flex items-center gap-4">
          {/* QR Code */}
          <img src={qr} alt="QR Code" className="w-28 h-28 rounded bg-white p-2" />

          {/* Text */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold leading-snug">
              Your financial future <br /> is in your hands
            </h1>
            <a
              href="#"
              className="text-[#6AFF41] font-bold mt-3 inline-block hover:underline"
            >
              Download app now ›
            </a>
          </div>
        </div>

        {/* Right Side Phone with Overlay */}
        <div className="relative flex justify-center">
          {/* Phone frame */}
          <img
            src={phone}
            alt="Phone Frame"
            className="w-[320px] md:w-[420px] lg:w-[500px]"
          />
          
          {/* Overlay screen (mob.png) */}
          <img
            src={mob}
            alt="App Screen"
            className="absolute top-[8%] left-[8%] w-[60%] h-[70%] object-cover rounded-[10px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Mobile;
