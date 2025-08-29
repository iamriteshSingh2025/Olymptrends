import React from "react";
import mobile from "../assets/mobile.png";       
import instruments from "../assets/instruments.png";  
import instruments1 from "../assets/instruments1.png"; 

const LearnMore = ({ className = "" }) => (
  <button
    className={
      "inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition " +
      className
    }
    aria-label="Learn more"
  >
    <span className="px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-sm">
      Learn more
    </span>
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="#00ff66" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </button>
);

const Multi = () => {
  return (
    <div className="bg-black min-h-screen w-full px-4 md:px-8 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-7">

        
        <article className="relative overflow-hidden rounded-[28px] bg-[#171717] p-6 flex flex-col items-center shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="text-center">
            <h3 className="text-white text-lg md:text-5xl font-extrabold leading-snug">
              Risk-free trades<br />allow you to trade confidently
            </h3>
            <div className="mt-2"><LearnMore /></div>
          </div>
          <img
            src={mobile}
            alt="Phone showing a risk-free trade"
            className="mt-auto w-[88%] max-w-[480px] object-contain pointer-events-none"
          />
        </article>

        
        <article className="relative overflow-hidden rounded-[28px] bg-[#171717] p-6 flex flex-col items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="text-center">
            <h3 className="text-white text-lg md:text-4xl font-extrabold">Insured deposits</h3>
            <div className="mt-2"><LearnMore /></div>
          </div>
          <img
            src={instruments1}
            alt="Insured deposit visual"
            className="w-[88%] max-w-[480px] object-contain"
          />
        </article>

        <article className="relative overflow-hidden rounded-[28px] bg-[#171717] p-6 flex flex-col items-center shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="text-center">
            <h3 className="text-white text-lg md:text-xl font-extrabold leading-snug max-w-[26rem]">
              Negative balance{" "}
              <span className="inline-block w-[14px] h-[14px] rounded-full bg-[#00ff66] align-middle" />{" "}
              protection so you only risk<br />your trade amount
            </h3>
            <div className="mt-2"><LearnMore /></div>
          </div>


        </article>


        
        <article className="relative overflow-hidden rounded-[28px] bg-[#171717] p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="text-left">
            <h3 className="text-white text-lg md:text-4xl font-extrabold leading-snug">
              Stop loss/Take profit close<br />the trade on your terms
            </h3>
            <div className="mt-2"><LearnMore /></div>
          </div>
          <img
            src={instruments}
            alt="Stop loss and take profit notifications"
            className="mt-6 w-[85%] md:w-[70%] max-w-[480px] object-contain"
          />
        </article>

   
      </div>
    </div>
  );
};

export default Multi;
