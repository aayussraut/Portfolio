import image from "../assets/down.gif";
import { HomePageButton } from "../components/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Moon from "../assets/moon.png";

export default function Homepage() {
  return (
    <div
      id="home"
      className="h-screen flex flex-col justify-center items-center text-white"
    >
      <div className="flex flex-col justify-center items-center h-full relative">
        <img
          src={Moon}
          className="h-10 xs:h-16  md:h-20 xl:h-28 opacity-80 absolute top-[20%] end-[10%] md:top-[13%] xs:end-[15%] md:end-[25%] lg:end-[30%] moon-img animated"
        />
        <h1 className="w-full text-center font-semibold xxs:text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider">
          AAYUSH RAUT
        </h1>

        <h4 className=" font-semibold xxs:text-xs sm:text-sm md:text-xl lg:text-3xl tracking-widest whitespace-pre-line text-center animated ">
          SOFTWARE ENGINEER, FRONTEND & BACKEND DEVELOPER
        </h4>
        <div className="flex gap-4 mt-4 animated">
          <a
            href="https://github.com/aayussraut"
            rel="noreferrer"
            className="text-white hover:scale-105"
            target="_blank"
          >
            <FaGithub className="text-white text-2xl xs:text-3xl sm:text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/aayussraut/"
            rel="noreferrer"
            className="text-white hover:scale-105 "
            target="_blank"
          >
            <FaLinkedin className="text-white text-2xl xs:text-3xl sm:text-4xl" />
          </a>
          <a
            href="https://www.twitter.com/aayussraut/"
            rel="noreferrer"
            className="text-white hover:scale-105"
            target="_blank"
          >
            <FaXTwitter className="text-white text-2xl xs:text-3xl sm:text-4xl" />
          </a>
          <a
            href="https://www.instagram.com/aayussraut/"
            rel="noreferrer"
            className="text-white hover:scale-105"
            target="_blank"
          >
            <FaInstagram className="text-white text-2xl xs:text-3xl sm:text-4xl" />
          </a>
        </div>

        <div className="mt-4 flex animated">
          <HomePageButton text="Hire Me" bgColor="bg-purple-700" />
          <a
            href="/Aayush_CV.pdf"
            download="Aayush_CV"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <HomePageButton text="Download CV" bgColor="border ">
              <AiOutlineDownload className="ms-2 download-button" />
            </HomePageButton>
          </a>
        </div>
      </div>

      <div className="flex justify-center flex-grow mb-4">
        <a href="#skills">
          <img className="h-16 w-16 " src={image} />
        </a>
      </div>
    </div>
  );
}
