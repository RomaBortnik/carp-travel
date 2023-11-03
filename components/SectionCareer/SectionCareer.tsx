import { SectionTitle } from "../SectionTitle/SectionTitle";
import { CareerDescription } from "./CareerDescription";
import { CareerFeatureList } from "./CareerFeatureList";
import { CareerQuestionText } from "./CarrerQuestionText";

export const SectionCareer = () => {
  return (
    <section id="career" className="section section-career">
      <div className="container">
        <div
          className="md:flex md:justify-between md:mb-[5px]
        lg:mb-[24px]"
        >
          <SectionTitle text="choose" accent="us" />
          <CareerDescription />
        </div>
        <CareerQuestionText />
        <CareerFeatureList />
      </div>
    </section>
  );
};
