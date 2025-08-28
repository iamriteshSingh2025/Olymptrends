import React from "react";
import phone from "../assets/phone.png"; 
import mob from "../assets/mob.png"; 
import qr from "../assets/qr.png"; 

const Mobile = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
    
        
        <div className="flex items-center gap-4">
         
          <img src={qr} alt="QR Code" className="w-28 h-28 rounded bg-white p-2" />

          
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

        
        <div className="relative flex justify-center">
         
          <img
            src={phone}
            alt="Phone Frame"
            className="w-[320px] md:w-[420px] lg:w-[500px]"
          />
          
         
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
