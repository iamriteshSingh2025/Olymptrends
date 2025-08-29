import React, { useState } from "react";
import nav from "../../assets/nav.png"

function Navbar() {
  const [showTrading, setShowTrading] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 text-white bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="text-2xl font-bold">Olymptrade</div>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 py-3 px-4 rounded-2xl !bg-[#141414] relative">
        {/* Trading Dropdown */}
        <li
          className="hover:text-white text-[#989898] font-bold cursor-pointer relative"
          onMouseEnter={() => setShowTrading(true)}
          onMouseLeave={() => setShowTrading(false)}
        >
          Trading
          {showTrading && (
            <div className="absolute top-12 -left-52 bg-[#111] rounded-2xl shadow-lg p-6 grid grid-cols-3 gap-6 w-[800px]">
              {/* Left Card */}
              <div className="col-span-1 bg-[#1a1a1a] rounded-2xl p-6 flex flex-col justify-center shadow-md">
                <h3 className="text-xl font-bold">Quickler</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Five-second trades for fast-paced trading
                </p>
              </div>

              {/* Right Options */}
              <div className="col-span-2 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold">Fixed Time</h4>
                  <p className="text-sm text-gray-400">
                    Trades from $1 with defined time frames
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Account</h4>
                  <p className="text-sm text-gray-400">
                    Demo and live accounts in currency and crypto
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Forex</h4>
                  <p className="text-sm text-gray-400">
                    Classic mode for short- and long-term trading
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Islamic Account</h4>
                  <p className="text-sm text-gray-400">
                    Halal trading on a swap free account
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Stocks</h4>
                  <p className="text-sm text-gray-400">
                    Blue chips trading with zero commission
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Free demo account</h4>
                  <p className="text-sm text-gray-400">
                    10,000 demo units for trading practice
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Flex</h4>
                  <p className="text-sm text-gray-400">
                    Discover flexible trading mechanics
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Promotions</h4>
                  <p className="text-sm text-gray-400">
                    Loyalty program and bonuses
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Olymptrade for India</h4>
                  <p className="text-sm text-gray-400">
                    Discover local benefits and advantages
                  </p>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Download App Dropdown */}
        <li
          className="hover:text-white text-[#989898] font-bold cursor-pointer relative"
          onMouseEnter={() => setShowDownload(true)}
          onMouseLeave={() => setShowDownload(false)}
        >
          Download App
          {showDownload && (
            <div className="absolute top-12 -left-52 bg-[#111] rounded-2xl shadow-lg p-6 grid grid-cols-3 gap-6 w-[700px]">
              {/* QR Code */}
              <div className="col-span-1 bg-white rounded-2xl flex justify-center items-center p-4">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://olymptrade.com"
                  alt="QR Code"
                  className="rounded-xl"
                />
              </div>

              {/* Options */}
              <div className="col-span-2 grid grid-cols-2 gap-6 text-white">
                <div>
                  <h4 className="font-bold">Desktop</h4>
                  <p className="text-sm text-gray-400">
                    Suitable for all Windows and macOS devices
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Android APK</h4>
                  <p className="text-sm text-gray-400">
                    Instruction to install app directly from our website
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Android</h4>
                  <p className="text-sm text-gray-400">
                    Trading app is available in multiple stores
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Web App</h4>
                  <p className="text-sm text-gray-400">
                    Trading from any device via browser, no install required
                  </p>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* About Dropdown */}
        <li
          className="hover:text-white text-[#989898] font-bold cursor-pointer relative"
          onMouseEnter={() => setShowAbout(true)}
          onMouseLeave={() => setShowAbout(false)}
        >
          About
          {showAbout && (
            <div className="absolute top-12 -left-96 bg-[#111] rounded-2xl shadow-lg p-6 grid grid-cols-3 gap-6 w-[800px]">
              {/* Left Image Card */}
              <div className="col-span-1 relative rounded-2xl overflow-hidden">
                <img
                  src={nav}
                  alt="social"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-black/60 w-full">
                  <h3 className="text-lg font-bold text-white">Social media</h3>
                  <p className="text-sm text-gray-300">
                    Global and local social media groups
                  </p>
                </div>
              </div>

              {/* Right Options */}
              <div className="col-span-2 grid grid-cols-2 gap-6 text-white">
                <div>
                  <h4 className="font-bold">Assets</h4>
                  <p className="text-sm text-gray-400">
                    190+ assets in three trading modes
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Awards</h4>
                  <p className="text-sm text-gray-400">
                    All our platform achievements
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Reviews</h4>
                  <p className="text-sm text-gray-400">
                    Media mentions of our company
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Contacts</h4>
                  <p className="text-sm text-gray-400">
                    Get in touch with us conveniently
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">News</h4>
                  <p className="text-sm text-gray-400">
                    Our trading platform updates
                  </p>
                </div>
              </div>
            </div>
          )}
        </li>

        <li className="hover:text-white text-[#989898] font-bold cursor-pointer">
          Help
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-gray-800 rounded-lg">Sign in</button>
        <button className="px-4 py-2 bg-green-500 rounded-lg">Try for free</button>
      </div>
    </nav>
  );
}

export default Navbar;
