import PropTypes from "prop-types";

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
    <div className="text-xl gap-2 flex items-center justify-center bg-transparent p-6 rounded-lg shadow-md border border-white group hover:scale-105">
      <h3 className=" font-semibold">{skill}</h3>
      <div>
        <Icon className="  duration-200  group-hover:rotate-180" />
      </div>
    </div>
  );
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
