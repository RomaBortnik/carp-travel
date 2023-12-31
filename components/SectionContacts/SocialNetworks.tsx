import Link from "next/link";
import { socialNetworks } from "@/helpers/contactsData";

export const SocialNetworks: React.FC = () => {
  return (
    <div
      className="flex justify-end items-baseline gap-[20px] mb-[12px] mr-[16px]
    md:m-0
    lg:flex-row-reverse lg:justify-start lg:mr-[30px]"
    >
      <p
        className="text-[12px] font-extralight leading-[20px]
      lg:leading-[24px]"
      >
        Follow us
      </p>
      <ul>
        {socialNetworks.map(({ id, url, text }) => {
          return (
            <li
              key={id}
              className="text-[14px] leading-[24px] hover:opacity-50 focus:opacity-50 transition-opacity
            md:text-[16px]
            lg:text-[18px] lg:text-end"
            >
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={text}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
