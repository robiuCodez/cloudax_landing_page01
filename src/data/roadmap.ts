import { IRoadmap } from "../interfaces";
import { GiLightBulb } from "react-icons/gi";
import { MdOutlineGroups } from "react-icons/md";
import { VscRocket } from "react-icons/vsc";
import { IoMegaphoneSharp } from "react-icons/io5";

export const roadmap: IRoadmap[] = [
  {
    Icon: GiLightBulb,
    title: "Ideation",
    points: ["Ideation", "Team Formation", "Market survey and analysis"],
    timeline: {
      phase: "Phase 1",
      month: "June",
    },
    position: "left",
  },
  {
    Icon: MdOutlineGroups,
    title: "Community Growth",
    points: ["Pre-Launch Marketing", "Community Reach Initiative", "Growth Strategy"],
    timeline: {
      phase: "Phase 1",
      month: "August",
    },
    position: "right",
  },
  {
    Icon: IoMegaphoneSharp,
    title: "Development & Token Launch",
    points: ["Token Platform Launch", "Ecosystem Testnet", "Mainnet", "Token Presale", "Staking", "Partnerships", "Liquidity Pool"],
    timeline: {
      phase: "Phase 1",
      month: "September",
    },
    position: "left",
  },
  {
    Icon: VscRocket,
    title: "NFT Marketplace",
    points: ["NFT Marketplace Testnet", "Mainnet Launch", "Chain Bridge", "token Integrations", "NFT Launchpad"],
    timeline: {
      phase: "Phase 1",
      month: "October",
    },
    position: "right",
  },
];
