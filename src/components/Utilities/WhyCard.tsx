import { IWhyCard } from "@/src/interfaces";
import React from "react";

const WhyCard = ({ Icon, title, text }: IWhyCard) => {
  return (
    <div className="space-y-3 mb-5">
      <Icon className="w-8 h-8 text-yellow-800" />
      <h4 className="font-semibold text-xl">{title}</h4>
      <p className="w-[400px]">{text}</p>
    </div>
  );
};

export default WhyCard;
