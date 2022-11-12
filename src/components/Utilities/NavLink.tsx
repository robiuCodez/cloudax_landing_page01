import Link from "next/link";
import { IconType } from "react-icons";

interface INavLink {
  link: string;
  route: string;
  Icon?: IconType;
}

const NavLink = ({ link, route, Icon }: INavLink) => {
  return (
    <Link href={route}>
      <a className="flex hover:border-b-2 hover:border-bottom-gray-50 items-center space-x-3 mb-3">
        <p className="">{link}</p>
        {Icon && <Icon />}
      </a>
    </Link>
  );
};

export default NavLink;
