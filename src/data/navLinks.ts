import { INavLink } from "../interfaces";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";

export const navLinks: INavLink[] = [
  {
    link: "About",
    route: "#about",
  },
  {
    link: "Token Info",
    route: "#token-info",
  },
  {
    link: "Ecosystem",
    route: "#ecosystem",
  },
  {
    link: "Team",
    route: "#team",
  },
  {
    link: "FAQs",
    route: "#frequently-asked-questions",
  },
  {
    link: "Community",
    route: "#community",
    Icon: HiOutlineChevronDown,
  },
];
