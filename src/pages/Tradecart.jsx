import React, { useState } from "react";

const Tradecart = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="bg-[#111] rounded-2xl p-6 flex items-center justify-between w-full max-w-5xl mx-auto">
      
      <div
        className="relative flex-1 bg-black rounded-2xl h-[300px] flex items-center justify-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onTouchStart={() => setHover(!hover)}
      >
        
        <img
          src="https://quickchart.io/chart?c={type:'line',data:{labels:[1,2,3,4,5,6,7],datasets:[{label:'Price',data:[10,15,8,20,12,18,14]}]}}"
          alt="Chart"
          className="w-full h-full object-cover rounded-2xl"
        />

        
        {hover && (
          <>
           
            <div className="absolute top-16 left-24 bg-red-500 text-white px-3 py-1 rounded-full shadow-lg flex items-center space-x-2">
              <span>$1.00</span>
              <span className="text-lg">⬇</span>
            </div>

            
            <div className="absolute bottom-24 right-16 bg-gray-900 px-3 py-1 rounded-lg text-white">
              1917.41
            </div>

            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-4">
              <div className="bg-gray-800 text-white px-4 py-2 rounded-xl">
                <p className="text-xs">Amount</p>
                <p className="font-bold">$1</p>
              </div>
              <div className="bg-gray-800 text-white px-4 py-2 rounded-xl">
                <p className="text-xs">Duration</p>
                <p className="font-bold">5 sec</p>
              </div>
            </div>
          </>
        )}
      </div>

      
      <div className="flex-1 px-10 text-white">
        <h2 className="text-2xl font-bold">
          You choose the{" "}
          <span className="text-green-500">amount and duration</span> of your
          trade
        </h2>
        <p className="mt-4 text-gray-400">
          Open trades starting with as little as <span className="font-bold">$1</span> 
          with durations as low as <span className="font-bold">5 seconds</span>.
        </p>
      </div>
    </div>
  );
};

export default Tradecart;
