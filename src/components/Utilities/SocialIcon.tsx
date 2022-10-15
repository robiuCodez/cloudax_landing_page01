import { ISocialIcon } from "@/src/interfaces";
import React from "react";

const SocialIcon = ({ Icon, filled }: ISocialIcon) => {
  return (
    <div
      className={`${
        filled
          ? "p-[6px] border-2 bg-gray-50 rounded-full"
          : "p-[6px] border-2 border-gray-50 rounded-full"
      }`}
    >
      <Icon
        className={`${
          filled ? "w-5 text-black h-5" : "w-5 text-gray-50 h-5"
        }`}
      />
    </div>
  );
};

export default SocialIcon;
