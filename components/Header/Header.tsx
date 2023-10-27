import Image from "next/image";
import { Navigation } from "./Navigation";

import logo from "../../public/assets/icons/logo.svg";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 flex items-center justify-between w-full pt-9 md:pt-[25px] lg:pt-6">
      <Image src={logo} width={61} height={35} alt="Logo" />
      {<Navigation />}
    </header>
  );
};
