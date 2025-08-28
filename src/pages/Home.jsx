import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Tenth from "../pages/Tenth";
import Text from "../pages/Text";
import Mobile from  "../pages/Mobile";
import Text2 from "../pages/Text2";

function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Features />
      <Tenth />
      <Text/>
      <Mobile/>
      <Text2/>
    </div>
  );
}

export default Home;
