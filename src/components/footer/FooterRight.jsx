const navLinks = ["HOME", "CATEGORIES", "ABOUT", "CONTACT"];

const FooterRight = () => {
  return (
    <ul className="flex gap-6 text-sm text-white mr-[90px]">
      {navLinks.map((link, i) => (
        <li key={i} className="cursor-pointer hover:underline ">
          {link}
        </li>
      ))}
    </ul>
  );
};

export default FooterRight;
