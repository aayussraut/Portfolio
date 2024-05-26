import { ExpertiseCard, SkillCard } from "../components/Card";
import { FaReact, FaNodeJs } from "react-icons/fa";
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
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px",
  });

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
        "Skilled in creating interactive web interfaces using HTML, CSS, JavaScript, React.js, Next,js, Bootstrap, and Tailwind CSS.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.JS",
        "Next.JS",
        "Bootstrap",
        "Tailwind",
      ],
    },
    {
      icon: FaNodeJs,
      title: "Back End Dev",
      description:
        "Skilled in Node.js, MongoDB, SQL, and Postgres for building robust server-side applications and RESTful APIs.",
      skills: ["Node.JS", "MongoDB", "SQL", "Postgres", "Prisma"],
    },
  ];

  return (
    <>
      <div
        id="skills"
        className=" min-h-screen max:h-min bg-[#24242E] flex flex-col items-center text-white px-5 md:px-24 xl:px-12 2xl:px-0"
      >
        <div ref={ref} className={`slide-in ${inView ? "visible" : ""}`}>
          <h1 className=" xxs:text-4xl sm:text-6xl xxs:mt-16 md:mt-28 font-semibold tracking-wider  whitespace-pre-line text-center ">
            My Expertise
          </h1>

          <div className="flex flex-col justify-center items-center mt-16 w-full">
            <div className="relative flex flex-wrap gap-4">
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
          </div>

          <h1 className="xxs:text-4xl sm:text-6xl xxs:mt-16 md:mt-28 font-semibold tracking-wider whitespace-pre-line text-center ">
            My Skills
          </h1>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 z-20 justify-center">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill.title} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
