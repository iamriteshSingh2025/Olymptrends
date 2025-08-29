import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Tenth from  "../pages/Tenth";
import Text from "../pages/Text";
import Mobile from  "../pages/Mobile";
import Text2 from "../pages/Text2";
import Demo from "../pages/Demo";
import Multi from "./Multi";
import Graph from "./Graph";
import Text3 from "./Text3";
import Green from "./Green";
import UPI from "./UPI"
import Tradecart from "./Tradecart";
import Confident from "./Confident";
import Confi from "./Confi";
import Doller from "./Doller"
import Profit from "./Profit"
import Operat from "./Operat"
import Excellence from "./Excellence"
function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Features />
      <Tenth />
      <Text/>
      <Mobile/>
      <Text2/>
      <Demo/>
      <Multi/>
      <Tradecart/>
      <Graph/>
      <Text3/>
      <Green/>
      <Confident/>
      <Confi/>
      <UPI/>
      <Doller/>
      <Profit/>
      <Operat/>
      <Excellence/>
      
     
    </div>
  );
}

export default Home;
