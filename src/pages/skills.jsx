import { ExpertiseCard, SkillCard } from "../components/Card";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import image from "../assets/skills-bg.webp";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandPython,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandBootstrap,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandGithub,
} from "react-icons/tb";
import { DiPostgresql } from "react-icons/di";
export default function Skills() {
  const skills = [
    {
      title: "HTML",
      icon: TbBrandHtml5,
    },
    {
      title: "CSS",
      icon: TbBrandCss3,
    },
    {
      title: "JavaScript",
      icon: TbBrandJavascript,
    },
    {
      title: "Python",
      icon: TbBrandPython,
    },
    {
      title: "React",
      icon: TbBrandReact,
    },
    {
      title: "TailwindCSS",
      icon: TbBrandTailwind,
    },
    {
      title: "Bootstrap",
      icon: TbBrandBootstrap,
    },
    {
      title: "NodeJS",
      icon: FaNodeJs,
    },
    {
      title: "MongoDB",
      icon: TbBrandMongodb,
    },
    {
      title: "SQL",
      icon: TbBrandMysql,
    },
    {
      title: "Postgres",
      icon: DiPostgresql,
    },
    {
      title: "Github",
      icon: TbBrandGithub,
    },
  ];
  const expertise = [
    {
      icon: FaReact,
      title: "Front End Dev",
      description:
        "Skilled in creating interactive web interfaces using HTML, CSS, JavaScript, React.js, Bootstrap, and Tailwind CSS.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.JS",
        "Bootstrap",
        "Tailwind",
      ],
    },
    {
      icon: FaNodeJs,
      title: "Back End Dev",
      description:
        "Skilled in Node.js, MongoDB, SQL, and Postgres for building robust server-side applications and RESTful APIs.",
      skills: ["Node.JS", "MongoDB", "SQL", "Postgres"],
    },
    {
      icon: RiFlutterFill,
      title: "Flutter Dev",
      description:
        "Skilled in developing mobile apps and cross-platform solutions using the Flutter framework.",
      skills: ["Flutter", "Android", "iOS"],
    },
  ];

  return (
    <>
      <div className="h-screen bg-[#24242E] flex flex-col items-center text-white">
        <h1 className="text-6xl xxs:mt-16 md:mt-32 font-semibold tracking-wider">
          My Expertise
        </h1>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-16">
          {expertise.map((item, index) => (
            <ExpertiseCard
              icon={item.icon}
              key={index}
              title={item.title}
              description={item.description}
              skills={item.skills}
            />
          ))}
          <img
            src={image}
            alt="image"
            className="absolute top-96 inset-0 m-auto opacity-10 z-0"
          />
        </div>

        <h1 className="text-6xl xxs:mt-16 md:mt-12 font-semibold tracking-wider">
          My Skills
        </h1>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 z-20 justify-center">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill.title} icon={skill.icon} />
          ))}
        </div>
      </div>
    </>
  );
}
