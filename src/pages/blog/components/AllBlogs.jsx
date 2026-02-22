import { useEffect, useState } from "react";
import { allblogs } from "../../../utils/data";
import { AllBlogCard } from "./AllBlogCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const AllBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedBlogs, setDisplayedBlogs] = useState([]);

  const blogsPerPage = 4;
  const totalPages = Math.ceil(allblogs.length / blogsPerPage);

  useEffect(() => {
    const start = (currentPage - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    setDisplayedBlogs(allblogs.slice(start, end));
  }, [currentPage]);

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
    <section className="bg-white text-black w-full py-10">
      <div className="w-[90%] mx-auto">
        <h1 className="text-left font-bold text-4xl pb-8 ">All Blog Posts</h1>
        <div className="md:grid hidden md:grid-cols-2 gap-5 space-y-5 md:space-y-0">
          {displayedBlogs.map((item) => (
            <AllBlogCard
              key={item.id}
              {...item}
              bgColor="bg-white"
              textColor="text-black"
            />
          ))}
        </div>
        <div className="text-center pt-5 space-x-3 text-sm hidden md:block">
          <button
            onClick={() =>
              setCurrentPage((oldPage) => Math.max(oldPage - 1, 1))
            }
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={index + 1 === currentPage ? "font-bold" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((oldPage) => Math.min(oldPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      <div className="w-[90%] mx-auto block  md:hidden">
        <Slider {...settings}>
          {allblogs.map((item) => (
            <AllBlogCard
              key={item.id}
              {...item}
              bgColor="bg-white"
              textColor="text-black"
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};
