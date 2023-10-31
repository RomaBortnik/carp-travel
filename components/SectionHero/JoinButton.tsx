import Image from "next/image";
import SvgLeftMobile from "../../public/assets/icons/1svgFrame-mobile.svg";

export const JoinButton: React.FC = () => {
  return (
    <>
      <a
        className="relative join-btn flex justify-center items-center w-full h-[53px] text-[18px] leading-[48px] font-bold uppercase mx-[auto] bg-[#ffffff19]"
        href="#contacts"
      >
        Join now
      </a>
    </>
  );
};
