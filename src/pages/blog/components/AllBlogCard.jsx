import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";
export const AllBlogCard = ({ id, img, title, text, date }) => {
  const shortText = text.length > 30 ? text.substring(0, 100) + "..." : text;
  const shortTitle = title.length > 30 ? title.substring(0, 30) + "..." : title;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/details/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="relative rounded-2xl w-full cursor-pointer m-1 "
      onClick={handleClick}
    >
      <div>
        <img
          src={img}
          alt="blog_img"
          className="rounded-lg w-full"
          loading="lazy"
        />
      </div>
      <div className="absolute rounded-b-2xl border-2 border-black px-5  bottom-0 inset-x-0 h-1/2  md:h-[30%] bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg flex items-center justify-center">
        <div className=" text-white ">
          <h1 className="text-black font-bold text-base pb-2 hidden md:block">
            {title}
          </h1>
          <h1 className="text-black font-bold text-base pb-2 block md:hidden">
            {shortTitle}
          </h1>
          <p className="text-black text-sm font-normal">{shortText}</p>

          <div className="text-right text-black text-xs font-normal">
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
AllBlogCard.propTypes = {
  id: propTypes.string,
  img: propTypes.string,
  title: propTypes.string,
  text: propTypes.string,
  date: propTypes.string,
};
