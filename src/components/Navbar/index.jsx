import { useEffect, useState } from "react";
import logo from "../../assets/logo1.png";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { BiPaperPlane } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen((prev) => !prev);
  };

  // const closeSidebar = () => {
  //   setOpen(false);
  // };

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
      className={`px-4 sm:py-3 flex align-middle fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "bg-slate-900 opacity-70 " : "sm:bg-transparent"
      }`}
    >
      <div>
        <img src={logo} alt="logo" className="xxs:my-3 md:my-0 h-11" />
      </div>

      {!open && (
        <FaHamburger
          className=" xxs:my-3 md:my-0 ms-auto text-white sm:hidden"
          size={35}
          onClick={toggleNavbar}
        />
      )}

      {open && (
        <div
          className={` fixed  
           z-10 h-screen  bg-slate-900 opacity-90 flex items-center mx-auto font-semibold text-lg text-white right-0 px-3 w-1/2 transition-all duration-1000 ease-in-out shadow-lg
        `}
        >
          <div className="absolute top-0 right-0 p-3 ">
            <IoMdClose
              className="text-red font-bold "
              size={24}
              onClick={toggleNavbar}
            />
          </div>

          <ul className="flex justify-center xxs:flex-col xxs: sm:flex-row text-purple-400  transition-all duration-1000 ease-in-out shadow-lg ">
            <NavItem
              href="#home"
              icon={<AiOutlineHome size={21} />}
              text="Home"
            />
            <NavItem href="#skills" icon={<VscTools />} text="Skills" />
            <NavItem
              href="#work"
              icon={<MdWorkOutline size={21} />}
              text="Work"
            />
            <NavItem
              href="#experience"
              icon={<BsStars size={21} />}
              text="Experience"
            />
            <NavItem
              href="#contact"
              icon={<BiPaperPlane size={21} />}
              text="Contact"
            />
          </ul>
        </div>
      )}

      <div
        className={`hidden sm:flex items-center mx-auto font-semibold text-lg 
          text-white
        `}
      >
        <ul className="flex justify-center">
          <NavItem href="#home" text="Home" />
          <NavItem href="#skills" text="Skills" />
          <NavItem href="#work" text="Work" />
          <NavItem href="#experience" text="Experience" />
          <NavItem href="#contact" text="Contact" />
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ href, icon, text }) {
  return (
    <li className="mr-4 mb-3">
      <a href={href} className="flex items-center hover:text-purple-400 gap-2">
        {icon}
        <span>{text}</span>
      </a>
    </li>
  );
}

NavItem.propTypes = {
  icon: PropTypes.element,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
