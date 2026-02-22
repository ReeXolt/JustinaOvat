import propTypes from "prop-types";

export const Button = ({ onClick, label, className, color }) => {
  const buttonClasses = ` font-bold rounded-full whitespace-nowrap ${color} ${className}`;

  return (
    <div>
      <button className={buttonClasses} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: propTypes.func,
  label: propTypes.string,
  className: propTypes.string,
  color: propTypes.string,
};
