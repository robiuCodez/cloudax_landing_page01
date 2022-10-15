import { ITeam } from "@/src/interfaces";
import Image from "next/image";
import { SiTwitter, SiLinkedin } from "react-icons/si";

const TeamCard = ({ imageSrc, name, role, linkedInUrl, twitterUrl }: ITeam) => {
  return (
    <div className="space-y-2">
      <Image
        src={imageSrc}
        alt=""
        width={300}
        height={300}
        className="bg-gray-50 rounded-full"
      />
      <h3>{name}</h3>
      <h5>{role}</h5>

      <div className="flex items-center space-x-3">
        <SiTwitter />
        <SiLinkedin />
      </div>
    </div>
  );
};

export default TeamCard;
