import React from "react";
import { teamData } from "../data/teamData";
import { useHorizontalScroll } from "../utilities/hooks/useHorizontalScroll";
import TeamCard from "./Utilities/TeamCard";
import { motion } from "framer-motion";

const Team = () => {
  const scrollRef = useHorizontalScroll();
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

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="flex items-center space-x-16"
      >
        {teamData.map((info, index) => (
          <TeamCard key={index} {...info} />
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
