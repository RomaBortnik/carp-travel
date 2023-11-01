"use client";

import { useEffect, useState } from "react";
import { MenuButton } from "./MenuButton";
import { MenuModal } from "./MenuModal";
import { NavList } from "./NavList";

export const Navigation = () => {
  const [screenWidth, setScreenWidth] = useState(() => window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!screenWidth) {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleScreenWidth);
    return () => window.removeEventListener("resize", handleScreenWidth);
  }, [screenWidth]);

  useEffect(() => {
    const menu = document.querySelector(".menu");
  }, []);

  const handleScreenWidth = () => {
    setScreenWidth(window.innerWidth);
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
      <nav>
        {screenWidth > 767 ? (
          <NavList />
        ) : (
          <MenuButton handleToggleMenu={handleToggleMenu}>Menu</MenuButton>
        )}
      </nav>

      <MenuModal
        isMenuOpen={isMenuOpen}
        handleToggleMenu={handleToggleMenu}
      ></MenuModal>
    </>
  );
};
