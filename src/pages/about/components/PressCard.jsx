import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import propTypes from "prop-types";
export const PressCard = ({ img, title, text, link, bgColor, textColor }) => {
  const shortText = text?.length > 30 ? text.substring(0, 200) + "..." : text;
  const shortHeading =
    title?.length > 10 ? title.substring(0, 38) + "..." : title;

  return (
    <div className={`${bgColor} ${textColor} rounded-sm p-4 border shadow-sm`}>
      <div>
        <img
          src={img}
          alt="img"
          className="object-cover w-full h-52"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-between ">
        <div className="h-40">
          <h1 className="text-base font-bold py-2">{shortHeading}</h1>
          <p className="text-sm font-normal text-justify leading-5 ">
            {shortText}
          </p>
        </div>

        <div className="flex justify-end">
          <Link to={link} target="_blank" rel="noopener noreferrer">
            <button
              className={`flex gap-2 items-center  px-4 py-2 font-semibold text-sm ${textColor} duration-500 transition-all ease-in-out `}
            >
              Read More
              <FaArrowRightLong color={bgColor} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

PressCard.propTypes = {
  id: propTypes.string,
  img: propTypes.string,
  title: propTypes.string,
  text: propTypes.string,
  link: propTypes.string,
  bgColor: propTypes.string,
  textColor: propTypes.string,
};
