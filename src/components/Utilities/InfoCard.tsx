import React from "react";

const InfoCard = ({ title, color }: { title: string; color: string }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className={`bg-${color} w-5 h-3 rounded-lg`}></div>
      <h4>{title}</h4>
    </div>
  );
};

export default InfoCard;
