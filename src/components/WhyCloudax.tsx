import React from "react";
import { whyCloudax } from "../data/whyCloudax";
import WhyCard from "./Utilities/WhyCard";

const WhyCloudax = () => {
  return (
    <div className="h-screen bg-black w-full text-gray-50 px-20 py-14 space-y-5">
      <div className="flex items-center justify-center w-full mb-10">
        <h2 className="text-center text-4xl font-bold">
          Transforming a new generation of <br /> wholesome content creators
          &amp; Faith-based <br /> communites.
        </h2>
      </div>

      <div className="flex items-center justify-between">
        <div>
          {whyCloudax.map((info, index) => (
            <WhyCard key={index} {...info} />
          ))}
        </div>

        {/* circle */}
        <div className="w-[350px] h-[350px] rounded-full bg-gray-900 bg-opacity-50"></div>
      </div>
    </div>
  );
};

export default WhyCloudax;
