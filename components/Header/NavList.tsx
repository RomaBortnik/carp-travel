import Link from "next/link";

interface Props {
  handleToggleMenu?: () => void;
}

type NavLink = {
  name: string;
  title: string;
};

const navList: NavLink[] = [
  { name: "about", title: "About" },
  { name: "services", title: "Services" },
  { name: "career", title: "Career" },
  { name: "gallery", title: "Gallery" },
  { name: "contacts", title: "Contacts" },
];

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
          className="text-center leading-[normal] cursor-pointer
          "
        >
          <Link href={`#${name}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
