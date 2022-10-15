import React from "react";
import { infoIcons, tokenPrices } from "../data/token";
import { DoughnutChart, PriceCard } from "./Utilities";
import InfoCard from "./Utilities/InfoCard";

const Tokenomics = () => {
  return (
    <div className="h-screen bg-gray-100 p-10 text-gray-900">
      <h3 className="font-semibold text-3xl">Tokenomics</h3>

      <p className="font-light text-xl">
        Cloudax (CLDX) is the native token of the cloudax blockchain. There
        would be a public and private sale on Cloudax launchpad.
      </p>

      {/* ---- /// ---- */}
      <div className="flex items-center justify-between">
        {/* left */}
        <div className="space-y-10">
          <div className="grid grid-cols-2 gap-5">
            {tokenPrices.map((info, index) => (
              <PriceCard key={index} {...info} />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {infoIcons.map((info, index) => (
              <InfoCard key={index} {...info} />
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="w-full h-full">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
