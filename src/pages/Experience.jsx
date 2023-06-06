import { useState } from "react";
import image from "../assets/optimum.webp";
import { ExpCard } from "../components/Card";

export default function Experience() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };

  const exp = [
    {
      position: "Software Engineer",
      location: "Thapagaun, Kathmandu",
      office: "Optimum Futurist Pvt. Ltd.",
      date: "April 2023 - Present",
      office_site: "optimumfuturist.com",
      link: "https://optimumfuturist.com/",
      description: "Developing front end applications using React.js",
      skills: ["JavaScript", "React.js", "Bootstrap"],
      logo: image,
    },
  ];

  return (
    <>
      <div
        id="experience"
        className="text-lg min-h-screen max-h-min bg-[#24242E] flex flex-col items-center text-white"
      >
        <h1 className="text-6xl xxs:mt-16 md:mt-32 font-semibold tracking-wider ">
          Experience
        </h1>
        <div className="mt-16 flex flex-col justify-center">
          {exp.map((item, index) => (
            <ExpCard
              key={index}
              item={item}
              handleClick={handleClick}
              showModal={showModal}
            />
          ))}
        </div>
      </div>
    </>
  );
}
