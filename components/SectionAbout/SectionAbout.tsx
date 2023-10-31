import { SectionTitle } from "../SectionTitle/SectionTitle";
import { ExtraDescription } from "./ExtraDescription";
import { MainDescription } from "./MainDescription";
import { Motto } from "./Motto";

export const SectionAbout = () => {
  return (
    <section id="about" className="section section-about">
      <div className="container">
        <div
          className="md:flex items-start md:gap-[72px] mb-[40px]
        md:mb-[64px]
        lg:gap-[24px] lg:mb-[72px]"
        >
          <SectionTitle text="who" accent="we are" />
          <MainDescription />
        </div>
        <div
          className="relative md:flex md:flex-row-reverse
        lg:flex-row-reverse"
        >
          <Motto />
          <ExtraDescription />
        </div>
      </div>
    </section>
  );
};
