import PropTypes from "prop-types";

function ContactInfo({ icon, title, contact, href }) {
  return (
    <div className="hover:scale-105 flex items-center gap-4  group w-content">
      {icon}
      <div>
        <h4 className="font-semibold">{title}</h4>
        <a
          className="hover:underline hover:text-purple-600 text-gray-400 "
          href={href}
        >
          {contact}
        </a>
      </div>
    </div>
  );
}

ContactInfo.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default ContactInfo;
