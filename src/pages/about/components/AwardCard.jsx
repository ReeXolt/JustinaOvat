import icon from "../../../assets/images/award.png";
import propTypes from "prop-types";
export const AwardCard = ({
  date,
  title,
  text,
  award,
  location,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className=" relative border rounded-2xl bg-black p-5 text-white h-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex justify-between items-center pb-4">
        <div className="bg-[rgba(255,255,255,0.15)] p-3">
          <img src={icon} alt="icon" loading="lazy" />
        </div>
        <p className="text-xs text-gray-50 font-normal">{date}</p>
      </div>

      <div className="pb-8 h-[65%]">
        <p className="text-sm text-gray-50 font-normal py-3">{title}</p>
        <p className="text-2xl font-bold text-white ">{award}</p>
        <p className="text-xs font-medium text-white leading-5 pt-2">{text}</p>
      </div>

      <div className="flex justify-end">
        <p className="text-gray-50 text-sm font-normal">{location}</p>
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-white bg-opacity-30 rounded-2xl flex items-center justify-center"></div>
      )}
    </div>
  );
};

AwardCard.propTypes = {
  date: propTypes.string,
  title: propTypes.string,
  award: propTypes.string,
  text: propTypes.string,
  location: propTypes.string,
  isHovered: propTypes.bool,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
};
