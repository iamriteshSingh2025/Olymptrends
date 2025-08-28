import React from "react";
import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}

export default MainLayout;
