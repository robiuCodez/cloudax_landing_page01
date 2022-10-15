import Image from "next/image";
import React from "react";
import { landingFooterIcons } from "../data/landingFooterIcons";
import { SocialIcon } from "./Utilities";

const Footer = () => {
  return (
    <footer className="bg-black px-10 py-5 text-gray-50 font-space w-full">
      <div className="flex items-center justify-center flex-col space-y-5 mb-20">
        <h3 className="font-bold text-5xl w-[500px] text-center">
          Join the Cloudax Community Today!
        </h3>
        <div className="flex items-center w-[500px] justify-between">
          {landingFooterIcons.map((info, index) => (
            <SocialIcon key={index} Icon={info.Icon} filled />
          ))}
        </div>
      </div>

      {/* footer light */}
      <div className="flex items-end justify-between bg-gray-900 bg-opacity-50 px-10 py-5 mx-10 rounded-3xl text-gray-300">
        <div className="flex flex-col items-start justify-start space-y-6">
          <Image
            src="/assets/cloudax_light.svg"
            width={170}
            height={28}
            alt=""
            className="place-items-start w-full text-start" 
          />
          <p>All rights reserved &reg; Cloudax 2022.</p>
        </div>

        <div className="flex items-center divide-x-2 gap-x-3 divide-gray-500">
          <p>Terms &amp; Conditions</p>
          <p className="pl-3">Privacy Policy</p>
          <p className="pl-3">Cookies Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
