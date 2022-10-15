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
      <a className="flex items-center space-x-3">
        <p>{link}</p>
        {Icon && <Icon />}
      </a>
    </Link>
  );
};

export default NavLink;
