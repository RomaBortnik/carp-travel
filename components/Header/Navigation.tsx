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
      <ul className="flex gap-12">
        {navList.map(({ name, title }) => (
          <a key={name} className="cursor-pointer" href={`#${name}`}>
            {title}
          </a>
        ))}
      </ul>
    </nav>
  );
};
