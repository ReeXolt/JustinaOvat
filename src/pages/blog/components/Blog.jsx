import { allblogs } from "../../../utils/data";
import { BlogCard } from "./BlogCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <section className="w-full bg-white text-black py-10">
      <div className="w-[90%] mx-auto ">
        <h1 className="text-left font-bold text-4xl pb-8 ">
          Popular Blog Posts
        </h1>

        <div className="">
          <Slider {...settings}>
            {allblogs.map((item) => (
              <BlogCard
                key={item.id}
                {...item}
                bgColor="bg-white"
                textColor="text-black"
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
