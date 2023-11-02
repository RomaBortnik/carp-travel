import { SectionTitle } from "../SectionTitle/SectionTitle";
import { ContactsForm } from "./ContactsForm";
import { Email } from "./Email";
import { Number } from "./Number";
import { SocialNetworks } from "./SocialNetworks";

export const SectionContacts = () => {
  return (
    <section id="contacts" className="section section-contacts">
      <div className="container">
        <SectionTitle text="contact" accent="us" />
        <div className="lg:flex lg:gap-[231px] lg:mt-[71px]">
          <div
            className="mt-[36px] mb-[12px]
        md:flex md:gap-[90px] md:mb-[64px]
        lg:w-[311px] lg:flex-col lg:ml-[107px] lg:gap-[124px] lg:my-0"
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
          <ContactsForm />
        </div>
      </div>
    </section>
  );
};
