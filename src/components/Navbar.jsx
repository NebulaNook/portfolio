import { BiCodeAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="w-full bg-white top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-start px-4 py-4">
        {/* Logo */}
        <div className="text-green-500 text-4xl">
          <BiCodeAlt />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
