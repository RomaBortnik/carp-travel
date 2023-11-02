import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Email } from "./Email";
import { Number } from "./Number";
import { SocialNetworks } from "./SocialNetworks";

export const SectionContacts = () => {
  return (
    <section id="contacts" className="section section-contacts">
      <div className="container">
        <SectionTitle text="contact" accent="us" />
        <div
          className="mt-[36px] 
        md:flex md:gap-[90px] 
        lg:w-[311px] lg:flex-col lg:mt-[71px] lg:ml-[107px] lg:gap-[124px]"
        >
          <div
            className="md:flex md:flex-col md:justify-between
          lg:gap-[64px]"
          >
            <Number />
            <Email />
          </div>
          <SocialNetworks />
        </div>
      </div>
    </section>
  );
};
