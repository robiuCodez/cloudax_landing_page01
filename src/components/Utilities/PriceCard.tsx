import React from "react";

const PriceCard = ({ price, info }: { price: string; info: string }) => {
  return (
    <div>
      <h5 className="font-medium text-4xl">{price}</h5>
      <h6 className="text-sm font-light">{info}</h6>
    </div>
  );
};

export default PriceCard;
