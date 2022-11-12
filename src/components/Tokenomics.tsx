import React from "react";
import { infoIcons, tokenPrices } from "../data/token";
import { DoughnutChart, PriceCard } from "./Utilities";
import InfoCard from "./Utilities/InfoCard";

const Tokenomics = () => {
  return (
    <div className="bg-gray-100 p-20 text-gray-900 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-3xl">Tokenomics</h3>

        <p className="font-light text-xl">
          Cloudax (CLDX) is the native token of the cloudax blockchain. There
          would be a public and private sale on Cloudax launchpad.
        </p>
      </div>

      {/* ---- /// ---- */}
      <div className="flex relative w-full items-center justify-between">
        {/* left */}
        <div className="space-y-10 w-1/2">
          <div className="grid grid-cols-2 gap-5">
            {tokenPrices.map((info, index) => (
              <PriceCard key={index} {...info} />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
           
              <div className="flex items-center space-x-3">
                <div className="bg-pink-600 w-5 h-3 rounded-lg"></div>
                <h4>Ecosystem</h4>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-200 w-5 h-3 rounded-lg"></div>
                <h4>Marketing</h4>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-600 w-5 h-3 rounded-lg"></div>
                <h4>Development</h4>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-sky-600 w-5 h-3 rounded-lg"></div>
                <h4>Liquidity</h4>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 w-5 h-3 rounded-lg"></div>
                <h4>Team</h4>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-600 w-5 h-3 rounded-lg"></div>
                <h4>Advisers</h4>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-800 w-5 h-3 rounded-lg"></div>
                <h4>Angel Safe</h4>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-gray-300 w-5 h-3 rounded-lg"></div>
                <h4>Private Sale</h4>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-gray-800 w-5 h-3 rounded-lg"></div>
                <h4>Public Sale</h4>
              </div>
          
          </div>
        </div>
        {/* right side */}
        <div className="w-1/2 p-16">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
