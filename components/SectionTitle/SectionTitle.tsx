interface Props {
  text: string;
  accent: string;
}

export const SectionTitle: React.FC<Props> = ({ text, accent }) => {
  return (
    <h2
      className="uppercase font-thin text-[40px] leading-[56px] tracking-[-1.6px]
    md:text-[67px] md:leading-normal md:tracking-[-2.68px]
    lg:text-[98px] lg:tracking-[-3.92px]"
    >
      {text} <span className="font-medium">{accent}</span>
    </h2>
  );
};
