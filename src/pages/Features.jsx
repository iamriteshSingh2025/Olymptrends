import React from "react";
import { features } from "../data/features";

function Features() {
  return (
    <section className="flex flex-wrap justify-center gap-4 px-6 py-10">
      {features.map((f, i) => (
        <div key={i} className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg text-white">
          <span>{f.icon}</span>
          <span>{f.title}</span>
        </div>
      ))}
    </section>
  );
}

export default Features;
