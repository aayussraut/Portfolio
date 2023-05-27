import { useEffect, useState } from "react";
import logo from "../../assets/logo1.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`px-4 py-3 flex align-middle fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "bg-slate-900 opacity-70 " : "bg-transparent"
      }`}
    >
      <div>
        <img src={logo} alt="logo" className="h-11" />
      </div>
      <div
        className={`flex items-center mx-auto font-semibold text-lg ${
          scrolled ? "text-white" : "text-white"
        }`}
      >
        <ul className="flex justify-center">
          <li className="mr-4">
            <a href="#" className=" hover:text-purple-400">
              Home
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className=" hover:text-purple-400">
              Skills
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className=" hover:text-purple-400">
              Work
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className=" hover:text-purple-400">
              Experience
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className=" hover:text-purple-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
