const navList = ["About", "Services", "Career", "Gallery", "Contacts"];

export const Navigation = () => {
  return (
    <nav>
      {navList.map((el, index) => (
        <a key={index}>{el}</a>
      ))}
    </nav>
  );
};
