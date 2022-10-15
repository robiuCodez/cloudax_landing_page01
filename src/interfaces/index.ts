import { IconType } from "react-icons";

export interface INavLink {
  link: string;
  route: string;
  Icon?: IconType;
}

export interface IButton {
  IconRight?: IconType;
  text: string;
  IconLeft?: IconType;
  outline?: boolean;
}

export interface ISocialIcon {
  Icon: IconType;
  filled?: boolean
}

export interface IWhyCard {
  Icon: IconType;
  title: string;
  text: string;
}

export interface IEcoCard {
  title: string;
  text: string;
  imageSrc: string;
}

export interface ITeam {
  imageSrc: string;
  name: string;
  role: string;
  twitterUrl?: string;
  linkedInUrl?: string;
}

export interface IBlogCard {
  imageSrc: string
  title: string
  date: string
}

export interface IFaqData {
  summary: string
  text: string
}

export interface ITree {
    left: boolean
    h1: string
    p: string
    icon: string
    image: string
}

export interface IJoinData {
  title: string
  text: string
  imageSrc: string
}

export interface IRoadmap {
  Icon: IconType
  title: string
  points: string[]
  timeline: {
    phase: string
    month: string
  }
  position: string
}