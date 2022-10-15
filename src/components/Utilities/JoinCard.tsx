import { IJoinData } from "@/src/interfaces";
import Image from "next/image";
import React from "react";

const JoinCard = ({ title, text, imageSrc }: IJoinData) => {
  return (
    <div className="space-y-3 flex flex-col h-full">
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="bg-gray-50 rounded-lg w-[250px] h-[150px] object-cover place-items-end">
        <Image src={imageSrc} alt="image" layout="fill" />
      </div>
    </div>
  );
};

export default JoinCard;
