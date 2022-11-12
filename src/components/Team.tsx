import React from "react";
import { teamData } from "../data/teamData";
import { useHorizontalScroll } from "../utilities/hooks/useHorizontalScroll";
import TeamCard from "./Utilities/TeamCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Team = () => {
  // slide left + Right
  let slider;
  const slideLeft = () => {
    if (document !== undefined) {
      slider = document.getElementById("slider");
      slider!.scrollLeft = slider!.scrollLeft - 500;
    }

    return;
  };

  const slideRight = () => {
    if (document !== undefined) {
      slider = document.getElementById("slider");
      slider!.scrollLeft = slider!.scrollLeft + 500;
    }

    return;
  };

  return (
    <div
      className="bg-black min-h-screen text-gray-50 px-10 py-5 w-full flex items-start space-y-8 flex-col justify-center"
      id="team"
    >
      {/* top */}
      <span className="text-cloudax-blue text-xs">- Our Team -</span>

      <h3 className="font-semibold text-3xl">Meet the Team</h3>
      <p>
        Cloudax ecosystem consists of highly motivated experts in blockchain
        technology, business, economics, software engineering etc.
      </p>

      {/* team pics */}

      <div className="flex items-center space-x-5">
        <div className="bg-gray-50 text-gray-900 rounded-full">
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={38}
          />
        </div>
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-10 px-10"
        >
          {teamData.map((info, index) => (
            <TeamCard key={index} {...info} />
          ))}
        </div>
        <div className="bg-gray-50 text-gray-900 rounded-full">
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={38}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
