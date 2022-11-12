import React from "react";
import { joinData } from "../data/joinData";
import JoinCard from "./Utilities/JoinCard";

const Join = () => {
  return (
    <div className="h-screen relative bg-cloudax-blue text-gray-50 p-10 flex flex-col items-center justify-center">
      <div>
        <h3 className="mb-10 flex-bold text-4xl text-center">
          Join a rapidly-expanding web3 <br /> Ecosystem supported by the global
          <br />
          faith-based community.
        </h3>
      </div>

      <div className="flex items-stretch space-x-5">
        {joinData.map((info, index) => (
          <JoinCard key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default Join;
