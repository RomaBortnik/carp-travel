import Link from "next/link";
import { phones } from "@/helpers/contactsData";

export const Number: React.FC = () => {
  return (
    <div
      className="flex justify-end items-baseline gap-[20px] mb-[24px]
    md:m-0 md:ml-[34px]
    lg:ml-0"
    >
      <ul>
        {phones.map(({ id, number, text }) => {
          return (
            <li
              key={id}
              className="text-[14px] leading-[24px]
            md:text-[16px]
            lg:text-[18px]"
            >
              <Link href={`tel:${number}`} aria-label="phone">
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <p
        className="text-[12px] font-extralight leading-[20px]
      lg:leading-[24px]"
      >
        Phone number
      </p>
    </div>
  );
};
