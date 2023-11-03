import { featureList } from "@/helpers/careerData";

export const CareerFeatureList: React.FC = () => {
  return (
    <ul
      className="w-[181px]
    md:w-[221px]
    lg:w-fit"
    >
      {featureList.map(({ id, title, description }) => (
        <li
          key={id}
          className="text-right mb-[16px] leading-[20px]
        lg:leading-[24px] lg:flex lg:gap-[24px] lg:items-baseline"
        >
          <h4
            className="text-[14px] mb-[8px]
          md:text-[16px]
          lg:md:text-[18px] lg:mb-0 lg:w-[293px]"
          >
            {title}
          </h4>
          <p
            className="text-[12px] font-extralight
          lg:w-[285px] lg:text-left"
          >
            {description}
          </p>
        </li>
      ))}
    </ul>
  );
};
