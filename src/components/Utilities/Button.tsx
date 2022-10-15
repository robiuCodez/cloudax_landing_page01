import { IButton } from "@/src/interfaces";
import React from "react";

const Button = ({ IconRight, text, IconLeft, outline }: IButton) => {
  return (
    <button
      className={`${
        outline
          ? "border-2 border-gray-50 p-5 justify-between rounded-lg bg-transparent flex items-center space-x-3"
          : "p-5 justify-between rounded-lg flex items-center space-x-3 bg-gray-50 text-cloudax-blue"
      }`}
    >
      <span>{IconLeft && <IconLeft className="w-8 h-8" />}</span>
      <span className="font-medium text-xl"> {text}</span>
      <span>{IconRight && <IconRight />}</span>
    </button>
  );
};

export default Button;
