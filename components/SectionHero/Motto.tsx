export const Motto = () => {
  return (
    <div
      className="absolute top-0 right-[20px] flex flex-col text-[37px] font-thin leading-[normal] uppercase ml-[auto]
    md:static md:h-[88px] md:text-[66px] md:mb-[56px]
    lg:h-[123px] lg:text-[98px] lg:mb-[181px]"
    >
      <p
        className="w-[118px] tracking-[1.665px]
        md:w-[230px] md:tracking-[8.71px] 
        lg:w-[305px] lg:tracking-[0px]
      "
      >
        <span
          className="font-medium
        lg:mr-[8px]"
        >
          7
        </span>
        days
      </p>
      <p
        className="w-[113px] mx-[auto] text-[12px] font-light tracking-[9.48px]
       md:absolute md:top-[71px] md:right-[3px] md:w-[221px] md:text-[14px] md:tracking-[25.9px]
       lg:text-[16px] lg:tracking-[36.48px] lg:top-[104px] lg:right-[82px]"
      >
        journey
      </p>
    </div>
  );
};
