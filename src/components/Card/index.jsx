import PropTypes from "prop-types";
import { IoLogoGithub, IoMdArrowRoundForward } from "react-icons/io";
export const ExpertiseCard = ({ icon: Icon, title, description, skills }) => {
  return (
    <div className="max-w-md mx-auto bg-transparent shadow-lg rounded-lg overflow-hidden border border-white hover:scale-105">
      <div className="px-6 py-4">
        <div className="flex gap-2 items-center font-semibold text-3xl mb-2 ">
          <Icon />
          {title}
        </div>
        <p className="text-white text-base">{description}</p>
      </div>

      <div className="px-6 py-4">
        <h3 className="font-semibold mb-2">Skills</h3>
        <ul className="flex flex-wrap">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="mr-2 mb-2 bg-slate-700 py-1 px-2 rounded"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const SkillCard = ({ skill, icon: Icon }) => {
  return (
    <div className="text-xl xxs:gap-1 md:gap-2 flex items-center justify-center bg-transparent xxs:p-4 md:p-6 rounded-lg shadow-md border border-white group hover:scale-105">
      <h3 className=" font-semibold">{skill}</h3>

      <div>
        <Icon className="  duration-200  group-hover:rotate-180" />
      </div>
    </div>
  );
};

export const WorkCard = ({ title, description, image, link }) => {
  return (
    <>
      <div className="bg-[#201F23] bg-opacity-60 p-6 rounded-lg shadow-md group md:odd:mb-10 md:even:mt-10">
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className=" h-80 object-cover mb-4 rounded-lg group-hover:scale-110 "
          />
        </div>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="before:opacity-100 after:opacity-0">{description}</p>

        <p className="opacity-0 group-hover:opacity-100">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-semibold text-purple-600"
          >
            <IoLogoGithub />
            See Project <IoMdArrowRoundForward />
          </a>
        </p>
      </div>
    </>
  );
};

WorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

SkillCard.propTypes = {
  skill: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

ExpertiseCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
