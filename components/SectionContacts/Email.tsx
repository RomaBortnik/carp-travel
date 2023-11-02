import Link from "next/link";

export const Email: React.FC = () => {
  return (
    <div
      className="flex items-center gap-[19px] mb-[24px] ml-[16px]
    md:mb-0
    lg:ml-0"
    >
      <Link
        className="text-[14px] leading-[24px] hover:opacity-50 focus:opacity-50 transition-opacity
        md:text-[16px]
        lg:text-[18px]"
        href="mailto:support@carptravel.com"
        aria-label="email"
      >
        support@carptravel.com
      </Link>
      <p
        className="text-[12px] font-extralight leading-[20px]
      lg:leading-[24px]"
      >
        Email
      </p>
    </div>
  );
};
