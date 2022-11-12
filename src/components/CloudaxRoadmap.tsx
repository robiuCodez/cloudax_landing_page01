import React from "react";
import { roadmap } from "../data/roadmap";
import { RoadmapCard } from "./Utilities";

const CloudaxRoadmap = () => {
  return (
    <div className="bg-cloudax-blue p-20 relative text-gray-50 font-space">
      <div className="text-center mb-20 space-y-5">
        <h3 className="font-semibold text-2xl">
          Building the Future of Cloudax
        </h3>
        <h4 className="font-bold text-5xl">The Roadmap</h4>
        <p className="font-light text-lg">
          Cloudax is a rapidly expanding ecosystem designed to innovate with
          various value-added <br /> utilities to continuously drive the
          economic growth of the ecosystem.
        </p>
      </div>

      <div className="w-full flex items-center justify-center mb-20">
        <div className="text-gray-50 rounded-full w-[120px] h-[120px] border border-gray-50 bg-white bg-opacity-50 flex items-center justify-center">
          <h3 className="font-bold text-3xl">2022</h3>
        </div>
      </div>

      {/* <div className="bg-yellow-300 w-[20px] h-[800px] absolute text-center inset-x-0 mx-auto"></div> */}

      {/* roadmap section */}
      <div>
        <RoadmapCard />
      </div>
    </div>
  );
};

export default CloudaxRoadmap;
