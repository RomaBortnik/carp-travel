import { MainDescription } from "@/helpers/careerData";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { CareerDescription } from "./CareerDescription";
import { CareerFeatureList } from "./CareerFeatureList";
import { CarrerForm } from "./CareerForm";
import { CareerQuestionText } from "./CarrerQuestionText";

export const SectionCareer = () => {
  return (
    <>
      <section id="career" className="section section-career">
        <div className="container">
          <div
            className="md:flex md:justify-between md:mb-[5px]
        lg:mb-[24px]"
          >
            <SectionTitle text="choose" accent="us" />
            <CareerDescription
              text={MainDescription}
              extraStyles="md:w-[221px] mb-[36px] mt-[24px] md:m-0 md:mt-[8px] md:text-justify"
            />
          </div>
          <CareerQuestionText />
          <CareerFeatureList />
        </div>
      </section>
      <section className="section section-career">
        <div className="container">
          <CarrerForm />
        </div>
      </section>
    </>
  );
};
