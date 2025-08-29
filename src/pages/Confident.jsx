import React from "react";
import confident from "../assets/confident.png";

const TradingSection = () => {
  return (
    <div className="bg-black  text-white py-20">
      <h2 className="text-5xl font-bold text-center mb-10">
        On your way <br /> to confident trading
      </h2>

      <div className="grid grid-cols-1  md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        <div className="bg-[#111] rounded-3xl p-12 h-[500px] relative overflow-hidden flex justify-center items-center">
          <img
            src={confident}
            alt="Support"
            className="w-full h-[700px] object-contain"
          />

          <div className="absolute top-6 left-6 text-white">
            <p className="text-xl font-bold">24/7 support</p>
            <p className="text-gray-400">in your language</p>
          </div>
        </div>

        <div className="bg-[#111] rounded-2xl p-6 relative">
          <div className="absolute top-6 left-6">
            <p className="text-xl font-bold">
              Trading <span className="text-white">signals</span>
            </p>
            <p className="text-gray-400 text-sm">
              help you notice profitable trends
            </p>
          </div>

          <img
            src="https://quickchart.io/chart?c={type:'line',data:{labels:[1,2,3,4,5,6,7],datasets:[{label:'Signal',data:[5,4,6,3,8,10,12],borderColor:'lime',fill:false}]}}"
            alt="Chart"
            className="w-full h-64 object-cover rounded-2xl"
          />

          <div className="absolute top-20 left-10 bg-red-500 text-white px-3 py-1 rounded-full shadow-lg flex items-center space-x-1">
            <span>$1.00</span>
            <span>⬇</span>
          </div>

          <div className="absolute bottom-10 right-12 bg-[#00FF66] text-black px-3 py-1 rounded-full shadow-lg flex items-center space-x-1">
            <span>$10.00</span>
            <span>⬆</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingSection;
