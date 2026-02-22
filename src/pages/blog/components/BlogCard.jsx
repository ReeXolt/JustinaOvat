import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import propTypes from "prop-types";
export const BlogCard = ({
  id,
  img,
  title,
  text,
  date,
  bgColor,
  textColor,
}) => {
  const shortTitle = title.length > 30 ? title.substring(0, 37) + "..." : title;
  const shortText = text.length > 30 ? text.substring(0, 200) + "..." : text;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/details/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div
      className={`${bgColor} ${textColor} rounded-sm p-4 border-2 m-1 md:m-0  border-black shadow-sm`}
    >
      <div>
        <img
          src={img}
          alt="img"
          className="object-cover w-full h-52"
          loading="lazy"
        />
      </div>
      <div>
        <h1 className="text-base font-bold py-2">{shortTitle}</h1>
        <p className="text-sm font-normal  leading-5 h-20">{shortText}</p>

        <div className="flex items-center justify-between border-t-2 mt-10 ">
          <p className="text-sm ">{date}</p>
          <button
            onClick={handleClick}
            className={`flex gap-2 items-center px-4 py-2 font-semibold text-sm ${textColor} duration-500 transition-all ease-in-out `}
          >
            Read More
            <FaArrowRightLong color={bgColor} />
          </button>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  id: propTypes.string,
  img: propTypes.string,
  title: propTypes.string,
  text: propTypes.string,
  date: propTypes.string,
  bgColor: propTypes.string,
  textColor: propTypes.string,
};
