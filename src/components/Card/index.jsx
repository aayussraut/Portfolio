import PropTypes from "prop-types";
import {
  IoLogoGithub,
  IoMdArrowRoundForward,
  IoMdAdd,
  IoMdRemove,
} from "react-icons/io";
import { IoLocation, IoNavigateCircleOutline } from "react-icons/io5";
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
        <Icon className="  duration-700  group-hover:rotate-[360deg]" />
      </div>
    </div>
  );
};

export const WorkCard = ({ title, description, image, link }) => {
  return (
    <>
      <div className="bg-[#201F23] bg-opacity-60 p-6 rounded-lg shadow-md group">
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className="object-cover h-96 w-full mb-4 rounded-xl group-hover:scale-105 "
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

export const ExpCard = ({ item, handleClick, showModal }) => {
  return (
    <>
      <div
        onClick={handleClick}
        className="bg-purple-900 px-6 py-2 flex justify-between  "
      >
        <p className="xxs:text-sm xs:text-lg  font-semibold md:me-24">
          {item.position} @ {item.office}
        </p>

        <div className=" text-lg flex items-center font-semibold">
          <p className={`me-5  ${showModal ? "md:opacity-100" : "opacity-0"}`}>
            {item.date}
          </p>
          {!showModal && <IoMdAdd />}
          {showModal && <IoMdRemove />}
        </div>
      </div>

      {
        <div
          className={` flex items-center justify-between bg-[#241D41] mt-5 px-6 max-h-0 transition-all duration-500 overflow-hidden ${
            showModal ? "max-h-48" : "max-h-0"
          } `}
        >
          <div className="py-6">
            <div className="flex gap-2 items-center">
              <IoLocation size={25} className="text-purple-600" />
              <span className="xxs:text-sm xs:text-lg text-gray-400">
                {" "}
                {item.location}
              </span>
              <IoNavigateCircleOutline size={25} className="text-purple-600" />
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="xxs:text-sm xs:text-lg text-gray-400 hover:text-blue-400"
              >
                {item.office_site}
              </a>
            </div>

            <p className="xxs:text-sm xs:text-lg py-2 ">
              {item.description.map((desc, index) => (
                <li key={index} className="ps-3">
                  {desc}
                </li>
              ))}
            </p>

            <ul className="flex flex-wrap ps-2">
              {item.skills.map((skill, index) => (
                <li
                  key={index}
                  className="xxs:text-sm xs:text-lg mr-2 mb-2 bg-blue-900 py-1 px-2 rounded-full"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <img
              src={item.logo}
              alt="logo"
              className="opacity-0 xs:opacity-100 h-32 object-cover rounded-lg group-hover:scale-110 "
            />
          </div>
        </div>
      }
    </>
  );
};

ExpCard.propTypes = {
  item: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
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
