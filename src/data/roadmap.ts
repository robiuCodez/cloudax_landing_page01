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
    title: "Ideation",
    points: ["Ideation", "Team Formation", "Market survey and analysis"],
    timeline: {
      phase: "Phase 1",
      month: "June",
    },
    position: "right",
  },
  {
    Icon: IoMegaphoneSharp,
    title: "Ideation",
    points: ["Ideation", "Team Formation", "Market survey and analysis"],
    timeline: {
      phase: "Phase 1",
      month: "June",
    },
    position: "left",
  },
  {
    Icon: VscRocket,
    title: "Ideation",
    points: ["Ideation", "Team Formation", "Market survey and analysis"],
    timeline: {
      phase: "Phase 1",
      month: "June",
    },
    position: "right",
  },
];
