import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ourServices } from '../../../utils/data';

export default function OurCommitment() {
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
        breakpoint: 1250,
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
    <div className="bg-black py-14 md:py-14" id="services">
      <h1 className="text-3xl font-cormorant text-white md:text-5xl font-bold text-center mb-3 md:mb-5">
        Our Commitment
      </h1>

      <div className="mx-auto w-[80%] md:w-[90%] max-w-[95%] my-12 md:my-16">
        <Slider {...settings}>
          {ourServices.map((item, index) => (
            <div key={index} className="px-2 md:px-3 pb-6">
              <div className="flex items-center">
                <div className={`flex flex-col gap-2 items-center`}>
                  <div className="p-4 bg-[#F2F3EA] text-[#860E00] w-fit rounded-full">
                    {item.icon}
                  </div>

                  {/* Overlay */}
                  <h2 className="text-gray-200 font-semibold font-cormorant text-lg">
                    {item.title}
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed text-center">
                    {item.text}
                  </p>
                </div>
                {index < ourServices.length - 1 && (
                  <span className="text-xl font-light text-gray-500">→</span>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
