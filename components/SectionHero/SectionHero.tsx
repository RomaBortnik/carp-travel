import { Description } from "./Description";
import { JoinButton } from "./JoinButton";
import { LocationsList } from "./LocationsList";
import { Motto } from "./Motto";
import { Title } from "./Title";

export const SectionHero: React.FC = () => {
  return (
    <section
      id="hero"
      className="section section-hero pt-[105px] 
      md:pt-[124px] 
      lg:pt-[106px] lg:bg-desktop"
    >
      <div
        className="relative container pt-[76px]
      md:flex md:justify-between md:pt-0
      "
      >
        <div
          className="mb-[24px]
        md:mb-0"
        >
          <Title />
          <LocationsList />
        </div>
        <div
          className="md:relative md:w-[230px]
        lg:w-[305px]"
        >
          <Motto />
          <Description />
          <JoinButton />
        </div>
      </div>
    </section>
  );
};
