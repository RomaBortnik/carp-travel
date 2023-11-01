import { Description } from "./Description";
import { JoinButton } from "./JoinButton";
import { LocationsList } from "./LocationsList";
import { Motto } from "./Motto";
import { Title } from "./Title";

export const SectionHero = () => {
  return (
    <section
      id="hero"
      className="section section-hero pt-[105px] 
      md:pt-[122px] 
      lg:pt-[106px]"
    >
      <div
        className="relative container pt-[76px]
      md:flex gap-[48px]"
      >
        <div
          className="mb-[24px]
        md:mb-0"
        >
          <Title />
          <LocationsList />
        </div>
        <div className="md:relative md:w-[230px]">
          <Motto />
          <Description />
          <JoinButton />
        </div>
      </div>
    </section>
  );
};
