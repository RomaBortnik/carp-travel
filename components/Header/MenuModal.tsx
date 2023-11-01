import { MenuButton } from "./MenuButton";
import { NavList } from "./NavList";

interface Props {
  isMenuOpen: boolean;
  handleToggleMenu: () => void;
}

export const MenuModal: React.FC<Props> = ({
  isMenuOpen,
  handleToggleMenu,
}: Props) => {
  return (
    <div
      className={
        isMenuOpen
          ? `menu-container open absolute top-0 left-0  w-screen h-screen transition-opacity duration-300
      md:hidden`
          : `menu-container absolute top-0 left-0  w-screen h-screen transition-opacity duration-300
      md:hidden`
      }
    >
      <nav className="relative container h-full flex flex-col justify-center items-center">
        <div className="absolute top-[43px] right-[20px]">
          <MenuButton handleToggleMenu={handleToggleMenu}>Close</MenuButton>
        </div>
        <NavList handleToggleMenu={handleToggleMenu} />
      </nav>
    </div>
  );
};
