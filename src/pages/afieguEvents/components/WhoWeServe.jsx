import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // ← required
import 'slick-carousel/slick/slick-theme.css'; // ← required
import { whoweserve } from '../../../utils/data';

export default function WhoWeServe() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className="mx-auto w-[80%] md:w-[90%] max-w-[95%] my-12 md:my-16">
      <h1 className="text-3xl font-playfair md:text-4xl font-bold text-center mb-8 md:mb-12">
        Who We Serve
      </h1>

      <div className="px-1 md:px-3">
        <Slider {...settings}>
          {whoweserve.map((item, index) => (
            <div key={index} className="px-2 md:px-3 pb-6">
              <div
                className={`
                  group relative
                  rounded-2xl overflow-hidden
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  bg-gray-900
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <img
                  src={item.image}
                  alt={item.text || 'service'}
                  className="w-full object-cover"
                  loading="lazy"
                />

                {/* Overlay */}
                <div
                  className={`
                    absolute inset-0 
                    bg-gradient-to-t from-black/80 via-black/40 to-transparent
                    flex flex-col p-5 md:p-6
                    transition-opacity duration-300
                    ${hoveredIndex === index ? 'opacity-100 bg-[#2D300F]' : 'opacity-0 md:opacity-0'}
                    md:group-hover:opacity-100
                  `}
                >
                  <h2 className="text-white font-bold font-playfair text-sm lg:text-xl xl:text-3xl leading-tight">
                    {item.text}
                  </h2>
                  <ul className="text-white/90 text-[12px] mt-2">
                    {item.subtext.map((point, idx) => (
                      <li
                        key={idx}
                        className="before:content-['•'] before:text-[#838B31] before:mr-2 mb-1"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
