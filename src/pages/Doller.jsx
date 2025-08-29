import React from "react";
import doller from "../assets/doller.png"; 
import clock from "../assets/clock.jpeg"

const SmoothTrading = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      
      <h2 className="text-4xl md:text-4xl font-bold text-center mb-20">
        Smooth trading experience
      </h2>

      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg">
          <h3 className="text-3xl font-bold mb-2">
            Deposit just $10
          </h3>
          <p className="text-gray-400 mb-6">to start trading</p>
          <img
            src={doller}
            alt="Deposit $10"
            className="w-80 h-80 object-contain"
          />
        </div>

        
        <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg">
          <h3 className="text-3xl font-bold mb-2">
            24/7 local assets
          </h3>
          <p className="text-gray-400 mb-6">always available</p>
          
          <img
            src={clock}
            alt="Clock"
            className="w-80 h-80 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SmoothTrading;
