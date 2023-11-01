import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  handleToggleMenu: () => void;
}

export const MenuButton: React.FC<Props> = ({
  children,
  handleToggleMenu,
}: Props) => {
  return (
    <button
      type="button"
      name="toggle-menu"
      aria-label="toggle-menu"
      onClick={handleToggleMenu}
    >
      {children}
    </button>
  );
};
