import React from "react";

const InfoCard = () => {
  return (
    <div>
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
  );
};

export default InfoCard;
