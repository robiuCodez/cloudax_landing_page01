import { IRoadmap } from "@/src/interfaces";
import React from "react";

const RoadmapCard = ({ Icon, title, points, position, timeline }: IRoadmap) => {
  return (
    <div
      className={
        position == "left"
          ? `w-full flex items-center justify-between`
          : `w-full flex items-center justify-between flex-row-reverse`
      }
    >
      <div
        className={
          position == "left"
            ? `flex items-center justify-center`
            : `flex flex-row-reverse items-center justify-center`
        }
      >
        <div className=" p-5 glass text-gray-50 w-[200px] space-y-4">
          <Icon className="w-8 h-8" />
          <h3 className="font-semibold text-xl">{title}</h3>
          <div>
            {points.map((point, index) => (
              <p key={index}>- {point}</p>
            ))}
          </div>
        </div>
        {/* divider */}
        <div className="bg-yellow-200 h-[100px] w-[10px]"></div>
        {/* dates here */}
        <div>
          <h4>{timeline.month}</h4>
          <h5>{timeline.phase}</h5>
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;
