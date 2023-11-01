import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./Navigation";

import logo from "../../public/assets/icons/logo.svg";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full pt-9 md:pt-[25px] lg:pt-6">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src={logo}
            width={61}
            height={33}
            alt="CarpTravel logo"
            aria-label="CarpTravel logo"
            priority
          />
        </Link>

        <Navigation />
      </div>
    </header>
  );
};
