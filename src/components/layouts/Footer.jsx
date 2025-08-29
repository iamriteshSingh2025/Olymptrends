import React from "react";
import qr from '../../assets/qr.png'

import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        <div>
          <h3 className="font-semibold mb-4">Follow us on social media</h3>
          <div className="flex space-x-4">
            <a href="#" className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
              <FaTelegram className="text-xl" />
            </a>
            <a href="#" className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
              <FaYoutube className="text-xl" />
            </a>
          </div>
        </div>

        
        <div>
          <h3 className="font-semibold mb-4">Trading</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Stocks</li>
            <li>Forex</li>
            <li>Fixed Time</li>
            <li>Quickler</li>
            <li>Account</li>
            <li>Free demo account</li>
            <li>Islamic Account</li>
            <li>Flex</li>
            <li>Promotions</li>
            <li>Olymptrade for India</li>
          </ul>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Social media</li>
              <li>Assets</li>
              <li>Contacts</li>
              <li>News</li>
              <li>Awards</li>
              <li>Affiliate Program</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Download App</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Android</li>
              <li>Android APK</li>
              <li>Web App (PWA)</li>
            </ul>

            <h3 className="font-semibold mt-6 mb-4">Help</h3>
            <ul className="space-y-2 text-gray-300">
              <li>FAQ</li>
              <li>Support</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>

       
        <div>
          <div className="bg-white p-3 w-20 h-20 flex items-center justify-center rounded-md mb-4">
            <img
              src={qr} 
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold">Financial future in your hands</h3>
          <a
            href="#"
            className="text-[#6AFF41] mt-2 inline-block font-medium hover:underline"
          >
            Download app now →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
