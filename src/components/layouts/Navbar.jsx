import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 text-white bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="text-2xl font-bold">Olymptrade</div>

      <ul className="hidden md:flex gap-6 py-3 px-4 rounded-2xl !bg-[#141414]">
        <li className="hover:text-white text-[#989898] font-bold cursor-pointer">
          Trading
        </li>
        <li className="hover:text-white text-[#989898] font-bold cursor-pointer">
          Download App
        </li>
        <li className="hover:text-white text-[#989898] font-bold cursor-pointer">
          About
        </li>
        <li className="hover:text-white text-[#989898] font-bold cursor-pointer">
          Help
        </li>
      </ul>

      <div className="flex gap-4">
        <button className="px-4 py-2 bg-gray-800 rounded-lg">Sign in</button>
        <button className="px-4 py-2 bg-green-500 rounded-lg">Try for free</button>
      </div>
    </nav>
  );
}

export default Navbar;
