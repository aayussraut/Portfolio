import image from "../assets/down.gif";
import { HomePageButton } from "../components/Button";
import { AiOutlineDownload } from "react-icons/ai";

export default function Homepage() {
  return (
    <div className="h-screen flex flex-col justify-center  text-white">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className=" font-semibold xxs:text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider">
          AAYUSH RAUT
        </h1>

        <h4 className=" font-semibold xxs:text-xs sm:text-sm md:text-xl lg:text-3xl tracking-widest whitespace-pre-line text-center animated">
          SOFTWARE ENGINEER, FRONTEND & BACKEND DEVELOPER
        </h4>

        <div className="mt-4 flex animated">
          <HomePageButton text="Hire Me" bgColor="bg-purple-700" />
          <HomePageButton text="Download CV" bgColor="border ">
            <AiOutlineDownload className="ms-2 download-button" />
          </HomePageButton>
        </div>
      </div>

      <div className="flex justify-center flex-grow mb-4">
        <img className="h-16 w-16 " src={image} />
      </div>
    </div>
  );
}
