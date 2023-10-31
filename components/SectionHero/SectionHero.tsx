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
      <div className="relative container pt-[76px]">
        <div>
          <Title />
          <LocationsList />
        </div>
        <div>
          <Motto />
          <Description />
          <JoinButton />
        </div>
      </div>
    </section>
  );
};
