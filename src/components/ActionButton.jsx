/* eslint-disable react/prop-types */
const ActionButton = ({ title, onClick, customClass, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`inline-block cursor-pointer font-medium text-center transition-all duration-300 border rounded ${customClass}`}
    >
      {title}
    </button>
  );
};

export default ActionButton;
