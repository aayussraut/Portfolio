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
      date: "April 2023 - July 2023",
      office_site: "optimumfuturist.com",
      link: "https://optimumfuturist.com/",
      description: [
        "Experienced with ReactJS and its core concepts",
        "Building RESTful APIs using FastifyJS, PostgreSQL, and Sequelize",
        "Authentication and authorization with sessions, JWT, and OAuth2.",
      ],
      skills: ["JavaScript", "React.js", "Bootstrap"],
      logo: image,
    },
  ];

  return (
    <>
      <div
        id="experience"
        className="text-lg h-min bg-[#24242E] flex flex-col items-center text-white  "
      >
        <h1 className="xxs:text-4xl sm:text-6xl xxs:mt-16 md:mt-32 font-semibold tracking-wider ">
          Experience
        </h1>
        <div className="mt-16 flex flex-col justify-center w-4xl">
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
