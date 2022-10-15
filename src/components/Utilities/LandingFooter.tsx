import { landingFooterIcons } from "@/src/data/landingFooterIcons";
import React from "react";
import SocialIcon from "./SocialIcon";
import {
  SiTwitter,
  SiDiscord,
  SiInstagram,
  SiTiktok,
  SiFacebook,
  SiYoutube,
  SiSnapchat,
} from "react-icons/si";
import { RiArrowRightFill } from "react-icons/ri";

const LandingFooter = () => {
  const icons = [
    SiTwitter,
    SiDiscord,
    SiInstagram,
    SiTiktok,
    SiFacebook,
    SiYoutube,
    SiSnapchat,
  ];

  return (
    <div className="bg-blue-800 absolute bottom-0 inset-x-0 w-full flex items-center justify-between h-[100px] px-10 py-3">
      {/* left side */}
      <div className="flex items-center space-x-6 text-gray-50">
        <h5>Sign up and never miss a beat!</h5>
        <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-3xl">
          <input
            type="email"
            placeholder="Enter email address"
            className="outline-none px-4 border-none focus:outline-none focus:border-none text-gray-900"
          />
          <RiArrowRightFill className="bg-cloudax-blue text-gray-50 w-8 h-8 p-1 rounded-full" />
        </div>
      </div>

      {/* right side */}
      <div className="flex items-center space-x-6">
        {icons.map((Icon, index) => (
          <SocialIcon key={index} Icon={Icon} />
        ))}
      </div>
    </div>
  );
};

export default LandingFooter;
