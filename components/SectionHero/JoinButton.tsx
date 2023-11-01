import Image from "next/image";
import SvgLeftMobile from "../../public/assets/icons/1svgFrame-mobile.svg";

export const JoinButton: React.FC = () => {
  return (
    <>
      <a
        className="relative join-btn flex justify-center items-center w-full h-[53px] text-[18px] leading-[48px] font-bold uppercase mx-[auto] bg-[#ffffff19]
        before:content-['a'] before:absolute before:top-0 before:left-0 before:h-full before:text-transparent before:bg-cover before:bg-[url('/assets/icons/1svgFrame-mobile.svg')]
        after:content-['a'] after:absolute after:top-0 after:right-0 after:h-full after:text-transparent after:bg-cover after:bg-right after:bg-[url('/assets/icons/2svgFrame-mobile.svg')]
        md:h-[50px] md:before:bg-[url('/assets/icons/1svgFrame-tablet.svg')] md:after:bg-[url('/assets/icons/2svgFrame-tablet.svg')]
        lg:before:bg-[url('/assets/icons/1svgFrame-desktop.svg')] lg:after:bg-[url('/assets/icons/2svgFrame-desktop.svg')]"
        href="#contacts"
      >
        Join now
      </a>
    </>
  );
};