import Link from "next/link";
import { navList } from "@/helpers/navData";

interface Props {
  handleToggleMenu?: () => void;
}

export const NavList: React.FC<Props> = ({ handleToggleMenu }: Props) => {
  return (
    <ul
      className="flex flex-col gap-[48px] font-normal text-[18px] tracking-[1.8px]
      md:flex md:flex-row md:gap-[24px] md:text-[14px] md:leading-[normal] md:tracking-[1.4px]
      lg:gap-[56px]"
    >
      {navList.map(({ name, title }) => (
        <li
          onClick={handleToggleMenu}
          key={name}
          className="text-center leading-[normal] cursor-pointer hover:opacity-50 focus:opacity-50 transition-opacity
          "
        >
          <Link href={`#${name}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
