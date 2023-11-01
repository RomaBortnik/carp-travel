"use client";

import { useEffect, useState } from "react";
import { MenuButton } from "./MenuButton";
import { MenuModal } from "./MenuModal";
import { NavList } from "./NavList";

export const Navigation = () => {
  const [screenWidth] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleScreenWidth);
    return () => window.removeEventListener("resize", handleScreenWidth);
  }, []);

  const handleScreenWidth = () => {
    if (window.innerWidth > 767) {
      document.body.classList.remove("menu-open");
      setIsMenuOpen(false);
    }
  };

  const handleToggleMenu: () => void = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-open");
  };

  return (
    <>
      <MenuButton handleToggleMenu={handleToggleMenu}>Menu</MenuButton>
      <nav
        className="hidden 
      md:block"
      >
        <NavList />
      </nav>

      <MenuModal
        isMenuOpen={isMenuOpen}
        handleToggleMenu={handleToggleMenu}
      ></MenuModal>
    </>
  );
};
