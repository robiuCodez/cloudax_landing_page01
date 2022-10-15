import React from "react";
import { ecoData } from "../data/ecoData";
import EcoCard from "./Utilities/EcoCard";

const EcoSystem = () => {
  return (
    <div>
      <h3>Cloudax Ecosystem</h3>
      <p>Cloudax is an ever-expanding and scalable decentralised ecosystem.</p>

      <div>
        {ecoData.map((info, index) => (
          <EcoCard key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default EcoSystem;
