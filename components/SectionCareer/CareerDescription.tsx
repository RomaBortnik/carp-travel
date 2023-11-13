interface Props {
  text: string;
  extraStyles?: string;
}

export const CareerDescription: React.FC<Props> = ({ text, extraStyles }) => {
  return (
    <p
      className={`w-[179px] text-[14px] font-extralight leading-[20px] ml-auto
    md:text-[13px] 
    lg:w-[293px] lg:text-[18px] lg:leading-[24px] ${extraStyles} `}
    >
      {text}
    </p>
  );
};
