import PropTypes from "prop-types";
export function HomePageButton({ text, bgColor, children }) {
  return (
    <button
      className={`${bgColor} hover:scale-105 rounded-xl p-1 px-3 me-3 text-lg font-semibold flex items-center`}
    >
      {text}
      {children}
    </button>
  );
}

HomePageButton.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.element,
};
