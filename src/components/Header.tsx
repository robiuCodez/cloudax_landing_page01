import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "../data/navLinks";
import NavLink from "./Utilities/NavLink";

const Header = () => {
  return (
    <header className="bg-cloudax-blue bg-opacity-90 fixed inset-x-0 top-0 z-50 flex items-center w-full justify-between px-10 py-3 border-b-2 border-b-blue-600">
      {/* logo */}
      <div className="">
        <Image
          src="/assets/cloudax_light.svg"
          alt="Cloudax Logo"
          width={170}
          height={28}
        />
      </div>

      {/* navigation links */}
      <nav>
        <ul className="flex items-center space-x-6 text-gray-50">
          {navLinks.map((navLink, index) => (
            <NavLink key={index} {...navLink} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
