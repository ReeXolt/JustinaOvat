import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // ← required
import 'slick-carousel/slick/slick-theme.css'; // ← required
import { ourServices } from '../../../utils/data';
import { MdCheck } from "react-icons/md";

export default function OurServices() {
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
        Our Services
      </h1>

      <p className="text-center text-gray-200 mb-12">
        Comprehensive Concierge solutions tailored to your needs.
      </p>

      <div className="mx-auto w-[80%] md:w-[90%] max-w-[95%] my-12 md:my-16">
        <Slider {...settings}>
          {ourServices.map((item, index) => (
            <div key={index} className="px-2 md:px-3 pb-6">
              <div
                className={`
                  group relative
                  rounded-2xl overflow-hidden
                  shadow-md hover:shadow-xl
                  flex flex-col gap-2
                  transition-all duration-300
                  bg-white p-5 md:p-6 h-[25rem]
                `}
              >
                <div className="p-4 bg-[#F2F3EA] w-fit rounded-lg">
                  {item.icon}
                </div>

                {/* Overlay */}
                  <h2 className="text-[#4A4D2F] font-semibold font-cormorant text-lg">
                    {item.title.split(' ').map((word, idx) => {
                      const trimmed = word.trim();
                      if (trimmed === '&' || trimmed === '&amp;' || trimmed.length <= 1) {
                        return <span key={idx} className="uppercase"> {trimmed} </span>;
                      }
                    
                      return (
                        <span key={idx} className="inline-block">
                          <span className="text-2xl lg:text-3xl font-semibold">
                            {trimmed.charAt(0).toUpperCase()}
                          </span>
                          <span className={`uppercase ${idx > 0 ? 'mr-1' : ''}`}>{trimmed.slice(1).toLowerCase()}</span>
                          {' '}
                        </span>
                      );
                    })}
                  </h2>
                  <p className="text-[#4A4D2F] text-sm md:text-base mt-2 leading-relaxed">
                    {item.text}
                  </p>
                  <ul className=''>
                    {item.list.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-[#4A4D2F] text-sm md:text-base mt-1 leading-relaxed flex items-center gap-2"
                      >
                        <MdCheck className="text-[#4A4D2F]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
