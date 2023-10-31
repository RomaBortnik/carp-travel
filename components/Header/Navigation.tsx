type NavLink = {
  name: string;
  title: string;
};

const navList: NavLink[] = [
  { name: "about", title: "About" },
  { name: "services", title: "Services" },
  { name: "career", title: "Career" },
  { name: "gallery", title: "Gallery" },
  { name: "contacts", title: "Contacts" },
];

export const Navigation = () => {
  return (
    <nav>
      <button
        type="button"
        name="toggle-menu"
        aria-label="toggle-menu"
        className="md:hidden"
      >
        Menu
      </button>
      <ul
        className="hidden 
      md:flex md:gap-[24px] md:text-[14px] md:tracking-[1.4px] md:leading-[normal] md:font-normal
      lg:gap-[56px]"
      >
        {navList.map(({ name, title }) => (
          <li key={name} className="cursor-pointer">
            <a href={`#${name}`}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
