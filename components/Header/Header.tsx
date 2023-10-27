import Image from "next/image";
import { Navigation } from "./Navigation";

import logo from "../../public/assets/icons/logo.svg";

export const Header = () => {
  return (
    <header className="flex items-center justify-between pt-6">
      <Image src={logo} width={61} height={35} alt="Logo" />
      {<Navigation />}
    </header>
  );
};
