import { useState } from "react";
import image from "../assets/optimum.webp";
import { ExpCard } from "../components/Card";
import { useInView } from "react-intersection-observer";
export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px",
  });

  const [selectedExp, setSelectedExp] = useState(null);

  const handleClick = (index) => {
    setSelectedExp(selectedExp === index ? null : index);
  };

  const exp = [
    {
      position: "Software Engineer",
      location: "Thapagaun, Kathmandu",
      office: "Optimum Futurist Pvt. Ltd.",
      date: "July 2023 - Jan 2024",
      office_site: "optimumfuturist.com",
      link: "https://optimumfuturist.com/",
      description: [
        "Experienced with creating UI using React.JS",
        "Building RESTful APIs using Sails.JS, MySQL, and Sequelize",
      ],
      skills: ["JavaScript", "React.JS", "Sails.JS"],
      logo: image,
    },
    {
      position: "Software Engineer Intern",
      location: "Thapagaun, Kathmandu",
      office: "Optimum Futurist Pvt. Ltd.",
      date: "April 2023 - July 2023",
      office_site: "optimumfuturist.com",
      link: "https://optimumfuturist.com/",
      description: [
        "Learned ReactJS core concepts and created different web application.",
        "Building RESTful APIs using FastifyJS, PostgreSQL, and Sequelize.",
        "Authentication and authorization with sessions, JWT, and OAuth2.",
      ],
      skills: ["JavaScript", "React.JS", "Bootstrap"],
      logo: image,
    },
  ];

  return (
    <>
      <div
        id="experience"
        className="text-lg h-min bg-[#24242E] flex flex-col items-center text-white px-6 md:px-24 lg:px-0 xxl:px-0"
      >
        <div ref={ref} className={`slide-in ${inView ? "visible" : ""}`}>
          <h1 className="xxs:text-4xl sm:text-6xl xxs:mt-16 md:mt-28 font-semibold tracking-wider whitespace-pre-line text-center ">
            Experience
          </h1>
          <div className="mt-16 flex flex-col justify-center w-4xl">
            {exp.map((item, index) => (
              <ExpCard
                key={index}
                item={item}
                handleClick={() => handleClick(index)}
                showModal={selectedExp === index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
