import React from "react";
import Button from "./Utilities/Button";
import { BsWallet } from "react-icons/bs";
import { TbNotes } from "react-icons/tb";
import { LandingFooter } from "./Utilities";

const Landing = () => {
  return (
    <div className="bg-cloudax-blue relative flex flex-col items-center justify-center h-screen text-gray-50 space-y-6">
      <h2 className="font-bold text-6xl w-[750px] text-center">
        Integrated Web3 Ecosystem Built to Scale
      </h2>
      <h3 className="font-medium text-3xl">
        Cloudax is a collaborative enterprise and Web3 ecosystem.
      </h3>

      <div className="flex items-center space-x-8">
        <Button IconLeft={BsWallet} text="Join Presale" />
        <Button IconLeft={TbNotes} text="Whitepaper" outline />
      </div>
      <div className="place-items-end">
        <LandingFooter />
      </div>
    </div>
  );
};

export default Landing;
